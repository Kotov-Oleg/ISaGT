import React, {CSSProperties, FC, memo, useEffect, useRef, useState} from 'react';
import cn from 'classnames';

import './textarea.scss'
import {useFormContext, UseFormRegisterReturn} from "react-hook-form";

interface PropsI {
  name: string
  minHeight?: number  // Начальная высота
  className?: string
  placeholder?: string
  maxLength?: number
  warning?: boolean  // Ошибка
  fontSize?: number  // Размер текста
  rowCount?: number  // Количество строк
  lineRatio?: number // Коэффициент высоты строки
  style?: CSSProperties
  disabled?: boolean
}

const TextArea: FC<PropsI> = memo(({
  name,
  className = '',
  placeholder = '',
  minHeight = 30,
  maxLength,
  warning = false,
  fontSize = 18,
  rowCount = 5,
  lineRatio = 1.3,
  style,
  disabled
}) => {

  const {register, watch} = useFormContext()
  const {onChange, onBlur, ref: textareaRef} = register(name)
  const value = watch(name)
  // const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [maxHeight, setMaxHeight] = useState<number>(() => fontSize * lineRatio * rowCount + 2)

  // Вычисление высоты
  useEffect(() => {

    // @ts-ignore
    if (textareaRef.current) {
      // Устанавливаем дефолтные параметры
      // @ts-ignore
      textareaRef.current.style.height = minHeight + 'px';
      // @ts-ignore
      textareaRef.current.style.lineHeight = String(lineRatio)
      // @ts-ignore
      const newHeight = textareaRef.current.scrollHeight
      // Для многострочного варианта устанавливаем высоту
      if (newHeight > minHeight) {
        // @ts-ignore
        textareaRef.current.style.height = `${2 + newHeight}px`

      // Для односторного варианта устанавливаем высоту строки для центрирования
      } else {
        // @ts-ignore
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
      ref={textareaRef}
      maxLength={maxLength}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
});

export default TextArea;