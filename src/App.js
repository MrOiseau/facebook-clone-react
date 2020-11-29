import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from './StateProvider';

function App() {
  //const user = null;
  //const [state, dispatch] = useStateValue();  //store - what the data layer looks like, we destructure user out of it
  const [{ user }, dispatch] = useStateValue(); 

  return (
    // BEM naming convention
    <div className="app">
      { !user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
              {/* Widgets - Live feed */}
            </div>
          </>
        )}
    </div>
  );
}

export default App;
