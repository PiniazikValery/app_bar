import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { AddCircleIcon } from '../../../icons';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

export const Logo = styled.img`
    margin-top:6.5px;
    background-size:100% auto;
    margin-right: 5px;
    height:27px;
    outline:0;
    position:relative;
`

const _AddCircleIcon = styled(AddCircleIcon)`
    padding-left: 6px;
`

export const PlaceholderForSearch = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    ${(props) => {
        if (props.width) {
            return `width: ${props.width}%;`
        }
    }}
`

export const ToolBar = styled(Toolbar)`
    padding:0 !important;
    padding-left: 12px !important;
`

export const MobileSecondToolBar = styled(Toolbar)`
    padding:0 !important;
    min-height:0px !important;
    justify-content: center;
    margin-left: 30px;
    margin-right: 30px;
    overflow: hidden;
    transition: 0.5s;
    ${(props) => {
        if (!props.open) {
            return 'height: 0px;'
        } else {
            return 'height: 50px;'
        }
    }}
    & > .centerChild {
        margin: auto;
    }
`

export const Grow = styled.div`
    flex-grow:1;
    width: 100%;
`

export const OpenSearchButton = styled(IconButton)`
    margin-left: 2px !important;
    &:hover {
        background-color: transparent !important;
    }
`

const _AppBar = styled(AppBar)`
    background-color: #1f77c7 !important;
`

const _Avatar = styled(Avatar)`
    margin: 10px;
    width: 25px !important;
    height: 25px !important;
`

const _Button = styled(Button)`
    font-size: 15px !important;
    min-width: 20px !important;
    padding: 6px 6px !important;
    text-transform: inherit !important;
    color: white !important;
`

export { _Avatar as Avatar };
export { _AppBar as AppBar };
export { _AddCircleIcon as AddCircleIcon };
export { _Button as Button };
