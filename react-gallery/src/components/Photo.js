import React from 'react';
import NotFound from './NotFound';

const Photo = (props) => {
    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <li>
                    {/* <img src={props.image.url} alt={props.name} /> */}
                </li>

                <NotFound />
            </ul>
        </div>
    );
}

export default Photo; 