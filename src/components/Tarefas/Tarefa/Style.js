import styled from 'styled-components';

//@Estilos
import { Box, BoxContent} from '../../Estilos/EstilosReutilizaveis/Box';

export const TarefaBox = styled(Box)`
    color: ${({theme}) => theme.color.paragraph1};
    border-radius: 0;
    border-bottom: 1px solid ${({theme}) => theme.color.checkIcon};
    &:first-child{
        border-top-right-radius: ${({theme}) => theme.borderRadius};
        border-top-left-radius: ${({theme}) => theme.borderRadius};
    }
`
export const TarefaBoxContent = styled(BoxContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hide{
        display: none;
    }
    &:hover{
        .hide{
            opacity: 1;
            display: block;
        }
    }
    /*Texto para tarefas completadas*/
    .completed{
        text-decoration: line-through;
        color: ${({theme})=>theme.color.paragraph2};
    }

`
export const Text = styled.p`
    transition: all 400ms;
    color: ${({theme})=>theme.color.paragraph1};
    &:hover{
        color: ${({theme})=>theme.color.paragraph1Hover}
    }
`
export const DeleteIcon = styled.button`
    cursor: pointer;
    background: none;
    border: none;
`