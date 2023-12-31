import { ReactNode } from "react";

type HeaderType = {
    left: string | ReactNode;
    center: string | ReactNode;
    right: string | ReactNode;
  };
  
  export const Header = ({ left, center, right }: HeaderType) => {
    return (
      <div className={`h-full flex place-items-center dark:text-white`}>
        <div className={`h-full flex place-items-center p-2 w-32`}>{left}</div>
        <div className={`h-full flex place-items-center m-auto`}>{center}</div>
        <div className={`h-full flex place-items-center p-2 w-32`}>{right}</div>
      </div>
    );
  };