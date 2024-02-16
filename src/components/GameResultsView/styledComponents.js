import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  margin-top: 50px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-left: 13px;
  }
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  outline: none;
  border-style: none;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`
export const GameImage = styled.img`
  width: 100px;
  height: 100px;
`
export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  @media screen and (max-width: 567px) {
    width: 100px;
  }
`

export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 49x;
  font-weight: bold;
`
