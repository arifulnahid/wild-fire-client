import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../contexts/AuthProvider';

const MyReviews = () => {
    const { user, service } = useContext(AuthContex);
    const [rating, setRating] = useState([]);
    document.title = "Wildfire- My Reviews"
    console.log(user.uid);

    useEffect(() => {
        fetch(`http://localhost:5000/review/?uid=${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setRating(data);
                console.log(data);
            }).catch(e => console.error(e))
    }, [])


    return (
        <div className='lg:w-9/12 mx-auto'>
            {
                rating.map((item, i) => {
                    return (
                        <div key={i} className="bg-sky-100 py-2">
                            <h1>Service Name</h1>
                            <p>{item.review}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default MyReviews;