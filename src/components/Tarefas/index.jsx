import React, { useContext } from 'react'

//@Context
import GlobalContext from '../../Context/GlobalContext';

//@SubComponentes
import Tarefa from './Tarefa';
import TarefasFooter from './TarefasFooter/';

//@Estilos
import {TarefasWrapper,TarefasContainer} from './Style';

//@Funções
import { filtrarTarefas } from '../../Context/Functions';

function Tarefas() {
    const {state} = useContext(GlobalContext);
    
    //Filtrar as tarefas antes de exibi-las
    const tarefas = filtrarTarefas(state);

    return (
        <TarefasWrapper>
            <TarefasContainer>
                {
                    tarefas.map((tarefa)=>{
                        return(
                            <Tarefa 
                                key={tarefa._id} 
                                id={tarefa._id} 
                                texto={tarefa.text}
                                complete={tarefa.complete}
                            />
                        )
                    })
                }
                <TarefasFooter/>
            </TarefasContainer>
        </TarefasWrapper>
    )
}

export default Tarefas;
