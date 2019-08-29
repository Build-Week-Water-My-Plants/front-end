//Bri
import React, { useState } from "react";
import Nav from "./Nav";

import "../sass/ProfileSettings.scss"
const ProfileSettings = props => {
  const [user, setUser] = useState({username: "", phonenumber: "",})

  const profileChangeHandler = e => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value})
  }

  const submitForm = e => {
    e.preventDefault();
    console.log(user);
    props.addNewUser(...user);
    setUser({
      username: "", 
      phonenumber: "",
    });
  };
  return (
    <>
      <Nav />
      <section className="profile">
        <h2>Profile Information</h2>
        <hr/>
        <form onSubmit={submitForm}>
          <div className="username">
          <label>Username</label>
          <input 
            type="text" 
            name="username"
            onChange={profileChangeHandler}
            value={user.username} 
            placeholder="Example"
             />
             <hr/>
          <button type="submit" className="edit">edit</button>
          </div>
          <div className="phonenumber">
          <label>Phone</label>
          <input 
            type="tel" 
            name="phonenumber"
            onChange={profileChangeHandler}
            value={user.phonenumber}  
            placeholder="000-000-0000" 
            />
            <hr/>
          <button type="submit" className="edit">edit</button>
          </div>
          <img src="images/profileSettings.png" alt="hold" />
          {/* quote goes above this img-- 
        "Where flowers bloom so does hope." - Lady Bird Johnson */}
        </form>
      </section>
    </>
  );
};

export default ProfileSettings;
