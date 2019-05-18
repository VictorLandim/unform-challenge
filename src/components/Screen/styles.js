import styled from 'styled-components'
import { colors } from '../../const'

export default styled.section`
  height: 100vh;

  background-image: linear-gradient(
    105deg,
    ${colors.white} 50%,
    ${colors.primary} 50%,
    ${colors.secondary} 100%
  );
  /* odd */
  &:nth-child(2n + 1) {
    background-image: linear-gradient(
      75deg,
      ${colors.primary} 0%,
      ${colors.secondary} 50%,
      ${colors.white} 50%
    );
  }
`
