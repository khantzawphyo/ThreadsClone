import { FlatList, Text, View } from 'react-native'
import { dummyPosts } from '@/dummyData'
import PostListItem from '@/components/PostListItem'
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link
          href='/new'
          style={{ color: '#3b82f6', textAlign: 'center', padding: 4, fontSize: 24 }}
        >
          New Post
        </Link>
      )}
    />
  )
}
