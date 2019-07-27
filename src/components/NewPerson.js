import React, { useEffect } from 'react';

const NewPerson = ({ newPerson }) => {
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
      <div className='mt-4 text-center'>
        Newest Person: {`${newPerson.firstName} ${newPerson.lastName}`}
      </div>
    </div>
  );
};

export default NewPerson;
