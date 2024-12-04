import dynamic from 'next/dynamic'

const DynamicSection = {
  blog: dynamic(() => import('./components/Blog')),
  callToAction: dynamic(() => import('./components/CallToAction')),
  features: dynamic(() => import('./components/Features')),
  frequentlyAskedQuestions: dynamic(
    () => import('./components/FrequentlyAskedQuestions'),
  ),
  gallery: dynamic(() => import('./components/Gallery')),
  hero: dynamic(() => import('./components/Hero')),
  spotlight: dynamic(() => import('./components/Spotlight')),
  testimonials: dynamic(() => import('./components/Testimonials')),
}

export default DynamicSection
