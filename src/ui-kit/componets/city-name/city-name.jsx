import React from 'react'
import styled from 'styled-components'
import {
  makeComponentWrapper,
  makeCityNameObj,
  makeCitySup,
} from './mixins'

const ComponentWrapper = styled.div`
  ${() => makeComponentWrapper()}
`
const CityNameObj = styled.span`
  ${(props) => makeCityNameObj(props)}
`
const CitySup = styled.sup`
  ${(props) => makeCitySup(props)}
`

export class CityName extends React.Component {
  constructor(props) {
    super(props);
}
  render (){
    const {city} = this.props
    return (
      <ComponentWrapper>
        <CityNameObj>    
          {city.name}
          <CitySup>{city.sys.country}</CitySup>
        </CityNameObj>
      </ComponentWrapper>
    );
  }
}

export default CityName