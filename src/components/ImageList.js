import React from 'react';
import './ImageList.css'

const ImageList = props => {
  const images = props.images.map(image => {
    return <img atl = {image.description} key={image.id} src={image.urls.regular} />;
  });

  return <div className='image-list'>{images}</div>;
};


export default ImageList;
