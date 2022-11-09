import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../contexts/AuthProvider';

const SignUp = () => {
    const [user, setUser] = useState({})
    const { createNewUser, googleSignIn, UpdateUserProfile } = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // console.log("state:", user);

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

    const handleInput = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.id;
        const value = form.value;

        const userInput = { ...user };
        userInput[name] = value;
        setUser(userInput);

    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (user) {
            const userName = user?.name || "";
            const email = user?.email;
            const password = user?.password;
            const photo = user?.photo || "";

            createNewUser(email, password, userName)
                .then(result => {
                    UpdateUserProfile(userName, photo)
                        .then(result => { })
                        .catch(e => console.error(e))
                    // console.log(result.user);
                    navigate(from, { replace: true })
                }).catch(e => console.log(e))
        }
        // console.log(form);
    }

    return (
        <div className='grid lg:grid-cols-2 gap-2 lg:mx-14 '>
            <div>
                <img className='w-full' src=' https://media.istockphoto.com/vectors/sign-in-page-abstract-concept-vector-illustration-vector-id1286100689?b=1&k=20&m=1286100689&s=612x612&w=0&h=966hblij6HOGwA4_q31a9DMw7Y1IS4Hk5m6w527zc5Q=' alt='login-banner' />
            </div>
            <div className='w-full lg:my-auto'>
                <h1 className='text-3xl font-bold'>Please Login Here</h1>
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 p-3 text-start">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your name"
                            />
                        </div>
                        <TextInput
                            onBlur={handleInput}
                            id="name"
                            type="text"
                            placeholder="Mr, Jhon"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photo"
                                value="Your Photo"
                            />
                        </div>
                        <TextInput
                            onBlur={handleInput}
                            id="photo"
                            type="url"
                            placeholder="Photo url"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            onBlur={handleInput}
                            id="email"
                            type="email"
                            placeholder="name@flowbite.com"
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
                            onBlur={handleInput}
                            id="password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <Button className='font-bold' type="submit">
                        Signup
                    </Button>
                </form>
                <div>
                    <div className='my-3'>
                        <div className='font-bold'>Alredy have an account <Link className='text-blue-700' to='/login'>Login</Link></div>
                    </div>
                    <Button
                        color="gray"
                        pill={true}
                        className="w-full"
                        onClick={handelGoogleSignIn}
                    >
                        <BsGoogle /> <span className='mx-2 font-bold'>Signup With Google</span>
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;  