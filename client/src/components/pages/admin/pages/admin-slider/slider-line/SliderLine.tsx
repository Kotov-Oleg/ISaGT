import React, {FC} from 'react';
import {SliderI} from "src/api/sliderAPI";

interface PropsI extends SliderI {
  update: () => void
}

const SliderLine: FC<PropsI> = ({
  id,
  img,
  link,
  title,
  body  ,
  update
}) => {

  const deleteHandler = async () => {

  }

  return (
    <tr>
      <td>{title}</td>
      <td className={'table__between'}>
        {/*<NewsForm type={'edit'} id={id} update={update}/>*/}
        <button
          onClick={deleteHandler}
          className={'delete-btn'}
        />
      </td>
    </tr>
  );
};

export default SliderLine;