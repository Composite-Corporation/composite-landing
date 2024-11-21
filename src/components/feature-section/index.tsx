import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-green-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            Revolutionizing Technology
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Increase sales</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui
              velit.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Enterprise-ready</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
            Built for scale, our platform integrates seamlessly into existing processes and handles large data volumes, making it ideal for enterprises looking for comprehensive ESG solutions.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Unlimited growth</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Stay ahead with a platform that scales as your business expands, adapting to new suppliers, regulations, and data complexities without limitations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
