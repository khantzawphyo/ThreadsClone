import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native'
// import { dummyPosts } from '@/dummyData'
import PostListItem from '@/components/PostListItem'
import { Link } from 'expo-router'
// import { useEffect, useState } from 'react'
import { Post } from '@/types'
import { supabase } from '@/lib/supabase'
// import { useAuth } from '@/providers/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*, user:profiles(*)')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data as Post[]
}

export default function HomeScreen() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
  // const [posts, setPosts] = useState<Post[]>()
  // const user = useAuth()

  // useEffect(() => {
  //   fetchPosts()
  // }, [fetchPosts])

  // console.log(JSON.stringify(posts, null, 2))

  if (isLoading) {
    return (
      <View className='flex-1 justify-center items-center bg-black'>
        <ActivityIndicator size='large' color='white' />
      </View>
    )
  }

  // if (error) {
  //   return (
  //     <View className='flex-1 justify-center items-center bg-black'>
  //       <Text className='text-white text-2xl font-bold'>
  //         Something went wrong
  //       </Text>
  //       <Text className='text-red-500  text-lg mt-2'>{error.message}</Text>
  //     </View>
  //   )
  // }

  if (error) {
    return (
      <View className='flex-1 justify-center items-center bg-black px-6'>
        <View className='items-center'>
          <Text className='text-4xl'>⚠️</Text>
          <Text className='text-white text-2xl font-bold text-center mb-2'>
            Oops! Something went wrong
          </Text>
          <Text className='text-neutral-400 text-base text-center mb-6 leading-6'>
            {error.message || 'We encountered an issue loading your feed.'}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href='/new' asChild>
          <Pressable className='flex-row items-center p-4 py-8 border-b border-neutral-800 '>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              className='w-11 h-11 rounded-full mr-3'
            />
            <View className='flex-1 justify-center'>
              <Text className='text-white font-semibold text-sm mb-1'>
                {'username'}
              </Text>
              <Text className='text-neutral-500 text-base'>What's new?</Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  )
}
