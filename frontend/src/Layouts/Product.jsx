import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { ImageCarousel } from '../Components/ImageCarousel';

import '../css/product.css'


function Product() {
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

    // console.log(productDetails)

    // console.log(data.attributes.bild.data.map(e => "http://127.0.0.1:1337" + e.attributes.url))

    return (
        <div>
            <Navbar></Navbar>
            <div className="container my-2 d-flex align-items-center">
                <div className="row">
                    <div className="col-5 ">
                        {/* <ImageCarousel images={[
                            'https://fastly.picsum.photos/id/1040/500/500.jpg?hmac=bmdEjFeT-uNd51SRuaCY9lKhha5_o8mKmJ5gFTkXBNc',
                            'https://fastly.picsum.photos/id/1002/500/500.jpg?hmac=PoR97MywVbxXRCsUdyiLttHcb5ZGmhrQGUnfCUbkU4w',
                            'https://fastly.picsum.photos/id/6/500/500.jpg?hmac=BV78_cgdwZQNfQorKlCsS4-47_DG0MJ3GZqiDBfeHbI']} /> */}
                        {
                            productDetails.available && (<ImageCarousel images={productDetails.data.attributes.bild.data.map(e => { return "http://127.0.0.1:1337" + e.attributes.url })} />)
                        }

                    </div>


                    <div className="col text-align-right">
                        {
                            // (status === 200) ? (
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
                            // ) : (<></>)
                        }
                    </div>
                </div>
            </div>

            <Footer sticky={true}></Footer>
        </div>
    )
}

export { Product }
