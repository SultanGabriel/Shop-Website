import { useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../img/shopping-cart.svg";

function ProductCard(props) {
    const navigate = useNavigate();

    function RedirectToProductPage(productId) {
        navigate('/product/' + productId)
    }

    return (
        <div className="col my-3">
            <div className="product-card" onClick={_ => RedirectToProductPage(props.id)}>

                <div className="product-card-img" style={{ backgroundImage: `url(http://127.0.0.1:1337${props.imgPath})` }} alt="..." >
                </div>
                <div className="product-info-container">
                    <div className="product-details">

                        <h5 className="product-name">{props.name}</h5>

                    </div>
                    <span className="product-price">{props.price}€</span>
                    <span className="product-cart"><CartIcon width="32px" height="32px" /></span>
                </div>
            </div>
        </div>

    )
}

export { ProductCard };
// TODO Sales
// TODO Add Reviews 