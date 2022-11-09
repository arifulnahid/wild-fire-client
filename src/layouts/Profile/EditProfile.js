import { Toast } from 'flowbite-react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../../contexts/AuthProvider';

const EditProfile = () => {
    const { user, UpdateUserProfile } = useContext(AuthContex);
    const navigate = useNavigate();



    const updateHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;

        UpdateUserProfile(name, photo)
            .then(result => {
                navigate("/profile");
            })
            .catch(e => console.error(e))
        console.log(name, photo);
    }

    return (

        <form onSubmit={updateHandler} className='mx-auto my-10'>
            <div className="mb-6">
                <label htmlFor="name" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Full Name</label>
                <input type="text" id="name" name='name' defaultValue={user?.displayName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <label htmlFor="photo" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Photo Url</label>
                <input type="text" id="photo" name='photo' defaultValue={user?.photoURL} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <input type="submit" value="Update" className="my-3 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" />
            </div>

        </form>

    );
};

export default EditProfile;