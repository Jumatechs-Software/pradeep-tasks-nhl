import DashboardMiniNav from "@/components/DashboardMiniNav";
import JoditTextEditor from "@/components/JoditEditor";
import LoadingSpinner from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CustomImageInput from "@/components/ui/CustomImageInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { apiUrl } from "@/constants/constant";
import { MockBlogs } from "@/mock/blogs";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBlogs = () => {
  const { toast } = useToast();

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [blogId, setBlogId] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  // const [date, setDate] = useState("");
  const [file, setFile] = useState<File | null>(null);
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
        title: error as string,
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
            name: MockBlogs[0].title,
            link: "/admin/blog/1",
          },
        ]}
      />
      <div className="flex mt-12">
        <div className="flex-[2.2]">
          <h4>Details</h4>
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
      <div className="flex mt-8">
        <div className="flex-[2.2]">
          <h4>Properties</h4>
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
