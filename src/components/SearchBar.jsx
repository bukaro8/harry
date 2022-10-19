import React, { useState } from 'react';
import { setTerm } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { toUpperCase } from './toUpperCase'; //?function to convert the first char to upper case
const SearchBar = () => {
  const dispatch = useDispatch();
  const [localTerm, setLocalTerm] = useState('');
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(setTerm(toUpperCase(localTerm)));
    setLocalTerm('');
  };
  return (
    <div>
      <form
        className='container input-group m-3'
        onSubmit={(e) => onSubmitForm(e)}
      >
        <input
          type='text'
          className='form-control '
          placeholder='Find Character'
          onChange={(e) => setLocalTerm(e.target.value)}
          value={localTerm}
        />
        <button className='btn btn-outline-success' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
