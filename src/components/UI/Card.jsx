import React from 'react';

function Card({ id, name, age, image }) {
  console.log({ id });

  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}

export default Card;
