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
              className="w-full"
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
          <div className="w-full max-w-md">
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
          </div>
          <div className="w-full max-w-md">
            <label className="block text-xl">checkbox</label>
            <input type="checkbox" />
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
