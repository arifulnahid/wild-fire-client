import { Carousel } from 'flowbite-react';
import React from 'react';

const Testimonial = () => {
    return (
        <div className='my-10'>
            <h1 className='my-5 text-3xl font-bold text-red-600'>Photo Gallery</h1>
            <div className="grid h-96 grid-cols-1 lg:grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel indicators={false}>
                    <img
                        src="https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/3:2/w_2454,h_1636,c_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg"
                        alt="camping"
                    />
                    <img
                        src="https://gohikevirginia.com/wp-content/uploads/2021/09/Sugar-Hollow-Hike-One-Trail.jpg"
                        alt="hiking"
                    />
                    <img
                        src="https://st.focusedcollection.com/17481790/i/650/focused_198644840-stock-photo-man-fly-fishing-river-forest.jpg"
                        alt="fishing"
                    />
                    <img
                        src="https://www.nps.gov/apis/planyourvisit/images/Paddlers-on-calm-water.JPG"
                        alt="kayaking"
                    />
                </Carousel>
                <Carousel indicators={false}>
                    <img
                        src="https://s3.amazonaws.com/imagescloud/images/medias/annexes/annexe-camping-2022.jpg"
                        alt="firering"
                    />
                    <img
                        src="https://helios-i.mashable.com/imagery/articles/03ZH6EcVL9WqXmDqjuqAy0E/hero-image.fill.size_1248x702.v1654717975.jpg"
                        alt="hiking"
                    />
                    <img
                        src="https://1000islandskayaking.com/wp-content/uploads/2022/02/Camp-tent.jpg"
                        alt="kayaking"
                    />
                    <img
                        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E017/production/_111976375_mediaitem111976374.jpg"
                        alt="bbq"
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;