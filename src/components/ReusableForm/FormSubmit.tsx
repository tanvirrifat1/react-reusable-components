import Button from "../ui/Button";

export const FormSubmit = () => {
  return (
    <div className="flex justify-end my-3">
      <Button className="w-full md:w-fit" type="submit" variant="solid">
        Submit
      </Button>
    </div>
  );
};
