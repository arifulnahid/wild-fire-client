import React, { useState } from 'react';
import dateFormat from "dateformat";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Modal } from 'flowbite-react';
import UpdateReview from './UpdateReview';

const ReviewList = ({ rating, handelDeleteReview, submitEditReview }) => {
    const [show, setShow] = useState(false);
    // const [ratingData, setRatingData] = useState([])
    const { _id } = rating;
    // console.log(rating);
    const date = dateFormat(rating.date, "fullDate")

    const onClick = () => {
        setShow(!show);
    }

    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const ratingInput = form.rating.value;
        const review = form.review.value;
        submitEditReview(ratingInput, review, rating, _id)
        setShow(!show);
    }

    return (
        <>
            <Modal
                show={show}
                size="md"
                popup={true}
                onClose={onClick}
            >
                <Modal.Header />
                <Modal.Body>
                    <h1 className='font-semibold font-xl'>Edit Review</h1>
                    <form onSubmit={handleUpdateReview} className='px-2'>
                        <div className='mb-2'>
                            <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a rating</label>
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
                            <input defaultValue={rating.review} type="text" name="review" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>

            <div className='mx-5'>
                <div className='my-3'>
                    <div className='flex items-start justify-between'>
                        <div className="flex items-center">
                            <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={rating.photoURL} alt="image" />
                            <div className='ml-2 '>
                                <div className='flex items-center'>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">{rating?.displayName}</span>
                                    <svg aria-hidden="true" className="w-5 h-5  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                    <span className="ml-2 ml-0 text-sm font-bold text-gray-900 dark:text-white">{rating?.rating}</span>
                                </div>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <button onClick={onClick} className='mx-3 text-xl'><BsPencilSquare /></button>
                            <button className='text-xl' onClick={() => handelDeleteReview(rating._id)}><BsTrash /></button>
                        </div>
                    </div>
                    <div className='ml-3 mt-3'>{rating?.review}</div>
                </div>
                <hr />
            </div>
        </>
    );
};

export default ReviewList;