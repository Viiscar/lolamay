import styled from 'styled-components';

export const ButtonContainer = styled.button` 
font-size: 1.2rem;
background: var(--mainRed);
border: 0.05rem solid var(--lightBlue);
border-color: var(--mainRed);
color: var(--mainWhite);
padding: 0.2rem 0.638rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--mainWhite);
    color: var(--mainRed);
}
&:focus{
    outline:none;
}
`