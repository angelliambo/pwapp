import React from 'react'
import { Container, Row, Col } from 'react-grid'
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
        <Container>
          <Row>
            <Col xs={12}>
              <CityNameObj>    
                {city.name}
                <CitySup>{city.sys.country}</CitySup>
              </CityNameObj>
            </Col>
          </Row>
        </Container>
      </ComponentWrapper>
    );
  }
}

export default CityName