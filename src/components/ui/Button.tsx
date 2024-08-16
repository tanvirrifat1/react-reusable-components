import cn from "../../ultis/cn";

type IButton = {
  className: string;
  outline: boolean;
};

const Button = ({ className, outline, variant }: IButton) => {
  const getVariant = () => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";

      default:
        return "btn-solid";
    }
  };

  return <button className={cn(getVariant(variant), className)}>Click</button>;
};

export default Button;
