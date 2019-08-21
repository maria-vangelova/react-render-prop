import React from 'react';
import Toggle from './Toggle';
import ToggleChildren from './ToggleChildren';

function App() {
  return (
    <React.Fragment>
      <h1>Render props with prop</h1>
      <Toggle
        render={({ on, toggle }) => (
          <div>
            {on && <p>Some text</p>}
            <button onClick={toggle}> Show/Hide </button>
          </div>
        )}
      />

      <h1>Children render props</h1>
      <ToggleChildren>
        {({ on, toggle }) => (
          <div>
            {on && <p>Some text</p>}
            <button onClick={toggle}> Show/Hide </button>
          </div>
        )}
      </ToggleChildren>

    </React.Fragment>
    
  );
}

export default App;
