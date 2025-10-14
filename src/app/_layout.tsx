import { Slot, Stack, Tabs } from 'expo-router'
import { ThemeProvider, DarkTheme } from '@react-navigation/native'

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'white',
  },
}

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <Slot />
    </ThemeProvider>
  )
}
