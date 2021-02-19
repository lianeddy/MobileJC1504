import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Center from '../helpers/Center';
// import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'react-native';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Text,
  View,
} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { TextInput } from 'react-native';
import { loginAction } from '../redux/actions';
import { Dimensions } from 'react-native';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  return (
    <Container>
      <Header></Header>
      {/* <Header>
        <Left>
          <Button>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Text>My App</Text>
        </Body>
        <Right>
          <Button>
            <Icon name="home" type="FontAwesome" />
          </Button>
        </Right>
      </Header> */}
      <Content>
        <View
          style={{
            height: Dimensions.get('screen').height / 2,
          }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="barcode" style={{ fontSize: 200, color: '#3f51b5' }} />
          </View>
        </View>
        <View>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Button full>
              <Text>Login</Text>
            </Button>
            <Button
              iconLeft
              full
              style={{ backgroundColor: '#3b5998' }}
              onPress={() => navigation.navigate('Register')}>
              <Icon name="users" type="FontAwesome" />
              <Text>Register</Text>
            </Button>
            <Button iconLeft full style={{ backgroundColor: '#323232' }}>
              <Icon name="github" type="FontAwesome" />
              <Text>Login with Github</Text>
            </Button>
          </Form>
        </View>
      </Content>
      {/* <Footer></Footer> */}
    </Container>
    // <Center>
    //   <Text>Login</Text>
    //   <TextInput onChangeText={(e) => setUsername(e)} />
    //   <Button dark onPress={() => console.log('Login Button')}>
    //     <Text>Login</Text>
    //   </Button>
    //   <Button
    //     title="To Register"
    //     onPress={() => navigation.replace('Register')}
    //   />
    // </Center>
  );
};
const RegisterScreen = ({ navigation }) => {
  return (
    <Grid>
      <Header></Header>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="barcode" style={{ fontSize: 200, color: '#3f51b5' }} />
      </Row>
      <Row>
        <Container>
          <Content>
            <Form>
              <Item>
                <Icon name="heart" />
                <Input placeholder="Username" />
              </Item>
              <Item>
                <Icon name="mail" />
                <Input placeholder="Email" />
              </Item>
              <Item>
                <Icon name="lock-closed" />
                <Input placeholder="Password" secureTextEntry />
              </Item>
              <Item>
                <Icon name="lock-closed" />
                <Input placeholder="Confirm Password" secureTextEntry />
              </Item>
              <Button full>
                <Text>Register</Text>
              </Button>
              <Button full onPress={() => navigation.navigate('Login')}>
                <Text>To Login</Text>
              </Button>
            </Form>
          </Content>
          <Footer>
            {/* <Button>
              <Text>Register</Text>
            </Button>
            <Button>
              <Text>To Login</Text>
            </Button> */}
          </Footer>
        </Container>
      </Row>
    </Grid>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </Center>
  );
};

const AuthStack = () => {
  const { isSignedIn } = useSelector((state) => state.auth);
  if (isSignedIn === true) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    );
  }
  //   return (
  //     <Stack.Navigator>
  //       {isSignedIn ? (
  //         <>
  //           <Stack.Screen name="Home" component={HomeScreen} />
  //         </>
  //       ) : (
  //         <>
  //           <Stack.Screen name="Login" component={LoginScreen} />
  //           <Stack.Screen name="Register" component={RegisterScreen} />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   );
};

export default AuthStack;
