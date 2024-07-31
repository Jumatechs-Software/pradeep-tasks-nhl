import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { AlertTriangleIcon } from "lucide-react";
import useFormError from "@/hooks/useFormError";
import Loader from "@/components/Loader";
import useAuthContext from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function SignInPage() {
  const navigate = useNavigate();
  const { onLogin } = useAuthContext();
  const [alertError, setAlertError] = useFormError<{
    api?: string;
    email?: string;
    password?: string;
  }>(null);

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const data = await onLogin!(user.email, user.password);
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
              {alertError?.email && (
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
              {alertError?.password && (
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
              {alertError?.api && (
                <p className="font-semibold rounded-md flex gap-2 text-xs text-red-400 py-1 items-center mt-1 px-2 text-center">
                  <AlertTriangleIcon size={12} /> {alertError.api}
                </p>
              )}
            </div>
            <Button
              disabled={loading}
              onClick={loginSubmit}
              type="submit"
              className="w-full gap-2"
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
