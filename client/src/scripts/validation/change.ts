import dayjs, {Dayjs} from "dayjs";

// Преобразование даты для отправки на сервер
export const dateOnServer = (a: Dayjs | null): string => {
  return dayjs(a).isValid() ? a!.format('YYYY-MM-DD') : ''
}

// Преобразование даты, приходящей с сервера
export const dateOnClient = (a: string | null): string => {
  if (a) {
    return dayjs(a).format('DD.MM.YY')
  } else {
    return ''
  }
}

