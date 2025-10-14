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
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function NewPostScreen() {
  const [text, setText] = useState('')

  return (
    <SafeAreaView className='p-4 flex-1' edges={['bottom']}>
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
              onPress={() => console.log('post: ', text)}
              className='bg-white p-3 px-6 self-end rounded-full'
            >
              <Text className='text-black font-medium'>Post</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
