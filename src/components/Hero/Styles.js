import styled from 'styled-components';
import bgDark from '../../images/bg-desktop-dark.jpg';
import bgLight from '../../images/bg-desktop-light.jpg';

//@Estilos
import {BoxContent} from '../Estilos/EstilosReutilizaveis/Box';

export const HeroWrapper = styled.div`
    button{
        &:focus{
            outline: 1px dashed blue;
        }
    }
    display: flex;
    align-items: center;
    min-height: 300px;
    background: url(${(props)=>props.theme.name==='darkTheme'?bgDark:bgLight});
    background-repeat:no-repeat;
    background-size: cover;
`

//Parte que contem o titulo e Icone de mudar tema!
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

`
export const Title = styled.h1`
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    color: white;

`
export const ThemeIcon = styled.button`
    cursor: pointer;
    border: none;
    background: none;
`

//Componentes de Box importados de Utility
export const HeroBoxContent = styled(BoxContent)`
    form{
        height: 100%;
    }

    input{
        color: ${({theme})=>theme.color.paragraph1};
        font-family: ${({theme})=>theme.fontFam};
        font-size: 1rem;
        background: none;
        border: none;
        height: 100%;
        width: 100%;
        padding: 0 5px;

        &:focus{
            outline: none;
        }

        &::placeholder{
            font-size: 1rem;
            font-family: ${({theme})=>theme.fontFam};
            color: ${({theme})=>theme.color.placeholder};
        }

    }
`