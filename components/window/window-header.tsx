import React, { HTMLAttributes, PropsWithChildren } from "react";

interface WindowHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const WindowHeader = ({ children, ...props }: WindowHeaderProps) => {
  return (
    <div data-tauri-drag-region {...props}>
      {children}
    </div>
  );
};

export default WindowHeader;
