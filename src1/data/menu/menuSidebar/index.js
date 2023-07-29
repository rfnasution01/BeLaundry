import {
  IconHome, 
  IconProduct,
  IconSales,
  IconSetting,
  } from '../../../assets/sideNav/icons';
  
  const MenuSideNavbar = [
    {
      title: 'Home',
      path: '/home',
      icon: <IconHome />,
    },
    {
      title: 'Products',
      path: '/products',
      icon: <IconProduct />,
    },
    {
      title: 'Sales',
      path: '/sales',
      icon: <IconSales />,
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <IconSetting />,
    },
  ];
  
  export default MenuSideNavbar;
  