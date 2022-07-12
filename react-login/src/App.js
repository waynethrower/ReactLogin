import "./App.css"

//components
import LoginForm from "./components/LoginForm"

function App() {
  function onSubmit(username, password) {
    console.log(username, password)
  }

  return (
    <div className="App">
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default App
