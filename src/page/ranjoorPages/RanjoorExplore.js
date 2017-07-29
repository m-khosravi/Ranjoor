import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    Alert,
    StatusBar
} from 'react-native';
import ScrollableMixin from 'react-native-scrollable-mixin';
import cloneReferencedElement from 'react-clone-referenced-element';
import DefaultLoadingIndicator from './DefaultLoadingIndicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExploreCard from '../../elements/cards/ExploreCard';
import ExploreHeader from '../../elements/headers/ExploreHeader';
import { SearchBar } from 'react-native-elements';

class RanjoorExplore extends Component {

    static propTypes = {
        ...ScrollView.propTypes,
        distanceToLoadMore = PropTypes.number.isRequired,
        canLoadMore = PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool
        ]).isRequired,
        onLoadMoreAsync: PropTypes.func.isRequired,
        onLoadError: PropTypes.func,
        renderLoadingIndicator: PropTypes.func.isRequired,
        renderLoadingErrorIndicator: PropTypes.func.isRequired
    }

    static defaultProps = {
        distanceToLoadMore: 1500,
        canLoadMore: false,
        scrollEventThrottle: 100,
        renderLoadingIndicator: () => <DefaultLoadingIndicator />,
        renderLoadingErrorIndicator: () => <View />,
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
            isDisplayingError: false,
        }

        this._handleScroll = this._handleScroll.bind(this)
        this._loadMoreAsync = this._loadMoreAsync.bind(this)
    }
    static navigationOptions = {
        header: null,
        title: 'گشت و گذار',
        titleStyle: {
            fontFamily: 'IRANSans'
        },
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="bandcamp"
                size={24}
                color={focused ? 'black' : '#333238'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };
    
    getScrollResponder() {
        return this._scrollComponent.getScrollResponder();
    }

    setNativeProps(nativeProps) {
        this._scrollComponent.setNativeProps(nativeProps);
    }

    render() {
        let statusIndicator

        if (this.state.isDisplayingError) {
            statusIndicator = React.cloneElement(
                this.props.renderLoadingErrorIndicator(
                    { onRetryLoadMore: this._loadMoreAsync }
                ),
                { key: 'loading-error-indicator' },
            )
        } else if (this.state.isLoading) {
            statusIndicator = React.cloneElement(
                this.props.renderLoadingIndicator(),
                { key: 'loading-indicator' }
            )
        }

        let {
            renderScrollComponent,
            ...props,
        } = this.props;
        Object.assign(props, {
            onScroll: this._handleScroll,
            children: [this.props.children, statusIndicator],
        });

        return cloneReferencedElement(renderScrollComponent(props), {
            ref: component => { this._scrollComponent = component; },
        });
        /*
        return (
            <View style={styles.ExploreContainer}>
                <ExploreHeader />
                <ScrollView >
                    <StatusBar
                        backgroundColor="#705697"
                        barStyle="light-content"
                    />
                    <View>
                        <ExploreCard />
                        <ExploreCard />
                    </View>
                </ScrollView>
            </View>
        ); */
    }

    _handleScroll(event) {
        if (this.props.onScroll) {
            this.props.onScroll(event);
        }

        if (this._shouldLoadMore(event)) {
            this._loadMoreAsync().catch(error => {
                console.error('Unexpected error while loading more content:', error);
            });
        }
    }

    _shouldLoadMore(event) {
        let canLoadMore = (typeof this.props.canLoadMore === 'function') ?
            this.props.canLoadMore() :
            this.props.canLoadMore;

        return !this.state.isLoading &&
            canLoadMore &&
            !this.state.isDisplayingError &&
            this._distanceFromEnd(event) < this.props.distanceToLoadMore;
    }

    async _loadMoreAsync() {
        if (this.state.isLoading && __DEV__) {
            throw new Error('_loadMoreAsync called while isLoading is true');
        }

        try {
            this.setState({ isDisplayingError: false, isLoading: true });
            await this.props.onLoadMoreAsync();
        } catch (e) {
            if (this.props.onLoadError) {
                this.props.onLoadError(e);
            }
            this.setState({ isDisplayingError: true });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    _distanceFromEnd(event) {
        let {
      contentSize,
            contentInset,
            contentOffset,
            layoutMeasurement,
    } = event.nativeEvent;

        let contentLength;
        let trailingInset;
        let scrollOffset;
        let viewportLength;
        if (this.props.horizontal) {
            contentLength = contentSize.width;
            trailingInset = contentInset.right;
            scrollOffset = contentOffset.x;
            viewportLength = layoutMeasurement.width;
        } else {
            contentLength = contentSize.height;
            trailingInset = contentInset.bottom;
            scrollOffset = contentOffset.y;
            viewportLength = layoutMeasurement.height;
        }

        return contentLength + trailingInset - scrollOffset - viewportLength;
    }
}

var styles = StyleSheet.create({
    ExploreContainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
})

Object.assign(InfiniteScrollView.prototype, ScrollableMixin);

export default RanjoorExplore