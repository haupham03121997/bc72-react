import fetcher from './fetcher';

export const movieApi = {
  getMovieListPagination: async ({ page = 1, pageSize = 10 }) => {
    try {
      const response = await fetcher.get(
        `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP04&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`
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
};
