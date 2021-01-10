import React from "react";
import { useState, useEffect } from 'react';
import "./fridge.scss";
import {
    Link,
} from "react-router-dom";
import logo from './logo.png';
import axios from 'axios'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function View() {
    return <WhatsInYourFridge/>;
}

  export default View;


  

function WhatsInYourFridge(props) {

  function processRemoveFromFridge (id) {
    var r = window.confirm("Are you sure you want to remove this item from the fridge?");
    if (r == true) {
      removeFromFridge(id);
      setTimeout(getFridgeItems, 1000);
    } else {
      return;
    }
  }

  async function removeFromFridge (id) { 
    console.log('id', id)
    const res = await axios.put(`http://localhost:8000/api/fridgeFoods/${id}/`);
  }
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(nameOfItem, bought, daysTillExpire) {
    return { nameOfItem, bought, daysTillExpire };
  }
  const useStyles = makeStyles({
      table: {
        minWidth: 700,
      },
      root: {
        flexGrow: 1,
      },
      buttonPadding: {    
        padding: '30px',   
      },
    });
    
    const [fridgeItems, setFridgeItems] = useState(null);
    useEffect(() => {
      // You need to restrict it at some point
      // This is just dummy code and should be replaced by actual
      if (!fridgeItems) {
        getFridgeItems();
      }
    }, []);

    const getFridgeItems = async () => {
      const response = await fetch('http://localhost:8000/api/fridgeFoods/');
      const data = await response.json();
      setFridgeItems(data)
      console.log(data);
  };
  const classes = useStyles();
    return (
      <div>
        <Link to="/homepage"> 
          <img className="carrot" src={logo} ></img>
        </Link>
        <h1 className="add-item-heading">What’s in Your Fridge?</h1>

        <TableContainer component={Paper}>
          <Table style={{ tableLayout: 'auto' }} className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>name of item</StyledTableCell>
                <StyledTableCell align="center">bought date</StyledTableCell>
                <StyledTableCell align="center">days till expiry</StyledTableCell>
                <StyledTableCell align="center">remove</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fridgeItems &&fridgeItems.map((fridgeItem) => (
                <StyledTableRow key={fridgeItem.id}>
                  <StyledTableCell component="th" scope="row">
                    {fridgeItem.fridge_food_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{fridgeItem.fridge_food_bought_date}</StyledTableCell>
                  <StyledTableCell align="center">{fridgeItem.days_to_expire}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button onClick={()=>{processRemoveFromFridge(fridgeItem.id)}} className="table-button">
                      X
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    )
}