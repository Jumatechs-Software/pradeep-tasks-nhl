import DashboardMiniNav from "@/components/DashboardMiniNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { userMock } from "@/mock/user";
import { useState } from "react";

type TUser = {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  id: string;
};

const CreateAdminUserPage = () => {
  const { toast } = useToast();

  const [image, setImage] = useState<string | null>(null);
  const [user, setUser] = useState<TUser>({
    email: "",
    name: "",
    password: "",
    phone: "",
    role: "",
    id: "",
  });

  const imagePreviewHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileData = e.target.files?.[0];
    if (!fileData) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileData);
    fileReader.onloadend = () => {
      setImage(() => fileReader.result as string);
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCreate = () => {
    const id = Number(userMock[userMock.length - 1].id);
    userMock.push({
      ...user,
      id: String(id + 1),
    });
    toast({
      title: "User Created",
      variant: "success",
    });
  };

  return (
    <div className=" px-4 pb-[100px]">
      <DashboardMiniNav
        title="Create Blog"
        navItemsInOrder={[
          {
            name: "Dashborad",
            link: "/admin",
          },
          {
            name: "User",
            link: "/admin/user",
          },
          {
            name: "Create",
            link: "/admin/user/create",
          },
        ]}
      />
      <div className=" mt-8 flex w-full gap-6">
        <div className="border-[1px] border-slate-200/60 shadow-lg rounded-2xl flex-1 px-6 py-6 flex flex-col">
          <label
            htmlFor="customFileInput"
            className=" rounded-lg flex-1 flex flex-col gap-4 justify-center items-center pt-10"
          >
            <img
              src={image ? image : "/camera.svg"}
              className="w-[120px] h-[120px] bg-slate-100 rounded-full p-2 object-cover"
              height={120}
              width={120}
              alt="img"
            />

            <p className=" text-sm text-slate-500 font-medium mt-10">
              Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb
            </p>
          </label>
          <input
            id="customFileInput"
            type="file"
            onChange={imagePreviewHandler}
            accept=".svg,.png,.jpeg,.jpg"
            className="hidden"
          />
        </div>
        <div className="border-[1px] border-slate-200/60 shadow-lg rounded-2xl flex-[3.5] px-6 py-6 grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-6">
          <Input
            onChange={handleChange}
            name="name"
            value={user.name}
            placeholder="Full Name"
            className=" py-4 h-auto"
          />
          <Input
            onChange={handleChange}
            name="email"
            value={user.email}
            placeholder="Email Address"
            className=" py-4 h-auto"
          />
          <Input
            onChange={handleChange}
            name="phone"
            value={user.phone}
            placeholder="Phone Number"
            className=" py-4 h-auto"
          />
          <Input
            onChange={handleChange}
            name="role"
            value={user.role}
            placeholder="Role"
            className=" py-4 h-auto"
          />
          <Input
            onChange={handleChange}
            name="password"
            value={user.password}
            placeholder="Password"
            className=" py-4 h-auto"
          />
          <Input
            onChange={handleChange}
            name="repeatPassword"
            placeholder="Confirm Password"
            className=" py-4 h-auto"
          />
          <div className="col-span-2 mt-6 flex">
            <Button onClick={onCreate} size="lg" className=" ml-auto">
              Create User
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminUserPage;
