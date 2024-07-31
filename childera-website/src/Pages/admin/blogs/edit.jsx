import DashboardMiniNav from "../../../Components/Admin/DashboardMiniNav";
import JoditTextEditor from "../../../Components/Admin/JoditEditor";
import { Button } from "../../../Components/Admin/ui/button";
import { Card } from "../../../Components/Admin/ui/card";
import CustomImageInput from "../../../Components/Admin/ui/CustomImageInput";
import { Input } from "../../../Components/Admin/ui/input";
import { Label } from "../../../Components/Admin/ui/label";
import { Textarea } from "../../../Components/Admin/ui/textarea";
import { useToast } from "../../../Components/Admin/ui/use-toast";
import LoadingSpinner from "../../../Components/Blog/LoadingSpinner";
import { apiUrl } from "../../../constants/constants";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBlogs = () => {
  const { toast } = useToast();

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [blogId, setBlogId] = useState(null);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [metaTitle, setMetaTitle] = useState("");
  // const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [metaDescription, setMetaDescription] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const fetchBlog = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/blogs/${id}`);
      const data = await res.json();
      if (res.ok) {
        setBlogId(data.data.blogId);
        setTitle(data.data.postTitle);
        setDescription(data.data.description);
        setContent(data.data.content);
        setImage(data.data.photoUrl);
        setMetaTitle(data.data.metaTitle);
        setMetaDescription(data.data.metaDescription);
        // setDate(data.data.date);
      }
      throw data.error;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [fetchBlog, id]);

  if (isLoading) return <LoadingSpinner />;

  if (!id || !blogId || isLoading) {
    return <p> Invalid Request! No Blog found!</p>;
  }

  const onSave = async () => {
    const formData = new FormData();

    if (file) formData.append("photo", file, file.name);

    const requestData = JSON.stringify({
      postTitle: title,
      description: description,
      content: content,
      metaTitle: metaTitle,
      metaDescription: metaDescription,
    });

    const jsonFile = new Blob([requestData], { type: "application/json" });

    formData.append("request", jsonFile);

    try {
      setIsLoading(true);

      const res = await fetch(`${apiUrl}/blogs/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        return toast({
          title: "Successfully Updated the Blog!",
          variant: "success",
        });
      }
      throw data.error;
    } catch (error) {
      toast({
        title: error,
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" px-4 pb-[100px]">
      <DashboardMiniNav
        title="Edit Blog"
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
            name: title,
            link: "/admin/blog/1",
          },
        ]}
      />
      <div className="flex flex-col lg:flex-row mt-6  lg:mt-12">
        <div className="flex-[2.2] mb-6 lg:mb-0">
          <h4 className=" font-semibold">Details</h4>
          <p className=" pr-4 line-clamp-4">Title, short description, image</p>
        </div>
        <Card className="flex-[5] p-6">
          <Input
            value={title}
            placeholder="Post Title"
            className=" py-4 mb-6"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            value={description}
            placeholder="Description"
            className=" mb-4"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Label>Content</Label>
          <JoditTextEditor html={content} setHtml={setContent} />
          <Label className="mt-2 mb-4">Cover</Label>
          <CustomImageInput
            setFile={setFile}
            image={image}
            setImage={setImage}
          />
        </Card>
      </div>
      <div className="flex flex-col lg:flex-row mt-8">
        <div className="flex-[2.2] mb-6 lg:mb-0">
          <h4 className="font-semibold">Meta</h4>
          <p className=" line-clamp-4 pr-4">
            Additional functions and attributes
          </p>
        </div>
        <Card className="flex-[5] p-6">
          <Input
            value={metaTitle}
            placeholder="Meta Title"
            className=" py-4 mb-6"
            onChange={(e) => setMetaTitle(e.target.value)}
          />
          <Textarea
            value={metaDescription}
            placeholder="Meta Description"
            className=" mb-4"
            onChange={(e) => setMetaDescription(e.target.value)}
          />
        </Card>
      </div>
      <div className="main-w-full mt-6 flex">
        <Button onClick={() => onSave()} size="lg" className="ml-auto ">
          Create Blog
        </Button>
      </div>
    </div>
  );
};

export default EditBlogs;
