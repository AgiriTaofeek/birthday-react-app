import React from 'react';
import Card from './UI/Card';

function List({ people }) {
  // console.log('list');
  // console.log('in list', people);
  // const keys = people.map((person) => console.log(person.id));

  return (
    <>
      {people.map((person) => (
        <Card
          key={person.id}
          id={person.id}
          name={person.name}
          image={person.image}
          age={person.age}
        />
      ))}
    </>
  );
}

export default List;
