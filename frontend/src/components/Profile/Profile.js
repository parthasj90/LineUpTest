import React from 'react';

function App(props) {
  return (
    <div>
      In Profle
      {props.match.params.id}
    </div>
  );
}

export default App;
