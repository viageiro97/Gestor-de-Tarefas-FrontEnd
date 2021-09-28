
//@Accoes existententes na aplicacao.

import { mostarErro, mostrarSucesso } from "./Functions";

function AppReducer(state,action) {
    switch(action.type){
        default:
            console.log('default action')
            return state;

        //@Obter lista de tarefas da Base de dados
        case "GET_TAREFAS":
            return{
                ...state,
                loading: false,
                tarefas: action.payload,
            }
        case "GET_TAREFAS_ERROR":
            mostarErro('Ocorreu um erro ao conectar ao servidor!')
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        //@Apagar tarefas da Base de dados
        case "DELETE_TAREFA":
            mostrarSucesso(`A tarefa ${action.payload} foi removida!`);
            return{
                ...state,
                tarefas: state.tarefas.filter((tarefa)=>tarefa._id!==action.payload),
                error: action.payload,
            }
        
        case "DELETE_TAREFA_FAIL":
            return{
                ...state,
                error: action.payload,
            }
        

        //@Adicionar tarefas
        case "ADD_TAREFA":
            mostrarSucesso('Tarefa adicionada com sucesso!');
            return{
                ...state,
                tarefas: [action.payload,...state.tarefas],
            }

        case "ADD_TAREFA_ERROR":
            return{
                ...state,
                error: action.payload,
            }
        

        //@Definir tarefas como completadas
        case "SET_COMPLETADO":
            return{
                ...state,
                tarefas: state.tarefas.map((tarefa)=>{
                    if(tarefa._id===action.payload){
                        return {...tarefa, complete:!tarefa.complete}
                    }
                    return tarefa;
                })
            }
        case "SET_COMPLETADO_ERROR":
            return{
                ...state,
                error: action.payload,
            }

        //@Apagar todas as tarefas
        case "DELETE_TODAS_TAREFAS":
            return{
                ...state,
                tarefas: [],
            }

        case "DELETE_TODAS_TAREFAS_ERROR":
            return{
                    ...state,
                    error: action.payload,
                }

                
        //@Opcoes de filtragem - Todos, activos, completados
        case "SHOW_ALL":
            return{
                ...state,
                tarefasFiltred:'',
            }
        case "SHOW_ACTIVOS":
            return{
                ...state,
                tarefasFiltred:'activos',
            }
        case "SHOW_COMPLETADOS":
            return{
                ...state,
                tarefasFiltred:'completados',
            }
        
        //@Mudar de tema -
        case "MUDAR_TEMA":
            return{
                ...state,
                theme:action.payload,
            }
        
        //@Mensagens de erro
        case "SHOW_ERROR":
            action.payload.forEach(text => {
                mostarErro(text);
            });

            return{
                ...state,
                error: null,
            }

        //@Mensagens de sucesso
            case "SHOW_SUCCSESS":
                action.payload.forEach(text => {
                    mostrarSucesso(text);
                });
    
                return{
                    ...state,
                    error: null,
                }
        
    }

 }


export default AppReducer;