export const selectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary50: '#5592b020',
    primary25: '#5592b020',
    primary: '#5592b0aa',
  }
})