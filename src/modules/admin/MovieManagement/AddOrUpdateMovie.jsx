import { UploadFile } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import React, { useEffect, useRef } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

export default function AddOrUpdateMovie({ isOpen, onClose, onSubmit }) {
  const inputFileRef = useRef(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      danhGia: '',
      ngayKhoiChieu: null,
      trangThai: true,
      hot: false,
      hinhAnh: null,
    },
  });

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} maxWidth='lg'>
        <form className='w-[550px]' onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add movie</DialogTitle>
          <Stack spacing={4} p={3}>
            <TextField label='Movie name' fullWidth {...register('tenPhim')} />
            <TextField label='Trailer' fullWidth {...register('trailer')} />
            <TextField label='Descriptions' multiline minRows={4} fullWidth {...register('moTa')} />
            <TextField label='Review' fullWidth {...register('danhGia')} />

            <Controller
              name='ngayKhoiChieu'
              control={control}
              render={({ field }) => {
                return (
                  <DatePicker
                    format='DD/MM/YYYY'
                    onChange={(date) => {
                      const formatDate = dayjs(date).format('DD/MM/YYYY');
                      field.onChange(formatDate);
                    }}
                  />
                );
              }}
            />

            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Controller
                name='trangThai'
                control={control}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      row
                      {...field}
                      defaultValue={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.value === 'true');
                      }}
                    >
                      <FormControlLabel value={true} control={<Radio />} label='Showing' />
                      <FormControlLabel value={false} control={<Radio />} label='Coming soon' />
                    </RadioGroup>
                  );
                }}
              />

              <FormControlLabel {...register('hot')} control={<Checkbox defaultChecked />} label='Hot' />
            </Stack>
            <Box
              sx={{
                height: 200,
                border: '1px dashed gray',
                borderRadius: 2,
                cursor: 'pointer',
                flexDirection: 'column',
              }}
              onClick={() => {
                inputFileRef.current.click();
              }}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <CloudUploadIcon sx={{ width: 40, height: 40 }} />
              <Typography fontSize={24} fontWeight={600}>
                Upload image
              </Typography>
            </Box>
          </Stack>
          <input type='file' hidden ref={inputFileRef} />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type='submit' onClick={handleSubmit}>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
