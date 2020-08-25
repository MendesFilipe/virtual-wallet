import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  shape: {
    borderRadius: 0
  },
  palette: {
    primary: { main: '#1cb34b' },
    secondary: { main: '#168F3C' }
  },
  typography: {
    fontFamily: ['Roboto', 'sans serif'].join(',')
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          overflowX: "hidden",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          bottom: 0,
          height: "100vh",
          zIndex: -1,
          backgroundSize: "cover",
          backgroundImage: `url(https://www.foregon.com/blog/wp-content/uploads/2019/02/maquina-cartao-stone.jpg)`
        }
      }
    }
  }
});

