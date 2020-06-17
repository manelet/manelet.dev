import React from "react"

import Splash from '../components/layout/splash/splash'
import HomeProjects from "../components/home-projects"
import PostsList from "../components/posts-list"

export default function Home () {  
  return (
    <>
      <Splash />
      <HomeProjects />
      <PostsList />
    </>
  )
}
