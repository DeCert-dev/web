import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {
  LandingPage,
  Business,
  Signin,
  UserDashBoard
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<Business />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<UserDashBoard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
