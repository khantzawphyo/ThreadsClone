import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { dummyPosts } from '@/dummyData'
import PostListItem from '@/components/PostListItem'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Post } from '@/types'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/providers/AuthProvider'

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>()
  const user = useAuth()

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*, user:profiles(*)')
        .order('created_at', { ascending: false })

      if (error) {
        console.error(error)
      }
      setPosts(data as Post[])
    }

    fetchPosts()
  }, [])

  console.log(JSON.stringify(posts, null, 2))
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
              <Text className='text-neutral-500 text-base'>
                What's on your mind?'
              </Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  )
}
