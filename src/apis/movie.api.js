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
};
