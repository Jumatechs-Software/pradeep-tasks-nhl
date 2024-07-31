import DashboardMiniNav from "@/components/DashboardMiniNav";
import { Button } from "@/components/ui/button";
import { userMock } from "@/mock/user";
import { PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";

const AdminUserListPage = () => {
  const [users, setUsers] = useState([...userMock]);
  const [selected, setSelected] = useState<string[]>([]);

  const onDelete = (id: string) => {
    const index = userMock.findIndex((user) => user.id === id);
    userMock.splice(index, 1);
    setUsers(() => [...userMock]);
  };

  const [allSelected, setAllSelected] = useState(false);

  const onSelect = (id: string) => {
    setAllSelected(true);
    setSelected((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((checkedId) => checkedId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  return (
    <div className=" pl-8 pr-4 pb-20">
      <div className=" flex justify-between items-center">
        <DashboardMiniNav
          title="Blog List"
          navItemsInOrder={[
            {
              name: "Dashboard",
              link: "/admin",
            },
            {
              name: "User",
              link: "/admin/user",
            },
            {
              name: "User List",
              link: "/admin/user",
            },
          ]}
        />
        <Link to="/admin/user/create">
          <Button
            variant="ghost"
            size="sm"
            className=" gap-2 py-1 items-center bg-black text-white "
          >
            <>
              <PlusIcon size={22} />
              New User
            </>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col mt-12 shadow-md border-b-[1px] border-b-slate-200">
        <div
          className={cn(
            "grid max-w-full grid-cols-10 grid-rows-1 py-6",
            allSelected ? "bg-green-300/40" : "bg-slate-200/40"
          )}
        >
          <div className="col-span-1 px-4 flex justify-center items-center">
            <input
              type="checkbox"
              className=" w-4 h-4 checked:accent-green-700"
              onChange={(e) => {
                if (e.target.checked) {
                  setAllSelected(true);
                  const ids = users.map((o) => o.id);
                  setSelected(ids);
                } else {
                  setAllSelected(false);
                  setSelected([]);
                }
              }}
            />
          </div>
          <div className="col-span-3 font-medium">
            {allSelected ? `${selected.length} selected` : "User"}
          </div>
          <div className="col-span-2 font-medium">
            {allSelected ? "" : "Phone"}
          </div>
          <div className="col-span-2 font-medium">
            {allSelected ? "" : "Role"}
          </div>
          <div className="col-span-2 font-medium">
            {allSelected ? (
              <Trash2Icon
                onClick={() => {
                  selected.forEach((usr) => {
                    onDelete(usr);
                  });
                  // const rem = users.filter((usr) => !selected.includes(usr.id));
                  // setUsers([...rem]);
                }}
                className=" text-green-500 cursor-pointer"
              />
            ) : (
              "Actions"
            )}
          </div>
        </div>
        {users.map((user) => (
          <div
            key={user.name}
            className="grid items-center max-w-full grid-cols-10 grid-rows-1 py-3 border-b-[1px] "
          >
            <div className="col-span-1px-4 flex justify-center items-center">
              <input
                id={user.id}
                checked={selected.includes(user.id)}
                onChange={() => onSelect(user.id)}
                type="checkbox"
              />
            </div>
            <div className="col-span-3 font-medium flex gap-2 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="col-span-2 font-medium">{user.phone}</div>
            <div className="col-span-2 font-medium">{user.role}</div>
            <div className="col-span-1 font-medium flex gap-2 items-center">
              <Link to={`/admin/user/edit/${user.name}`}>
                <PencilIcon className=" fill-gray-200" size={20} />
              </Link>
              <Button
                onClick={() => onDelete(user.id)}
                variant="link"
                size={"icon"}
              >
                <Trash2Icon color="red" size={20} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserListPage;
