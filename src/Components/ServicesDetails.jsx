import React from 'react';


const ServicesDetails = (props) => {
    return (
        <div>
            <h1>Service Details: {props.match.params.id}</h1>
            
        </div>
    );
}

export default ServicesDetails;
