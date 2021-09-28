import styled from 'styled-components';
import checkIcon from '../../../images/icon-check.svg';
import checkingIcon from '../../../images/oval.svg';

export const Box = styled.div`
    background: ${({theme})=>theme.color.component};
    min-height: 50px;
    display: flex;
    align-items: center;
    border-radius: ${({theme})=> theme.borderRadius};

    .checked{
        border:none;
        background:url(${checkIcon}) 50% no-repeat,linear-gradient(90deg,#00d2ff,#928dab);
    }
    .checking{
        &:focus{
            outline: none;
        }
        border:none;
        background:url(${checkingIcon});
        background-size: cover;
        background-repeat: no-repeat;
    }

`
export const BoxCheckIcon = styled.button`
    transition: all 400ms;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: none;
    border: 2px solid ${({theme})=>theme.color.checkIcon};
    margin: 0 15px;
    &:hover{
        border-color: #3a7bfd;
    }

`

export const BoxContent = styled.div`
    padding-right: 20px;
    flex: 1;
    height: 100%;
`