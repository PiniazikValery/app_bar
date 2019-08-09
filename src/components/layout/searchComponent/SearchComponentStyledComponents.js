import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { SearchIcon } from '../../../icons';

export const SearchElement = styled.div`
    position: absolute;
    transition: 0.2s;
    right: 0;
    display: flex;
    align-items: center;
    ${(props) => {
        if (props.open) {
            return 'width: 100%;'
        } else {
            return 'width: 0%;'
        }
    }}
    height:100%;
`

export const SearchElementsWrapper = styled.div`
    overflow: hidden;
    ${(props) => {
        if (props.leftIndent) {
            return `margin-left: ${props.leftIndent}px;`
        }
    }}
    ${(props) => {
        if (props.rightIndent) {
            return `margin-right: ${props.rightIndent}px;`
        }
    }}
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`

export const InputSearchIcon = styled(SearchIcon)`
    color: gray;
    position: absolute !important;
    ${(props) => {
        if (!props.open) {
            return `
            opacity: 0;
        `
        }
    }}
`

export const SearchButton = styled.button`
    position: relative;
    border-top-right-radius: 1.5px;
    border-bottom-right-radius: 1.5px;
    color: white;
    border: 0;
    background-color: #ffc400;
    text-align: center;
    height: 70%;
    width: 70px;
`

export const SearchInput = styled.input`
    border-top-left-radius: 1.5px;
    border-bottom-left-radius: 1.5px;
    border: 0;
    padding: 0;
    padding-left: 25px;
    border: 0;
    width: 100%;
    height: 70%;
`

export const Filter = styled(Paper)`
    width: 350px;
    height: 300px;
    top: 87%;
    left: 0px;
    position: absolute;
`