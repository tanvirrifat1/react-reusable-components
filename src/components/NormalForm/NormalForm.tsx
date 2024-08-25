import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import cn from "../../ultis/cn";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { z } from "zod";

const SignUpSchema = () =>
  z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6, "Too short"),
  });

const NormalForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePassNavigator = () => {
    setShowPassword(!showPassword);
  };

  const onsubmit = (data: any) => {
    console.log(data);
  };

  const double = true;

  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className={cn("border border-gray-300  p-5 mx-auto mt-24", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn("grid grid-cols-1 justify-items-center gap-2", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label className="block text-xl" htmlFor="name">
              Name
            </label>
            <input
              className="w-full"
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs  text-red-500">Name is Required</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="block text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="w-full"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">Email is Required</span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="block text-xl" htmlFor="password">
              Password
            </label>
            <div className="relative w-full">
              <input
                required
                className="w-full pr-10"
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
              />

              <div
                className="absolute inset-y-0 right-0 pr-3 mt-2 flex items-center cursor-pointer"
                onClick={handlePassNavigator}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={24} />
                ) : (
                  <AiOutlineEye size={24} />
                )}
              </div>
            </div>
          </div>
          {/* <div className="w-full max-w-md">
            <label className="block text-xl">Other</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="w-full max-w-md">
            <label className="block text-xl">Text-Area</label>
            <textarea></textarea>
          </div> */}
          {/* <div className="w-full max-w-md">
            <label className="block text-xl">checkbox</label>
            <input type="checkbox" className="-mt-6" />
          </div> */}
        </div>

        <div className="flex justify-end my-3">
          <Button className="w-full md:w-fit" type="submit" variant="solid">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NormalForm;
