
import styled from 'styled-components';
import { Card } from 'antd';

const Book = styled(Card)`
    .ant-card-cover img{
        height: 160px;

        @media only screen and (min-width: 768px) {
            height: 220px;
        }
    }
    .ant-card-body{
        display: none;
    }
`
export default Book;