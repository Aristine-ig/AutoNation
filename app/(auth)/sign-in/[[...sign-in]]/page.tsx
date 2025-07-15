import { SignIn } from '@clerk/nextjs'
import { motion } from 'framer-motion';


import React from 'react'

type Props = {}
const Page = (props: Props) => {
  return (
    <SignIn />
  )
}
export default Page