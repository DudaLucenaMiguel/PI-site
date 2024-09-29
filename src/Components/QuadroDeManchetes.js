import styled from "styled-components";
import Manchete from "./Manchetes";

const QuadroDeManchetesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 100px;
`
const Frame1 = styled.div`
font-size: 64px;
font-weight: bolder;
color: #000;
`
const Frame2 = styled.div`
text-align: right;
&:hover{
    text-decoration: underline;
}
`
const Frame3 = styled.div`
display: flex;
justify-content: space-between;
`

function QuadroDeManchetes(){
    return(
        <QuadroDeManchetesContainer>
            <Frame1>
               <h1>Fique por dentro</h1>
            </Frame1>
            <Frame2>
                <p>veja mais</p>
            </Frame2>
            <Frame3>
            <Manchete 
            imagem="https://placehold.co/300x300/000000/FFF" 
            info="info" 
            titulo="Titulo da notícia 1" 
            lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
            />
            <Manchete 
            imagem="https://placehold.co/300x300/000000/FFF" 
            info="info" 
            titulo="Titulo da notícia 2" 
            lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
            />
            <Manchete 
            imagem="https://placehold.co/300x300/000000/FFF" 
            info="info" 
            titulo="Titulo da notícia 3" 
            lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
            />
            <Manchete 
            imagem="https://placehold.co/300x300/000000/FFF" 
            info="info" 
            titulo="Titulo da notícia 4" 
            lead="Aqui vai um breve resumo blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
            />
            </Frame3>
        </QuadroDeManchetesContainer>
    )
}
export default QuadroDeManchetes;
