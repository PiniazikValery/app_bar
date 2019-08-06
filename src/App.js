import React, { useState, useEffect, useRef } from 'react';
import Responsive from 'react-responsive'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SearchIcon } from './icons';
import {
  Logo, PlaceholderForSearch, Grow,
  ToolBar, SearchElement, SearchInput,
  SearchButton, OpenSearchButton, SearchElementsWrapper,
  AppBar, InputSearchIcon, MobileSecondToolBar,
  Avatar
} from './AppStyledComponents';
import './App.css';

const Mobile = props => <Responsive {...props} maxWidth={414} />;
const Default = props => <Responsive {...props} minWidth={415} />;

function App() {

  const [searchIsOpen, setOpenSearch] = useState(false);
  const wrapperRef = useRef(0);

  useEffect(() => document.addEventListener('mousedown', handleClickOutside), []);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  const openSearchInput = () => setOpenSearch(true);

  const closeSearchInput = () => setOpenSearch(false);

  const setWrapperRef = (node) => {
    wrapperRef.current = node;
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      closeSearchInput();
    }
  }

  return (
    <div className="App">
      <Mobile>
        <AppBar position="fixed">
          <ToolBar>
            <PlaceholderForSearch>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Logo src="/Logo_min.svg" />
              <Grow />
              <OpenSearchButton
                onClick={openSearchInput}
                edge="start"
                color="inherit"
                disableTouchRipple={true}
                aria-label="open drawer"
              >
                <SearchIcon />
              </OpenSearchButton>
              <SearchElement open={searchIsOpen}>
                <SearchElementsWrapper ref={setWrapperRef} rightIndent={12}>
                  <InputSearchIcon open={searchIsOpen} />
                  <SearchInput type="search" />
                  <SearchButton>НАЙТИ</SearchButton>
                </SearchElementsWrapper>
              </SearchElement>
            </PlaceholderForSearch>
          </ToolBar>
          <MobileSecondToolBar open={!searchIsOpen}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          </MobileSecondToolBar>
        </AppBar>
      </Mobile>
      <Default>
        <AppBar position="fixed">
          <Toolbar>
            <Logo src="/Logo.png" />
          </Toolbar>
        </AppBar>
      </Default>
    </div>
  );
}

export default App;
