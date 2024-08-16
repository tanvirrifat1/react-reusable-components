import cn from "../../ultis/cn";

type IButton = {
  className: string;
  outline: boolean;
};

const Button = ({ className, outline }: IButton) => {
  return (
    <button
      className={cn(
        `text-white bg-orange-600 text-xl px-5 py-2 rounded-lg `,
        {
          "border text-black border-purple-600 bg-opacity-10": outline,
        },
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;
