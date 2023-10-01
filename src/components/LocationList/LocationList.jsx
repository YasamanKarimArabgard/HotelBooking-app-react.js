import React from 'react';
import useFetch from '../../hooks/useFetch';

const LocationList = () => {

    const { loading, data } = useFetch('http://localhost:5000/hotels');

    if(loading) return <p>loading...</p>

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