import { AppBar, Avatar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';
import { logout } from '../../store/slices/user.slice';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const handleLogin = () => {
    navigate(PATH.LOGIN);
  };

  const handleRegister = () => {
    navigate(PATH.REGISTER);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ứng Dụng
        </Typography>
        {!currentUser ? (
          <>
            <Button color="inherit" onClick={handleLogin}>
              Đăng nhập
            </Button>
            <Button color="inherit" onClick={handleRegister}>
              Đăng ký
            </Button>
          </>
        ) : (
          <>
            <Avatar onClick={handleMenu} sx={{ cursor: 'pointer' }}>
              {currentUser.hoTen.charAt(0)}
            </Avatar>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
