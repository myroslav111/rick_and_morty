import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { nameOfCharacter, getFilterValue } from 'redux/charactersSlice';
import Stack from '@mui/material/Stack';
import { filterByName } from '../../redux/charactersSlice';

const SearchInput = () => {
  const nameOfCharacters = useSelector(nameOfCharacter);
  const unicName = nameOfCharacters.filter(
    (name, index, array) => array.indexOf(name) === index
  );

  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterByName(e.currentTarget.value));
  };

  const handleChangeOption = e => {
    dispatch(filterByName(e.currentTarget.textContent));
  };
  return (
    <div>
      {' '}
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          label="Sort"
          onChange={handleChangeOption}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={unicName.map(name => name)}
          renderInput={params => (
            <TextField
              onChange={handleChange}
              value={value}
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default SearchInput;
