import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import { selectSeasons } from '../utility/utility';

const MuiSeasonSelectBox = ({ season, handleSeasonChange }) => {
  return (
    <Box className="pt-2">
      <Box mx={5}>
        <TextField
          label="Saississez une saison"
          value={season}
          onChange={(e) => {handleSeasonChange(e.target.value)}}
          select
          sx={{
            width: "200px",
            '& label': {
              color: 'white', // Change the label color
              fontSize: '1rem',
            },
            '&:hover label': {
              color: '#A8E1DC',
            },
            "& label.Mui-focused": {
              color: '#A8E1DC',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: '#A8E1DC',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#A8E1DC',
              },
            },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                style: {
                  maxHeight: 250, // Adjust this value as needed to limit the displayed height
                  backgroundColor: '#2B3132',
                  color: 'white',
                },
              },
            },
          }}
        >
          {selectSeasons("2002-2003", 20).map((season) => (
            <MenuItem value={season} key={season}>
              {season}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default MuiSeasonSelectBox;
