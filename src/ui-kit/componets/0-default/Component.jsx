import React from 'react'
import { Container, Row, Col } from 'react-grid'
import styled from 'styled-components'
import {
  makeComponentWrapper,

} from './mixins'

const ComponentWrapper = styled.div`
  ${() => makeComponentWrapper()}
`

export class Component extends React.Component {
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
              <h1>Hola</h1>
            </Col>
          </Row>
        </Container>
      </ComponentWrapper>
    );
  }
}

export default Component