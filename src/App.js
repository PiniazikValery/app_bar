import React from 'react';
import Responsive from 'react-responsive'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from './AppStyledComponents';
import './App.css';

const Mobile = props => <Responsive {...props} maxWidth={414} />;
const Default = props => <Responsive {...props} minWidth={415} />;

function App() {
  return (
    <div className="App">
      <Mobile>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Logo src="/Logo.png" />
          </Toolbar>
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
