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
  Alert,
  ActivityIndicator,
} from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SignUpScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [focusedInput, setFocusedInput] = useState<'email' | 'password' | null>(
    null
  )

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Please enter both email and password')
      return
    }

    try {
      setLoading(true)
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password: password,
      })
      if (error) Alert.alert(error.message)
      if (!session)
        Alert.alert('Please check your inbox for email verification!')
    } catch (error) {
      console.error('Sign up error:', error)
      if (error instanceof Error) {
        Alert.alert('Sign up error', error.message)
      } else {
        Alert.alert('Sign up error', 'An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        className='flex-1 bg-neutral-950'
      >
        <View className='flex-1 items-center justify-center px-6'>
          <View className='w-full max-w-sm'>
            <Text className='text-3xl font-bold text-center mb-8 text-white'>
              Create an account
            </Text>

            <View className='gap-4'>
              <View className='mb-2'>
                <Text className='text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2'>
                  Email
                </Text>
                <TextInput
                  className={`w-full p-4 bg-neutral-900 border rounded-lg text-white ${
                    focusedInput === 'email'
                      ? 'border-2 border-white'
                      : 'border border-neutral-700'
                  }`}
                  placeholder='Enter your email'
                  placeholderTextColor='#6B7280'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  autoCorrect={false}
                  autoCapitalize='none'
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  editable={!loading}
                />
              </View>

              <View>
                <Text className='text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2'>
                  Password
                </Text>
                <TextInput
                  className={`w-full p-4 bg-neutral-900 border rounded-lg text-white ${
                    focusedInput === 'password'
                      ? 'border-2 border-white'
                      : 'border border-neutral-700'
                  }`}
                  placeholder='Enter your password'
                  placeholderTextColor='#6B7280'
                  secureTextEntry
                  textContentType='password'
                  autoCorrect={false}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  editable={!loading}
                />
              </View>

              <TouchableOpacity
                className={`w-full bg-white py-4 rounded-lg mt-6 ${
                  loading ? 'opacity-50' : ''
                }`}
                activeOpacity={0.8}
                onPress={handleSignUp}
                disabled={loading}
              >
                {loading ? (
                  <View className='flex-row justify-center items-center'>
                    <ActivityIndicator color='#000' size='small' />
                    <Text className='text-black font-semibold ml-2'>
                      Creating account...
                    </Text>
                  </View>
                ) : (
                  <Text className='text-black text-center font-semibold'>
                    Sign up
                  </Text>
                )}
              </TouchableOpacity>

              <View className='flex-row justify-center mt-4'>
                <Text className='text-gray-400'>Already have an account? </Text>
                <Link href='/login' asChild>
                  <Pressable disabled={loading}>
                    <Text
                      className={`font-medium ${
                        loading ? 'text-gray-500' : 'text-blue-400'
                      }`}
                    >
                      Sign in
                    </Text>
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
