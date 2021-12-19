import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal"
import Zoom from "react-reveal"
import Bounce from "react-reveal"

function Section( { title, description, leftBtnText, rightBtnText,  backgroundImg }) {
    return (
        <Wrap bgImage ={ backgroundImg }>
            <Fade bottom>
                <ItemText>
                    <Zoom>
                        <h1>{ title }</h1>  
                        <p> { description }</p>
                    </Zoom>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <Bounce>
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                        </Bounce>
                        { rightBtnText &&
                            <RightButton>
                                {rightBtnText}  
                            </RightButton>
                        } {/* si le button droit existe, il s'affiche. 
                        Sinon c'est seulemrnt le bouton gauche qui va s'afficher*/}
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
                </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg'); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;  // ********PROBLEM 
    align-items: center;
    background-image: ${props => `url("./images/${props.bgImage}" )` } // ********IMPORTANT
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-buttom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
    
`
