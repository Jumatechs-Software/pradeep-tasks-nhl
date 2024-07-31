type TBlogTYpe = {
  blogId: string;
  postTitle: string;
  description: string;
  content: string;
  photo: string;
  photoUrl: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  status: string;
};

type TBlogListResponse = {
  data: TBlogTYpe[];
  message: string;
  totalElements: number;
  page: {
    totalPages: number;
    currentPage: number;
  };
};
