import { supabase } from '@/lib/supabase'
import { useAuth } from '@/providers/AuthProvider'
import { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function NewPostScreen() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const onSubmit = async () => {
    if (!text || !user) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('posts')
        .insert({ content: text, user_id: user.id })

      if (error) {
        console.error(error)
      } else {
        setText('')
      }
    } catch (error) {
      console.error('Post error:', error)
    } finally {
      setLoading(false)
    }
  }

  const isPostButtonDisabled = !text.trim() || loading

  return (
    <SafeAreaView className='p-4 flex-1 bg-neutral-900' edges={['bottom']}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          className='flex-1'
          behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 120}
        >
          <Text className='text-white text-lg font-bold mb-4'>username</Text>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What's on your mind?"
            placeholderTextColor='gray'
            className='text-white text-lg flex-1'
            multiline
            style={{ textAlignVertical: 'top' }}
          />

          <View className='mt-4'>
            <Pressable
              disabled={isPostButtonDisabled}
              onPress={onSubmit}
              className={`px-6 py-4 self-end rounded-full ${
                isPostButtonDisabled ? 'bg-neutral-500' : 'bg-white'
              }`}
            >
              {loading ? (
                <ActivityIndicator color='#000' size='small' />
              ) : (
                <Text
                  className={`font-bold ${
                    isPostButtonDisabled ? 'text-neutral-800' : 'text-black'
                  }`}
                >
                  Post
                </Text>
              )}
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
