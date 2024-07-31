import { Button } from "../../../Components/Admin/ui/button";
import { Input } from "../../../Components/Admin/ui/input";
import { Label } from "../../../Components/Admin/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../Components/Admin/ui/select";
import BlogCard from "../../../Components/Admin/BlogCard";
import DashboardMiniNav from "../../../Components/Admin/DashboardMiniNav";
import LoadingSpinner from "../../../Components/Blog/LoadingSpinner";
import { useToast } from "../../../Components/Admin/ui/use-toast";
import { Link, useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../../constants/constants";
import { cn } from "../../../lib/utils";
import { PlusIcon, SearchIcon } from "lucide-react";

const BlogIndexPage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("DESC");
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const { toast } = useToast();

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${apiUrl}/blogs?sortBy=createdDate&direction=${sortBy}&${
          status && `status=${status}`
        }`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();
      if (res.ok) {
        setBlogs(data.data);
        setTotal(data.totalElements);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [sortBy, status]);

  useEffect(() => {
    const stat = searchParams.get("type");

    if (stat) {
      setStatus(stat);
    } else setStatus(null);
  }, [searchParams]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const onDelete = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        const data = await res.text();
        if (data === "Blog deleted successfully") {
          toast({
            title: data,
            variant: "success",
          });
          const newBlogs = blogs.filter((blog) => blog.blogId !== id);
          setBlogs(() => [...newBlogs]);
          return;
        }
        throw data;
      }
    } catch (error) {
      toast({
        title: error,
        variant: "error",
      });
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className=" pl-2 lg:pl-8 pr-2  lg:pr-4 pb-10 lg:pb-20">
      <div className=" flex justify-between items-center">
        <DashboardMiniNav
          title="Blog List"
          navItemsInOrder={[
            {
              name: "Dashborad",
              link: "/admin",
            },
            {
              name: "Blog",
              link: "/admin/blog",
            },
            {
              name: "List",
              link: "/admin/blog/",
            },
          ]}
        />
        <Link to="/admin/blog/create">
          <Button
            variant="ghost"
            size="sm"
            className=" gap-2 py-1 items-center bg-black text-white"
          >
            <PlusIcon size={22} />
            New Blog
          </Button>
        </Link>
      </div>
      <div className="flex justify-between lg:justify-end gap-2 lg:gap-10 items-center my-6  lg:my-12">
        <div className=" relative">
          <SearchIcon className=" absolute top-[50%] left-4 translate-y-[-50%]" />
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className=" lg:w-[300px] h-auto py-4 pl-12"
          />
          {searchText && (
            <div className="absolute px-3 py-1 left-0 bottom-[-150px] w-full h-[150px] bg-slate-300 rounded-b-md overflow-y-scroll">
              {blogs.filter((blog) =>
                blog.postTitle.toLowerCase().includes(searchText)
              ).length ? (
                blogs
                  .filter((blog) =>
                    blog.postTitle.toLowerCase().includes(searchText)
                  )
                  .map((blog) => {
                    return (
                      <Link
                        to={`/admin/blog/${blog.blogId}`}
                        className=" py-1 text-sm border-b-[1px] line-clamp-2"
                        key={blog.blogId}
                      >
                        {blog.postTitle}
                      </Link>
                    );
                  })
              ) : (
                <p>No blogs found!</p>
              )}
            </div>
          )}
        </div>
        <div className=" flex flex-col lg:flex-row gap-1 lg:items-center">
          <Label>Sort By:</Label>
          <Select
            value={sortBy}
            onValueChange={(t) => setSortBy(t)}
            defaultValue="latest"
          >
            <SelectTrigger className="w-fit bg-transparent border-none font-bold text-black pl-1">
              <SelectValue placeholder="Latest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DESC">Latest</SelectItem>
              <SelectItem value="ASC">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-6 py-2 mb-8">
        <Link
          to="/admin/blog"
          className={cn(
            "flex justify-center items-center pb-3",
            !status ? "border-b-2 border-black" : null
          )}
        >
          All
          <span className=" ml-2 bg-black text-white px-1.5 py-1 rounded-[4px] text-sm font-semibold">
            {total}
          </span>
        </Link>
        <Link
          to="/admin/blog?type=published"
          className={cn(
            "flex justify-center items-center pb-3",
            status === "published" ? "border-b-2 border-black" : null
          )}
        >
          Published
          <span className=" ml-2 bg-black text-white px-1.5 py-1 rounded-[4px] text-sm font-semibold">
            {total}
          </span>
        </Link>

        <Link
          to="/admin/blog?type=draft"
          className={cn(
            "flex justify-center items-center pb-3",
            status === "draft" ? "border-b-2 border-black" : null
          )}
        >
          Draft
          <span className=" ml-2 bg-black text-white px-1.5 py-1 rounded-[4px] text-sm font-semibold">
            0
          </span>
        </Link>

        {/* <div
          className={cn(" w-12 h-[2px] bg-black absolute bottom-0 left-0")}
        /> */}
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-y-6 lg:gap-x-6 lg:justify-between">
        {blogs.length ? (
          blogs.map((blog) => (
            <BlogCard
              onDelete={onDelete}
              {...blog}
              key={blog.blogId}
              setBlogs={setBlogs}
            />
          ))
        ) : (
          <p>No blogs found !</p>
        )}
      </div>
    </div>
  );
};

export default BlogIndexPage;
