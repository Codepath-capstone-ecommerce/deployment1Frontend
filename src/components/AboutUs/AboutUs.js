import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames'; //css and material ui style
import NavBar from "../NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginBottom: 100,
      },
      title: {
        fontSize: 70,
        fontWeight: "900"
      },
      navbar : {
        zIndex: "2 !important"
      },
      overlay: {
        position: 'absolute',
        color: 'white',
        paddingTop: "15px",
        paddingRight: "3px"
     },
     overlay2: {
        position: 'absolute',
        color: 'white',
     },
     mainBackground: {
         backgroundColor: "#404040"
     }
}));

export default function Home() {


    const classes = useStyles()

    return (
      <div >
            <div style={{
            height: 60,
            backgroundColor: "white",
            position: "relative",
            zIndex: 3
          }}>
            <NavBar className={classnames(classes.navbar)} />
            </div> 
            <Typography variant="h1" component="h2" align="center">
             Under Contruction
            </Typography>
      </div>
      
    );
  }