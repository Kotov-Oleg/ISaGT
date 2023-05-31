import React, {useState, useEffect} from 'react'
import {Modal} from 'antd';
import { createNews } from '../../http/newsAPI'
import './news.css'



const NewsForm = (props) => {




  const data = props.data || {}      // данные формы
  // управление отображение формы 
  const [show, setShow] = useState(false);     // параметр открытия формы
  const handleClose = () => setShow(false);    // закрытие формы 
  const handleShow  = () => setShow(true);     // открытие формы

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose()
  }

  




  // Выход из формы по Esc
  useEffect(() => {
    const close = (e) => {
      if(e.code === 'Escape'){
        handleClose()
      }
    }
    window.addEventListener('keydown', close, true)
    return () => window.removeEventListener('keydown', close)
  }, []);

  
  // форма --------------------------------------------------------------------------------
  const Form = (props) => {

    // стейт формы
    const [formData, setFormData] = useState({
      id: '',
      title: '',
      text: '',
      cover_path: '',
      description: '',
      media_path: '' 
    });


    // Обработка кнопки редактирования проекта
    const handleCreateNews = async () => {
      await createNews(formData)
    }


    return (
      <Modal
        open={show}
        footer={null}
        closable={false}
        className=''
      >
        <div className='modal-header'>Создание новости</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 d-flex justify-content-between">
            <label classname='' style={{width: '12rem'}}>Заголовок</label>
            <input required style={{width: '34rem'}}
              id='title-input'
              autoComplete="off"
              value={formData.title}
              onChange={(e) => {
                console.log(e.target.value); 
                setFormData({
                ...formData,
                title: e.target.value
              })}}
            />
          </div>
          
          <div className="mb-2 d-flex justify-content-between">
            <label classname='' style={{width: '12rem'}}>Краткое описание</label>
            <textarea
              required res
              style={{
                lineHeight: 'normal',
                paddingLeft: '1rem',
                borderRadius: '.4rem',
                width: '34rem',
                minHeight: '2.9rem',
                height: '7rem',
                maxHeight: '13rem', 
                paddingTop: '0',
                paddingBottom: '0',
                overflowY: 'auto'
              }}
              id='name-input'
              maxLength="150"
              value = {formData.text}
              onChange={(e) => {
                setFormData({...formData, text: e.target.value})
              }}
            />
          </div>
          <div className="mb-2 d-flex justify-content-between">
            <label classname='' style={{width: '12rem'}}>Заставка</label>
            <input type="file"
              value={formData.cover_path}
              onChange={(e) => {
                console.log(e.target.value); 
                setFormData({
                ...formData,
                cover_path: e.target.value
              })}}
            />
            {/* <input required style={{width: '34rem'}}
              id='title-input'
              autoComplete="off"
              value={formData.cover_path}
              onChange={(e) => {
                console.log(e.target.value); 
                setFormData({
                ...formData,
                cover_path: e.target.value
              })}}
            /> */}
          </div>
          <div className="mb-2 d-flex justify-content-between">
            <label classname='' style={{width: '12rem'}}>Текст</label>
            <textarea
              required res
              style={{
                lineHeight: 'normal',
                paddingLeft: '1rem',
                borderRadius: '.4rem',
                width: '34rem',
                minHeight: '2.9rem',
                height: '7rem',
                maxHeight: '13rem', 
                paddingTop: '0',
                paddingBottom: '0',
                overflowY: 'auto'
              }}
              id='name-input'
              maxLength="150"
              value = {formData.description}
              onChange={(e) => {
                setFormData({...formData, description: e.target.value})
              }}
            />
          </div>
          <div className="mb-2 d-flex justify-content-between">
            <label classname='' style={{width: '12rem'}}>Загрузка фото</label>
            <input required style={{width: '34rem'}}
              id='title-input'
              autoComplete="off"
              value={formData.media_path}
              onChange={(e) => {
                console.log(e.target.value); 
                setFormData({
                ...formData,
                media_path: e.target.value
              })}}
            />
          </div>
          <div className='mt-2' style={{justifyContent: 'space-between', display: 'flex'}}>
              {/* Кнопка сохранения изменений */}
              <button
                className="form-btn"
                type="submit"
                onClick={() => handleCreateNews()}
              >
                Сохранить
              </button>
            </div>
        </form>
      </Modal>
    )
  }
  return (
    <div className=''>
      <button className='' onClick={handleShow}>
        Создать
      </button>
      <Form show={show} onHide={handleClose}/>
    </div>
  )
}

export default NewsForm;