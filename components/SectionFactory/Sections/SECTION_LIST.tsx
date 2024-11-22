import {
  HeroEntrySkeleton,
  SpotlightEntrySkeleton,
} from '@/lib/contentful/getPageData'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { HeroProps } from './Hero'
import { SpotlightProps } from './Spotlight'

type SectionNames =
  | HeroEntrySkeleton['contentTypeId']
  | SpotlightEntrySkeleton['contentTypeId']

type SectionProps = HeroProps | SpotlightProps

const SECTION_LIST: Record<SectionNames, ComponentType<SectionProps>> = {
  ['hero']: dynamic(() => import('./Hero').then((mod) => mod.default)),
  ['spotlight']: dynamic(() =>
    import('./Spotlight').then((mod) => mod.default),
  ),
}

export default SECTION_LIST
