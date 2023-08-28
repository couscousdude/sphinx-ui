import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    Date.now(),
    '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    'Unsuccessful',
    1,
  ),
  createData(
    1,
    Date.now() + 1,
    '926c416896b04e10915a3e8407699a886da7b0ce0f39332f7ea1cee7cdbb9002',
    'Success',
    0,
  ),
  createData(
    3,
    Date.now() + 2,
    '59830ebc3a4184110566bf1a290d08473dfdcbd492ce498b14cd1a5e2fa2e441',
    'Unsuccessful',
    5000,
  ),
  createData(
    4,
    Date.now() + 3,
    '98364ae98ce296cbb4486d6325466ab5c5b5bfaed250c35f682a30c1c9eca94f',
    'Unsuccessful',
    4999,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function HashHistory() {
  return (
    <React.Fragment>
      <Title>Recent Hashes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time (Since Unix Epoch)</TableCell>
            <TableCell>Hash</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Hashes since last coin mined</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
