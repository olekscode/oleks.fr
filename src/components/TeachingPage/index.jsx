import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './style.css';


function createData(period, title, level, institution, hours) {
  return { period, title, level, institution, hours };
}

const rows = [
  createData('2022', 'Object-oriented programming', 'Master 1', 'Centrale Lille', '10h TD'),
  createData('2020', 'Programming in C', 'Master 1', 'Polytech Lille', '6h CM, 2h TD, 8h TP'),
  createData('2019', 'Programming in C', 'Master 1', 'Polytech Lille', '6h TD, 10h TP'),
  createData('2019', 'Research Seminar', 'Master 2', 'Ukrainian Catholic University', '7h TD'),
  createData('2018', 'Discrete Mathematics', 'Bachelor 1', 'Ukrainian Catholic University', '22h TP'),
  createData('2017', 'Discrete Mathematics', 'Bachelor 1', 'Ukrainian Catholic University', '26h TP'),
];

export default function TeachingPage() {
  return (
    <div>
      <h1>Teaching Activities</h1>
      <div><b>Total:</b> 6h lectures, 25h supervised work, 66h practical work (78h eq. lab hours)</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Period</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Institution</TableCell>
              <TableCell>Lab time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.period}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.level}</TableCell>
                <TableCell>{row.institution}</TableCell>
                <TableCell>{row.hours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}