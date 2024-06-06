import React, {FC, useState} from 'react';

import * as cl from './NavbarMenu.module.scss'
import {Link} from "react-router-dom";
import {Modal} from "antd";
import cn from "classnames";
import {useFacultyStore} from "src/store/facultyStore";

interface PropsI {
  open: boolean
  openHandler: () => void
}

const NavbarMenu: FC<PropsI> = ({open, openHandler}) => {

  const faculties = useFacultyStore(state => state.faculties)
  const [openDep, setOpenDep] = useState(false)
  const [openFaculty, setOpenFaculty] = useState(false)


  return (
    <Modal
      open={open}
      footer={null}
      onCancel={openHandler}
      className={cl.modal}
      classNames={{
        wrapper: cl.wrapper,
        content: cl.content,
        body: cl.body
      }}
    >
      <div className={cl.navbarMenu}>
        <Link className={cl.link} to={''}>
          Дирекция
        </Link>
        <span
          onClick={() => setOpenDep(prev => !prev)}
          className={cl.link}
        >
          Кафедры
        </span>
        <div className={cn(cl.listLink, {'open': openDep})}>
          <Link className={cl.link} to={''}>Прикладная информатика</Link>
        </div>
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
        <span
          onClick={() => setOpenFaculty(prev => !prev)}
          className={cl.link}
        >
          Факультеты
        </span>
        <div className={cn(cl.listLink, {'open': openFaculty})}>
          {faculties.map(faculty => {
            return (
              <Link className={cl.link} to={''}>{faculty.abbreviation}</Link>
            )
          })}
        </div>
        <Link className={cl.link} to={''}>
          РГГМУ
        </Link>
      </div>
    </Modal>
  );
};

export default NavbarMenu;