import React, {CSSProperties, FC, memo, useEffect, useRef, useState} from 'react';
import cn from 'classnames';

import './textarea.scss'

interface PropsI {
  value: string
  callback: (a: string) => void
  minHeight?: number  // Начальная высота
  className?: string
  placeholder?: string
  maxLength?: number
  warning?: boolean  // Ошибка
  fontSize?: number  // Размер текста
  rowCount?: number  // Количество строк
  lineRatio?: number // Коэффициент высоты строки
  onBlur?: () => void // Функция blur для валидации
  style?: CSSProperties
  disabled?: boolean
}

const TextArea: FC<PropsI> = memo(({
  className = '',
  placeholder = '',
  value,
  callback,
  minHeight = 30,
  maxLength,
  warning = false,
  fontSize = 18,
  rowCount = 5,
  lineRatio = 1.3,
  onBlur,
  style,
  disabled
}) => {

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [maxHeight, setMaxHeight] = useState<number>(() => fontSize * lineRatio * rowCount + 2)

  // Вычисление высоты
  useEffect(() => {
    if (textareaRef.current) {
      // Устанавливаем дефолтные параметры
      textareaRef.current.style.height = minHeight + 'px';
      textareaRef.current.style.lineHeight = String(lineRatio)
      const newHeight = textareaRef.current.scrollHeight
      // Для многострочного варианта устанавливаем высоту
      if (newHeight > minHeight) {
        textareaRef.current.style.height = `${2 + newHeight}px`

      // Для односторного варианта устанавливаем высоту строки для центрирования
      } else {
        textareaRef.current.style.lineHeight = minHeight - 2 + 'px'
      }
    }
  }, [lineRatio, minHeight, value]);

  return (
    <textarea
      className={cn(
        'textarea',
        {'textarea_warning': warning},
        className
      )}
      style={{
        fontSize: fontSize + 'px',
        maxHeight: maxHeight + 'px',
        ...style
      }}
      placeholder={placeholder}
      value={value}
      onChange={e => callback(e.target.value)}
      ref={textareaRef}
      maxLength={maxLength}
      onBlur={onBlur}
      disabled={disabled}
    />
  );
});

export default TextArea;