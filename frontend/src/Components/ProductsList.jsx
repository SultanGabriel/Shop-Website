import { ProductCard } from "./ProductCard";

function ProductsList(props) {

    return (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
            {
                props.items.map(e => {
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
    )
}

// IDEA 
// IDEA ? more like question, add category here so it is easeably readeable ?
// TODO Filtering ;)

export { ProductsList }