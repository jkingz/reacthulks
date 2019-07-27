import React, { useEffect } from 'react';

import PeopleCount from './PeopleCount';

const NewPerson = ({ newPerson, peopleCount }) => {
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
      <PeopleCount peopleCount={peopleCount} />
    </div>
  );
};

export default NewPerson;
