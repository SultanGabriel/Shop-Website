import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Carousel,
    CarouselItem,
} from 'react-bootstrap';

className ProductCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    next() {
        let { items } = this.props;
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === items.length - 1
                ? 0
                : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        let { items } = this.props;
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === 0
                ? items.length - 1
                : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    render() {
        const { activeIndex } = this.state;
        let { items } = this.props;
        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>

                {
                    items.map(item => {
                        return (
                            <CarouselItem
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                                key={item.src}
                            >
                                <img
                                    className="d-block w-100"
                                    src={item.src}
                                    alt={item.altText}
                                />
                            </CarouselItem>
                        );
                    })
                }
                <ol className="carousel-indicators">
                    {
                        items.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => this.goToIndex(index)}
                                    className={classnames({ active: activeIndex === index })}
                                    style={{ backgroundImage: `url(${item.src})` }}
                                />
                            );
                        })
                    }
                </ol>
            </Carousel>
        );
    }
}

export { ProductCarousel }