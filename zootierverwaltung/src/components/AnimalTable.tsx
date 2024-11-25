import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AnimalTable = ({ animals }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Art</TableCell>
            <TableCell>Geburtstag</TableCell>
            <TableCell>Preis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animals.map((animal, index) => (
            <TableRow key={index}>
              <TableCell>{animal.name}</TableCell>
              <TableCell>{animal.type}</TableCell>
              <TableCell>{animal.birthday || 'N/A'}</TableCell>
              <TableCell>{animal.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnimalTable;
