import Colors from '@/constants/Colors';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
const Layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors.yellow,
      tabBarLabelStyle: {
        fontFamily: 'mon-sb',
      },
    }}>
    <Tabs.Screen
      name="index"
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="whishlists"
      options={{
        tabBarLabel: 'Wishlists',
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="heart-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="trips"
      options={{
        tabBarLabel: 'Trips',
        tabBarIcon: ({ size, color }) => <FontAwesome5 name="airbnb" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="inbox"
      options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="message-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        tabBarLabel: 'Profile',

        headerShown: true,
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="person-circle-outline" size={size} color={color} />
        ),
      }}
    />
  </Tabs>
  );
};

export default Layout;