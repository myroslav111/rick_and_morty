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
  reset,
} from 'redux/charactersSlice';
import { useGetCharactersQuery } from 'redux/rtkQuery';

export default function BasicSelect() {
  const [sort, setSort] = useState('');
  const { data } = useGetCharactersQuery();
  const dispatch = useDispatch();
  const handleChange = event => {
    setSort(event.target.value);
  };

  useEffect(() => {
    switch (sort) {
      case 'ep':
        dispatch(sortByEpisode());
        setSort(sort);
        return;
      case 'ep-down':
        dispatch(sortByEpisodeDown());
        setSort(sort);
        return;
      case 'date':
        dispatch(sortByDate());
        setSort(sort);
        return;
      case 'date-down':
        dispatch(sortByDateDown());
        setSort(sort);
        return;
      case 'reset':
        // useGetCharactersQuery()
        dispatch(reset(data));
        setSort('');
        return;
      default:
      // console.log('some hapend');
    }
  }, [sort, data, dispatch]);

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
          <MenuItem value={'reset'}>Reset</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
