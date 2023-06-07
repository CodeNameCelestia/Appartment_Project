import './App.css'
import './index.css'
import{Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from  './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  )
}



//Time stamps for progress

// 36.07
// 1:47:50

export default App
