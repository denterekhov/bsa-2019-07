import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Spinner.css';

const Spinner = () => {
  return (
    <CircularProgress
      className='spinner'
      size={60}
      thickness={4}
    />
  )
}

export { Spinner };