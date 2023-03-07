import { useState, useEffect } from 'react';

// Components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ProductsList } from "../Components/ProductsList";
import { CategoriesList } from "../Components/CategoriesList";
import { ProductSearch } from "../Components/ProductSearch";
import { ProductsOrderBy } from '../Components/ProductsOrderBy';

// CSS
import '../css/products.css';

async function fetchProducts() {
    // FIXME Better API Call & include categories
    const response = await fetch('http://127.0.0.1:1337/api/products?populate=*');
    if (!response.ok) throw new Error(response.status);
    return response.json();
}

async function fetchCategories() {
    const response = await fetch('http://127.0.0.1:1337/api/categories');
    if (!response.ok) throw new Error(response.status);
    return response.json();
}

function Products() {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    /* ----------------------------- Fetch Products ----------------------------- */
    useEffect(_ => {
        fetchProducts()
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
                setItems(data);
            })
    }, [])
    // const { loading, error, data } = useFetch('http://127.0.0.1:1337/api/products?populate=*')
    // if(error) return <p>An error occured..</p>


    /* ---------------------------- Fetch Categories ---------------------------- */

    useEffect(_ => {
        fetchCategories()
            .then(result => {
                let rawData = result.data;
                let data = rawData.map(e => {
                    return {
                        id: e.id,
                        name: e.attributes.name
                    }
                });
                setCategories(data);
            })
    }, [])

    const [search, setSearch] = useState('');
    console.log(search)

    return (
        <div>
            <Navbar></Navbar>
            <div className="container" id="products">

                <div className="row">
                    <aside className="col-md-3 py-4 px-2">
                        <CategoriesList items={categories} />
                    </aside>
                    <main className="col-md-9 py-4 px-2">
                        <div className='row'>
                            <div className='col-sm'>
                                <ProductSearch onChange={setSearch} />
                            </div>
                            <div className="col-sm-3">
                                <ProductsOrderBy />
                            </div>
                        </div>
                        {/* IDEA good or bad implementation ??? */}
                        <ProductsList items={search === '' ? items : items.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()))} />


                        {/* WIP Pagination... */}
                        < nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </main>

                </div>
            </div>

            <Footer sticky={false}></Footer>
        </div >
    )

}

export { Products };

// TODO Pagination
// TODO Get Categories from API
// TODO Filter by category
// TODO Filter by Price, Name, ... 