import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';



describe('Navbar Component test cases', () => {
    it('renders the navbar component and checking buttons', () => {
        render(<BrowserRouter>
        <Navbar/>
        </BrowserRouter>
        );

      // checking home button is present or not
      expect(screen.getByRole('button', {
        name: /home/i
      })).toBeInTheDocument();

      // checking Contact US button is present or not
      expect(screen.getByRole('button', {
        name: /contact us/i
      })).toBeInTheDocument();

      // checking Jobs us button is present or not
      expect(screen.getByRole('button', {  name: /jobs/i})).toBeInTheDocument();
      });
})
