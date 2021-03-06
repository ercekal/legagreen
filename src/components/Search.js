import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import { searchData } from '../store/actions'
import './Search.scss'

const Search = ({onSearchData}) => {
  const [input, setInput] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    return onSearchData(input)
  }

  // searches both with pressing enter and clicking on the search icon

  return (
    <div className='Search'>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type='text'
          placeholder='Search'
          onChange={e => setInput(e.target.value)}
          value={input} />
        <div onClick={e => onSubmit(e)} className='Search-icon'><SearchIcon style={{color: 'gray'}}/></div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchData: input => dispatch(searchData(input))
  }
}

export default connect(null, mapDispatchToProps)(Search)

Search.propTypes = {
  onSearchData: PropTypes.func
}