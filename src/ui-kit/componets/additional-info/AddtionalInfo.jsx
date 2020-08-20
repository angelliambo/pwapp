import React from 'react'
import styled from 'styled-components'
import {
  makeComponentWrapper,
  makeInfoWrapper,
  makeWeatherImage,
  makeWeatherText,
} from './mixins'

const ComponentWrapper = styled.div`
  ${() => makeComponentWrapper()}
`
const InfoWrapper = styled.div`
  ${(props) => makeInfoWrapper(props)}
`
const WeatherImage = styled.img`
  ${(props) => makeWeatherImage(props)}
`
const WeatherText = styled.p`
  ${(props) => makeWeatherText(props)}
`


export class AdditionalInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render (){
    const {info} = this.props
    const getImage = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    return (
      <ComponentWrapper>
        <InfoWrapper>
          <WeatherImage src={getImage} alt={info.weather[0].description} />
          <WeatherText>
            {info.weather[0].description}
          </WeatherText>
        </InfoWrapper>
      </ComponentWrapper>
    );
  }
}

export default AdditionalInfo