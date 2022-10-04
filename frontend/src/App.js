import React from 'react';
import Header from './Components/Header';
import Login from './Pages/Login';


function App() {
  const user = null;
  return (
    <>
    {
      !user ? (<Login/>):(<div className="app_wrapper">
      <Header/>
    </div>)
    }
    
    </>
  );
}

export default App;
