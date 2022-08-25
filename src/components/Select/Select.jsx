import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  sortByEpisode,
  sortByDate,
  sortByEpisodeDown,
  sortByDateDown,
} from 'redux/charactersSlice';

export default function BasicSelect() {
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();
  const handleChange = event => {
    setSort(event.target.value);
  };

  useEffect(() => {
    switch (sort) {
      case 'ep':
        dispatch(sortByEpisode());
        return;
      case 'ep-down':
        dispatch(sortByEpisodeDown());
        return;
      case 'date':
        dispatch(sortByDate());
        return;
      case 'date-down':
        dispatch(sortByDateDown());
        return;
      default:
        console.log('some hapend');
    }
  }, [sort, dispatch]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={'date'}>By date: &uarr;</MenuItem>
          <MenuItem value={'date-down'}>By date: &darr;</MenuItem>
          <MenuItem value={'ep'}>By number of episodes: &uarr;</MenuItem>
          <MenuItem value={'ep-down'}>By number of episodes: &darr;</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
