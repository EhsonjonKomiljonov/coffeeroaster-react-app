import { NavLink } from 'react-router-dom';
import './green-button.scss';

export const Button = ({ text }) => {
  return (
    <NavLink
      className='green-button'
      to='/plan'
    >
      {text}
    </NavLink>
  );
};
