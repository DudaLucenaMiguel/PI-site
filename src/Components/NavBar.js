import styled from "styled-components";

const NavBarContainer = styled.nav`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Menu = styled.ul`
display: flex;
`

const Button = styled.li`
display: flex;
justify-content: center;
align-items: center;
padding: 100% 10px;
list-style: none;
font-size: 32px;
font-weight: bold;
height: 100%;
&:hover{
    background-color: #fff;
    color: #06C7F2;
    font-weight: bold;
}
//border: 0.5px solid #fff;
`

function NavBar(){
    return(
        <NavBarContainer>
            <Menu>   
                <Button>BUTTON 1</Button>
                <Button>BUTTON 2</Button>
                <Button>BUTTON 3</Button>
            </Menu>
        </NavBarContainer>
    )
}
export default NavBar