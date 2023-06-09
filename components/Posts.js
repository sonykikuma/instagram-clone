import React from 'react'
import Post from './Post'

const Posts = () => {
const posts=[
    {
        id:"1",
        username:"codewithabha",
        userImg:"/IMG_20230311_090729kiku.jpg",
        img:"https://images.unsplash.com/photo-1686256282146-46dd71827a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
        caption:"nice picture",
    },
    {
        id:"2",
        username:"codewithsoni",
        userImg:"/IMG_20230311_090729kiku.jpg",
        img:"https://plus.unsplash.com/premium_photo-1686050416689-1b1f64fd5000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
        caption:"new picture",
    }

]

  return (
    <div>
      {posts.map(post=>(
        <Post key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
