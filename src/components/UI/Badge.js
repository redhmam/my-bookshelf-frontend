
import styled from 'styled-components';
import { Badge } from 'antd';
import theme from './theme';

const BadgeStyled = styled(Badge)`
    .ant-badge-count {
        background-color: ${theme.mainColor};
        color: ${theme.mainBlack};
        box-shadow: 0 0 0 1px ${theme.mainColor} inset;
    }
`
export default BadgeStyled;