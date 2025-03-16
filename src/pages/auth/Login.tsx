import React, { useState } from "react";
import { Link } from "react-router-dom";
import backG from "../../assets/acount.jpeg";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authApi";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <a href="../index.html" className="cursor-pointer">
            Jes.Group
          </a>
          <div className="mt-12 flex flex-col items-center">
            <div className="max-w-md w-full flex justify-start">
              <h1 className="text-2xl xl:text-3xl">Sign In</h1>
            </div>

            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col gap-4 items-center">
                <button className="w-full max-w-md font-bold rounded-full py-3 border text-gray-900 flex items-center justify-center focus:outline-none">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Continue with Google</span>
                </button>
                <button className="w-full max-w-md font-bold rounded-full py-3 border text-gray-900 flex items-center justify-center focus:outline-none">
                  <div className="bg-white p-2 rounded-full">
                    <svg
                      className="w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 -4 48 48"
                      version="1.1"
                    >
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-300.000000, -164.000000)"
                          fill="#00AAEC"
                        >
                          <path
                            d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                            id="Twitter"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="ml-4">Continue with Twitter</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or
                </div>
              </div>

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
                    <label htmlFor="password">Password</label>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium border border-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="password"
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
                      <label>
                        <input type="checkbox" className="mr-1" />
                        Remember me
                      </label>
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
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-third font-semibold">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
