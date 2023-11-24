import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './style.css';
import courses from '../../data/courses.json';


function calculateEquivalentHours(lectureHours, supervisedHours, practicalHours) {
  return Math.round(1.5 * lectureHours + supervisedHours + 2/3 * practicalHours);
}

export default function TeachingPage() {
  const totalLectureHours = courses.reduce((sum, course) => sum + course.hours.lecture, 0);
  const totalSupervisedHours = courses.reduce((sum, course) => sum + course.hours.supervised, 0);
  const totalPracticalHours = courses.reduce((sum, course) => sum + course.hours.practical, 0);

  const equivalentHours = calculateEquivalentHours(
    totalLectureHours,
    totalSupervisedHours,
    totalPracticalHours); 

  return (
    <div>
      <h1>Teaching Activities</h1>
      <div><b>Total:</b> {totalLectureHours}h lectures, {totalSupervisedHours}h supervised work, {totalPracticalHours}h practical work ({equivalentHours}h eq. lab hours)</div>
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
            {courses.map((course) => (
              <TableRow
                key={course.title + course.year}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{course.year}</TableCell>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.level}</TableCell>
                <TableCell>{course.institution}</TableCell>
                <TableCell>{
                  calculateEquivalentHours(
                    course.hours.lecture,
                    course.hours.supervised,
                    course.hours.practical)
                }h</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}