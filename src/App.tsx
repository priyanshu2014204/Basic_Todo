import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/rsuite.min.css'
import { Home } from './pages/Home';
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom';
import  {CustomLogin}  from './pages/Login';
import { CustomSignUp } from './pages/SignUp';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
				<Route path='/' element={<h1>404 Not Found</h1>} />
				<Route path='/home' element={<Home />} />
        <Route path='/login' element={<CustomLogin/>}/>
        <Route path='/signup' element={<CustomSignUp/>}/>
			</Routes>
     </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
