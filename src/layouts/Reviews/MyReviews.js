import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../contexts/AuthProvider';
import MyReviewItem from './MyReviewItem';

const MyReviews = () => {
    const { user } = useContext(AuthContex);
    const [rating, setRating] = useState([]);
    document.title = "Wildfire- My Reviews"
    // console.log(user.uid);

    useEffect(() => {
        fetch(`http://localhost:5000/myreview/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setRating(data);
                // console.log(data);
            }).catch(e => console.error(e))
    }, [])

    return (
        <div className='lg:mx-20 mx-3 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                rating.map((item, i) => <MyReviewItem key={i} rating={item} />)
            }
        </div>
    );
};

export default MyReviews;