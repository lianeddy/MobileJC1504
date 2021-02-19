import { Container, Content, Text } from 'native-base';
import React from 'react';
import { Grid, Row, Col } from 'react-native-easy-grid';

const Sandbox = () => {
  return (
    <Container>
      <Content>
        <Grid>
          <Col style={{ backgroundColor: 'red' }}></Col>
        </Grid>
      </Content>
    </Container>
  );
};

export default Sandbox;
