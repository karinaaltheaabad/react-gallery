import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import {withRouter} from 'react-router-dom';

const PhotoPage = (props) => {
    const { data } = props;
    let photos;
    
    if (data.length > 0) {
        photos = data.map(photo => <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
        );
    } else {
        photos = <NotFound />
    }

    return (
        <div className="photo-container">
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default withRouter(PhotoPage); 