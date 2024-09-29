import Header from "./Components/Header"
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from "./Components/Carrossel";
import styled from "styled-components";
import QuadroDeManchetes from "./Components/QuadroDeManchetes";

function App(){
  return(
    <div>
      <Header/>
      <Carrossel/>
      <QuadroDeManchetes/>
      <Footer/>
    </div>
  );
}
export default App