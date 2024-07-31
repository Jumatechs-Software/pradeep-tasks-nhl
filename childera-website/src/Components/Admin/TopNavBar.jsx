import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useAuthContext from "../../contexts/AuthContext";

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
          <DropdownMenuLabel>
            {user ? user.name : "ChildEra Admin"}
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            {user ? user.email : "admin@childera.com"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              onLogout();
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
