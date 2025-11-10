
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dec from "./Pages/Dec";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/dec" element={<Layout><Dec /></Layout>} />
      </Routes>
    </Router>
    </>
  )}

export default App;
