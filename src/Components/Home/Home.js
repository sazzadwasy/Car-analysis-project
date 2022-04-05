import React from 'react';
import useReviews from '../Hooks/useReviews';

const Home = () => {
    const [reviews, setReviews] = useReviews()
    console.log(reviews)
    return (
        <div>
            <div className='flex'>
                <div className='w-1/2 p-5 mt-4'>
                    <h3 className='text-4xl font-semibold text-teal-600'>BMW-750Li</h3>
                    <p className='text-2xl m-6'>The BMW 7 Series has 1 Diesel Engine and 2 Petrol Engine on offer. The Diesel engine is 2993 cc while the Petrol engine is 2998 cc and 6592 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the 7 Series has a mileage of 7.96 to 39.53 kmpl .</p>
                    <br />
                    <span className='text-2xl border-2 border-teal-500 rounded-lg px-8 py-4 hover:bg-teal-300 mt-4 duration-300'>Live demo</span>
                </div>
                <div className='p-6'>
                    <img className='rounded-lg' src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190404105921_BMW-750Li-xDrive-front-acti.jpg&w=726&h=482&q=75&c=1' alt=''></img>
                </div>
            </div>
            <div>
                <h1 className='text-5xl text-gray-500'>review 000</h1>
                <div className='review-items'>
                    <h1>{reviews.length}</h1>
                </div>
            </div>
        </div>
    )
};

export default Home;