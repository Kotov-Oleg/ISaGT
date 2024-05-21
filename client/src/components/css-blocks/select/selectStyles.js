export const selectStyles = {
  container: base => ({
    ...base
  }),
  control: base => ({
    ...base,
    alignItems: 'start',
    textAlign: 'start',
    fontSize: '1.8rem',
    paddingLeft: '1rem',
    height: '100%',
    minHeight: '2.9rem',
  }),
  valueContainer: base => ({
    ...base,
    padding: '0',
    height: '100%',
    minHeight: '2.8rem'
  }),
  input: base => ({
    ...base,
    padding: '0',
    margin: '0'
  }),
  indicatorSeparator: base => ({
    ...base,
    marginBottom: '.2rem',
    marginTop: '.2rem'
  }),
  dropdownIndicator: base => ({
    ...base,
    padding: '0',
    maxHeight: '2.8rem'
  }),
  menu: base => ({
    ...base,
    fontSize: '1.8rem',
    marginTop: '.2rem',
    marginBottom: '.2rem'
  }),
  option: base => ({
    ...base,
    padding: '0',
    paddingLeft: '1rem',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textAlign: 'start'
  }),
  menuList: base => ({
    ...base,
    padding: '0'
  }),
  noOptionsMessage: base => ({
    ...base,
    padding: '0',
    paddingLeft: '.3rem'
  })
}

export const selectControlBase = {
  alignItems: 'start',
  textAlign: 'start',
  fontSize: '1.8rem',
  paddingLeft: '1rem',
  minHeight: '3rem',
  borderRadius: '0.6rem',
  borderColor: 'var(--border-color)'
}

export const selectControlBase_form = {
  alignItems: 'start',
  textAlign: 'start',
  fontSize: '1.8rem',
  minHeight: '3rem',
  borderRadius: '0.6rem',
  borderColor: 'var(--border-color)',
  paddingLeft: '.5rem'
}

export const selectStyles_form = {
  ...selectStyles,
  input: base => ({
    ...base,
    padding: '0',
    paddingLeft: '0.2rem',
    margin: '0'
  })
}

export const item__selectControlBase = {
  ...selectStyles,
  alignItems: 'start' ,
  textA1ign: 'start' ,
  fontSize: '1.8rem' ,
  borderCoIor: ' var(--border-color)',
  paddingLeft: '1rem',
  border: '0',
  borderRadius: '0',
  minHeight: '2.8rem'
}

export const item__select = {
  ...selectStyles,
  control: base => ({
    ...base,
    ...item__selectControlBase,
    background: 'none'
  }),
  placeholder: base => ({
    ...base,
    marginLeft: '0'
  })
}

export const item__select_indicatorLess = {
  ...item__select,
  indicatorsContainer: base => ({
    ...base,
    visibility: 'hidden',
    width: '0'
  }),
  control: base => ({
    ...base,
    ...item__selectControlBase,
    background: 'none',
    height: '100%'
  }),
  container: base => ({
    ...base,
    height: '100%'
  })
}

export const item__select_stage = {
  ...selectStyles,
  container: base => ({
    ...base,
    height: '100%'
  }),
  control: base => ({
    ...base,
    ...item__selectControlBase,
    background: 'none',
    padding: '0',
    textAlign: 'center',
    minHeight: '2.7rem',
    height: '100%'
  }),
  placeholder: base => ({
    ...base,
    marginLeft: '0'
  }),
  valueContainer: base => ({
    ...base,
    padding: '0',
    minHeight: '2.7rem',
    height: '100%',
    boxSizing: 'border-box'
  }),
  indicatorsContainer: base => ({
    ...base,
    visibility: 'hidden',
    width: '0'
  }),
  option: (styles) => ({
    ...styles,
    padding: '0',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textAlign: 'center',
  })
}