import React, { useContext, useState } from 'react'
import deleteIcon from '../../../images/icon-cross.svg';
import GlobalContext from '../../../Context/GlobalContext';

//@Estilos
import {BoxCheckIcon} from '../../Estilos/EstilosReutilizaveis/Box';

import {
    TarefaBox,
    TarefaBoxContent,
    Text,
    DeleteIcon
} from './Style';

//@Funções
import {deleteTarefa, setCompletado} from '../../../Context/Functions';


function Tarefa({id,texto,complete}) {

    const [requesting, setRequesting] = useState(false); //Evitar dupla requisicao
    const {dispatch} = useContext(GlobalContext);

    return (
        <TarefaBox>
        {
            requesting? <BoxCheckIcon className='checking'></BoxCheckIcon>:
            <BoxCheckIcon onClick={()=>setCompletado(dispatch, id, setRequesting)} className={complete&&"checked"}/>
        }
        
            <TarefaBoxContent>
                <Text className={complete&&"completed"}>{texto}</Text>
                <DeleteIcon onClick={()=>deleteTarefa(id,dispatch,requesting,setRequesting)} className="hide">
                    <img src={deleteIcon} alt=""/>
                </DeleteIcon>
            </TarefaBoxContent>
        </TarefaBox>
    )
}

export default Tarefa;
