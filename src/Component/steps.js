import React from 'react';

const Steps = ({step})=>{
    return <>
     <div className="ui five steps marginzero">
        <div className={`${step===1?'active':''} step`}>
          <i className={ ` user icon`}></i>
          <div className="content">
            <div className="title">Name</div>
          </div>
        </div>
        <div className={`${step===2?'active':''} step`}>
        <i className="envelope icon"></i>
          <div className="content">
            <div className="title">Email</div>
          </div>
        </div>
        <div className={`${step===3?'active':''} step`}>
        <i className="address card icon"></i>
          <div className="content">
            <div className="title">Address</div>
          </div>
        </div>
        <div className={`${step===4?'active':''} step`}>
        <i className="gamepad icon"></i>
          <div className="content">
            <div className="title">Favourite Game</div>
          </div>
        </div>
        <div className={`${step===5?'active':''} step`}>
        <i class="certificate icon"></i>
          <div className="content">
            <div className="title">Success</div>
          </div>
        </div>
        </div>
    </>
}

export default Steps;