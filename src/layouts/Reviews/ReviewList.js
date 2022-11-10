import React from 'react';
import dateFormat from "dateformat";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const ReviewList = ({ rating, handelDeleteReview }) => {
    // console.log(rating);
    const date = dateFormat(rating.date, "fullDate")

    return (
        <>
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
                            <button className='mx-3 text-xl'><BsPencilSquare /></button>
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