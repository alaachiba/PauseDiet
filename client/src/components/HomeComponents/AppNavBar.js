import React, { useState, Fragment } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { useSelector, useDispatch } from "react-redux";
import { logout , loginUser} from "../../redux/actions";
import { useNavigate } from "react-router-dom";


//dialog imports
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import ImageLogin from '../../Login1.jpg';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




const AppNavbar = ()=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  const logoutt = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //****** popup login */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const HandleLoginEvent = (e) => {
    navigate('/login');
  }
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  }
  const [User, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(loginUser(User, navigate));
  };

  //********************************************* */

  /************************* popup signUp */
  const [openSignUp, setopenSignUp] = React.useState(false);

  const handleClickOpenopenSignUp = () => {
    setopenSignUp(true);
  };
  const handleCloseopenSignUp = () => {
    setopenSignUp(false);
  };
  const HandleSignUpEvent = (e) => {
    handleClose();
    handleClickOpenopenSignUp();
  }
  /******************************************** */

  
  return (
    <AppBar position="static" sx={{background : "#03C04A"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/123597915_2736669109995293_1417731200689492646_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=vatmA0__aasAX8-vj4T&_nc_ht=scontent.ftun14-1.fna&oh=00_AfC8SkGhZp9i6GHeqgmlHLEt9ULG3RJZz_DhbzCw92Ty2A&oe=64FB40AE"
             alt="image" height= "30 px" width= "30px" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {user ? 
           <Box sx={{ flexGrow: 0 }}>
           <Tooltip title="Open settings">
             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
             </IconButton>
           </Tooltip>
           <Menu
             sx={{ mt: '45px' }}
             id="menu-appbar"
             anchorEl={anchorElUser}
             anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
             open={Boolean(anchorElUser)}
             onClose={handleCloseUserMenu}
           >
             {settings.map((setting) => (
               <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Typography textAlign="center">{setting}</Typography>
               </MenuItem>
             ))}
           </Menu>
         </Box>: 
         <>
          <Button onClick={HandleLoginEvent} color="inherit">Login</Button>
          <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Login
              </BootstrapDialogTitle>
              <Container sx={{
                width:"400px",
                height:"500px"
              }}>
                <DialogContent dividers>
                  <form >
                  <Stack spacing={2}>
                    <img src={ImageLogin} alt="Nothing"/>
                    <TextField
                          
                          label="Email"
                          name="email"
                          type="email"
                          variant="standard"
                          onChange={handleChange}
                        />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={handleChange}
                      />
                    <Button type="submit" color="primary" style={{backgroundColour: "#03C04A"}}>
                        Log in
                    </Button>
                  </Stack>
                  </form>
                  <label>If you don't have an account</label>
                  <Button type="submit" color="primary" onClick={HandleSignUpEvent} style={{backgroundColour: "#03C04A"}}>
                        Sign up
                  </Button>
              </DialogContent>
                
              </Container> 
            </BootstrapDialog>

            <BootstrapDialog
              onClose={handleCloseopenSignUp}
              aria-labelledby="customized-dialog-title"
              open={openSignUp}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleCloseopenSignUp}
              >
                Sign Up
              </BootstrapDialogTitle>
              <Container sx={{
                width:"400px",
                height:"500px"
              }}>
                <DialogContent dividers>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <TextField
                            id="standard-search"
                            label="FirstName"
                            name="name"
                            type="search"
                            variant="standard"
                            onChange={handleChange}
                          />
                  </Grid>
                  <Grid item xs={6}>
                  <TextField
                          id="standard-search"
                          label="LastName"
                          name="email"
                          type="search"
                          variant="standard"
                          onChange={handleChange}
                        />
                  </Grid>
                  <Grid item xs={6}>
                  <TextField
                          id="standard-search"
                          label="Email"
                          name="email"
                          type="search"
                          variant="standard"
                          onChange={handleChange}
                        />
                  </Grid>
                  <Grid item xs={6}>
                  <TextField
                          id="standard-search"
                          label="Email"
                          name="email"
                          type="search"
                          variant="standard"
                          onChange={handleChange}
                        />
                  </Grid>
                </Grid>
              </DialogContent>
                
              </Container> 
            </BootstrapDialog>
          </>}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}



export default AppNavbar;
