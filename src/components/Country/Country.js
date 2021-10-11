import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { name, capital, population, flags, region } = props.country;
    return (
        <div className='country'>
            <h2>Country: {name.common} </h2>
            <img src={flags.png} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital}, Population: {population}</p>
        </div>
    );
};

export default Country;

