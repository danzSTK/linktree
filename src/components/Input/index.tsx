import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="border-0 h-9 rounded-md outline-none bg-white px-2 mb-3"
      {...props}
    />
  );
};

export default Input;
