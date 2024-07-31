import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuthContext from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const {
    onLogout,
    authState: { user },
  } = useAuthContext();

  const navigate = useNavigate();

  return (
    <nav className="w-full px-4 py-3 flex justify-between">
      <div />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
          <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
          <DropdownMenuItem
            onClick={() => {
              onLogout!();
              navigate("/sign-in");
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default TopNavBar;
