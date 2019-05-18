import styled, { keyframes } from 'styled-components'

const pulsate = keyframes`
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.02);
    }

    100% {
      transform: scale(1);
    }
`
export const Wrapper = styled.div`
  border-radius: 15px !important;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.5);
  animation: ${pulsate} 2s infinite;
`
export const Content = styled.div`
  background-color: #282a36;
  padding: 10px;
`
export const Header = styled.div`
  background-color: #cfd8dc;
  padding: 8px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`
export const Button = styled.div`
  width: 10px;
  height: 10px;
  background-color: black;
  margin-right: 7px;
  border-radius: 50%;

  &:nth-of-type(1) {
    background-color: #ff5555;
  }

  &:nth-of-type(2) {
    background-color: #ffea00;
  }
  &:nth-of-type(3) {
    background-color: #00e676;
  }
`

export const Title = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 12px;
  color: #616161;
`
