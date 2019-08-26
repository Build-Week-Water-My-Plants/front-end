//Bri
import React from "react";

const ProfileSettings = props => {
  return (
    <section>
      <h2>Profile Information</h2>
      <form>
          <label>Username</label>
        <input type="username" name="username" placeholder="Example" />
        <button type="submit">edit</button>
        <label>Phone</label>
        <input type="tel" name="phone" placeholder="000-000-0000" />
        <button type="submit">edit</button>
      </form>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
    </section>
  );
};

export default ProfileSettings;
