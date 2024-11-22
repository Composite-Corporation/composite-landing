import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`mt-2 mb-10 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
            Simplify ESG Supplier Management
          </p>
          <h4 className={tw(`text-base text-green-600 font-semibold tracking-wide uppercase`)}>Features</h4>
        </div>
        <div className={tw(`flex flex-wrap my-6`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Save Time </div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Automate supplier data analysis and cut manual work by 80%. Focus on strategy, not spreadsheets.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Enterprise-ready</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
            Handle thousands of suppliers and data points effortlessly, no matter your company’s size.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Future-Proof</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Stay compliant as regulations change and your supply chain grows.
            </p>
          </div>
        </div>
        <div className={tw(`my-16 text-center`)}>
          <h4 className={tw(`text-base text-green-600 font-semibold tracking-wide uppercase`)}>Recognized by</h4>
          <div className={tw(`mt-6 flex justify-center space-x-4`)}>
            <a href="https://www.c10labs.com/companies/c2-summer-24" target="_blank" rel="noopener noreferrer">
              <img src="images/c10.jpeg" alt="C10 Labs" className={tw(`h-40`)} />
            </a>
            <a href="https://www.bis.org/hub/2024_g20_techsprint.htm" target="_blank" rel="noopener noreferrer">
              <img src="images/g20.jpg" alt="G20 TechSprint 2024" className={tw(`h-40`)} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
