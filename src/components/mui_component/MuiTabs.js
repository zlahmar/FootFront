import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MuiTabPanel from './MuiTabPanel';
import { grey } from '@mui/material/colors';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MuiTabs(props) {
  const { children } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: grey[50] },
          '& .MuiTab-root': { color: grey[500] },
          '& .Mui-selected': { color: grey[100] },
        }}
        >
          <Tab label="UEFA Coefficients des pays (2002 ~ 2022)" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <MuiTabPanel value={value} index={0}>
        {children[value]}
      </MuiTabPanel>
      <MuiTabPanel value={value} index={1}>
        {children[value]}
      </MuiTabPanel>
      <MuiTabPanel value={value} index={2}>
        {children[value]}
      </MuiTabPanel>
    </Box>
  );
}