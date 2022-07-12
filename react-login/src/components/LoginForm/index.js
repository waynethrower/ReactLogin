import React, { useState } from "react"

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)

  //check login and password were entered to unlock submit button
  function checkInputs() {
    username && password !== "" ? setIsDisabled(false) : setIsDisabled(true)
  }

  return (
    <div>
      {/* uncomment lines 16 to 18 to check states */}
      {/* <p>
        Show States: {username} {password}
      </p> */}
      <input
        id="username-input"
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
          checkInputs()
        }}
      ></input>
      <br></br>
      <input
        id="password-input"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          checkInputs()
        }}
      ></input>
      <br></br>
      <button
        id="login-button"
        disabled={isDisabled}
        onClick={() => {
          onSubmit(username, password)
        }}
      >
        Submit
      </button>
    </div>
  )
}
