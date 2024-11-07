import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { movieApi } from '../../../apis/movie.api';
import {
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Pagination,
  IconButton,
} from '@mui/material';
import { format } from 'date-fns';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function MovieManagementPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movieList', page],
    queryFn: () => movieApi.getMovieListPagination({ page }),
  });

  const items = data?.items || [];
  const count = data?.totalPages || 0;

  return (
    <Box>
      <Typography component="h3" mb={4}>
        List Movie
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 200 }}>Tên phim</TableCell>
              <TableCell sx={{ width: 120 }}>Hình ảnh</TableCell>
              <TableCell sx={{ width: 220 }}>Mô tả</TableCell>
              <TableCell>Ngày khởi chiếu</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Độ hot</TableCell>
              <TableCell>Đánh giá</TableCell>
              <TableCell>Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              return (
                <TableRow key={item.maPhim}>
                  <TableCell>{item.tenPhim}</TableCell>
                  <TableCell>
                    <img src={item.hinhAnh} alt={item.tenPhim} width="100" />
                  </TableCell>
                  <TableCell>
                    <Typography
                      width={280}
                      sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                      }}
                    >
                      {item.moTa || 'N/A'}
                    </Typography>
                  </TableCell>
                  <TableCell>{format(new Date(item.ngayKhoiChieu), 'dd/MM/yyyy hh:mm')}</TableCell>
                  <TableCell>
                    {item.dangChieu ? (
                      <Chip
                        icon={<SyncOutlinedIcon fontSize="16px" />}
                        variant="outlined"
                        color="success"
                        label={'Đang chiếu'}
                      />
                    ) : (
                      <Chip
                        icon={<AccessTimeOutlinedIcon fontSize="14px" />}
                        variant="outlined"
                        color="primary"
                        label={'Sắp chiếu'}
                      />
                    )}
                  </TableCell>
                  <TableCell>{item.hot ? '🔥' : 'N/A'}</TableCell>
                  <TableCell>{item.danhGia}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <IconButton>
                        <EditOutlinedIcon color="warning" />
                      </IconButton>
                      <IconButton>
                        <DeleteOutlineOutlinedIcon color="error" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {!isLoading && items.length === 0 && (
          <Box height={200} width="100%" display="flex" justifyContent="center" alignItems="center">
            <Typography textAlign="center">Không có dữ liệu</Typography>
          </Box>
        )}
        {isLoading && (
          <Box height={200} width="100%" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        )}
        {!isLoading && isError && (
          <Box height={200} width="100%" display="flex" justifyContent="center" alignItems="center">
            <Typography textAlign="center">Có lỗi xảy ra, vui lòng thử lại.</Typography>
          </Box>
        )}
        <Box my={6} display="flex" justifyContent="flex-end">
          <Pagination
            count={count}
            onChange={(_event, page) => {
              setPage(page);
            }}
          />
        </Box>
      </TableContainer>
    </Box>
  );
}
