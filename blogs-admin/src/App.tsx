import {
  Link,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import AdminLayout from "./pages/admin/Layout";
import AdminIndexPage from "./pages/admin";
import BlogIndexPage from "./pages/admin/blogs";
import EditBlogs from "./pages/admin/blogs/edit";
import CreateBlogs from "./pages/admin/blogs/create";
import { SignInPage } from "./pages/admin/sign-in/SignIn";
import ViewSingleBlog from "./pages/admin/blogs/view";
import CreateAdminUserPage from "./pages/admin/user/create";
import EditAdminUserPage from "./pages/admin/user/edit";
import AdminUserListPage from "./pages/admin/user/list";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center gap-12 h-screen flex-col">
      <h1>Home</h1>
      <Link className=" text-blue-400" to="/admin">
        Go To Admin Dashboard
      </Link>
    </div>
  );
};

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: HomePage,
  },
  {
    path: "sign-in",
    Component: SignInPage,
  },
  // {
  //   path: "sign-up",
  //   Component: SignUpPage,
  // },

  {
    id: "admin",
    path: "/admin",
    Component: AdminLayout,
    loader: AdminLoader,
    children: [
      {
        index: true,
        Component: AdminIndexPage,
      },

      {
        id: "user",
        path: "user",
        children: [
          {
            index: true,
            Component: AdminUserListPage,
          },
          {
            path: "create",
            Component: CreateAdminUserPage,
          },
          {
            path: "edit/:id",
            Component: EditAdminUserPage,
          },
        ],
      },
      {
        id: "blog",
        path: "blog",
        children: [
          {
            index: true,
            Component: BlogIndexPage,
          },
          {
            path: "create",
            Component: CreateBlogs,
          },
          {
            path: "edit/:id",
            Component: EditBlogs,
          },

          {
            path: ":id",
            Component: ViewSingleBlog,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

// async function loginLoader() {
//   if (fakeAuthProvider.isAuthenticated) {
//     return redirect("/");
//   }
//   return null;
// }

function AdminLoader() {
  const jd = localStorage.getItem("my-jwt");
  if (!jd) return redirect("/sign-in?");
  const data = JSON.parse(jd);
  if (!data?.token) return redirect("/sign-in?");
  return null;
}
