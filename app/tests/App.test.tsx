import { add } from './Sanity';

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from '../App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
});
