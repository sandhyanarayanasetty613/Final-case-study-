import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test('renders learn react link', () => {
  render(<BrowserRouter>
  <Navbar/>
  </BrowserRouter>
  );

});

describe('JobNotFound Component test cases', () => {
    test('renders learn react link', () => {
        render(<BrowserRouter>
        <Navbar/>
        </BrowserRouter>
        );
      
      });
})
