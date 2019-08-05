import React, { useState } from 'react';
import Responsive from 'react-responsive'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SearchIcon } from './icons';
import {
  Logo, PlaceholderForSearch, Grow,
  ToolBar, SearchElement, SearchInput,
  SearchButton, OpenSearchButton, SearchElementsWrapper,
  AppBar, InputSearchIcon
} from './AppStyledComponents';
import './App.css';

const Mobile = props => <Responsive {...props} maxWidth={414} />;
const Default = props => <Responsive {...props} minWidth={415} />;

function App() {
  const [searchIsOpen, setOpenSearch] = useState(false);

  const openSearchInput = () => setOpenSearch(true);

  const closeSearchInput = () => setOpenSearch(false);

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
                <SearchElementsWrapper rightIndent={12}>
                  <InputSearchIcon open={searchIsOpen} />
                  <SearchInput type="search" />
                  <SearchButton onClick={closeSearchInput}>НАЙТИ</SearchButton>
                </SearchElementsWrapper>
              </SearchElement>
            </PlaceholderForSearch>
          </ToolBar>
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
