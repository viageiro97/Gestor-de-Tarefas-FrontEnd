import React, { useContext } from 'react'

//@Estilos
import {
    FooterBox,
    Restantes,
    Actions,
    ActionButton,
    DeleteAll
} from './Style';

//@Funcoes
import { deleteTodasTarefa } from '../../../Context/Functions';

//@Context
import GlobalContext from '../../../Context/GlobalContext';

function TarefasFooter() {

    const {dispatch, state} = useContext(GlobalContext);

    //@ Determina numero de tarefas por completar
    const restantes = state.tarefas.reduce((acc, tarefa)=>{
        if(tarefa.complete===false){
            return acc+1;
        }
        return acc;
    },0);

   

    return (
        <FooterBox>
            <Restantes>{restantes} restantes</Restantes>
            <Actions>
                <ActionButton className={state.tarefasFiltred===''&&'active'} onClick={()=>dispatch({type:'SHOW_ALL'})}>Todas</ActionButton>
                <ActionButton className={state.tarefasFiltred==='activos'&&'active'} onClick={()=>dispatch({type:'SHOW_ACTIVOS'})}>Activos</ActionButton>
                <ActionButton className={state.tarefasFiltred==='completados'&&'active'} onClick={()=>dispatch({type:'SHOW_COMPLETADOS'})}>Completadas</ActionButton>
            </Actions>
            <DeleteAll onClick={()=>deleteTodasTarefa(dispatch)}>Apagar Todas</DeleteAll>
        </FooterBox>
    )
}

export default TarefasFooter;
