//Bri
import React, { useState } from "react";
import Nav from "./Nav";
import "../sass/ProfileSettings.scss";

const data = { username: "brikeune", phonenumber: "414-544-6567" };
const ProfileSettings = props => {
  const [username, setUsername] = useState(data.username);
  const [phonenumber, setPhonenumber] = useState(data.phonenumber);

  const profileChangeHandler = e => {
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setUsername({ ...username, [name]: value });
    setPhonenumber({ ...phonenumber, [name]: value });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(username);
    console.log(phonenumber);
    props.addNewUsername(...username);
    setUsername({
      username: ""
    });
    props.addNewPhone(...phonenumber);
    setPhonenumber({
      phonenumber: ""
    });
  };
  return (
    <>
      <Nav />
      <section className="profile">
        <h2>Profile Information</h2>
        <hr />
        <form onSubmit={submitForm}>
          <div className="username">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={profileChangeHandler}
              value={username.username}
              placeholder="Example"
            />
            <button type="submit" className="edit">
              edit
            </button>
          </div>
        </form>
        <form onSubmit={submitForm}>
          <div className="phonenumber">
            <label>Phone</label>
            <input
              type="tel"
              name="phonenumber"
              onChange={profileChangeHandler}
              value={phonenumber.phonenumber}
              placeholder="000-000-0000"
            />
            <button type="submit" className="edit">
              edit
            </button>
          </div>

          {/* quote goes above this img-- 
        "Where flowers bloom so does hope." - Lady Bird Johnson */}
        </form>
        <img
          src="images/profileSettings.png"
          alt="persons hands holding some kind of plant in soil."
        />
      </section>
    </>
  );
};

export default ProfileSettings;
