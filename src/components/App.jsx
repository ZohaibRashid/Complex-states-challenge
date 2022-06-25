import React, { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
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

  return (
    <div className="container">
      <h1>
        Hello {userInfo.fName} {userInfo.lName}
      </h1>
      <p>{userInfo.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={userInfo.fName}
          autocomplete="off"
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={userInfo.lName}
          autocomplete="off"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={userInfo.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
