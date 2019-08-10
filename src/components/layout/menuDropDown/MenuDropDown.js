import React, { useState, useRef } from 'react';
import {
    Popper, Paper, ClickAwayListener,
    MenuList, MenuItem
} from '@material-ui/core';
import { Grow, Button } from './MenuDropDownStyledComponents';
import { DropDownArrowIcon } from '../../../icons';

function MenuDropDown(props) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }
    return (
        <div>
            <Button
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <span>{props.dropDownTitle}</span>
                <DropDownArrowIcon />
            </Button>
            {open ?
                <Popper anchorEl={anchorRef.current} keepMounted transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper id="menu-list-grow">
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList>
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper> : undefined
            }
        </div>
    );
}

export default MenuDropDown;