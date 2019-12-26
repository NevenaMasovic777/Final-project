import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { register } from "../utilities/forum-service";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPsw, setConfirmPsw] = useState("");

  const [validPsw, setValidPSw] = useState(false);
  const [samePsw, setSamePsw] = useState(false);

  useEffect(() => {
    function validPassword() {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(password)) {
        setValidPSw(true);
      } else {
        setValidPSw(false);
      }
    }
    validPassword();
  }, [password]);

  useEffect(() => {
    setSamePsw(confirmPsw === password);
    console.log(confirmPsw === password);
  }, [confirmPsw, password]);

  function handleSubmit() {
    if (!validPsw || !samePsw) {
      console.log("neuspasna sifra");
      return;
    }
    register({ name, surname, username, email, password }).then(data => {
      if (data.success) {
        console.log("User registered");
        history.push("/topics");
      } else {
        console.log("Registration failed");
      }
    });
  }
  return (
    <div className="reg-log-div">
      <form className="reg-log-form" style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          onInput={e => {
            setName(e.target.value);
          }}
        />
        <br></br>
        <input
          type="text"
          placeholder="Surname"
          onInput={e => {
            setSurname(e.target.value);
          }}
        />
        <br></br>
        <input
          type="text"
          placeholder="Username"
          onInput={e => {
            setUsername(e.target.value);
          }}
        />
        <br></br>
        <input
          type="email"
          placeholder="Email"
          onInput={e => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onInput={e => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
        <input
          type="password"
          placeholder="Confirm password"
          onInput={e => {
            setConfirmPsw(e.target.value);
          }}
        />
        <br></br>
        <input
          value="Confirm registration"
          type="submit"
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
      <br></br>
    </div>
  );
};

export default Register;
