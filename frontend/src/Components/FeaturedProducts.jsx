import { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';

function FeaturedProducts() {
    async function fetchFeaturedProducts() {
        //GET /api/products?filters[field][$eqi]=FeaturedProduct


        const response = await fetch('http://127.0.0.1:1337/api/products?populate=*&filters[listingType][$eq]=Featured');
        if (!response.ok) throw new Error(response.status);
        return response.json();
    };
    const [featuredProducts, setFeaturedProducts] = useState([]);

    /* ----------------------------- Fetch Products ----------------------------- */
    useEffect(_ => {
        fetchFeaturedProducts()
            .then(result => {
                let rawData = result.data;

                // IDEA isn't it kind of redudant to clean the object .. iterating two times over.. it improves readability but at the cost of speeeeeeeeed ?!?!
                // console.log(rawData)
                // Clean Data Object
                let data = rawData.map(e => {
                    return {
                        id: e.id,
                        name: e.attributes.name,
                        price: e.attributes.preis,
                        description: e.attributes.beschreibung,
                        hersteller: e.attributes.hersteller,
                        imgPath: e.attributes.bild.data[0].attributes.url,
                        onSale: e.attributes.onSale,
                        salePrice: e.attributes.salePrice,
                    }
                })
                setFeaturedProducts(data);
            })
    }, [])
    return (
        <div className="container">
            <div className="title mt-4">
                <h1 className='featured-products-title'>Featured Products</h1>
            </div>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    featuredProducts.map(e => {
                        return (
                            <ProductCard key={e.id}
                                id={e.id}
                                name={e.name}
                                price={e.price}
                                imgPath={e.imgPath}
                                onSale={e.onSale}
                                salePrice={e.salePrice}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default FeaturedProducts
