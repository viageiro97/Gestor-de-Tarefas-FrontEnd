import React from 'react'
import styled from 'styled-components'
import loadSVG from '../../images/puff.svg';

const LoadingWrapper = styled.div`
  background: #06062b;
  position: fixed;
  top:0;
  left:0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

`
function Loading() {
    return (
        <LoadingWrapper>
            <img width="45px" src={loadSVG} alt="Carregando a Pagina..." srcset=""/>
        </LoadingWrapper>
    )
}

export default Loading
