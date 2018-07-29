import React from 'react';
import { View, Text, Button } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './HomeScreen/HomeScreen';
import Places from './Places/Places';
import Info from './Info/Info';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const RootNavigator = TabNavigator({
	  	Map: {
		    screen: HomeScreen,
		    navigatorOptions: {
		    	tabBarLabel: 'Map'
		    },
		},
		Lugares: {
		    screen: Places,
		    navigatorOptions: {
		    	tabBarLabel: 'Places'
		    },
		},
		Info: {
		    screen: Info,
		    navigatorOptions: {
		    	tabBarLabel: 'Info'
		    },
		},
	},
	{
		navigationOptions: ({ navigation }) => ({
	      tabBarIcon: ({ focused, tintColor }) => {
	        const { routeName } = navigation.state;
	        let iconName;
	        if (routeName === 'Map') {
	          iconName = `map`;
	        } else if (routeName === 'Lugares') {
	          iconName = `history`;
	        } else if (routeName === 'Info') {
	          iconName = `info-circle`;
	        }

	        // You can return any component that you like here! We usually use an
	        // icon component from react-native-vector-icons
	        return <Icon name={iconName} size={25} color={tintColor} />;
	      },
	    }),
		tabBarOptions: {
	      activeTintColor: 'tomato',
	      inactiveTintColor: 'gray',
	    },
	    tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom'
	}
);

export default RootNavigator;
