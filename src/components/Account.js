import React from 'react';
import './Account.scss'

const Account = () => {
  return (
    <div className='Account'>
      <div className='Account-top'>
        <div className='Account-top'>
          <div className='Account-name'>Martin</div>
          <div className='Account-dept'>Dept</div>
        </div>
        <div className='Account-logo' />
      </div>
      <div className='Account-bottom'>
        <button>Some action</button>
      </div>
    </div>
  );
};
export default Account;
