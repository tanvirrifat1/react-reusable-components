import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full mx-auto max-w-7xl  ">
      <h1>{children}</h1>
    </div>
  );
}

export default Container;
