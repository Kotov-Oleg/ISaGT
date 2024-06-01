import React, {ReactNode, useEffect, useState} from 'react';
import {useFetchData} from "src/scripts/fetchData";
import {getSliders} from "src/api/sliderAPI";
import AdminMenu from "src/components/pages/admin/admin-menu/AdminMenu";

import * as cl from './AdminSlider.module.scss'
import cn from "classnames";
import SliderHead from "src/components/pages/admin/pages/admin-slider/slider-head/SliderHead";
import SliderLine from "src/components/pages/admin/pages/admin-slider/slider-line/SliderLine";

const AdminSlider = () => {
  const {data, update} = useFetchData(() => getSliders(1))
  const [sliderComponents, setSliderComponents] = useState<ReactNode[]>([])

  useEffect(() => {
    if (data) {
      let newComponents: ReactNode[] = []
      data.forEach(slider => {
        newComponents.push(<SliderLine
          key={slider.id}
          update={update}
          {...slider}
        />)
      })
      setSliderComponents(newComponents)
    }
  }, [data]);

  return (
    <div>
      <AdminMenu
        title={'Редактирование слайдов'}
        button={<></>}
      />
      <table className={cn('table', cl.table)}>
        <SliderHead/>
        <tbody>
          {sliderComponents}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSlider;