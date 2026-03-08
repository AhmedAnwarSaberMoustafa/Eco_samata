import { css } from 'styled-components'

export const small = props => {
  return css`
  @media (max-width: 678px) {
    ${props}
  }
  `
}
export const tablet = props => {
  return css`
  @media (max-width: 576px) {
    ${props}
  }
  `
}