import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { SearchIcon } from './icons';
import AppBar from '@material-ui/core/AppBar';

export const Logo = styled.img`
    margin-top:6.5px;
    background-size:100% auto;
    height:27px;
    outline:0;
    position:relative;
`

export const PlaceholderForSearch = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width:100%;
`

export const ToolBar = styled(Toolbar)`
    padding:0 !important;
    padding-left: 12px !important;
`

export const MobileSecondToolBar = styled(Toolbar)`
    padding:0 !important;
    padding-left: 12px !important;
    margin: auto;
    min-height:0px !important;
    overflow: hidden;
    transition: 0.5s;
    ${(props) => {
        if (!props.open) {
            return 'height: 0px;'
        } else {
            return 'height: 50px;'
        }
    }}
`

export const Grow = styled.div`
    flex-grow:1;
`

export const SearchElement = styled.div`
    position: absolute;
    transition: 0.2s;
    right: 0;
    display: flex;
    align-items: center;
    width:${(props) => {
        if (props.open) {
            return '100%;'
        } else {
            return '0%;'
        }
    }}
    height:100%;
`

export const SearchInput = styled.input`
    border-top-left-radius: 1.5px;
    border-bottom-left-radius: 1.5px;
    border: 0;
    padding: 0;
    padding-left: 25px;
    border: 0;
    width: 70%;
    height: 70%;
`

export const SearchButton = styled.button`
    border-top-right-radius: 1.5px;
    border-bottom-right-radius: 1.5px;
    color: white;
    border: 0;
    background-color: #ffc400;
    text-align: center;
    height: 70%;
    width: 30%;
`

export const OpenSearchButton = styled(IconButton)`
    &:hover {
        background-color: transparent !important;
    }
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

const _AppBar = styled(AppBar)`
    background-color: #1f77c7 !important;
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

const _Avatar = styled(Avatar)`
    margin: 10px;
    width: 25px !important;
    height: 25px !important;
`

export { _Avatar as Avatar };
export { _AppBar as AppBar };