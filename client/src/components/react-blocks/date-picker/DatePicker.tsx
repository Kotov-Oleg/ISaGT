import React, {CSSProperties, FC, memo, ReactNode, useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import cn from 'classnames';

// Импорт CSS
import './date-picker.scss'

// Импорт компонентов Ant Design
import locale from 'antd/es/date-picker/locale/ru_RU';
import {DatePicker as Picker} from 'antd';


export type PickerType = 'date' | 'week' | 'month' | 'quarter' | 'year'

interface PropsI {
  editable?: boolean                        // Редактирование (отображение) / можно передавать доступ
  calendarIcon?: boolean                    // Иконка календаря
  cleanable?: boolean                       // Иконка очистки
  border?:boolean                           // Границы дейтпикера
  redText?:boolean                          // Красный текст
  checkbox?: boolean                        // Чекбокс для выставления текущей даты
  focusOutline?: boolean                    // Outline при фокусе
  disabled?: boolean                        // Выключение возможности редактирования
  checkboxValue?: boolean                   // Значение чекбокса
  todayButton?: boolean                     // Кнопка "Сегодня" в футере
  warning?: boolean                         // Ошибка

  emptyText?: string
  textAlign?: 'center' | 'left'             // Отображение по центру
  placeholder?: string                      // Плейсхолдер дейтпикера
  classNameContainer?: string               // Класс контейнера оборачивающего дейтпикер
  styleContainer?: CSSProperties            // Стили контейнера
  datePickerStyle?: CSSProperties           // Стили дейтпикера
  value: Dayjs | null                       // Дата
  pickerType?: PickerType                   // Тип отображаемого дейтпикера
  dateFormat?: string                       // Формат даты
  callback?: (a: Dayjs | null) => void      // Общий callback для дейтпикера и чекбокса
  checkboxCallback?: (a: boolean) => void   // Callback для чекбокса
  footer?: ReactNode                        // Компонент для футера
  onBlur?: () => void
  open?: boolean
  openCallback?: (open: boolean) => void
}

const DatePicker : FC<PropsI> = memo(({
  editable     = true,
  calendarIcon = false,
  cleanable    = false,
  border       = true,
  redText      = false,
  checkbox     = false,
  focusOutline = true,
  disabled     = false,
  warning      = false,

  emptyText= '-',
  textAlign          = 'left',
  placeholder        = '',
  classNameContainer = '',
  styleContainer     = {},
  datePickerStyle    = {},
  value,
  checkboxValue      = null,
  pickerType         = 'date',
  dateFormat         = 'DD.MM.YY',
  callback           = null,
  checkboxCallback   = null,
  footer             = null,
  todayButton        = false,
  onBlur,
  open = false,
  openCallback
}) => {

  const [openPicker, setOpenPicker] = useState(false);

  useEffect(() => {
    setOpenPicker(open)
  }, [open]);

  useEffect(() => {
    // Выход из формы по Esc
    const close = (e : any) => {
      if(e.code === 'Escape'){
        if (openCallback) openCallback(false)
      }
    }
    window.addEventListener('keydown', close, true)
  }, []);

  return (
    <div
      className={cn('date-picker-component', classNameContainer)}
      style = {{
        textAlign: textAlign,
        paddingLeft: '1rem',
        paddingRight: '1rem',

        ...styleContainer
      }}
    >
      {editable ? (
        <Picker
          open={openPicker}
          onOpenChange={open => {
            setOpenPicker(open)
            if (openCallback) openCallback(open)
          }}
          placeholder={placeholder}
          picker={pickerType}
          locale={locale}
          format={dateFormat}
          disabled={disabled}
          value={value}
          onChange={(d) => {
            if (callback) callback(d)
          }}
          style={{
            border: `${border ? '' : 'none'}`,
            borderRadius: `${border ? '.5rem' : '0'}`,
            boxShadow : 'none',
            background: border ? '' : 'none',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            paddingRight: '.2rem',
            ...datePickerStyle
          }}
          className={cn(
            'date-picker',
            {
              'red': redText,
              'center': textAlign === 'center',
              'calendar': calendarIcon,
              'notCleanable': !cleanable,
              'focus-outline': focusOutline,
              'date-picker_warning': warning
            })}
          popupClassName={cn(
            'popup-date-picker-component',
            {'today-button-disabled': !todayButton}
          )}
          renderExtraFooter={() => footer}
          onBlur={onBlur}
        />
      ) : (
        <div style={{color: redText ? 'red' : 'none'}}>
          {value?.isValid() ? value.format('DD.MM.YY') : emptyText}
        </div>
      )}
      {checkbox && editable && (
        <input
          type={'checkbox'}
          className={'checkbox'}
          checked={checkboxValue === null ? value?.isValid() : checkboxValue}
          disabled={!editable || disabled}
          onChange={() => {

            // Если у чекбокса отдельный стейт
            if (checkboxCallback && checkboxValue !== null) {
              checkboxCallback(!checkboxValue)
            } else if (callback) { // Если чекбокс выполняет функцию пикера (ставит текущую дату)
              let d = value?.isValid() ? null : dayjs()
              callback(d)
            }
          }}
        />
      )}

    </div>
  );
});

export default DatePicker;