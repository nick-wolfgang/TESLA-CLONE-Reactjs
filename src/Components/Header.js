import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close';

function Header() {
const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
           <a>
               <img src="/images/logo.svg" alt="" />
           </a>
           <Lmenu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
           </Lmenu>
           <RigthMenu>
               <a href="#">Shop</a>
               <a href="#">Tesla Account</a>
               <CustomMenu onClick={()=>setBurgerStatus(false)}/>
           </RigthMenu>
           <BurgerNav show={burgerStatus}>
               <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(true)}/>
               </CloseWrapper>
               
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Used Inventory</a></li>
               <li><a href="#">Trade-in Inventory</a></li>
               <li><a href="#">CyberTruck Inventory</a></li>
               <li><a href="#">Roadaster</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               
           </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 0 20px;
    width: 100%;
    z-index: 1;
`
const Lmenu = styled.div`
    display: flex;
    align-items; center;
    justify-content: center;
    flex: 1;
    font-size: 17px;


    a {
        font-weight: 700;
        
        text-trans formation: uppercase;
        padding: 0 15px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`
const RigthMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-decoration: uppercase;
        margin-right: 10px;
    }

`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
    transition: transform 0.3s; 
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
    a {
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`
