import React from 'react';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import Avatar from '../avatar.png'
import Card from './Card'
import './Page.scss'

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
const DATA = [{
  title: 'Cute dog',
  type: 'Animals',
  text: LOREM,
  author: 'Matt',
  image: Avatar
},
{
  title: 'Sweet cat',
  type: 'Animals',
  text: LOREM,
  author: 'Jamie',
  image: Avatar
},
{
  title: 'Big elephant dog',
  type: 'Animals',
  text: LOREM,
  author: 'Johnnie',
  image: Avatar
},
{
  title: 'Expensive house',
  type: 'Finance',
  text: LOREM,
  author: 'Artun',
  image: Avatar
}
]
const Page = ({searchInput}) => {
  const results = searchInput === '' ? DATA : DATA.filter((obj)=>{
    return Object.keys(obj).reduce((acc, curr)=>{
          return acc || obj[curr].toLowerCase().includes(searchInput);
    }, false);
});
  return (
    <div className='Page'>
      {results.map((info, i) => <Card info={info} key={i}/>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchInput: state.searchInput,
  }
}

export default connect(mapStateToProps)(withRouter(Page))
