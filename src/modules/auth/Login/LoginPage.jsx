import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import * as yup from 'yup';

const schema = yup.object().shape({
  taiKhoan: yup.string().required('Tên đăng nhập không được để trống'),
  matKhau: yup.string().required('Mật khẩu không được để trống'),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <Box className="w-[450px]">
      <Typography fontSize={40} fontWeight={700} textAlign={'center'} component="h4">
        Đăng nhập
      </Typography>
      <Typography className=" text-gray-500 text-center my-2">Hi, chào mừng bạn trở lại 👋</Typography>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField
            {...register('taiKhoan')}
            fullWidth
            placeholder="Tên đăng nhập"
            label="Tên đăng nhập"
            name="taiKhoan"
            error={!!errors.taiKhoan}
            helperText={errors.taiKhoan?.message}
          />
          <TextField
            type={showPassword ? 'text' : 'password'}
            {...register('matKhau')}
            fullWidth
            placeholder="Mật khẩu"
            label="Mật khẩu"
            name="matKhau"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!errors.matKhau}
            helperText={errors.matKhau?.message}
          />
          <Button fullWidth variant="contained" size="large" color="primary" type="submit">
            Đăng nhập
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
