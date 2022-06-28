import React, { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInfo(function (prevValue) {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setUser(userInfo);
    setUserInfo({
      fName: "",
      lName: "",
      email: ""
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {user.fName} {user.lName}
      </h1>
      <p>{user.email}</p>

      <form onSubmit={handleClick}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={userInfo.fName}
          autoComplete="off"
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={userInfo.lName}
          autoComplete="off"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={userInfo.email}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
