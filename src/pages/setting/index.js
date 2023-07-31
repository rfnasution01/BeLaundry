import { Box } from '@mui/material';
import React from 'react'
import SettingUser from './settingUser';
import SettingAdmin from './settingAdmin';

const Settings = () => {
  const role = localStorage.getItem("role");

  return (
    <Box>
        {
            role === 'user' ?
                <SettingUser />
            :
                <SettingAdmin />
        }
    </Box>
  )
}

export default Settings
