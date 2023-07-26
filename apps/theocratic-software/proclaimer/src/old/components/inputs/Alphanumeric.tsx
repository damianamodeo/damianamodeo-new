import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import widths, { WidthsType } from "./styles2/widths";
import heights, { HeightsType } from "./styles2/heights";
import { useState } from "react";

type AlphanumericType = {
  label: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
  value: string;
  onChange: (argument: any) => any;
  placeholder?: string;
  width?: WidthsType;
  height?: HeightsType;
  ref?: any
};

const Alphanumeric = ({
  label,
  register,
  error,
  value,
  onChange,
  placeholder,
  width = "md",
  height = "md",
  ref
}: AlphanumericType) => {
  return (
    <>
      <label> {label}</label>
      <input
        className={`${widths[width]} ${heights[height]} dark:text-white dark:bg-neutral-700 bg-neutral-200 rounded p-2`}
        type="text"
        pattern="^[a-zA-Z0-9]*$"
        value={value}
        onChange={(e) =>{
          onChange(e.target.value.replace(/[^\w\s]/gi, "").replace(/[\s]/g, ""))}
        }
        {...register}
        placeholder={placeholder}
        // ref={ref}
      />
      {error && <span className="Number-red-500"> {error.message}</span>}
    </>
  );
};

export default Alphanumeric;
