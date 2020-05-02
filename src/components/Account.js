import React from 'react';
import './Account.scss'

const Account = () => {
  // we don't get any props from auth hence below details are added statically
  return (
    <div className='Account'>
      <div className='Account-top'>
        <div className='Account-top-info'>
          <div className='Account-name'>Hi Martin</div>
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
