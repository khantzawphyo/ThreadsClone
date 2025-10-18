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
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'

const createPost = async (content: string, user_id: string) => {
  const { data, error } = await supabase
    .from('posts')
    .insert({ content, user_id })
    .select('*')
    .throwOnError()
  return data
}

export default function NewPostScreen() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => createPost(text, user!.id),
    onSuccess: (data) => {
      ;(setText(''), router.back())
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
    onError: (error) => {
      console.error('Post error:', error)
    },
  })

  // const onSubmit = async () => {
  //   if (!text || !user) return

  //   try {
  //     setLoading(true)
  //     const { data, error } = await supabase
  //       .from('posts')
  //       .insert({ content: text, user_id: user.id })

  //     if (error) {
  //       console.error(error)
  //     } else {
  //       setText('')
  //     }
  //   } catch (error) {
  //     console.error('Post error:', error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const isPostButtonDisabled = !text.trim() || isPending

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

          {error && (
            <Text className='text-red-500 text-sm mt-2'>{error.message}</Text>
          )}

          <View className='mt-4'>
            <Pressable
              disabled={isPostButtonDisabled}
              onPress={() => mutate()}
              className={`px-6 py-4 self-end rounded-full ${
                isPostButtonDisabled ? 'bg-neutral-500' : 'bg-white'
              }`}
            >
              {isPending ? (
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
