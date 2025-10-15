import { useAuth } from '@/providers/AuthProvider'
import { Redirect, Stack } from 'expo-router'

export default function AuthLayout() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect href='/(protected)/' /> // login button ကိုနှိပ်လည်း login screen ကိုမသွားပဲ protected မှာပဲဆက်ရှိနေမယ်
  }

  return (
    <Stack>
      <Stack.Screen
        name='login'
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackTitle: '',
          headerLeft: () => null,
          headerStyle: { backgroundColor: '#0a0a0a' },
        }}
      />
      <Stack.Screen
        name='signup'
        options={{
          title: 'Sign Up',
          headerBackButtonDisplayMode: 'minimal',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#0a0a0a' },
        }}
      />
    </Stack>
  )
}
