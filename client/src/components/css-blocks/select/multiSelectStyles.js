import {selectControlBase_form, selectStyles_form} from "./selectStyles";

export const multiSelect_departments = {
  ...selectStyles_form,
  container: base => ({
    ...base,
    height: '3.2rem',
  }),
  control: base => ({
    ...base, ...selectControlBase_form,
    padding: '0',
    width: '23rem'
  }),
  option: base => ({
    ...base,
    padding: '0',
    paddingLeft: '1rem',
    textAlign: 'start'
  }),
  indicatorsContainer: base => ({
    ...base
  }),
  clearIndicator: base => ({
    ...base,
    padding: '0'
  }),
  multiValueLabel: base => ({
    ...base,
    color: 'white'
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      lineHeight: '1.9rem',
      borderRadius: '0.5rem',
      backgroundColor: data.color,
      color: 'white',
      margin: '2px 0',
      marginLeft: '2px'
    }},
  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      backgroundColor: '#00000033',
      color: 'white',
      borderRadius: '.5rem',
    },
  }),
  menu: base => ({
    ...base,
    margin: '0.2rem 0'
  }),
  placeholder: base => ({
    ...base,
    paddingLeft: '.5rem'
  })
}


export const multiSelect_employees = {
  ...selectStyles_form,
  container: base => ({
    ...base,
    minHeight: '2.8rem'
  }),
  control: base => ({
    ...base,
    alignItems: 'start',
    fontSize: '1.8rem',
    borderRadius: '0',
    border: 'none',
    height: '100%',
    paddingLeft: '.8rem',
    textAlign: 'start',
    minHeight: '2.8rem'
  }),
  option: base => ({
    ...base,
    padding: '0',
    paddingLeft: '1rem',
    textAlign: 'start'
  }),
  indicatorsContainer: base => ({
    ...base
  }),
  clearIndicator: base => ({
    ...base,
    padding: '0'
  }),
  multiValue: base => ({
    ...base,
    height: '2rem',
    lineHeight: '1.6rem'
  }),
  menu: base => ({
    ...base,
    margin: '0.2rem 0',
    width: '20rem',
    right: '0'
  })
}