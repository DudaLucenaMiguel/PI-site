import styled from "styled-components";

const NavBarContainer = styled.nav`
height: 100%;
display: flex;
align-items: center;
justify-content: stretch;
`

const Menu = styled.ul`
display: flex;
align-items: stretch;
justify-content: space-between;
height: 100%;
`

const Button = styled.li`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0px 10px;
list-style: none;
font-size: 32px;
font-weight: bold;

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