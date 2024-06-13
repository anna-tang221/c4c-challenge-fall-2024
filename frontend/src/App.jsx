import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  
  return (
    <>
      <h1 className="title">
        C4C: Projects
      </h1>

      <div class="center">
      <AddPartnerButton />
      </div>
      
      <Dashboard />
    </>
  )
}

function AddPartnerButton() {
  function handleClick() {
    alert('theoretically would add a partner');
  }
  return (
    <button className="add-partner-button"
    onClick={handleClick}>
      Add Partner Info
      </button>
  );
}


export default App
