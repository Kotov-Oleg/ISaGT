import React, {FC, ReactNode} from "react";

import * as cl from "./AdminMenu.module.scss";

interface PropsI {
  title: string
  button: ReactNode
}

const AdminMenu: FC<PropsI> = ({
  title,
  button
}) => {
  return (
    <div className={cl.menu}>
      <div className={cl.title}>
        {title}
      </div>
      {button}
    </div>
  );
};

export default AdminMenu;
