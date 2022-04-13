/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import NotFoundScreen from '../screens/NotFoundScreen';

import PlanScreen from '../screens/PlanScreen';
import HomeScreen from '../screens/HomeScreen';
import PhisicalInfoScreen from '../screens/PhisicalInfoScreen';
import InfoScreen from '../screens/InfoScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';

const customLightTheme = {
	dark: false,
	colors: {
					primary: '#A0E418',
					background: '#A0E418',
					card: '#A0E418',
					text: '#A0E418',
					border: '#A0E418',
					notification: '#A0E418',
	},
};

const customDarkTheme = {
	dark: true,
	colors: {
					primary: '#A0E418',
					background: '#A0E418',
					card: '#A0E418',
					text: '#000',
					border: '#A0E418',
					notification: '#A0E418',
	},
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? customLightTheme : customDarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          title: 'Plan',
          tabBarIcon: ({ color }) => <TabBarIcon name="leaf" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
						<BottomTab.Screen
        name="PhisicalInfo"
        component={PhisicalInfoScreen}
        options={{
          title: 'Phis',
          tabBarIcon: ({ color }) => <TabBarIcon name="child" color={color} />,
        }}
      />
						<BottomTab.Screen 
								name="Info"
								component={InfoScreen}
								options={{
										title: 'Info',
										tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
								}}
						/>
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
