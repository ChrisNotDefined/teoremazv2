import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import teoremazLogo from '../images/default.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  titleText: {
    color: "white"
  },
  AppBar: {
    background: "#343434",
    color: 'white',
    position: "sticky",
    top: '0px'
  }
}));

//ARREGLAR ICONO DE MENU AL LOGO DE TEOREMAZ

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <div className={classes.title}>
            <img src={teoremazLogo} height={45} alt='Logo'/>
            <Button component={NavLink} to="/dashboard" >
              <Typography variant="h6" className={classes.titleText}>
                Teoremaz Escuela de Matemáticas
              </Typography>
            </Button>
          </div>
          <Button component={NavLink} to="/services" className={classes.menuButton}>
            <Typography variant="h6" >
              Servicios
            </Typography>
          </Button>
          <Button component={NavLink} to="/material" className={classes.menuButton}>
            <Typography variant="h6">
              Material
            </Typography>
          </Button>
          <Button component={NavLink} to="/contact" className={classes.menuButton}>
            <Typography variant="h6">
              Contacto
            </Typography>            
          </Button>
          <Button component={NavLink} to="/signin" className={classes.menuButton}>
            <Typography variant="h6" >
              Iniciar Sesión
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
