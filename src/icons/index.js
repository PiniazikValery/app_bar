import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import styled from 'styled-components';

const MinSvgIcon = styled(SvgIcon)`
    width: 0.6em !important;
`

export const SearchIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </SvgIcon>
    );
}

export const DropDownArrowIcon = (props) => {
    return (
        <MinSvgIcon {...props}>
            <path d="M11 11l4 4 4-4z" />
        </MinSvgIcon>
    );
}

export const AddCircleIcon = (props) => {
    return (
        <MinSvgIcon {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </MinSvgIcon>
    );
}