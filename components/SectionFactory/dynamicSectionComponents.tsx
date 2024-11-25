import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { HeroProps } from './components/Hero'
import { SpotlightProps } from './components/Spotlight'

type DynamicSectionComponents = {
  hero: ComponentType<HeroProps>
  spotlight: ComponentType<SpotlightProps>
}

const dynamicSectionComponents: DynamicSectionComponents = {
  ['hero']: dynamic(() => import('./components/Hero')),
  ['spotlight']: dynamic(() => import('./components/Spotlight')),
}

export default dynamicSectionComponents
