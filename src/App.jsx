import { useState } from 'react';
import Wrapper from './components/UI/Wrapper';
import List from './components/List';
import Button from './components/Button';
import Data from './data';

function App() {
  const [peopleData, setPeopleData] = useState(Data);
  const clearHandler = () => {
    setPeopleData([]);
  };
  return (
    <main>
      <Wrapper>
        <h3>{peopleData.length} birthdays today</h3>
        <List people={peopleData} />
        <Button onClick={clearHandler}>clear all</Button>
      </Wrapper>
    </main>
  );
}

export default App;
