import React from 'react';
const alternativeImg =
  'https://i.pinimg.com/originals/50/90/e0/5090e0c83a676a66acd95b5f29512f41.jpg';
const Card = ({ image, name, ancestry, house, species }) => {
  return (
    <div>
      <div className='card m-3' style={{ width: '18rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
          }}
        >
          <h2 style={{ margin: '0', fontFamily: 'Harry', color: 'white' }}>
            {name}
          </h2>
        </div>
        <img
          style={{ height: '381px' }}
          src={!image ? alternativeImg : image}
          alt={name}
        />
        <div className='card-body'>
          <p className='card-text'>Ancestry: {ancestry}</p>
          <p>Species: {species}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
