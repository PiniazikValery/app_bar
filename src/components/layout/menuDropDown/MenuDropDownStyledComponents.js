import styled from 'styled-components';
import { Button } from '@material-ui/core';

const _Button = styled(Button)`
    font-size: 10px !important;
    min-width: 20px !important;
    padding: 6px 6px !important;
    text-transform: inherit !important;
    color: white !important;
`

export const Grow = styled.div`
    flex-grow:1;
    width: 100%;
`

export { _Button as Button };