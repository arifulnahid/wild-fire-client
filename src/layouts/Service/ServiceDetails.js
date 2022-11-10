import React, { useContext, useEffect, useState } from 'react';
import dateFormat from "dateformat";
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../contexts/AuthProvider';
import ReviewList from '../Reviews/ReviewList';
import AddReview from './AddReview';
import { AvgRat } from '../../utilitis/AvgRating';


const ServiceDetails = () => {
    const { _id, title, image, description, price } = useLoaderData()
    const { user } = useContext(AuthContex);
    const [rating, setRating] = useState([]);
    const [avgRat, setAvgRat] = useState("");
    document.title = "Service Details";
    // console.log(rating);

    // console.log(avgRat);

    const toastNotify = (meta) => {
        if (meta == "a") {
            return toast.success("Added Successfuly!")
        } else {
            return toast.error("Delete Successfuly!")
        }
    }

    const submitReview = (rating, review) => {
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const uid = user.uid;
        const serviceId = _id;
        const date = new Date();
        const rat = { rating, review, displayName, photoURL, uid, date, serviceId }

        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(rat)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRating([rat])
                toastNotify("a");
            }).catch(e => console.error(e))
    }

    const handelDeleteReview = (id) => {
        const confirm = window.confirm("Do You Want To Delete");
        if (confirm) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = rating.filter(rat => rat._id !== id)
                    setRating(remaining);
                    toastNotify("d")
                    console.log(data);
                }).catch(e => console.error(e))
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setRating(data);
                setAvgRat(AvgRat(rating))
                // console.log(data)
            }).catch(e => console.error(e))
    }, [rating])


    return (
        <div className='lg:w-1/2 mx-auto text-start'>
            <Toaster />
            <div>
                <img className='w-full rounded-t' src={image} alt={title} />
                <div className='ml-5 my-5'>
                    <h1 className='font-bold text-2xl'>{title}</h1>
                    <p className='font-semibold text-lg'>Booking Money: ${price}</p>
                    <p className='text-justify'>{description}</p>
                </div>
                <button type="button" className="w-48 ml-5  text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Book Your Seat</button>
            </div>

            <div className='my-10'>
                <h1 className='text-3xl font-bold text-slate-700 text-center'>Reviews</h1>
                <div className="flex items-center justify-center mb-14">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{avgRat}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{rating.length} reviews</a>
                </div>
                <AddReview
                    submitReview={submitReview}
                />
                {
                    !rating.length ?
                        <div className='text-semibold text-xl text-center my-14'>No Reviews</div> :
                        <></>
                }

                {
                    rating.map((item, i) => <ReviewList
                        key={i}
                        rating={item}
                        handelDeleteReview={handelDeleteReview}
                    />)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;