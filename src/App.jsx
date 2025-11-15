import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Product from "./Pages/Product"
import HomePage from "./Pages/Homepage"
import Market from './Pages/Market';
import AboutUs1 from "./Pages/AboutUs1"
import { Contact } from 'lucide-react';
import ContactUs from './Pages/ContactUs';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/Product" element={<Layout><Product /></Layout>} />
          <Route path="/About Us" element={<Layout><AboutUs1 /></Layout>} />
          <Route path="/Market" element={<Layout><Market /></Layout>} />
          <Route path="/Contact Us" element={<Layout><ContactUs /></Layout>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>



    </>
  )
}

export default App;
