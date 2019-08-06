import React, { useState, useContext, useMemo, useRef } from 'react';

import peopleContext from '../context/peopleContext';

const Form = () => {
  const [person, setPerson] = useState({ firstName: '', lastName: '' });
  const context = useContext(peopleContext);

  const firstNameInput = useRef(null);

  const onChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (person.firstName.trim() === '' || person.lastName.trim() === '') return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim(),
    };

    context.addPerson(newPerson);
    setPerson({ firstName: '', lastName: '' });
    firstNameInput.current.focus();
  };

  const printNumberofPeople = () => console.log(`Number of people: ${context.people.length}`);
  useMemo(() => printNumberofPeople(), []);

  return (
    <div className='col'>
      <h2>Add a person</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            name='firstName'
            placeholder='First name.'
            value={person.firstName}
            ref={firstNameInput}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            name='lastName'
            placeholder='Last name.'
            value={person.lastName}
            onChange={onChange}
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
