import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const PasswordInput = ({ errors, label, register, id }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassNavigator = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full max-w-md">
      <label className="block text-xl" htmlFor="password">
        {label}
      </label>
      <div className="relative w-full">
        <input
          className="w-full pr-10"
          type={showPassword ? "text" : "password"}
          id={id}
          {...register}
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
        {errors?.password && (
          <span className="text-xs text-red-600">
            {errors?.password?.message}
          </span>
        )}
      </div>
    </div>
  );
};
