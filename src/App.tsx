import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  NameInput,
  PasswordInput,
} from "./components/ReusableForm";
import Container from "./components/ui/Container";

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Form
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <NameInput
            type="text"
            register={register("name")}
            errors={errors}
            label="Name"
            id="name"
          />
          <NameInput
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
            id="email"
          />
          <PasswordInput
            register={register("password")}
            errors={errors}
            label="Password"
            id="password"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
};

export default App;
