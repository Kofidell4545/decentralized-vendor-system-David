import LandingPage from '@/components/sections/landingPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "PAYFLOW|LandingPage",
  description: "Generated by create next app",
};

function Home() {
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default Home