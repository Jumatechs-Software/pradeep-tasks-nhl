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
import { useState } from "react";
import useFormError from "../../../hooks/useFormError";
import { cn } from "../../../lib/utils";
import { AlertTriangleIcon } from "lucide-react";

const CreateBlogs = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useFormError(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const onCreate = async () => {
    const formData = new FormData();

    if (file) formData.append("photo", file, file.name);

    let postError = false;

    if (title === "") {
      postError = true;
      setErrorAlert((prev) => ({ ...prev, title: "Title is required" }));
    }
    if (description === "") {
      postError = true;
      setErrorAlert((prev) => ({
        ...prev,
        description: "Description is required",
      }));
    }

    if (content === "") {
      setErrorAlert((prev) => ({ ...prev, content: "Content is required" }));
      postError = true;
    }

    if (postError) {
      toast({
        title: "PLease fill in required information",
        variant: "error",
      });
      return;
    }

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
        title: error,
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
      <div className="flex flex-col lg:flex-row mt-6  lg:mt-12">
        <div className="flex-[2.2] mb-6 lg:mb-0">
          <h4 className=" font-semibold">Details</h4>
          <p className=" pr-4 line-clamp-4">Title, short description, image</p>
        </div>
        <Card className="flex-[5] p-6">
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className={cn(
              " py-4 mb-6",
              errorAlert && errorAlert.title ? "border-2 border-red-400" : null
            )}
          />
          <Textarea
            className={cn(
              "mb-4",
              errorAlert && errorAlert.description
                ? "border-2 border-red-400"
                : null
            )}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
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
      <div className="flex flex-col lg:flex-row mt-8">
        <div className="flex-[2.2] mb-6 lg:mb-0">
          <h4 className="font-semibold">Meta</h4>
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

      <div className="main-w-full mt-6 flex flex-col items-end">
        {errorAlert && (
          <p className="font-semibold rounded-md mb-4 flex gap-2 text-sm text-red-400 py-1 items-center mt-1 px-2 text-end">
            <AlertTriangleIcon size={12} />{" "}
            {Object.values(errorAlert).join(", ")}
          </p>
        )}
        <Button onClick={onCreate} size="lg">
          Create Blog
        </Button>
      </div>
    </div>
  );
};

export default CreateBlogs;
