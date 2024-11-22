'use client'

import React from 'react'
import "../globals.css";
import { TextGenerateEffect } from './components/ui/text-generate-effect';
import { ImagesSliderDemo } from './components/demo/sliderdemo';
import { NavbarDemo } from './components/demo/navbarDemo';
import { SparklesPreview } from "./components/demo/sparkles"
import { TypewriterEffectSmoothDemo } from './components/demo/TypewriterEffectSmoothDemo';
const page = () => {
  return (
    <div>
      {/* <NavbarDemo /> */}
      <SparklesPreview />
      <br></br>
      <br></br>
      <TypewriterEffectSmoothDemo/>
    </div>
  )
}

export default page
