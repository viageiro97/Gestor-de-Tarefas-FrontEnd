import styled from 'styled-components';
import { Container } from '../Estilos/EstilosReutilizaveis/Container';

export const TarefasWrapper = styled.div`
    button{
        &:focus{
            outline: 1px dashed blue;
        }
    }
    margin-top: -58px;

`
export const TarefasContainer = styled(Container)`
    box-shadow: ${({theme})=>theme.shadow1};
`
