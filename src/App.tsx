import React from 'react';
import Column from './components/Column';
// import Card from './components/Cards';
import './App.css';

const columns = [0,1,2,3];

let App: React.FC = () => {
  return (
    <div className="App">
      {columns.map((ar) => {
        return (
          <Column/>
        )
      })}
     
    </div>
  );
}

// не робит
// function App(): React.FC  {
//   return (
//     <div className="App">
//       Hello TS
//     </div>
//   );
// }

export default App;
