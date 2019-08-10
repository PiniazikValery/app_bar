import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const _Typography = styled(Typography)`
    color: gray;
`

export const Filter = styled(Paper)`
    padding: 10px;
    width: 300px;
    height: min-content;
    top: 95%;
    left: 0px;
    position: absolute;
`

export const AutorInput = styled.input`
    border: solid;
    border-color: #d0caca;
    border-width: 1px;
    border-radius: 2px;
    width: 215px;
    color: gray;
    padding: 6px;
    outline: none;
`

export const MyFormControlLabel = styled(FormControlLabel)`
    color: gray;
    & > span {
        ${(props) => {
        if (props.size) {
            return `font-size:${props.size}rem;`
        } else {
            return 'font-size:0.8rem;';
        }
    }}
    }
`

export const CenterdCheckBoxesHolder = styled.div`
    display: flex;
    justify-content: space-between;
`

export { _Typography as Typography };