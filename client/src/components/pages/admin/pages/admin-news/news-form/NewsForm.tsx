import React, {FC, useState} from 'react';
import {useUserStore} from "src/store/userStore";
import Form from "src/components/pages/admin/pages/admin-news/news-form/Form";

interface FormAddI {
  type: 'add'
  update: () => void
  id?: number
}
interface FormEditI {
  type: 'edit'
  update: () => void
  id: number
}

type PropsT = FormAddI | FormEditI

const NewsForm: FC<PropsT> = ({
  type,
  id,
  update
}) => {

  const access = useUserStore(state => state.user.access.news)

  const [open, setOpen] = useState<boolean>(false)

  const closeHandler = () => {
    setOpen(false)
  }

  return (
    <>
      {access && (
        (type === 'add') ? (
          <button
            className={'button button_accept'}
            onClick={() => setOpen(true)}
          >
            Создать новость
          </button>
        ) : (
          <button
            className={'edit-btn'}
            onClick={() => setOpen(true)}
          />
        )
      )}
      {open && (
        <Form
          type={type}
          open={open}
          id={id}
          closeHandler={closeHandler}
          update={update}
        />
      )}
    </>
  );
};

export default NewsForm;