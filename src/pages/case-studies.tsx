import { tw } from 'twind';
import Particles from 'react-particles-js';
import Page from '@/components/page';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const CaseStudyPage = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Proven Success with Scientific Laboratory Supplies (SLS)</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Recently, we partnered with Scientific Laboratory Supplies (SLS) to help them efficiently collect, analyze, and report on their Scope 3 emissions. Our partnership with SLS helped them streamline ESG data collection from over 4,000 suppliers, reducing the time spent on data collection and improving the accuracy of their reporting.
        </p>
        <div className={tw(`flex justify-center`)}>
          <img
            src={`/images/sls.png`} // Replace with actual image path
            alt={`Case Study Image`}
            className={tw(`py-16 object-cover overflow-hidden rounded`)}
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  </section>
);

export default function CaseStudy() {
    return (
      <Page>
        <main>
          <CaseStudyPage />
        </main>
      </Page>
    );
  }