import logo from './logo.svg';
import './App.css';
import Question from './Components/Question';
import Mathjax from './Components/Mathjax';
import Navbar from './Components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <>



   <BrowserRouter>
   <Navbar />

      <Routes>
        <Route path="/" element={<Question />}>
          
        </Route>
        <Route path="/AreaUnderTheCurve_901" element={<Mathjax />}/>
        <Route path="/BinomialTheorem_901" element={<Mathjax />}/>
        <Route path="/DifferentialCalculus2_901" element={<Mathjax />}/>
      </Routes>
    </BrowserRouter>
   {/* <Mathjax/> */}
   </>
  );
}

export default App;
