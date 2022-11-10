import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../contexts/AuthProvider';

const Login = () => {
    const { LoginUser, googleSignIn } = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    document.title = "Wildfire- Login"
    // console.log(from);

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        LoginUser(email, password)
            .then(result => {
                const user = result.user;
                navigate("/")
                console.log(user.email);
            }).catch(e => console.error(e))
    }

    return (
        <div className='grid lg:grid-cols-2 gap-2 lg:mx-14 '>
            <div>
                <img className='w-full' src='https://media.istockphoto.com/vectors/sign-in-page-abstract-concept-vector-illustration-vector-id1286100689?b=1&k=20&m=1286100689&s=612x612&w=0&h=966hblij6HOGwA4_q31a9DMw7Y1IS4Hk5m6w527zc5Q=' alt='login-banner' />
            </div>
            <div className='w-full lg:my-auto'>
                <h1 className='text-3xl font-bold'>Please Login Here</h1>
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 p-3 text-start">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@youdomain.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            name="password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <Button className='font-bold' type="submit">
                        Login
                    </Button>
                </form>
                <div>
                    <div className='my-3'>
                        <div className='font-bold'>Create a new account <Link className='text-blue-700' to='/signup'>SignUp</Link></div>
                        <div className='font-bold'>Forget Password Reset</div>
                    </div>
                    <Button
                        color="gray"
                        pill={true}
                        className="w-full"
                        onClick={handelGoogleSignIn}
                    >
                        <BsGoogle /> <span className='mx-2 font-bold'>Login With Google</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;