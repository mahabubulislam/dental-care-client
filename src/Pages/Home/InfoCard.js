import React from 'react';

const InfoCard = ({bgClass, img , cardTitle, cardDescription}) => {
    return (
        <div>
            <div className={`card lg:card-side  shadow-xl ${bgClass} text-white py-4 h-50 lg:h-40`}>
                <figure className='ml-5 '>
                    <img src={img} alt="Album" />

                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-left">{cardTitle}</h2>
                    <p>{cardDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;