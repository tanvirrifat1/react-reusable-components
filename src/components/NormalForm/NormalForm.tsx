import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import cn from "../../ultis/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onsubmit = (data: any) => {
    console.log(data);
  };

  const double = true;

  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className={cn("border border-purple-600  p-5 mx-auto mt-24", {
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
              className="w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="block text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="w-full"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="w-full max-w-md">
            <label className="block text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="w-full"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
        </div>

        <Button type="submit" variant="solid">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NormalForm;
