import React from 'react';

const LocationList = () => {

    const { loading, data } = useFetch('https://localhost:5000/hotels');

    return (
        <div className='locationList-container'>
            <h2>Nearby Loactions</h2>
            <div>
                {
                    data.map(item => (
                        <h3>{item.name}</h3>
                    ))
                }
            </div>
        </div>
    );
};

export default LocationList;