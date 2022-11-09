import { Button, Spinner } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContex } from '../../contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContex);
    // const [edit, setEdit] = useState(false);

    return (
        <div className='w-96 mx-auto'>
            {
                user?.email ?
                    <div>
                        <div>
                            <img src={user?.photoURL} alt={user?.displayName} className="w-24 h-24 mx-auto rounded-lg" />
                            <h1 className='text-xl font-bold'>{user?.displayName}</h1>
                            <p className='text-xl'>Email: {user?.email}</p>
                        </div>
                    </div> :
                    <div className='w-full mx-auto'>
                        <Button color="gray" className='w-full mx-auto'>
                            <Spinner aria-label="Alternate spinner button example" />
                            <span className="pl-3">
                                Loading...
                            </span>
                        </Button>
                    </div>
            }

            <div className='mx-auto my-3'>
                <Link to="/profile/edit-profile" className=' text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
                    Edit Profile
                </Link>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Profile;