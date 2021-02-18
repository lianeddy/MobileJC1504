import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CartScreen, HomeScreen } from '../screens';
import { ProductStack } from '.';

const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator drawerType="slide" drawerPosition="right">
      <Drawer.Screen name="Home Screen" component={ProductStack} />
      <Drawer.Screen name="Cart Screen" component={CartScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;
