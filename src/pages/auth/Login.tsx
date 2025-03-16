import React, { useState } from "react";
import { Link } from "react-router-dom";
import backG from "../../assets/acount.jpeg";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authApi";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Simple form validation
    let formIsValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      formIsValid = false;
      newErrors.email = "Email is required";
    }

    if (!password) {
      formIsValid = false;
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      formIsValid = false;
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log("Form is valid, submitting...");
      const response = await login(email, password);
      console.log(response);
      if (response == true) {
        navigate("/dashboard");

        toast.success("Login successfully!");
      } else {
        toast.error("Wrong Credentials!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg grid grid-cols-1 md:grid-cols-2 justify-center flex-1">
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backG}')` }}
        ></div>

        <div className="p-6 sm:p-12">
          <div className="w-full flex justify-center">
            <a
              href="/"
              className="cursor-pointer text-center font-semibold text-3xl "
            >
              Jes.Group
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <div className="max-w-md w-full flex justify-start">
              <h1 className="text-2xl xl:text-3xl">Sign In</h1>
            </div>

            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-md">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium border border-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="user@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center justify-between">
                      <label htmlFor="password">Password</label>{" "}
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                        className="text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-6 h-6" />
                        ) : (
                          <Eye className="w-6 h-6" />
                        )}
                      </button>
                    </div>

                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium border border-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password}</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-xs text-gray-600">
                      <Link
                        to="/forgot-password"
                        className="text-third font-semibold"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      className="w-full py-3 px-6 rounded-full bg-buttonColor text-white text-lg"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
