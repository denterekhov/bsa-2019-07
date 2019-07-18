import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Spinner.css';

const Spinner = (props) => {
  return props.isFetching 
    ? <CircularProgress
        className='spinner'
        size={40}
        thickness={4}/> 
    : null;
}

const mapStateToProps = (state) => ({
  isFetching: state.ui.isFetching,
})

export default connect(mapStateToProps)(Spinner);