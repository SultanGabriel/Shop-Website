import { ReactComponent as Logo } from '../img/logo.svg'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../Auth/AuthContext';
import Cart from './Cart';
import UserProfile from './UserProfile';


function Navbar(props) {
    const navigate = useNavigate();
    const { user, isLoading, setUser } = useAuthContext();

    return (

        <header className="p-3" id="Navbar">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <Logo width="64px" height="64px" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="/" className="nav-link px-2 text-white">Home</a>
                        </li>
                        <li>
                            <a href="/products" className="nav-link px-2 text-white">Products</a>
                        </li>
                        <li>
                            <a href="/about" className="nav-link px-2 text-white">About</a>
                        </li>
                        
                    </ul>
                    {/* TODO check if user is logged in and display this accordingly :) */}
                    {/* // <h4>Logged in as {user.username}</h4> */}
                    {
                        user ? (
                            <>
                                <Cart />
                                <a href="/user">

                                    <UserProfile />
                                </a>
                            </>
                        ) : (
                            <div className="text-end">
                                <button type="button"
                                    className="btn btn-outline-light me-2"
                                    onClick={() => navigate("/login")}>Login</button>

                                <button type="button" className="btn btn-warning"
                                    onClick={() => navigate("/register")}>Register</button>
                            </div>
                        )
                    }

                </div>
            </div>
        </header>
    )

}
// BUG LOGIN SIGN UP BUTTONS redirect...

// onClick={this.props.history.push("/login")}
// onClick={this.props.history.push("/signup")}

// TODO Signed in check + shopping cart ;)
// FIXME Navbar location highlighting...
export { Navbar };
