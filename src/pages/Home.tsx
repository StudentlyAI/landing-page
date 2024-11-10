import { Helmet } from 'react-helmet';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>StudentlyAI - Transform Your Academic Journey</title>
        <meta name="description" content="StudentlyAI is your personalised AI study assistant, helping you achieve academic excellence through intelligent learning tools and comprehensive analytics." />
        <meta name="keywords" content="AI study assistant, personalised learning, academic tools, student help, education technology" />
        <meta property="og:title" content="StudentlyAI - Transform Your Academic Journey" />
        <meta property="og:description" content="Your personalised AI study assistant for academic excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studently.uk" />
      </Helmet>

      <div className="flex flex-col w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
