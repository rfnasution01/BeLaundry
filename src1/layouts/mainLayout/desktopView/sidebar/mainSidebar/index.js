import React, { useState } from 'react'
import { Drawer, DrawerHeader } from '../../../../../configs/theme/drawerTheme'
import HeaderContent from '../headerContent';
import MainContent from '../../../sideNav/mainContent';

const MainSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      variant="permanent" 
      open={open}
    >
      <DrawerHeader style={{ justifyContent: 'flex-start' }}>
        <HeaderContent open={open} setOpen={setOpen} />

        <MainContent open={open} />
      </DrawerHeader>
    </Drawer>
  )
}

export default MainSidebar
