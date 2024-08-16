type IButton = {
  className: string;
};

const Button = ({ className }: IButton) => {
  return <button className={`bg-red-500 ${className}`}>Click</button>;
};

export default Button;
