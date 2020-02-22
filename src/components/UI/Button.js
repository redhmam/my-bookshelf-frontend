import styled from 'styled-components';
import { Button } from 'antd';
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
export default ButtonStyled;