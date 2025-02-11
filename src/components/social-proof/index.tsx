import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';

const socialProofs = [
  {
    name: `Lucy Moore`,
    company: `Scientific Laboratory Supplied Ltd.`,
    image: `/images/lucy.jpeg`,
    text: `Composite.ai's platform has been a game changer for us. 
    The level of customization and ease of use has significantly 
    improved how we manage and report on ESG data across our supply chain.`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={tw(`container mx-auto`)}>
      <div className={tw(`max-w-7xl mx-auto`)}>
        <section>
          <figure>
            <div className={tw(`relative bg-white`)}>
              <Quote
                className={tw(
                  `w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300`
                )}
              />
              <div className={tw(`pt-20 px-6 md:px-0 text-center`)}>
                <p className={tw(`text-gray-600 text-xl pb-6`)}>
                  {socialProofs[currentIndex].text}
                </p>
                <div className={tw(`flex flex-col items-center pb-12`)}>
                  <div className={tw(`h-12 w-12 mb-4`)}>
                    <img
                      src={socialProofs[currentIndex].image}
                      alt={socialProofs[currentIndex].name}
                      className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)}
                      height={48}
                      width={48}
                    />
                  </div>
                  <p className={tw(`text-gray-600 font-bold`)}>
                    {socialProofs[currentIndex].name} <br />
                    <span className={tw(`text-gray-600 text-base font-light`)}>
                      {socialProofs[currentIndex].company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
