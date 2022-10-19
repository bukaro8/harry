import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useId } from 'react';
import { getCharacters } from '../redux/actions';
import Card from './Card';

const ListDisplay = () => {
  const dispatch = useDispatch();
  const id = useId();
  const characters = useSelector((state) => state.characters);
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  const renderCharacters = () => {
    return characters.map((el, index) => (
      <Card
        key={`${id}${index}`}
        name={el.name}
        image={el.image}
        ancestry={el.ancestry}
        house={el.house}
        species={el.species}
      />
    ));
  };
  return (
    <div className='d-flex flex-wrap justify-content-around container '>
      {renderCharacters()}
    </div>
  );
};

export default ListDisplay;
