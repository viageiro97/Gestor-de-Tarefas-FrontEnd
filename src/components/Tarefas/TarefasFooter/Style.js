import styled from 'styled-components';

//@Estilos
import {Box} from '../../Estilos/EstilosReutilizaveis/Box';

export const FooterBox = styled(Box)`
    position: relative;
    button{
        &:hover{
            color: ${({theme}) => theme.color.paragraph1Hover};
        }
        transition: all 400ms;
        font-size: 1rem;
        color: ${({theme})=> theme.color.paragraph2};
        font-family: ${({theme})=> theme.fontFam};
        background: none;
        border: none;
        cursor: pointer;
    }
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`
export const Restantes = styled.p`
    color: ${({theme})=> theme.color.paragraph2};
` 
export const Actions = styled.div`
    @media only screen and (max-width: 576px) {
        box-shadow: ${({theme})=>theme.shadow1};
        position: absolute;
        bottom: -130%;
        left:0;
        background: ${({theme})=>theme.color.component};
        min-height: 50px;
        width: 100%;
        border-radius: 5px;
    }

    button+button{
        margin-left: 15px;
    }
    flex: 1;
    display: flex;
    justify-content: center;

    .active{
        color: #3a7bfd;
        &:hover{
            color: #3a7bfd;
        }
    }
`
    export const ActionButton = styled.button`
        font-weight: 700;
        
    `

export const DeleteAll = styled.button`
`