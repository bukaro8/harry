import axios from 'axios';

export default axios.create({
  baseURL: 'https://hp-api.herokuapp.com/api/characters',
});

// characters who are Hogwarts students during the book series:
// https://hp-api.herokuapp.com/api/characters/students
// or
// https://hp-api.onrender.com/api/characters/students

// characters who are Hogwarts staff during the book series:
// https://hp-api.herokuapp.com/api/characters/staff
// or
// https://hp-api.onrender.com/api/characters/staff

// characters in a certain house, e.g. /gryffindor:
// https://hp-api.herokuapp.com/api/characters/house/:house
// or
// https://hp-api.onrender.com/api/charactershouse/:house

// all spells:
// https://hp-api.herokuapp.com/api/spells
// or
// https://hp-api.onrender.com/api/spells
