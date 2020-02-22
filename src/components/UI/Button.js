
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import theme from './theme';

const ButtonStyled = styled(Button)`
    background-color: ${theme.mainColor};
    border-color: #C9A128;

    :hover{
        background-color: #212121;
        color: #ccc;
        border-color: #000;
    }
`

const LinkStyled = styled(Link)`
    background-color: ${theme.mainColor};
    border-color: #C9A128;
    padding: 5px 20px 5px 20px;
    border-radius: 5px;
    color: #212121;
    font-size: 16px;

    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    touch-action: manipulation;

    :hover{
        background-color: #212121;
        color: #ccc;
        border-color: #000;
    }
`

export default function LinkButton(props) {
    return props.to ? <LinkStyled {...props}/> : <ButtonStyled {...props}/>
}
