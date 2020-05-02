import React from 'react';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import './Page.scss'
import Avatar from '../avatar.png'
import Card from './Card'

const DATA = [{
  title: 'Cute dog',
  type: 'Animals',
  text: 'Lorem ipsum',
  author: 'Matt James',
  image: Avatar
},
{
  title: 'Sweet cat',
  type: 'Animals',
  text: 'Lorem ipsum',
  author: 'Jamie James',
  image: Avatar
},
{
  title: 'Big elephant dog',
  type: 'Animals',
  text: 'Lorem ipsum',
  author: 'Johnnie Boy',
  image: Avatar
},
{
  title: 'Expensive house',
  type: 'Finance',
  text: 'Lorem ipsum',
  author: 'Artun Taylor',
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
      {results.map(info => <Card info={info} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    searchInput: state.searchInput,
  }
}

export default connect(mapStateToProps)(withRouter(Page))
