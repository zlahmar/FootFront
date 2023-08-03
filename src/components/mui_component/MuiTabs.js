import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MuiTabPanel from './MuiTabPanel';
import { COLOR } from '../../data/Constants';


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

  const title1 = props.title1
  const title2 = props.title2
  const title3 = props.title3

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
        <Tabs
          centered
          className="xl:ml-32 lg:ml-24 sm:m-0"
          value={value} onChange={handleChange}  
          sx={{
            '& .MuiTabs-indicator': { backgroundColor: COLOR.TIFFANYBLUE},
            '& .MuiTab-root': { color: COLOR.WHITE },
            '& .MuiTab-root.Mui-selected': { color: COLOR.TIFFANYBLUE },
          }}

        >
          {title1 !== undefined && <Tab label={`${title1}`} {...a11yProps(0)} />}
          {title2 !== undefined && <Tab label={`${title2}`} {...a11yProps(1)} />}
          {title3 !== undefined && children[2] && <Tab label={`${title3}`} {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <MuiTabPanel value={value} index={0}>
        {children[value]}
      </MuiTabPanel>
      <MuiTabPanel value={value} index={1}>
        {children[value]}
      </MuiTabPanel>
      {children[2] && (
        <MuiTabPanel value={value} index={2}>
          {children[2]}
        </MuiTabPanel>
      )}
    </Box>
  );
}