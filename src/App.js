import Header from "./Components/Header"
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from "./Components/Carrossel";
import styled from "styled-components";
import QuadroDeManchetes from "./Components/QuadroDeManchetes";
import Enfrentamos from "./Components/Enfrentamos";
import './global.css';

function App(){
  return(
    <div>
      <Header/>
      <Carrossel/>
      <Enfrentamos/>
      <QuadroDeManchetes/>
      <Footer/>
    </div>
  );
}
export default App