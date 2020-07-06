/* Orange Copyright restricted MVP */

import React,{useState} from 'react';
import Routes from './Routes';
import NavBar from './components/Layout/NavBar/NavBar';
import PageContent from './components/Layout/PageContent/PageContent';
import { DarkModeProvider } from './contexts/ThemeContext';
import { LocationProvider } from './contexts/LocationContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import DarkTheme from './MainTheme';
import LightTheme from './MainThemeLight';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import 'typeface-roboto';
import {Chart} from 'react-chartjs-2';

const MainTheme = createMuiTheme(DarkTheme);
const MainThemeLight = createMuiTheme(LightTheme);

Chart.defaults.global.defaultFontFamily = 'Roboto';

export default function App() {

  const [currentTheme,setCurrentTheme ] = useState();

  function onChange(){
    setCurrentTheme(!currentTheme);
  }

  return (
    <div> 
      <DarkModeProvider>  
      <LocationProvider>
        <MuiThemeProvider theme={currentTheme? MainThemeLight: MainTheme}>
          <CssBaseline/>        
              <NavBar onChangemethod={onChange}/>
                {/* <PageContent> */}
                  <Routes/> 
                {/* </PageContent> */}
        </MuiThemeProvider>
        </LocationProvider>
      </DarkModeProvider>
    </div>
  );
}


