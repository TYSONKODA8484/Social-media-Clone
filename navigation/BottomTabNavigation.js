import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { COLORS } from '../constants/theme'
import { LinearGradient } from 'expo-linear-gradient'
import Feed from '../screens/Feed';
import Chat from '../screens/Chat';
import Create from '../screens/Create';
import Profile from '../screens/Profile';
import Notification from '../screens/Notifications';

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, // Corrected spelling mistake
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({focused}) =>{
            return (
              <Feather name='home' size={24} color={focused ? COLORS.primary : COLORS.black} />
            )
          }
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) =>{
            return (
              <Ionicons name="chatbubbles-outline" size={24} color={focused ? COLORS.primary : COLORS.black} />
            )
          }
        }}
      />
      <Tab.Screen
      name="Create"
      component={Create}
      options={{
        tabBarIcon: ({focused})=>{
          return (
            <LinearGradient
              colors={['#F68464', '#EEA849']}
              style={{
                alignItems:'center',
                justifyContent: 'center',
                width: Platform.OS == 'ios' ? 50:60,
                height: Platform.OS == 'ios' ? 50: 60,
                top: Platform.OS =='ios'? -10: -20,
                borderRadius: 22,
                borderColor: '#fff',
                borderWidth: 4
              }}
            >
              <Feather name="plus-circle" size={24} color={COLORS.white}/>
            </LinearGradient>
          )
        }
      }}
      />
      <Tab.Screen
              name="Notification"
              component={Notification}
              options={{
                tabBarIcon: ({focused}) =>{
                  return (
                    <FontAwesome5 name="heart" size={24} color={focused ? COLORS.primary : COLORS.black} />
                  )
                }
              }}
            />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>{
            return (
              <FontAwesome name="user-circle" size={24} color={focused ? COLORS.primary : COLORS.black} />
            )
          }
        }}
      />      
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
