import styled from 'styled-components'
import { Input } from '@rocketseat/unform'
import { colors, layout } from '../../const'

export const Home = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary}, ${colors.accent});
`

export const Wrapper = styled.div`
  /* padding: 100px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  flex: 1;
  padding: 60px;
`

export const TextBox = styled.div`
  color: black;
`

export const Heading = styled.h1`
  font-weight: bold;
  margin-bottom: 50px;
  text-align: left;
  color: ${colors.white};
  font-size: 38px;
  padding-bottom: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0%;
    height: 2px;
    width: 65%;
    background-color: ${colors.white};
  }
`

export const StyledInput = styled(Input)`
  display: block;
  width: 100%;
  border-radius: ${layout.borderRadius};
  outline: none;
  font-size: 18px;
  padding: 12px 20px;
  border: 1px solid ${colors.accent};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
