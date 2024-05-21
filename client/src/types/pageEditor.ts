// Вся страница
export interface PageI {
  name: string
  components: ComponentI[]
}

// value для опшенов компонентов
type ComponentNames = 'title' |
  'subtitle' |
  'text' |
  'person-card' |
  'accordion' |
  'page-link'

// Опшены компонентов
interface ComponentsOptionsI {
  label: string
  value: ComponentNames
}

// Компонент страницы
export interface ComponentI {
  name: string
  images?: string[]
  document?: TitleI |
    SubtitleI |
    TextI |
    PersonCardI |
    AccordionListT |
    PageLinkI
}

// Компонент заголовок
export interface TitleI {
  text: string
}
export interface SubtitleI {
  text: string
}
export interface TextI {
  text: string
}
export interface PersonCardI {
  fio: string,
  position: string // Должность
  photo: string
  stepen: string
  zvanie: string
  text: string
}
interface AccordionI {
  title: string
  tags: string[]
  body: string
}
export type AccordionListT = AccordionI[]

export interface PageLinkI {
  link: string
  text: string
  isNewPage: boolean
}

// Опшены для компонентов
export const componentOptions: ComponentsOptionsI[] = [
  {
    label: 'Заголовок',
    value: 'title'
  },
  {
    label: 'Подзаголовок',
    value: 'subtitle'
  },
  {
    label: 'Текст',
    value: 'text'
  },
  {
    label: 'Персональная карточка',
    value: 'person-card'
  },
  {
    label: 'Аккордеон',
    value: 'accordion'
  },
  {
    label: 'Ссылка',
    value: 'page-link'
  },
]

// Дефолтные данные компонентов
const defaultTitle: TitleI = {
  text: ''
}
const defaultSubtitle: SubtitleI = {
  text: ''
}
const defaultText: TextI = {
  text: ''
}
const defaultPersonCard: PersonCardI = {
  fio: '',
  position: '',
  photo: '',
  stepen: '',
  zvanie: '',
  text: ''
}
const defaultAccordion: AccordionListT = [
  {
    title: '',
    tags: [],
    body: ''
  }
]
const defaultPageLink: PageLinkI = {
  link: '',
  text: '',
  isNewPage: true
}

// Список дефолтных данных компонентов
export const defaultValues: ComponentI[] = [
  {
    name: 'title',
    document: defaultTitle
  },
  {
    name: 'subtitle',
    document: defaultSubtitle
  },
  {
    name: 'text',
    document: defaultText
  },
  {
    name: 'person-card',
    images: [],
    document: defaultPersonCard
  },
  {
    name: 'accordion',
    document: defaultAccordion
  },
  {
    name: 'page-link',
    document: defaultPageLink
  }
]