
import React from 'react';
import NotePad from './component/NotePad';

const App = () => {

  return (
    <div>
      {/* <h1>나의 메모장</h1> */}
      <NotePad />
    </div>
  );
};

console.log(<NotePad />);
export default App;