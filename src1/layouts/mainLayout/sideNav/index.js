import * as React from 'react';
import { IconButton } from '@mui/material';
import { Drawer, DrawerHeader } from '../../../configs/theme/drawerTheme';
import MainContent from './mainContent';
import HeaderContent from './headerContent';
import { IconSidebarHide, IconSidebarShow } from '../../../assets/sideNav/icons';


const SidebarHomepage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader style={{ justifyContent: 'flex-start' }}>
        <IconButton onClick={() => setOpen(!open)}>
          {/* {open ? <IconSidebarHide /> : <IconSidebarShow />} */}
        </IconButton>
      </DrawerHeader>

      <HeaderContent open={open} />

      <MainContent open={open} />
    </Drawer>
  );
};

export default SidebarHomepage;
