import { Octicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, headerTitleAlign: 'center' }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons
              name={focused ? 'home-fill' : 'home'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ size, color }) => (
            <Octicons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: 'Notifications',
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons
              name={focused ? 'heart-fill' : 'heart'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons
              name={focused ? 'person-fill' : 'person'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
