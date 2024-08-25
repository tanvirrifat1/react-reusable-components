import { useForm } from "react-hook-form";
import Button from "../ui/Button";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="border border-purple-600 max-w-5xl p-5 mx-auto mt-24"
      >
        <div className=" grid grid-cols-2 gap-2">
          <div>
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
          <div>
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
          <div>
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
