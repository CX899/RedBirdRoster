import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Logo from '../../assets/Red-Bird.png'

const Item = ({ title, to, icon,}) => {
  return (
    <MenuItem icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Leftbar = () => {
  return (
    <Box sx={{
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px",
      },
      "& .pro-inner-item:hover": {
        color: "red !important",
      },
      "& .pro-sidebar .pro-sidebar-inner": {
        background: "#363740",
      },
    }}>
      <ProSidebar>
        <Menu iconShape="square">
          <Box mb="25px">
            <Box textAlign="center">
            <Box
             display="flex"
             paddingLeft="40px"
             paddingRight="40px"
             justifyContent="space-between">
              <img src={Logo} alt="logo" width="30px" height="30px" />
               <Typography variant="h5" >RedBirdRoster</Typography>
            </Box>
            </Box>
          </Box>
          <Box paddingLeft="10%" paddingBottom="10%">
            <Typography variant="h6" sx={{ m: "20px 0 5px 20px" }}>Team Environment</Typography>
            <Item title="Project" to="/project"icon={<AccountTreeOutlinedIcon />}/>
            <Item title="Team" to="/team"icon={<GroupsOutlinedIcon />}/>
            <Item title="Tasks" to="/task"icon={<TaskAltOutlinedIcon />}/>
            <Item title="Calendar" to="/calendar"icon={<CalendarMonthOutlinedIcon />}/>
            <Item title="User Form" to="/userform"icon={<AccessibilityNewIcon />}/>
            <Typography variant="h6" sx={{ m: "22px 0 5px 20px" }}>User</Typography>
            <Item title="Logout" to="/"icon={<LogoutIcon/>}/>
          </Box>
          </Menu>
          </ProSidebar>
    </Box>
  )
}

export default Leftbar

