import React from 'react';
import { IconButton, Badge } from '@material-ui/core';
import { Menu, Mail, Notifications } from '@material-ui/icons';
import { SearchIcon } from '../../../icons';
import {
    AppBar, ToolBar, PlaceholderForSearch,
    Logo, Grow, OpenSearchButton,
    MobileSecondToolBar, Avatar,
} from './AppBarStyledComponents';
import { SearchComponent } from '../searchComponent';

function MobileAppBar(props) {
    return (
        <AppBar position="fixed">
            <ToolBar>
                <PlaceholderForSearch width={100}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <Menu />
                    </IconButton>
                    <Logo src="/Logo_min.svg" />
                    <Grow />
                    <OpenSearchButton
                        onClick={props.openSearchInput}
                        edge="start"
                        color="inherit"
                        disableTouchRipple={true}
                        aria-label="open drawer"
                    >
                        <SearchIcon />
                    </OpenSearchButton>
                    <SearchComponent
                        searchIsOpen={props.searchIsOpen}
                        setWrapperRef={props.setWrapperRef}
                        rightIndent={12}
                    />
                </PlaceholderForSearch>
            </ToolBar>
            <MobileSecondToolBar open={!props.searchIsOpen}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <Mail />
                    </Badge>
                </IconButton>
                <IconButton className="centerChild" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <Notifications />
                    </Badge>
                </IconButton>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </MobileSecondToolBar>
        </AppBar>
    );
}

export default MobileAppBar;