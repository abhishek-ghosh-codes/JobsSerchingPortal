import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <>
    <Hero title = "Switch" subTitle="India's No. 1 Job Portal"/>
    <HomeCards/>
    <JobsListings isHome= {true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage