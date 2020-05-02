import React from 'react';
import './Card.scss'

const Card = ({info: {title, type, text, author, image}}) => {
  return (
    <div className='Card'>
      <div className='Card-top'>
        <div className='Card-title'>{title}</div>
        <div className='Card-type'>{type}</div>
        <div className='Card-text'>{text}</div>
      </div>
      <div className='Card-bottom'>
        <img src={image} alt='img' />
        <div>{author}</div>
      </div>

    </div>
  );
};

export default Card;