import dynamic from 'next/dynamic'
import { type ComponentType } from 'react'
import { type HeroProps } from './components/Hero'
import { type SpotlightProps } from './components/Spotlight'

type DynamicSectionComponents = {
  blog: ComponentType
  callToAction: ComponentType
  features: ComponentType
  frequentlyAskedQuestions: ComponentType
  gallery: ComponentType
  hero: ComponentType<HeroProps>
  spotlight: ComponentType<SpotlightProps>
  testimonials: ComponentType
}

const dynamicSectionComponents: DynamicSectionComponents = {
  ['blog']: dynamic(() => import('./components/Blog')),
  ['callToAction']: dynamic(() => import('./components/CallToAction')),
  ['features']: dynamic(() => import('./components/Features')),
  ['frequentlyAskedQuestions']: dynamic(
    () => import('./components/FrequentlyAskedQuestions'),
  ),
  ['gallery']: dynamic(() => import('./components/Gallery')),
  ['hero']: dynamic(() => import('./components/Hero')),
  ['spotlight']: dynamic(() => import('./components/Spotlight')),
  ['testimonials']: dynamic(() => import('./components/Testimonials')),
}

export default dynamicSectionComponents
