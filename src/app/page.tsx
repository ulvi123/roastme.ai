'use client'

import React from 'react'
import "../globals.css";
import { SparklesPreview } from "./components/demo/sparkles"
import { TypewriterEffectSmoothDemo } from './components/demo/TypewriterEffectSmoothDemo';
const page = () => {
  return (
    <div>
      <SparklesPreview />
      <br></br>
      <br></br>
      <TypewriterEffectSmoothDemo/>
    </div>
  )
}

export default page
