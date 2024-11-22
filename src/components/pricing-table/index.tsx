import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Automated data collection on suppliers`,
  `Supplier transparency at scale`,
  `Track customizable ESG metrics`,
  `24/7 customer support`,
  `Guaranteed data security`,
  `Integration with internal platforms (SAP, etc.)`,
  `Custom services upon request`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24 flex flex-col items-center`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1 flex flex-col items-center`)}>
          <h2 className={tw(`text-3xl lg:text-5xl font-bold text-gray-800 mb-12 text-center`)}>Are you ready?</h2>
          <p className={tw(`text-base leading-6 text-gray-500 text-center`)}>
            Let us know your needs and our team will build the best plan that works for you.
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-green-600`,
                )}
              >
                What we offer
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`my-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
            <div className={tw(`mt-8 flex justify-center`)}>
              <Button primary href="https://calendly.com/leonchen-1/30min">
                Contact sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
