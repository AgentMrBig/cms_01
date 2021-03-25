import React from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './listStyles';

const List = () => {
  const classes = useStyles();

  const transactions = [
    {id: 1, type: "Income", category: 'Salary', amount: 50, date: 'Thu Mar 25 2021'},
    {id: 1, type: "Expense", category: 'Dog Shit', amount: 50, date: 'Thu Mar 99 2021'},
    {id: 1, type: "Income", category: 'Salary', amount: 50, date: 'Mon Aug 20 2999'}
  ];

  return(
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.catagory} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="Delete" onclick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List