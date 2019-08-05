import React, { useReducer } from 'react';

import Form from './components/Form';
import People from './components/People';
import NewPerson from './components/NewPerson';

import peopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';
import { ADD_PERSON } from './context/types';

const App = () => {
  const initialState = {
    people: [
      {
        firstName: 'King',
        lastName: 'Rule',
      },
      {
        firstName: 'Kingkoyz',
        lastName: 'jkingz',
      },
    ],
  };

  const [state, dispatch] = useReducer(peopleReducer, initialState);

  const addPerson = person => {
    dispatch({
      type: ADD_PERSON,
      payload: person,
    });
  };

  return (
    <peopleContext.Provider
      value={{
        people: state.people,
        addPerson,
      }}
    >
      <div className='container mt-4'>
        <div className='row'>
          <Form />
          <People />
          <NewPerson />
        </div>
      </div>
    </peopleContext.Provider>
  );
};

export default App;
