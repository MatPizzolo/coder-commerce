import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      color: 'red',
      fontSize: '30px',
      textAlign: 'center',
    }
  }));

function Home() {
    return (    
      <>
        
      <ItemListContainer title="Item List Cointainer" />
  
      </>
    );
}
  
export default Home;

function ItemListContainer({title}) {
    const classes = useStyles();
    return(
        <h2 className={classes.root} >{title}</h2>
    );
}

