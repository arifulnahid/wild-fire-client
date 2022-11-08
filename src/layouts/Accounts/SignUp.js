import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-2 lg:mx-14 '>
            <div>
                <img className='w-full' src=' https://media.istockphoto.com/vectors/sign-in-page-abstract-concept-vector-illustration-vector-id1286100689?b=1&k=20&m=1286100689&s=612x612&w=0&h=966hblij6HOGwA4_q31a9DMw7Y1IS4Hk5m6w527zc5Q=' alt='login-banner' />
            </div>
            <div className='w-full lg:my-auto'>
                <h1 className='text-3xl font-bold'>Please Login Here</h1>
                <form className="flex flex-col gap-4 p-3 text-start">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Mr, Jhon"
                            required={false}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@flowbite.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
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
                    >
                        <BsGoogle /> <span className='mx-2 font-bold'>Signup With Google</span>
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;  