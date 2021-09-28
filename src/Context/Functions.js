import axios from 'axios';
import {darkTheme, lightTheme} from '../themes'; //Para funcao de temas
import {toast} from 'react-toastify'; //Para Notificaoes

//@GET TAREFAS
// Retorna a lista de todas as tarefas da base de dados, e seta o estado inicial!
export const getTarefas = async (dispatch) =>{
    try{
        const response = await axios.get('https://viageirotarefas.herokuapp.com/api/v1/tarefas');
        dispatch({
            type: 'GET_TAREFAS',
            payload: response.data.data,
        })
    }catch(err){
        dispatch({
            type: 'GET_TAREFAS_ERROR',
            payload: 'Erro ao solicitar tarefas!',
        })
    }
}


//@DELETE TAREFAS
// Apaga a tarefa na Base de dados e de seguida na UI!
export const deleteTarefa = async (id, dispatch,requesting,setRequesting) =>{
    if(requesting){
        mostarErro('Aguarde, a tarefa esta sendo apagada!');
        return;
    }
    setRequesting(true);
    try{
        await axios.delete(`https://viageirotarefas.herokuapp.com/api/v1/tarefas/${id}`);
        dispatch({
            type: 'DELETE_TAREFA',
            payload: id,
        })
        setRequesting(false);
    }catch(err){
        dispatch({
            type: 'DELETE_TAREFA_ERROR',
            payload: err.response.data.error,
        })
        setRequesting(false);
    }
}


//@ADD TAREFAS
// Adicionar tarefas na base de dados e na UI
export const addTarefas = async (dispatch,setText,text,completed,requesting,setRequesting) =>{
    if(requesting){
        mostarErro('Esta tarefa ja esta sendo salva, aguarde...!');
        return;
    }
    setRequesting(true);
    try{
        const response = await axios.post('https://viageirotarefas.herokuapp.com/api/v1/tarefas',{text: text, complete:completed})
        dispatch({
            type: 'ADD_TAREFA',
            payload: response.data.data,
        })
        setRequesting(false);
        setText('');
    }catch(err){
        dispatch({
            type: 'ADD_TAREFA_ERROR',
            payload: err.response.data.error,
        })
        setRequesting(false);
    }
}



//@SET COMPLETADO
// Definir tarefa como competa ou incompleta
export const setCompletado = async (dispatch,id,setRequesting) =>{
    setRequesting(true);
    try{
        const response = await axios.put(`https://viageirotarefas.herokuapp.com/api/v1/tarefas/${id}`);
        dispatch({
            type: 'SET_COMPLETADO',
            payload: id,
        })

        const msg = response.data.Newcomplete?'Tarefa marcada como completada!':'Estado completado desmarcado!';
        mostrarSucesso(msg);
        setRequesting(false);

    }catch(err){
        dispatch({
            type: 'SET_COMPLETADO_ERROR',
            payload: err.response.data.error,
        })
        setRequesting(false);
    }
}

//@DELETE ALL
// Apagar todas as tarefas
export const deleteTodasTarefa = async (dispatch) =>{
    try{
        await axios.delete(`https://viageirotarefas.herokuapp.com/api/v1/tarefas/remove/all`);
        dispatch({
            type: 'DELETE_TODAS_TAREFAS',
        })
    }catch(err){
        dispatch({
            type: 'DELETE_TODAS_TAREFAS_ERROR',
            payload: err.response.data.error,
        })
    }
}


//@Temas da App - Para o alterador de temas

export const definirTema = (dispatch,state) =>{
    if(state.theme === darkTheme){
        console.log('Mudando para ligthem')
        dispatch({
            type: 'MUDAR_TEMA',
            payload: lightTheme,
        })
    }else{
        console.log('Mudando para darkTheme')
        dispatch({
            type: 'MUDAR_TEMA',
            payload: darkTheme,
        })
    }
}

//@Filtrar tarefas a exibir, (Activas, Completadas, Todas)
export function filtrarTarefas(state){
    //@Verificar se existe algum filtro de pesquisa aplicado e retornar dados de acordo com o filtro
    switch(state.tarefasFiltred){
        default:
           return state.tarefas;
        case 'activos':
            return state.tarefas.filter((tarefa)=>tarefa.complete===false);
        case 'completados':
            return state.tarefas.filter((tarefa)=>tarefa.complete===true);
    }
}


//@Mostrar Erros
export const mostarErro = (error) => toast.error(error, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

//@Mostrar Sucesso
export const mostrarSucesso = (sucesso) => toast.success(sucesso, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });