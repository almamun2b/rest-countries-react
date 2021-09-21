import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { name, capital, population, flag, region} = props.country;
    return (  
        <div className='country'>
            <h2>Country: {name} </h2>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital}, Population: {population}</p>
        </div>
    );
};

export default Country;

