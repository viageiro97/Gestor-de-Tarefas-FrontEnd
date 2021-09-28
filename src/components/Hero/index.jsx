import React, { useContext, useState } from 'react';

//@Imagens
import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';

//@Context
import GlobalContext from '../../Context/GlobalContext';

//@Estilos
import { Container } from '../Estilos/EstilosReutilizaveis/Container';
import {Box, BoxCheckIcon} from '../Estilos/EstilosReutilizaveis/Box';
import {
    HeroWrapper,
    Header,
    Title,
    ThemeIcon,
    HeroBoxContent
}from './Styles';

//@Funções
import {addTarefas, definirTema, mostarErro} from '../../Context/Functions.js';


//@Componente HERO da Pagina
function Hero() {
    const [text, setText] = useState('');
    const [completed, setCompleted] = useState(false);
    const [requesting, setRequesting] = useState(false); //Evitar requisicoes duplicadas

    const {dispatch, state} = useContext(GlobalContext);
    const ThemeName = state.theme.name;
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(text.length<3){
            mostarErro('Permitido no minimo 3 caractéres!');
            return;
        }
        addTarefas(dispatch,setText,text,completed,requesting,setRequesting);
    }

    return (
        <HeroWrapper>
            <Container>
                <Header>
                    <Title>Tarefas</Title>
                    <ThemeIcon onClick={()=>definirTema(dispatch, state)}><img src={ThemeName==='darkTheme'?sunIcon:moonIcon} alt="Modo claro"/></ThemeIcon>
                </Header>
                <Box>
                {
                    requesting? <BoxCheckIcon className='checking'></BoxCheckIcon>:
                    <BoxCheckIcon className={completed&&"checked"} onClick={()=>setCompleted(!completed)}/>
                
                    }
    
                    <HeroBoxContent>
                        <form onSubmit={handleSubmit}>
                            <input 
                                value={text} 
                                placeholder="Inserir Nova Tarefa..." 
                                type="text"
                                onChange={(e)=>setText(e.target.value)}    
                            />
                        </form>
                    </HeroBoxContent>
                </Box>
            </Container>
        </HeroWrapper>
    )
}

export default Hero;
