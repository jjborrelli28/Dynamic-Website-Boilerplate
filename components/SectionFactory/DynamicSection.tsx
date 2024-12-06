import dynamic from 'next/dynamic'

const DynamicSection = {
  Blog: dynamic(() => import('./components/Blog')),
  CallToAction: dynamic(() => import('./components/CallToAction')),
  Features: dynamic(() => import('./Features')),
  FrequentlyAskedQuestions: dynamic(
    () => import('./components/FrequentlyAskedQuestions'),
  ),
  Gallery: dynamic(() => import('./components/Gallery')),
  Hero: dynamic(() => import('./components/Hero')),
  Spotlights: dynamic(() => import('./components/Spotlights')),
  Testimonials: dynamic(() => import('./components/Testimonials')),
}

export default DynamicSection
