import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { ImageCarousel } from '../Components/ImageCarousel';

import '../css/product.css'


const Product = () => {
    const [productDetails, setProductDetails] = useState({ available: false });
    const params = useParams();
    let id = params.id;


    const getProductDetails = async () => {
        fetch(`http://localhost:1337/api/products/${id}?populate=*`).then(
            async res => {
                let data = await res.json();
                // console.log("hello ", data)
                // TODO destructure object for easier use in the return statement ..
                setProductDetails({
                    available: true,
                    data: data.data,

                    id: data.id,
                    images: data.data.attributes.bild.data.map(e => { return "http://127.0.0.1:1337" + e.attributes.url }),

                    name: data.data.attributes.name,
                    price: data.data.attributes.preis,
                    description: data.data.attributes.beschreibung,
                    onSale: data.data.attributes.onSale,
                    salePrice: data.data.attributes.salePrice,

                })
            }
        ).catch(err => console.error(err))
    }


    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mt-4 d-flex align-items-center">
                <div>
                    <div className="row">
                        <div className="col-md-5 ">
                            {
                                productDetails.available && (
                                    <ImageCarousel images={
                                        productDetails.data.attributes.bild.data.map(e => {
                                            return "http://127.0.0.1:1337" + e.attributes.url
                                        })}
                                    />
                                )
                            }
                        </div>

                        <div className="col-md-7 ">
                            {
                                productDetails.available && (
                                    <div className="">
                                        <h2>{productDetails.name}</h2>
                                        <h4>{productDetails.price}</h4>
                                        <h4> Sale?</h4>
                                        <h4>Description</h4>
                                        <p>{productDetails.description}</p>
                                        <button className='btn btn-secondary m-2'>Add to Cart</button>
                                        <button className='btn btn-primary m-2'>Buy</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>

            <Footer sticky={true}></Footer>
        </div>
    )
}

export { Product }
const stf = ({/*
    <div className='row mt-4'>
            TODO Add Product Details Thingy, Technical data or smth else... 
        <h1>Product Details</h1>
        <div className='border-top'>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores placeat eligendi laboriosam amet velit expedita illum, at, ipsum dolore suscipit recusandae perspiciatis nobis tenetur consequatur!
            </p>
        </div>
    </div>
*/})
