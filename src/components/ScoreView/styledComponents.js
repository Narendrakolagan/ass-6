import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const ScoreName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: Bree Serif;
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: #ffffff;
  width: 16%;
  height: 80%;
  border-radius: 10px;
  align-items: center;
  margin-right: 30px;
  @media screen and (max-width: 576px) {
    width: 100px;
  }
`
export const ScoreHeading = styled.p`
  font-size: 15px;
  color: #223a5f;
  margin-bottom: 0px;
  font-family: Roboto;
  font-size: 20px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 10px;
  font-family: Roboto;
`
