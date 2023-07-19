import Naverbar from "./Components/Naverbar"
import Slider from "./Components/Slider.jsx"
import ProductsList from "./Components/ProductsList.jsx"
import About from './Components/About.jsx'
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <Naverbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
    
      </Routes>
    </div>
  );
}


export default App
