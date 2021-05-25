import React, { useState } from "react";
import {connect } from "react-redux";
import {  changeName } from "./../store/profile/actions";


const Profile = (props) => {
  const { name, setNewName } = props;
  const [value, setValue] = useState("");
 
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setNewName(value);
    setValue('');
  };

  return (
    <>
      <div>My profile</div>
      <div>Hello, {name}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  name: state.profile.name,
});

const mapDispatchToProps = {
  setNewName: changeName,
}

export const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);