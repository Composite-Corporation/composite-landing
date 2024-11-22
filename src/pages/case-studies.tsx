import { tw } from 'twind';
import Particles from 'react-particles-js';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: { enable: true, value_area: 3000 },
        },
        line_linked: { enable: false },
        move: { direction: `right`, speed: 0.3 },
        size: { value: 1 },
        opacity: { anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
      },
      interactivity: { events: { onclick: { enable: false } } },
      retina_detect: true,
    }}
  />
);

const CaseStudyPage = () => (
  <div>
    {/* Hero Section */}
    <section>
      <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
        <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
          <ParticleBg />
        </div>
        <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-8 lg:pt-16`)}>
          <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>
            Proven Success with Scientific Laboratory Supplies (SLS)
          </h1>
          <p className={tw(`text-gray-400 text-center text-xl mt-8 leading-relaxed`)}>
            See how Composite.ai empowered SLS to streamline ESG data collection, enhance reporting accuracy, 
            and achieve their sustainability goals across a vast supplier network.
          </p>
          <div className={tw(`flex justify-center`)}>
            <img
              src={`/images/sls.png`}
              alt={`Case Study Image`}
              className={tw(`py-4 object-cover overflow-hidden rounded`)} // Adjusted spacing
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Detailed Case Study Section */}
    <section className={tw(`bg-gray-800 text-white py-16`)}>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto`)}>
        <h2 className={tw(`text-3xl lg:text-5xl font-bold text-center`)}>More About the Case Study</h2>
        <p className={tw(`text-gray-400 text-center text-xl mt-6 leading-relaxed`)}>
          Dive deeper into how Composite.ai delivered transformative results for Scientific Laboratory Supplies.
        </p>
        <div className={tw(`mt-12 space-y-12`)}>
          {/* Background */}
          <div>
            <h3 className={tw(`text-2xl lg:text-3xl font-bold mb-4`)}>Background</h3>
            <p className={tw(`text-gray-300 leading-relaxed`)}>
              SLS works with over 4,000 suppliers worldwide. As regulatory demands for Scope 3 emissions reporting 
              increased, inefficiencies in their manual ESG data collection processes became evident, prompting the need 
              for a more scalable solution.
            </p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className={tw(`text-2xl lg:text-3xl font-bold mb-4`)}>The Challenges</h3>
            <ul className={tw(`text-gray-300 list-disc list-inside space-y-4 leading-relaxed`)}>
              <li>
                <strong>Supply Chain Complexity:</strong> Managing ESG compliance across thousands of suppliers was 
                resource-intensive and time-consuming.
              </li>
              <li>
                <strong>Manual Processes:</strong> Labor-intensive workflows were prone to errors, causing delays in 
                compliance reporting.
              </li>
              <li>
                <strong>Regulatory Pressures:</strong> Rising demands for transparent and accurate ESG data added 
                significant operational challenges.
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className={tw(`text-2xl lg:text-3xl font-bold mb-4`)}>Our Solution</h3>
            <p className={tw(`text-gray-300 leading-relaxed mb-4`)}>
              Composite.ai collaborated with SLS to implement an automated ESG Supplier Tracking Platform. This solution 
              revolutionized their operations with:
            </p>
            <ul className={tw(`text-gray-300 list-disc list-inside space-y-4 leading-relaxed`)}>
              <li>
                <strong>Automated ESG Data Collection:</strong> Streamlined data gathering across the supplier network, 
                reducing manual input.
              </li>
              <li>
                <strong>Centralized Dashboards:</strong> Provided real-time access to ESG metrics through an intuitive 
                reporting interface.
              </li>
              <li>
                <strong>Customized Workflows:</strong> Tailored features ensured seamless integration with SLS’s existing 
                systems.
              </li>
            </ul>
          </div>

          {/* Results */}
          <div>
            <h3 className={tw(`text-2xl lg:text-3xl font-bold mb-4`)}>Results</h3>
            <ul className={tw(`text-gray-300 list-disc list-inside space-y-4 leading-relaxed`)}>
              <li>
                <strong>Time Savings:</strong> Reduced ESG data reporting time by 90%, enabling teams to focus on 
                high-priority initiatives.
              </li>
              <li>
                <strong>Improved Accuracy:</strong> Automation minimized errors, ensuring reliable and actionable 
                compliance reports.
              </li>
              <li>
                <strong>Regulatory Success:</strong> Achieved full compliance with Scope 3 emissions reporting standards 
                effortlessly.
              </li>
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h3 className={tw(`text-2xl lg:text-3xl font-bold mb-4`)}>Looking Ahead: Our Future Plans</h3>
            <ul className={tw(`text-gray-300 list-disc list-inside space-y-4 leading-relaxed`)}>
              <li>
                <strong>Expanding Platform Capabilities:</strong> Enhancing the platform to allow suppliers to seamlessly 
                upload and manage their data, ensuring greater scalability.
              </li>
              <li>
                <strong>Adopting Advanced Automation:</strong> Integrating sophisticated automation tools to further 
                streamline workflows and minimize manual input.
              </li>
              <li>
                <strong>Driving Sustainability:</strong> Leveraging deeper ESG insights to foster stronger supplier 
                partnerships and drive impactful environmental initiatives.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CaseStudyPage;
