import React, { useState } from "react";

const initialFormValues = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [values, setValues] = useState(initialFormValues);
  const { login } = props;

  const onChange = (evt) => {
    const { value } = evt.target;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <input id="username" maxLength={20} placeholder="Enter username" />
      <input placeholder="password" />
      <button>Submit</button>
    </form>
  );
}
