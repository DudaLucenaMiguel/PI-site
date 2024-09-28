import Header from "./Components/Header"
import Footer from "./Components/Footer"
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from "./Components/Carrossel";

function App(){
  return(
    <div>
      <Header/>
      <Carrossel/>
      <Footer/>
    </div>
  );
}
export default App