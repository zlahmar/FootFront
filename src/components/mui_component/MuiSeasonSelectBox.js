import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import { generateSeason } from '../../data/Arrays';
import { COLOR } from '../../data/Constants';

const MuiSeasonSelectBox = ({start, number_of_seasons, season, handleSeasonChange, extra_value }) => {
  return (
    <Box className="pt-3">
      <Box mx={5}>
        <TextField
          label="Saississez une saison"
          value={season}
          onChange={(e) => {handleSeasonChange(e.target.value)}}
          select
          sx={{
            width: "200px",
            '& label': {
              color: COLOR.WHITE, // Change the label color
              fontSize: '1rem',
            },
            '&:hover label': {
              color: COLOR.TIFFANYBLUE,
            },
            "& label.Mui-focused": {
              color: COLOR.TIFFANYBLUE,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: COLOR.WHITE,
              },
              '&:hover fieldset': {
                borderColor: COLOR.TIFFANYBLUE,
              },
              '&.Mui-focused fieldset': {
                borderColor: COLOR.TIFFANYBLUE,
              },
            },
          }}
          InputProps={{
            style: { color: COLOR.WHITE },
          }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                style: {
                  maxHeight: 250, // Adjust this value as needed to limit the displayed height
                  backgroundColor: COLOR.GUNMETAL,
                  color: COLOR.WHITE,
                },
              },
            },
          }}
        >
          {generateSeason(start, number_of_seasons).map((season) => (
            <MenuItem value={season} key={season}>
              {season}
            </MenuItem>
          ))}
          {extra_value !=undefined &&             
            <MenuItem value={extra_value} key={extra_value}>
              {extra_value}
            </MenuItem>
          }
        </TextField>
      </Box>
    </Box>
  );
};

export default MuiSeasonSelectBox;
