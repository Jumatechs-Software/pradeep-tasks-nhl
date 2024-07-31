import Loader from "../../../Components/Admin/Loader";
import { Button } from "../../../Components/Admin/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../Components/Admin/ui/card";
import { Input } from "../../../Components/Admin/ui/input";
import { Label } from "../../../Components/Admin/ui/label";
import useAuthContext from "../../../contexts/AuthContext";
import useFormError from "../../../hooks/useFormError";
import { AlertTriangleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignInPage() {
  const navigate = useNavigate();

  const {
    onLogin,
    authState: { token },
  } = useAuthContext();

  const [alertError, setAlertError] = useFormError(null);

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginSubmit = async () => {
    let error = false;
    if (user.email === "") {
      error = true;
      setAlertError((prev) => ({
        ...prev,
        email: "No email Provided!",
      }));
    }
    if (user.password === "") {
      setAlertError((prev) => ({
        ...prev,
        password: "No password provided!",
      }));
      error = true;
    }
    if (error) return;
    setLoading(true);
    const data = await onLogin(user.email, user.password);
    setLoading(false);
    if (data.success) {
      navigate("/admin");
      return;
    }
    setAlertError((prev) => ({
      ...prev,
      api: data.message,
    }));
  };

  useEffect(() => {
    if (token) {
      navigate("/admin");
    }
  }, [navigate, token]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className=" mx-auto max-w-sm bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              {alertError && alertError.email && (
                <p className="font-semibold rounded-md flex  gap-2 text-xs text-red-400 py-1 items-center mt-1 px-2 text-center">
                  <AlertTriangleIcon size={12} /> {alertError.email}
                </p>
              )}
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="enter your email"
                required
              />
            </div>
            <div className="grid gap-2">
              {alertError && alertError.password && (
                <p className="font-semibold rounded-md flex gap-2 text-xs text-red-400 py-1 items-center mt-1 px-2 text-center">
                  <AlertTriangleIcon size={12} /> {alertError.password}
                </p>
              )}
              <Label htmlFor="password">Password</Label>

              <Input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="enter your password"
                required
              />
              {alertError && alertError.api && (
                <p className="font-semibold rounded-md flex gap-2 text-xs text-red-400 py-1 items-center mt-1 px-2 text-center">
                  <AlertTriangleIcon size={12} /> {alertError.api}
                </p>
              )}
            </div>
            <Button
              disabled={loading}
              onClick={loginSubmit}
              type="submit"
              className="w-full gap-2 mb-4"
            >
              Login
              {loading && <Loader />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
