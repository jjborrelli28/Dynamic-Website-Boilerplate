import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { HeroProps } from './sections/Hero'
import { SpotlightProps } from './sections/Spotlight'

type DynamicSectionComponents = {
  hero: ComponentType<HeroProps>
  spotlight: ComponentType<SpotlightProps>
}

const dynamicSectionComponents: DynamicSectionComponents = {
  ['hero']: dynamic(() => import('./sections/Hero')),
  ['spotlight']: dynamic(() => import('./sections/Spotlight')),
}

export default dynamicSectionComponents
