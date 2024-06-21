import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these nefarious cards!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='bomboccatttttttttttttttttttttttttttt'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='NEFARIOUS DREADHEAD'
              label='Prishaa'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='wasssuppppppppp gang'
              label='BOPPPPP'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Helllooodeodededeodoedoeodoedoedoedoe'
              label='Diabolical'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour FACTS THIS IS CRAZY'
              label='Malicious'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;