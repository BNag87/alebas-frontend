//=========================IMPORTS=========================
import styled, { css } from "styled-components";
import Saloth from './Images/PortraitsMale/saloth.png';
//=========================GLOBAL WRAPPERS=========================
//Css meant to organise elements in entire app page
export const AppWrapper = styled.div`
    display: flex;
    flex=direction: row;
`;

//Meant to makes sure Sidebar and other elements wrap together underneath the top navbar
export const PairWrapper =styled.div`
    display: flex;
    flex-direction: row;
  `

//=========================GENERIC WRAPPERS=========================
  //MainWrap is meant to wrap other items as a panel
export const MainWrap = styled.div`
    background: grey;
    border: solid 2px rgba(150,90,85,0.7);
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;

    height: 10%;
    padding: 10px;
    margin: 50px;

    width:  90%;

    text-align: center
`;

// InnerWrap is a wrapper to contain individual elements in a component
export const InnerWrap = styled.div`

    background: linear-gradient(to bottom, rgba(145,85,77,0.7), rgba(185, 156, 107, 0.5));
    border: solid 2px rgba(150,90,85,0.7);
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    color: white;

    height: 10%;
    padding: 10px;
    margin: 5px;
    margin-bottom: 20px;

    width: auto;

    text-align: center

// Additional rules for if an 'Innerwrap' section that has the keyword 'flexRow' in its declaration
    ${props => props.flexRow && css`
        display: flex;
        flex-direction: row;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'flexColumn' in its declaration
    ${props => props.flexColumn && css`
        display: flex;
        flex-direction: column;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'flexColumnAlignment' in its declaration
    ${props => props.flexRowAlignment && css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'invisflexRow' in its declaration
//Normally used inside a wrapper that already has a background. This has no background    
${props => props.invisflexRow && css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background: none;
        border: none;
    `}

// Additional rules for if an 'Innerwrap' section that has the keyword 'portraitDiv' in its declaration
//This is used to 
${props => props.portraitDiv && css`
        background: none;
        border: none;
        margin: 0px;
        padding: 0px;
        height: 100vh;
        
    `}
`;

//=========================NAVBARS=========================
//CSS For a navbar that sits on TOP of a page
export const TopNavBarStyle = styled.div`
    background: red;
    color: white;
    height: 10%;
    padding: 10px;
    text-align: center;
`;

//CSS For a navbar that sits on LEFT side of a page
export const SideNavBarStyle = styled.div`
    background: green;
    color: white;
    height: 100vh;
    width: 200px;
    padding: 10px;
    text-align: center;
`;

//=========================BUTTONS=========================
export const ButtonStyle = styled.button`
background-color: blue;
color: white;
padding: 5px;
margin: 5px;

// Style override for a Randomiser Button
${props => props.OptionButton && css`
  background-color: gray;
  color: white;

  width: auto;
  height: 25px;
  border: outset 1px;
  border-radius: 5px;
  
  font-weight: bolder;
  font-size: 18px;
  font-family: Courier;
`}
`;

//========================='STYLISTIC' TAGS=========================
//Or tags meant for decorative purposes (like an 'engraving')
export const Engraving = styled.div`
    background-color: rgba(20, 20, 20, 0.2);
    color: black;
    border: rgba(10,10,10, 0.5);
    border-top-style: solid;
    border-right-style: none;
    border-bottom-style: solid;
    border-left-style: none;
    border-radius: 15px 15px 15px 15px;

    text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);
    
    font-weight: bolder;
    font-size: 20px;
    font-variant: small-caps;
    padding: 10px;
    margin: 5px;
    width: 290px;

    text-align: center;
`;

//Element to contain a portrait picture
export const PortraitFrame = styled.div`
width: 170px;
height: 180px;
background: url(${Saloth});
background-repeat: no-repeat;
background-position: center;
background-size: cover;

border: solid black;
padding: 5px;
margin: 10px;
`

//empty div meant to space elements
export const Spacer = styled.div`
    height: 0px;
    flex-basis: 100%;
`

//=========================HEADING TAGS=========================
//CSS for a H1 tag (title)
export const Header1 = styled.h1`
    Webkit-Text-Stroke: 1px rgba(160,90,70,0.5);
    color: #rgb(203, 186, 151);
    text-shadow: rgb(50, 50, 50) 4px 3px 1px;
    font-size: 4.3rem;
    font-family: Cambria;
    margin: 0.75rem;
    font-weight: 600;
`;

//this is a h2 style
export const Header2 = styled.h2`
    color: white;
    text-shadow: rgb(50, 50, 50) 2px 2px 1px;

    font-size: 2.3rem;
    font-family: Cambria;
    font-variant: small-caps;

    margin: 5px;
`;

//this is a h3 style
export const Header3 = styled.h3`
    color: white;
    text-shadow: rgb(50, 50, 50) 1px 1px 1px;

    font-size: 1.5rem;
    font-family: Cambria;

    margin: 5px;
`;

//=========================OTHER THINGS=========================