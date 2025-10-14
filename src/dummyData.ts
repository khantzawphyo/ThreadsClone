import type { User, Post } from './types'

export const users: User[] = [
  {
    id: 'u1',
    username: 'alice',
    name: 'Alice Johnson',
    image: 'https://i.pravatar.cc/150?img=1',
    bio: 'Product designer who loves type and tiny details.',
  },
  {
    id: 'u2',
    username: 'bob',
    name: 'Bob Martin',
    image: 'https://i.pravatar.cc/150?img=2',
    bio: 'Full-stack dev. Occasional mountain biker.',
  },
  {
    id: 'u3',
    username: 'carla',
    name: 'Carla Reyes',
    image: 'https://i.pravatar.cc/150?img=3',
    bio: 'Photographer & coffee snob.',
  },
  {
    id: 'u4',
    username: 'dan',
    name: 'Danielle Park',
    image: 'https://i.pravatar.cc/150?img=4',
    bio: 'Frontend engineer. Cats > dogs.',
  },
  {
    id: 'u5',
    username: 'eli',
    name: 'Eli Thompson',
    image: 'https://i.pravatar.cc/150?img=5',
    bio: 'Mobile dev, vinyl collector, hobby cook.',
  },
]

// Create raw posts with parent_id references, then link parent and replies below.
export const posts: Post[] = [
  {
    id: 'p1',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    content:
      'Just shipped a small redesign today — feels great to cross it off the list.',
    user_id: 'u1',
    user: users.find((u) => u.id === 'u1')!,
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p2',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    content:
      'Anyone got recommendations for a simple state management lib for React Native?',
    user_id: 'u2',
    user: users.find((u) => u.id === 'u2')!,
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p3',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 19).toISOString(),
    content: 'Congrats! What changed in the redesign?',
    user_id: 'u3',
    user: users.find((u) => u.id === 'u3')!,
    parent_id: 'p1',
    parent: null,
    replies: [],
  },
  {
    id: 'p4',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
    content:
      'Mostly navigation and some micro-interactions. Also improved empty states.',
    user_id: 'u1',
    user: users.find((u) => u.id === 'u1')!,
    parent_id: 'p3',
    parent: null,
    replies: [],
  },
  {
    id: 'p5',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 17).toISOString(),
    content:
      'Love seeing empty states get love — they make an app feel polished.',
    user_id: 'u4',
    user: users.find((u) => u.id === 'u4')!,
    parent_id: 'p1',
    parent: null,
    replies: [],
  },
  {
    id: 'p6',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString(),
    content:
      'Built a small demo with gestures — results were surprisingly smooth.',
    user_id: 'u5',
    user: users.find((u) => u.id === 'u5')!,
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p7',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 15).toISOString(),
    content: "For state I'd try Zustand first — minimal and it just works.",
    user_id: 'u1',
    user: users.find((u) => u.id === 'u1')!,
    parent_id: 'p2',
    parent: null,
    replies: [],
  },
  {
    id: 'p8',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(),
    content: "Zustand is great. Or just Context if it's small-scale.",
    user_id: 'u2',
    user: users.find((u) => u.id === 'u2')!,
    parent_id: 'p7',
    parent: null,
    replies: [],
  },
  {
    id: 'p9',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 13).toISOString(),
    content:
      "Picked up a new lens — can't wait to try it on golden hour shots.",
    user_id: 'u3',
    user: users.find((u) => u.id === 'u3')!,
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p10',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    content: "Which lens? I'm always looking for recommendations.",
    user_id: 'u4',
    user: users.find((u) => u.id === 'u4')!,
    parent_id: 'p9',
    parent: null,
    replies: [],
  },
  {
    id: 'p11',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 11).toISOString(),
    content: "It's the 35mm — great for portraits and street.",
    user_id: 'u5',
    user: users.find((u) => u.id === 'u5')!,
    parent_id: 'p10',
    parent: null,
    replies: [],
  },
  {
    id: 'p12',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
    content: '35mm is so versatile. Nice pick!',
    user_id: 'u3',
    user: users.find((u) => u.id === 'u3')!,
    parent_id: 'p11',
    parent: null,
    replies: [],
  },
  {
    id: 'p13',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 9).toISOString(),
    content: 'Who else is excited for the conference next month?',
    user_id: 'u2',
    user: users.find((u) => u.id === 'u2')!,
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: 'p14',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    content: "I'll be there! Looking forward to the talks and networking.",
    user_id: 'u4',
    user: users.find((u) => u.id === 'u4')!,
    parent_id: 'p13',
    parent: null,
    replies: [],
  },
  {
    id: 'p15',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
    content: 'Nice work — how long did it take to complete?',
    user_id: 'u5',
    user: users.find((u) => u.id === 'u5')!,
    parent_id: 'p1',
    parent: null,
    replies: [],
  },
]

// Link parents and replies after initial creation to avoid circular reference issues inline.
const postsById = new Map<string, Post>()
posts.forEach((p) => postsById.set(p.id, p))

posts.forEach((p) => {
  if (p.parent_id) {
    const parent = postsById.get(p.parent_id) || null
    p.parent = parent
    if (parent) parent.replies.push(p)
  } else {
    p.parent = null
  }
})

export default { users, posts }
