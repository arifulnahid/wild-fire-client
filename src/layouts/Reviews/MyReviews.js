import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContex } from '../../contexts/AuthProvider';
import MyReviewItem from './MyReviewItem';


const MyReviews = () => {
    const { user } = useContext(AuthContex);
    const [rating, setRating] = useState([]);
    document.title = "Wildfire- My Reviews"
    // console.log(user.uid);

    const toastNotify = () => {
        return toast.error("Delete Successfuly!")
    }


    const handelDeleteReview = (id) => {
        const confirm = window.confirm("Do You Want To Delete");
        if (confirm) {
            fetch(`https://wild-fire-server.vercel.app/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = rating.filter(rat => rat._id !== id)
                    setRating(remaining);
                    toastNotify()
                    // console.log(data);
                }).catch(e => console.error(e))
        }
    }



    useEffect(() => {
        fetch(`https://wild-fire-server.vercel.app/myreview/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setRating(data);
                // console.log(data);
            }).catch(e => console.error(e))
    }, [])

    return (
        <div className='lg:mx-20 mx-3 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Toaster />
            {
                rating.map((item, i) => <MyReviewItem key={i} rating={item} handelDeleteReview={handelDeleteReview} />)
            }
        </div>
    );
};

export default MyReviews;