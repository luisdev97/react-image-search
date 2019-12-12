import React from 'react';
import Image from './Image';
 

const ImagesList = ({ images }) => {


    const renderImages = images => {
        return images.map(image => <Image key={ image.id } image={ image }/>)
    }

    return (
        <div className="col-12 p-5 row">
            { renderImages(images) }
        </div>
    );
};

export default ImagesList;