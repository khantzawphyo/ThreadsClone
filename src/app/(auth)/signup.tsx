import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

export default function SignUpScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async () => {
    if (!email || !password) {
      // TODO: Add proper error handling
      return
    }

    try {
      setIsLoading(true)
      // TODO: Implement actual sign up logic here
      console.log('Sign up attempt with:', { email })
    } catch (error) {
      console.error('Sign up error:', error)
      // TODO: Add proper error handling
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        className='flex-1 bg-neutral-950'
      >
        <View className='flex-1 items-center justify-center px-6'>
          <View className='w-full max-w-sm'>
            <Text className='text-3xl font-bold text-center mb-8 text-white'>
              Create an account
            </Text>

            <View className='gap-4'>
              <View className='mb-2'>
                <Text className='text-xs uppercase tracking-wider font-medium text-gray-300 mb-2'>
                  Email
                </Text>
                <TextInput
                  className='w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white  focus:border-blue-500'
                  placeholder='Enter your email'
                  placeholderTextColor='#6B7280'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View>
                <Text className='text-xs uppercase tracking-wider font-medium text-gray-300 mb-2'>
                  Password
                </Text>
                <TextInput
                  className='w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white  focus:border-blue-500'
                  placeholder='Enter your password'
                  placeholderTextColor='#6B7280'
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <TouchableOpacity
                className='w-full bg-white py-3 rounded-lg mt-6'
                activeOpacity={0.8}
                onPress={handleSignUp}
                disabled={isLoading}
              >
                <Text className='text-black text-center font-semibold'>
                  {isLoading ? 'Creating account...' : 'Sign up'}
                </Text>
              </TouchableOpacity>

              <View className='flex-row justify-center mt-4'>
                <Text className='text-gray-400'>Already have an account? </Text>
                <Link href='/login' asChild>
                  <Pressable>
                    <Text className='text-blue-400 font-medium'>Sign in</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
