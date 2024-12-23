import fetcher from './fetcher';

export const movieApi = {
  getMovieListPagination: async ({ page = 1, pageSize = 10 }) => {
    try {
      const response = await fetcher.get(
        `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`
      );

      return response.data.content;
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteMovie: async (movieId) => {
    try {
      const response = await fetcher.delete(`/QuanLyPhim/XoaPhim?MaPhim=${movieId}`);

      return response.data.content;
    } catch (error) {
      throw error.response.data;
    }
  },
  addMovie: async (formData) => {
    try {
      const response = await fetcher.post('/QuanLyPhim/ThemPhimUploadHinh', formData);

      return response.data.content;
    } catch (error) {
      throw error.response.data;
    }
  },
};
