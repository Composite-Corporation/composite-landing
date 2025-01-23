import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6`)}>
        <div className={tw(`flex items-center justify-center ml-4 text-3xl font-bold`)}>
          <h1>Features</h1>
        </div>
        <div className={tw(`flex flex-wrap my-6 pb-12`)}>
          <div className={tw(`w-full border-b border-r w-1/2 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-green`)} />
              <div className={tw(`ml-4 text-xl`)}>Automated Deduplication</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Effortlessly remove duplicate emails and files to streamline document sets.
            </p>
          </div>
          <div className={tw(`w-full border-b w-1/2 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-green`)} />
              <div className={tw(`ml-4 text-xl`)}>Full FOIA Document Generation</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
            Automatically compile, format, and prepare FOIA responses.
            </p>
          </div>
          <div className={tw(`w-full border-r w-1/2 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-green`)} />
              <div className={tw(`ml-4 text-xl`)}>Sensitive Information Redaction</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Ensure confidentiality with precise, AI-powered redaction tools.
            </p>
          </div>
          <div className={tw(`w-full w-1/2 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-green`)} />
              <div className={tw(`ml-4 text-xl`)}>Sensitive Information Redaction</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Ensure confidentiality with precise, AI-powered redaction tools.
            </p>
          </div>
        </div>

        <div className={tw(`flex items-center justify-center ml-4 text-3xl font-bold`)}>
          <h1>Why Choose Us?</h1>
        </div>
        <div className={tw(`flex flex-wrap my-6 pb-12`)}>
          <div className={tw(`w-full w-1/3 p-8`)}>
            <img className={tw(`h-16`)} src="images/time.png" alt="time"/>
            <div className={tw(`my-4 text-xl`)}>Save Time</div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Automate 90% of the FOIA process, saving hours of work, and letting your team focus on what matters most.
            </p>
          </div>
          <div className={tw(`w-full w-1/3 p-8`)}>
            <img className={tw(`h-16`)} src="images/cost.png" alt="time"/>
            <div className={tw(`my-4 text-xl`)}>Cut Costs</div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Cut costs associated with paralegal and attorney fees, freeing up valuable resources (your budget).
            </p>
          </div>
          <div className={tw(`w-full w-1/3 p-8`)}>
          <img className={tw(`h-16`)} src="images/customize.png" alt="time"/>
            <div className={tw(`my-4 text-xl`)}>Customize</div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Adapt our FOIA automation solution to your unique workflows using our cutting-edge AI technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
