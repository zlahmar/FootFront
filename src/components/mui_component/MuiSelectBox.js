import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import { generateSeason } from '../../data/Arrays';
import { COLOR } from '../../data/Constants';

const MuiSelectBox = ({array, label , value, handleChange, extra_value }) => {
  return (
    <Box className="pt-3">
      <Box mx={5}>
        <TextField
          label={label}
          value={value}
          onChange={(e) => {handleChange(e)}}
          select
          sx={{
            width: "150px",
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
          {extra_value !==undefined && 
            <MenuItem value={extra_value} key={extra_value}>
              {extra_value}
            </MenuItem>
          }
           {array.map((season) => (
            <MenuItem value={season} key={season}>
              {season}
            </MenuItem>
          ))}

        </TextField>
      </Box>
    </Box>
  );
};

export default MuiSelectBox;
