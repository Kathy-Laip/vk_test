import React, { useState } from 'react';
import { Button } from './Button';
import { Label } from './Label';
import { Counter } from './Counter';


function App() {
  

  return (
    <div className="App">
      <div className='blockBtn'>
        <Button text="Что сделать" size="28" color="primary" colorCounter='primary'>
          <Label/>
        </Button>
      </div>
      <div className='blockBtn'>
        <Button text="Что сделать" size="28" color="primary" colorCounter='primary'>
          <Label/>
          <Counter/>
        </Button>
      </div>
      <div className='blockBtn'>
        <Button text="Что сделать" size="36" color="primary" colorCounter='primary'>
          <Label/>
          <Counter/>
        </Button>
      </div>
      <div className='blockBtn'>
        <Button text="Что сделать" size="56" color="primary" colorCounter='primary'>
          <Label/>
          <Counter/>
        </Button>
      </div>
    </div>
  );
}

export default App;
