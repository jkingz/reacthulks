import React, { useEffect, useContext } from 'react';

import PeopleCount from './PeopleCount';
import peopleContext from '../context/peopleContext';

const NewPerson = () => {
  const context = useContext(peopleContext);
  const newPerson = context.people[context.people.length - 1];

  useEffect(() => {
    const newPersonName = `${newPerson.firstName} ${newPerson.lastName}`;
    document.title = newPersonName;
    console.log('useEffect');
    return () => {
      console.log('Unmount');
    };
  }, [newPerson]);
  return (
    <div className='col col-sm-12'>
      <h2 className='mt-4 text-center'>
        Newest Person: {`${newPerson.firstName} ${newPerson.lastName}`}
      </h2>
      <PeopleCount />
    </div>
  );
};

export default NewPerson;
