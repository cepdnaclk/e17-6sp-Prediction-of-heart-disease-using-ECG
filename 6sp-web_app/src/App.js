import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import NavBar from './components/NavBar';

function App(){
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;