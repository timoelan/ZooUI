import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const AnimalForm = ({ onAddAnimal }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [birthday, setBirthday] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !type || !price) {
      alert('Bitte alle Pflichtfelder ausfüllen!');
      return;
    }

    onAddAnimal({ name, type, birthday, price: parseInt(price, 10) });
    setName('');
    setType('');
    setBirthday('');
    setPrice('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        select
        label="Art"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      >
        <MenuItem value="Säugetier">Säugetier</MenuItem>
        <MenuItem value="Vogel">Vogel</MenuItem>
        <MenuItem value="Reptil">Reptil</MenuItem>
      </TextField>
      <TextField
        label="Geburtstag"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Preis"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        inputProps={{ min: 0 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Tier hinzufügen
      </Button>
    </Box>
  );
};

export default AnimalForm;
