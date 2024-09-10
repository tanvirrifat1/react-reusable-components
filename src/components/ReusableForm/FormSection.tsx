import { useContext } from "react";
import cn from "../../ultis/cn";
import { FormElementContext } from "./Form";

export const FormSection = ({ children }: any) => {
  const context = useContext(FormElementContext);

  const double = context?.double ?? false;

  return (
    <div
      className={cn("grid grid-cols-1 justify-items-center gap-2", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
