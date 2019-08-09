import React from 'react';
import {
    AppBar, ToolBar, PlaceholderForSearch,
    Logo, Grow, OpenSearchButton,
    Avatar, AddCircleIcon
} from './AppBarStyledComponents';
import { SearchComponent } from '../searchComponent'
import { MenuDropDown } from '../menuDropDown'
import { SearchIcon } from '../../../icons';
import { IconButton, Badge } from '@material-ui/core';
import { Mail, Notifications } from '@material-ui/icons';
import { Tablet, Desktop } from '../../../responsiveDesignSwitch';

function DesktopAppBar(props) {
    return (
        <AppBar position="fixed">
            <ToolBar>
                <Desktop>
                    <Logo src="/Logo.png" />
                </Desktop>
                <Tablet>
                    <Logo src="/Logo_min.svg" />
                </Tablet>
                <PlaceholderForSearch>
                    <Desktop>
                        <MenuDropDown dropDownTitle="Ссылки" />
                        <MenuDropDown dropDownTitle="Контакты" />
                        <MenuDropDown dropDownTitle="Тег" />
                        <MenuDropDown dropDownTitle="Просьбы" />
                        <MenuDropDown dropDownTitle="Избранное" />
                        <MenuDropDown dropDownTitle="Посещение" />
                    </Desktop>
                    <Tablet>
                        <MenuDropDown dropDownTitle="Ссылки" />
                        <MenuDropDown dropDownTitle="Контакты" />
                        <MenuDropDown dropDownTitle="Тег" />
                    </Tablet>
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
                        isDesktop={true}
                    />
                </PlaceholderForSearch>
                <AddCircleIcon />
                <Grow />
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
            </ToolBar>
        </AppBar>
    );
}

export default DesktopAppBar;