import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MuiTabPanel from './MuiTabPanel';

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
        <Tabs
          centered
          className="xl:ml-32 lg:ml-24 sm:m-0"
          value={value} onChange={handleChange}  
          sx={{
            '& .MuiTabs-indicator': { backgroundColor: '#A8E1DC' },
            '& .MuiTab-root': { color: '#f5f5f5' },
            '& .Mui-selected': { color: '#A8E1DC' },
            "& label.Mui-focused": { color: '#A8E1DC'},
          }}
        >
          <Tab label="Graphe 1" {...a11yProps(0)} />
          <Tab label="Graphe 2" {...a11yProps(1)} />
          {children[2] && <Tab label="Graphe 3" {...a11yProps(2)} />}
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