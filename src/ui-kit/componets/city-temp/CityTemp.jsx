import React from 'react'
import styled from 'styled-components'
import {
  makeComponentWrapper,
  makeCurrentTemperature,
  makeDegrees,
} from './mixins'

const ComponentWrapper = styled.div`
  ${() => makeComponentWrapper()}
`
const CurrentTemperature = styled.div`
  ${(props) => makeCurrentTemperature(props)}
`
const Degrees = styled.sup`
  ${() => makeDegrees()}
`
export class CityTemp extends React.Component {
  constructor(props) {
    super(props);
}
  render (){
    const {temperature} = this.props
    return (
      <ComponentWrapper>
        <CurrentTemperature>
          {Math.round(temperature.main.temp)}
          <Degrees>&deg;C</Degrees>
        </CurrentTemperature>
      </ComponentWrapper>
    );
  }
}

export default CityTemp