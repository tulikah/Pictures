import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const image = props.images.map((image) => {
         return <div key={image.id} className = 'image-list' > 
            <ImageCard image={image} /> </div>;
    });
    return <div className='image-list'>{image}</div>
   
};

export default ImageList;
