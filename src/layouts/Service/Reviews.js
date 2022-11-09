import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../contexts/AuthProvider';

const Reviews = ({ rating, id }) => {
    const { user } = useContext(AuthContex);
    const [update, setUpdate] = useState();
    console.log(user.uid, rating);

    let totalRating = 0;
    rating.forEach(element => {
        const rat = parseInt(element.rating);
        totalRating += rat;
    });

    useEffect(() => {
        const avg = totalRating / rating.length || 0;
        setUpdate(avg.toFixed(1))
    }, [rating, update])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const review = form.review.value;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const uid = user.uid;
        const date = new Date();
        const ratingInfo = { rating, review, displayName, photoURL, uid, date }
        console.log(ratingInfo);
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(ratingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdate(true)
                window.location.reload();
            }).catch(e => console.error(e))
    }

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-slate-700 text-center'>Reviews</h1>
            <div className="flex items-center justify-center mb-14">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{update}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{rating.length} reviews</a>
            </div>
            <div>
                {
                    user?.uid ?
                        user.uid == rating.uid ?
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
                            </form> : <div>Thanks!</div>
                        :
                        <div className='text-center bg-slate-500 py-2 text-white font-bold'>
                            Please Login To Submit Review
                            <Link to="/login" className='mx-2 text-red-500' >Login</Link>
                        </div>
                }
            </div>
            <div>
                {
                    rating.map((item, index) => {
                        return (
                            <div key={index} >
                                <div className='my-3'>
                                    <div className="flex items-center">
                                        <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={item.photoURL} alt={item.displayName} />
                                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{item.displayName}</p>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{item.rating}</p>
                                    </div>

                                    <div className='ml-3 mt-3'>{item.review}</div>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Reviews;