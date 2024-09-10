import { createContext } from "react";
import cn from "../../ultis/cn";
import { TForm } from "../../types";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, double }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn("border border-gray-300  p-5 mx-auto mt-24", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <h1>{children}</h1>
      </form>
    </FormElementContext.Provider>
  );
};
