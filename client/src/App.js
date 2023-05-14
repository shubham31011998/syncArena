import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {io} from 'socket.io-client';
import Home from './pages/home/Home';
import './App.css';

const socket = io.connect('http://localhost:4000')

function App() {
  const [userData, setuserData] = useState({
    username: "",
    room: ""
  });

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                userData={userData}
                setuserData={setuserData}
                socket={socket}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
