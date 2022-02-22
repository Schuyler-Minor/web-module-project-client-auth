import React, { useState } from "react";

const initialFormValues = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [values, setValues] = useState(initialFormValues);
  const { login } = props;

  const onChange = (evt) => {
    const { id, value } = evt.target;
    setValues({ ...values, [id]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    login(values);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        value={values.username}
        onChange={onChange}
        id="username"
        maxLength={20}
        placeholder="Enter username"
      />
      <input
        value={values.password}
        onChange={onChange}
        placeholder="password"
        id="password"
      />
      <button>Submit</button>
    </form>
  );
}
