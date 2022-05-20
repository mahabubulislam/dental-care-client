import React from 'react';

const InfoCard = ({bgClass, img , cardTitle, cardDescription}) => {
    console.log(img)
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass} text-white py-4 h-40`}>
                <figure className='ml-5 '>
                    <img src={img} alt="Album" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;