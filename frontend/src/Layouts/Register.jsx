import { ReactComponent as Logo } from '../img/logo.svg'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useForm } from 'react-hook-form';

// FIXME firstly check if the user is already logged in !
// FIXME logout
/*
const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
};
*/

const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

function Register() {
    const navigate = useNavigate();
    const [registrationError, setRegistrationError] = useState({});
    // FIXME Sanitize input

    const { register, handleSubmit, watch, formState: { errors } } = useForm(
        {
            mode: "onBlur",
            defaultValues: {
                firstName: "",
                lastName: "",
                email: ""
            }
        });


    const handleEmailValidation = email => {

        const isValid = isValidEmail(email);

        // console.log("Email -> ", isValid)

        return isValid || "Please provide a valid E-Mail address.";

    };

    // let password = watch("password", "");
    const registerUser = data => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName
            })
        }

        fetch('http://127.0.0.1:1337/api/auth/local/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    // console.error(data.error.message)
                    setRegistrationError(data.error)
                } else {
                    console.log("Successfull registration!")
                    // console.log(data)

                    navigate("/login")

                    // FIXME Redirect to login ?? 
                }
            });

    }

    return (
        <>
            {/* <Navbar></Navbar> */}
            <div className="container my-4 mx-auto d-flex ">
                <div className="register-container d-flex align-items-center m-auto text-center" style={{ maxWidth: "330px" }}>
                    <form onSubmit={handleSubmit(data => registerUser)}>
                        <Logo width="80px" height="80px" className="mb-4" />
                        <h3 className="mb-3 fw-normal">Please sign in</h3>

                        <div className="row">
                            <div className="form-floating mb-3 col px-2">
                                <input
                                    className={errors.firstName ? "form-control is-invalid" : "form-control"}
                                    placeholder='First Name'
                                    {...register("firstName", { required: true, maxLength: 20 })}
                                />
                                <label htmlFor="firstName" className="px-4">First Name</label>
                            </div>

                            <div className="form-floating mb-3 col px-2">
                                <input
                                    className={errors.lastName ? "form-control is-invalid" : "form-control"}
                                    placeholder='Last Name'
                                    {...register("lastName", {
                                        required: true,
                                        maxLength: 20
                                    })}

                                />
                                <label htmlFor="lastName" className="px-4">Last Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-floating mb-3 px-2 ">

                                <input
                                    className={errors.username ? "form-control is-invalid" : "form-control"}
                                    placeholder="Username"
                                    {...register("username", {
                                        required: true,
                                    })}
                                />
                                <label htmlFor="username" className="px-4">Username</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-floating mb-3 px-2 ">
                                {/* <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                /> */}
                                <input
                                    // type="email"
                                    className={errors.email ? "form-control is-invalid" : "form-control"}
                                    id="Email"
                                    placeholder="name@example.com"
                                    {...register("email", {
                                        required: true,
                                        validate: handleEmailValidation,
                                    })}

                                />
                                <label htmlFor="email" className="px-4">Email</label>
                                {errors.email && (
                                    <p className="text-danger m-0 p-0">
                                        {errors.email?.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-floating mb-3 px-2">
                                <input
                                    type="password"
                                    className={errors.password ? "form-control is-invalid" : "form-control"}
                                    id="Password"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters"
                                        }
                                    })}
                                />
                                <label htmlFor="Password" className="px-4">Password</label>
                                {errors.password && (
                                    <p className="text-danger m-0 p-0">
                                        {errors.password?.message}
                                    </p>
                                )}

                            </div>
                        </div>

                        <div className="row">
                            <div className="form-floating mb-3 px-2">
                                <input
                                    type="password"
                                    className={errors.confirmPassword ? "form-control is-invalid" : "form-control"}
                                    id="ConfirmPassword "
                                    placeholder="Password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: value => value === watch("password", "") || "The passwords do not match"
                                    })}
                                />
                                <label htmlFor="ConfirmPassword" className="px-4">Confirm Password</label>
                                {errors.confirmPassword && (
                                    <p className="text-danger m-0 p-0">
                                        {errors.confirmPassword?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="row">

                            <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                        </div>
                        <div className="row">
                            {registrationError ? (
                                <p className="text-danger mt-3 p-0">
                                    {registrationError?.message}
                                </p>) : ""
                            }
                        </div>
                        <p className="mt-5 text-muted">© 2023</p>
                    </form>
                </div>

            </div>
        </>
    )
}
// TODO add a way to get back to the homepage 

// TODO Clean code..

// TODO HTML AUTOCOMPLETE ATTRIBUTES

// -- Confirm email ?!?!? must be setup in strapi ??? idk tbh
// -- is max length even required for first and last name????
// -- is this shit even secure ???

export { Register };