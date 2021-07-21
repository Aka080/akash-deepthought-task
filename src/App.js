import React, { useState } from 'react'
import './App.css';
import Steps from './Component/steps';
import {Name,Email,Address,FavouriteGame,Success} from './Component/formSteps';


function App() {
const [step,setStep]=useState(1) 
const [userDetail,setUserDetail] = useState({
  firstName:'Jhon',
  lastName:'Smith',
  email:'jhon@email.com',
  houseNo:'123',
  streetName:'Kansas',
  city:'Prayagraj',
  state:'Uttar Pradesh',
  favouriteGame:"Spider-Man 2"
}) 


const goNextStep=()=>{
  if(step<5){
    setStep(step+1)
  }
}
const goStepBack=()=>{
  if(step>1){
    setStep(step-1)
  }
}

const updateDetail=(e)=>{
 
  setUserDetail({...userDetail,[e.target.name]:e.target.value})
  console.log(userDetail)
  
}
return(
<div className='border'>
      <Steps step={step}/>
<div className="ui attached segment ">
    <form className ='ui form customFormStyle'>
              {step===1?<Name firstName={userDetail.firstName}
              lastName={userDetail.lastName}
              onChangeHandler = {updateDetail}
              />:''}

              {step===2?<Email email={userDetail.email} onChangeHandler = {updateDetail}/>:''}

              {step===3?<Address houseNo={userDetail.houseNo}
              streetName={userDetail.streetName}
              city={userDetail.city}
              state={userDetail.state} 
              onChangeHandler={updateDetail}/>:''}


              {step===4?<FavouriteGame
              onChangeHandler={updateDetail}
              favouriteGame={userDetail.favouriteGame}/>:''}
              
              {step===5?<Success
              formDetail = {userDetail}
              />:''}
    </form>
  <div className='buttonContainer'>
      {step !==1?<button className="ui button" onClick={goStepBack}>
      Back
      </button>:''}
    {step===4?<button className="ui primary button" onClick = {goNextStep}>
      Submit
    </button>:step===5?'':<button className="ui primary button" onClick = {goNextStep}>
      Next
    </button>}
 </div>
</div>
</div>
)
}

export default App;
