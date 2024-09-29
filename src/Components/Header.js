import NavBar from "./NavBar"
import styled from "styled-components";

const HeaderContainer = styled.header`
font-family: Arial, Helvetica, sans-serif;
display: flex;
background-color: #000;
color: #fff;
padding: 0 20px;
height: 100px;
align-items: center;
justify-content: center;
position: fixed;
width: 100%;
top: 0;
z-index: 1000;
`
const ButtonDoar = styled.button`
height: 45px;
width: 150px;
border-radius: 5px;
background-color: #9E0000;
color: #fff;
font-size: 32px;
font-weight: bold;
border: none;
&:Hover{
    background-color: #FF0000;
}
`
const Frame1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: auto;
`

const SearchBar = styled.input`
margin: 20px;
height: 40px;
width: 300px;
border-radius: 50px;
padding-left: 10px;
&:focus{
    outline: none;
}
`

const LogoContainer = styled.h1`
display: flex;
align-items: center;
justify-content: center;
font-size: 80px;
font-weight: bold;
`

function Header(){
    return(
        <HeaderContainer>
            <LogoContainer>LOGO</LogoContainer>
            <NavBar/>
            <Frame1>
                <SearchBar type="text" class="text-box" placeholder="Buscar..." />
                <ButtonDoar>DOAR</ButtonDoar>
            </Frame1>
        </HeaderContainer>
    );
}
export default Header