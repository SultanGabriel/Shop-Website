import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // IDEA Optimize code ?
    return (
        <div>
            <Carousel
                variant="dark"
                interval={null}
                indicators={false}
                activeIndex={index}
                onSelect={handleSelect}
            >
                {
                    props.images.map((img, idx) => {
                        return (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="Product Picture"
                                />

                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            <div className="indicators text-center">

                {
                    props.images.map((img, idx) => {
                        return (
                            <li key={idx} className="d-inline-block" onClick={e => handleSelect(idx, e)}>
                                <img
                                    className={(index === idx) ? "m-2 indicator-img active" : "m-2 indicator-img"}
                                    src={img}
                                    alt="Product Picture"
                                />
                            </li>

                        )
                    })
                }

            </div>
        </div >
    )
}

export { ImageCarousel }
