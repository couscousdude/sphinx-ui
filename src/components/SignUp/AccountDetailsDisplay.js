import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button,  Typography } from '@mui/material';

export default function AccountDetailsDisplay(props) {
  const { token, id } = props;
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table sx={{ minWidth: 650 }} aria-label="account details">
        {/* <TableHead>
          <TableRow>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
            <TableRow
              key="auth-token"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Your Unique Authentication Token (DON'T share this and write this down!):
              </TableCell>
              <TableCell 
                align="left" 
                size="medium" 
                >
                <Paper sx={{padding: '5px'}} variant='outlined'>
                  <Typography
                    sx={{ fontWeight: 'bold', typography: 'body1', fontFamily: "monospace"}}
                  >
                    {token} <Button>Copy</Button>
                  </Typography>
                </Paper>
                </TableCell>
            </TableRow>
            <TableRow
              key="id"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Your shareable account ID used for transactions (write this down!):
              </TableCell>
              <TableCell 
                align="left" 
                size="medium" 
                component={Typography}
                sx={{ fontWeight: 'bold', typography: 'body1', fontFamily: "monospace"}}
                >
                <Paper sx={{padding: '5px'}} variant='outlined'>
                {id} <Button>Copy</Button>
                </Paper>
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
