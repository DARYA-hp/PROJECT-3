
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Product from "./Pages/Product"
import HomePage from "./Pages/Homepage"
function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/HomePage" element={<Layout><HomePage /></Layout>} />
        <Route path="/Product" element={<Layout><Product /></Layout>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
