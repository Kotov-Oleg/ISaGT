import React, {FC} from 'react';

import * as cl from './NavbarMenu.module.scss'
import {Link} from "react-router-dom";
import {Modal} from "antd";

interface PropsI {
  open: boolean
  openHandler: () => void
}

const NavbarMenu: FC<PropsI> = ({open, openHandler}) => {
  return (
    <Modal
      open={open}
      footer={null}
      onCancel={openHandler}
      className={cl.modal}
      classNames={{
        wrapper: cl.wrapper,
        content: cl.content
      }}
    >
      <div className={cl.navbarMenu}>
        <Link className={cl.link} to={''}>
          Кафедры
        </Link>
        <Link className={cl.link} to={''}>
          Дирекция
        </Link>
        <Link className={cl.link} to={''}>
          Образование
        </Link>
        <Link className={cl.link} to={''}>
          Наука
        </Link>
        <Link className={cl.link} to={''}>
          Новости
        </Link>
        <Link className={cl.link} to={''}>
          Мероприятия
        </Link>
        <Link className={cl.link} to={''}>
          Часто задаваемые вопросы
        </Link>
        <Link className={cl.link} to={''}>
          Факультеты
        </Link>
        <Link className={cl.link} to={''}>
          РГГМУ
        </Link>
      </div>
    </Modal>
  );
};

export default NavbarMenu;