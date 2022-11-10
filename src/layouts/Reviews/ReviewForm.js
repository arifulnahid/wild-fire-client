import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ReviewForm = ({ user, id }) => {
    const [ratingData, setRatingData] = useState({});
    console.log(ratingData);
    // console.log(ratingData);

    const toastNotify = () => {
        return toast.success("Review Added Succesfully!");
    }

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const review = form.review.value;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const uid = user.uid;
        const date = new Date();
        const serviceId = id;
        setRatingData({ rating, review, displayName, photoURL, uid, date, serviceId })

        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(ratingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toastNotify();
            }).catch(e => console.error(e))
    }


    return (
        <>
            <Toaster />
            <form onSubmit={handleReview} className='px-2'>
                <div className='mb-2'>
                    <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
                    <select name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Write a review</label>
                    <input type="text" name="review" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
            </form>
        </>
    );
};

export default ReviewForm;