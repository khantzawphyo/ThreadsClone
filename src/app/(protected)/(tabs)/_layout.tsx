import { Octicons } from '@expo/vector-icons'
import { router, Tabs } from 'expo-router'
import { View } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 5,
        },
      }}
    >
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
        name='new-placeholder'
        options={{
          title: 'New Thread',
          tabBarIcon: ({ size, color }) => (
            <View className='w-14 h-12 rounded-xl bg-neutral-800 justify-center items-center'>
              <Octicons name='plus' size={size} color={color} />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault()
            router.push('/new')
          },
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
