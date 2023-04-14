import { ReactComponent as Logo } from '../img/logo.svg'
import { Footer } from '../Components/Footer';
import "../css/login.css"; // TODO convert css to inline css ?????
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../Auth/AuthContext';
import { setToken } from '../Auth/helpers';

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const { setUser } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = e => {
        e.preventDefault();

        setIsLoading(true);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                identifier: e.target['identifier'].value,
                password: e.target['password'].value,
            })
        }

        fetch('http://127.0.0.1:1337/api/auth/local', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error)
                    setError({
                        message: "Invalid credentials!"

                    })
                } else {
                    console.log("Successfully Logged in!")
                    console.log(data) // -- !!
                    // set the token
                    setToken(data.jwt);

                    // set the user
                    setUser(data.user);


                    navigate("/user")

                }
            });
    }

    return (
        <div className="Login">
            {/* <div className=" d-flex align-items-center "> */}
            <div className="login-form d-flex align-items-center m-auto">

                {/* <div className="m-2 p-3 fml text-center "> */}
                <div className="login-container mx-auto m-3 text-center">
                    <form onSubmit={handleLogin}>
                        <Logo width="80px" height="80px" className="mb-4" />
                        <h3 className="mb-3 fw-normal">Please sign in</h3>

                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                name="identifier"
                                id="identifier"
                                placeholder="Username or Email"
                            />
                            <label htmlFor="identifier">Username or Email</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="row">
                            {error && (
                                <p className="text-danger mb-2 p-0">
                                    {error.message}
                                </p>)
                            }
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                        <p className="mt-5 mb-3 text-muted">© Sultan 2023</p>

                    </form>
                </div>
            </div>

        </div >
    )
}

export { Login };
// TODO ADD FORGOT PASSWORD :)
// TODO add a way to get back to the homepage 

// IDEA Footer or no Footer?
// {/* <Footer sticky={true} /> */}
