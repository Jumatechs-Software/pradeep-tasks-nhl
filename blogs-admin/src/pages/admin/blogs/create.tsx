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
import { useState } from "react";

const CreateBlogs = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const onCreate = async () => {
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

      const res = await fetch(`${apiUrl}/blogs/1`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        return toast({
          title: "Successfully Created a New Blog!",
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
      {isLoading && <LoadingSpinner />}
      <DashboardMiniNav
        title="Create Blog"
        navItemsInOrder={[
          {
            name: "Dashboard",
            link: "/admin",
          },
          {
            name: "Blog",
            link: "/admin/blog",
          },
          {
            name: "Create",
            link: "/admin/blog/create",
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
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className=" py-4 mb-6"
          />
          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className=" mb-4"
          />
          <Label>Content</Label>
          <JoditTextEditor html={content} setHtml={setContent} />

          <Label className="mt-6 mb-4">Cover</Label>
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
            onChange={(e) => setMetaTitle(e.target.value)}
            placeholder="Meta Title"
            className=" py-4 mb-6"
          />
          <Textarea
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder="Meta Description"
            className=" mb-4"
          />
        </Card>
      </div>
      <div className="main-w-full mt-6 flex">
        <Button onClick={onCreate} size="lg" className="ml-auto ">
          Create Blog
        </Button>
      </div>
    </div>
  );
};

export default CreateBlogs;
