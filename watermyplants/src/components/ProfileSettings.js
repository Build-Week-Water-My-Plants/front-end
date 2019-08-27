//Bri
import React from "react";

const ProfileSettings = props => {
  return (
    <section>
      <h2>Profile Information</h2>
      <form>
        <label>Username</label>
        <input 
          type="text" 
          name="username" 
          placeholder="Example" 
          />
        <button type="submit">edit</button>
        <label>Phone</label>
        <input 
          type="tel" 
          name="phone" 
          placeholder="000-000-0000" 
          />
        <button type="submit">edit</button>
        <img src="image/profileSettings.png" alt="hold" />
        {/* quote goes above this img-- 
        "Where flowers bloom so does hope." - Lady Bird Johnson */}
      </form>
    </section>
  );
};

export default ProfileSettings;
