/* Orange Copyright restricted MVP */

export default {
    overrides: {
        MuiList:{
          padding: {
            paddingTop: 0,
            paddingBottom: 0
          }
        },
        MuiCheckbox: {
          colorSecondary: {
            color: '#fff',
            '&$checked': {
              color: '#fff'
            }
          },
        },
        MuiAppBar:{
          colorPrimary:{
            backgroundColor: '#2196f3',
          },
        },
         MuiListItem:{
           root: {
              backgroundColor: '#1565c0 !important',
           }
         },
        //  MuiDrawer:{
        //   paper: {
        //      backgroundColor: '#e9e9e9 !important'
        //   },
        // },
        MuiInput: {
          underline: {
            '&:before': {
              borderBottom: '2px solid #000'
            },
            '&:after': {
              borderBottom: '2px solid #fff'
            }
          },
        },
        MuiInputBase:{
          input: {
            color: '#000',
          }
        },  
        MuiSelect:{
          icon: {
            color: '#000',
          }
        },
        MuiIconButton:{  
          root:{
            color: '#000',
            '&$disabled': {
              '&$disabled': {
                'color': '#c9c9c9',
              }
            },
          }
        },
        MuiInputLabel: {
          root: {
            color: '#fff',
            '&$focused': {
              color: '#000',
            },
          }
        },
        MuiBottomNavigationAction:{
          // root: {
          //   color: "green",
          //   "&$selected": {
          //     color: "red",
          //     }
          // },
          label:{
            fontSize:'1.5rem',
            "&$selected": {
              fontSize:'2rem',
            }
          },
        },
        // MuiForm: {
        //   root: {
        //     color: '#fff',
        //     '&$focused': {
        //       color: '#2196f3'
        //     }
        //   },
        //   focused: {
        //     '&$focused': {
        //       color: '#2196f3'
        //     },

        //   }
        // },
    },
    typography: {
      useNextVariants: true,            
        htmlFontSize: 14,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontFamily: 'Roboto',
        h1:{
          fontFamily: 'Roboto',
          fontWeight: 300,
          fontSize: '6rem',
          lineHeight: 1,
          letterSpacing: '-0.01562em',
        },
        h2:{
          fontFamily: 'Roboto',
          fontWeight: 300,
          fontSize: '3.25rem',
          lineHeight: 1,
          letterSpacing: '0em',  //'-0.00833em'
        },
        h3:{
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '2.1rem',
          lineHeight: 1.04,
          letterSpacing: '0.02em',
        },
        h4:{
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '1.8rem',
          lineHeight: 1.2,
          letterSpacing: '0.03em',
        },
        h5:{
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '1.5rem',
          lineHeight: 1.33,
          letterSpacing: '0em',
        },
        h6:{
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '1.25rem',
          lineHeight: 1.6,
          letterSpacing: '0.0200em',
        }    

    },
    palette: {
      type: 'dark',
      chartColors: {
        red: 'rgba(255, 99, 132,0.8)',
        orange: 'rgba(255, 159, 64,0.8)',
        yellow: 'rgba(255, 205, 86,0.8)',
        green: 'rgba(75, 192, 192,0.8)',
        blue: 'rgba(54, 162, 235,0.8)',
        purple: 'rgba(153, 102, 255,0.8)',
        grey: 'rgba(201, 203, 207,0.8)',
        brown: 'rgba(185, 97, 43,0.8)',
        turquoise: 'rgba(64, 224, 208,0.8)',
        pink: 'rgba(225, 192, 203,0.8)',
        ran: 'rgba(185, 97, 43,0.8)'
      },
      common: {
        black: '#000',
        white: '#fff',
        darkgrey: '#424242',
        red: '#ef3636',
        lightred: '#EBCCD1',
        orange:'#ff9525',
        teal: '#00CED1',
        lightgrey: '#e9e9e9',
        green: '#29e229',
        lightgreen: '#D6E9C6',
        lightyellow: '#FAEBCC'
      },
      secondary: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1565c0',
        contrastText: '#000000'  
      },
      primary: {
        main: '#343a40',
        light: '#9e9e9e',   
        dark: '#212529',
        contrastText: '#000000'
      },
      error: {
        main: '#A21C2B'
      },
      text: {
        primary: '#fff',
        secondary: '#424242'
      }
    },
  };
  
  