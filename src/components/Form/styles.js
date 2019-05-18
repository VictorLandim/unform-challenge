import styled from 'styled-components'
import { Input } from '@rocketseat/unform'
import { colors, layout } from '../../const'

export const StyledForm = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  background-color: ${colors.white};
  box-shadow: 0px 3px 15px 0px rgba(${colors.shadow}, 0.2);
  border-radius: 20px;
  padding: 30px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: ${colors.grayDark};
  }

  button[type='submit'] {
    border-radius: ${layout.borderRadius};
    display: block;
    width: 100%;
    background-color: ${colors.primary};
    color: ${colors.white};
    border: none;
    outline: none;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    padding: 20px;
    transition: 0.3s all;
    margin-top: 40px;

    &:hover {
      transform: scale(1.05);
    }
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
