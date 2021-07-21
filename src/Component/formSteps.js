import { stateList,gameList } from '../stateAndGamesList';
import { FormDropDown } from './formDropdown';

const Name = (props)=>{
    return(<div>
     <div className="field">
    <label>First Name</label>
    <input type="text" name="firstName" value = {props.firstName} placeholder="First Name" onChange={e=>props.onChangeHandler(e)}/>
</div>
<div className="field">
    <label>Last Name</label>
    <input type="text" name="lastName" value = {props.lastName} placeholder="Last Name" onChange={e=>props.onChangeHandler(e)}/>
</div>
</div>)
}

const Email = (props)=>{
    return  <div className="field">
    <label>Email</label>
    <input type="email" name="email" value={props.email} placeholder="Email" onChange={e=>props.onChangeHandler(e)}/>
</div>
}

const Address = (props)=>{
    return <div >
      <div className="field">
                <label>House no.</label>
                <input type="number" name="houseNo" value={props.houseNo}placeholder="House no." onChange={e=>props.onChangeHandler(e)}/>
            </div>
            <div className="field">
                <label>Street Name</label>
                <input type="text" name="streetName" value={props.streetName} placeholder="Street Name" onChange={e=>props.onChangeHandler(e)}/>
            </div>
            <div className="field">
                <label>City</label>
                <input type="text" name="city"  value={props.city} placeholder="City" onChange={e=>props.onChangeHandler(e)}/>
            </div>
            <div className="field">
                <label>State</label>
                <FormDropDown data = {stateList} value={props.state} name ={'state'} onChangeHandler={e=>props.onChangeHandler(e)}/>
            </div>
    </div>
}

const FavouriteGame = (props)=>{
    return  <div className="field">
    <label>Favourite game</label>
    <FormDropDown 
    data = {gameList} 
    name ={'favouriteGame'} 
    value={props.favouriteGame}  
    onChangeHandler={e=>props.onChangeHandler(e)}/>
</div>
}

const Success = ({formDetail})=>{
    return <div className = 'finalDetails'>
        <h1>Thank you!</h1>
        <table>
            <tr>
                <th>Name</th>
                <td>{formDetail.firstName+" "+formDetail.lastName}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{formDetail.email}</td>
            </tr>
            <tr>
                <th>House No.</th>
                <td>{formDetail.houseNo}</td>
            </tr>
            <tr>
                <th>Street Name</th>
                <td>{formDetail.streetName}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>{formDetail.city}</td>
            </tr>
            <tr>
                <th>State</th>
                <td>{formDetail.state}</td>
            </tr>
            <tr>
                <th>Favourite Game</th>
                <td>{formDetail.favouriteGame}</td>
            </tr>
           
        </table>
    </div>
}


 export {Name,Email,Address,FavouriteGame,Success}