import { useForm } from "react-hook-form";
import Button from "../ui/Button";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label htmlFor="name">Name</label>
        <input
          className="border border-cyan-500"
          type="text"
          id="name"
          {...register("name")}
        />
        <Button type="submit" variant="solid">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NormalForm;
