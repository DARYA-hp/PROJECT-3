import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Product from "./Pages/Product"
import HomePage from "./Pages/Homepage"
import Market from './Pages/Market';
import AboutUs1 from "./Pages/AboutUs1"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/Product" element={<Layout><Product /></Layout>} />
          <Route path="/About Us" element={<Layout><AboutUs1/></Layout>}/>
          <Route path="/Market" element={<Layout><Market /></Layout>} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
