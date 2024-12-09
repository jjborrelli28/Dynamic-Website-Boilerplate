import dynamic from 'next/dynamic'

const DynamicSection = {
  CallToAction: dynamic(() => import('./components/CallToAction')),
  Features: dynamic(() => import('./components/Features')),
  FrequentlyAskedQuestions: dynamic(
    () => import('./components/FrenquentlyAskedQuestions'),
  ),
  Gallery: dynamic(() => import('./components/Gallery')),
  Hero: dynamic(() => import('./components/Hero')),
  Spotlights: dynamic(() => import('./components/Spotlights')),
  Testimonials: dynamic(() => import('./components/Testimonials')),
}

export default DynamicSection
