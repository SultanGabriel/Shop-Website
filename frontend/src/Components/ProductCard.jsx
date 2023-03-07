import { useNavigate } from "react-router-dom";

function ProductCard(props) {
    const navigate = useNavigate();

    function RedirectToProductPage(productId) {
        navigate('/product/' + productId)
    }

    return (
        <div className="col mb-5">
            <div className="card product-card h-100" onClick={_ => RedirectToProductPage(props.id)}>
                {/* <!-- Sale badge--> */}
                {props.onSale ? (<div className="badge badge-sale bg-dark text-white position-absolute py-2 px-3 fs-6" >Sale</div>) : (<></>)}


                {/* <!-- Product image--> // FIXME img src link .. nahh idk ... better solution? */}
                <img className="card-img-top" src={"http://127.0.0.1:1337" + props.imgPath} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-2">
                    <div className="d-flex align-items-center text-center" style={{ minHeight: '110px', }}>
                        {/* <!-- Product name--> */}
                        <div className="mx-auto">
                            <h5 className="fw-bolder">{props.name}</h5>
                            {/* <!-- Product price--> */}
                            {
                                props.onSale ?
                                    (
                                        <div className="align-items-center text-centered my-0" style={{ height: 'auto', }}>
                                            <p className="d-inline text-muted text-decoration-line-through m-0">{props.price}€</p>
                                            <p className="d-inline ps-2 price m-0">{props.salePrice}€</p>
                                        </div>
                                    )
                                    : (<p className="price pb-0">{props.price}€</p>)

                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

/** 
 FIXME Reviews

{ <!-- Product reviews--> }
<div className="d-flex justify-content-center small text-warning mb-2">
<div className="bi-star-fill"></div>
<div className="bi-star-fill"></div>
<div className="bi-star-fill"></div>
<div className="bi-star-fill"></div>
<div className="bi-star-fill"></div>
</div> 
*/

export { ProductCard };

