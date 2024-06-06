import React, {useState} from 'react';
import BurgerIcon from '../../../data/icons/burger.svg'
import * as cl from './Navbar.module.scss'
import {NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import ecoDayImg from '../../../data/images/день эколога.png'
import snoImg from '../../../data/images/сно рггму.png'
import internshipImg from '../../../data/images/стажиовки.jpg'
import {direkciyaRoute, educationRoute, kafedryRoute, scienceRoute} from "src/routes/defaultRoutes";
import NavbarMenu from "src/components/react-blocks/navbar/navbar-menu/NavbarMenu";
import {baseURL} from "src/api";
import Slider from "react-slick";

const Navbar = () => {
  const {faculty} = useParams()
  let location = useLocation()
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className={cl.gradientContainer}>
        <div className={cl.navbar}>
          <div className={cl.navbarContent}>
            <div className={cl.titleContainer}>
              <div className={cl.btnContainer}>
                <BurgerIcon
                  onClick={openHandler}
                  color={'white'}
                  className={cl.burgerBtn}
                />
              </div>
              <NavLink className={cl.title} to={faculty}>
                ИСиГТ
              </NavLink>
            </div>
            <div className={cl.navigation}>
              <NavLink className={cl.link} to={`${faculty}/${direkciyaRoute}`}>
                Дирекция
              </NavLink>
              <NavLink className={cl.link} to={`${faculty}/${kafedryRoute}`}>
                Кафедры
              </NavLink>
              <NavLink className={cl.link} to={`${faculty}/${educationRoute}`}>
                Образование
              </NavLink>
              <NavLink className={cl.link} to={`${faculty}/${scienceRoute}`}>
                Наука
              </NavLink>
            </div>
          </div>
        </div>
        {location.pathname === '/isagt' && (
          <Slider
            className={cl.slider}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            // autoplay={true}
            autoplaySpeed={6000}
          >
            {/*Слайд 1*/}
            <div className={cl.slide}>
              <div className={cl.leftSlide}>
                <div className={cl.slideTitle}>
                  «День Эколога – 2024»
                </div>
                <div className={cl.slideBody}>
                  Городской экологический фестиваль
                </div>
              </div>
              <div className={cl.rightSlide}>
                <img
                  className={cl.photo}
                  src={ecoDayImg}
                  alt=""
                />
              </div>
            </div>
            {/*Слайд 2*/}
            <div className={cl.slide}>
              <div className={cl.leftSlide}>
                <div className={cl.slideTitle}>
                  Итоговое заседание Студенческого научного общества РГГМУ
                </div>
                <div className={cl.slideBody}>
                  7 мая 2024 г. состоялось ежегодное итоговое заседание СНО
                </div>
              </div>
              <div className={cl.rightSlide}>
                <img
                  className={cl.photo}
                  src={snoImg}
                  alt=""
                />
              </div>
            </div>
            {/*Слайд 3*/}
            <div className={cl.slide}>
              <div className={cl.leftSlide}>
                <div className={cl.slideTitle}>
                  СТАЖИРОВКИ ДЛЯ СТУДЕНТОВ УЖЕ ЖДУТ!
                </div>
                <div className={cl.slideBody}>
                  Проект «Профразвитие» президентской платформы «Россия - страна возможностей» запускает второй сезон стажировок в лучшие компании страны!
                </div>
              </div>
              <div className={cl.rightSlide}>
                <img
                  className={cl.photo}
                  src={internshipImg}
                  alt=""
                />
              </div>
            </div>
          </Slider>
        )}
      </div>
      <NavbarMenu open={open} openHandler={openHandler}/>
      <Outlet/>
    </>

  );
};

export default Navbar;