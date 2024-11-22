import { tw, css } from 'twind/css';
import Button from '@/components/button';
import SLSBlack from '@/constants/svg/SLS-Black (1).svg';
import { useState } from 'react';

const headerStyle = tw`bg-white min-h-[calc(100vh-6rem)] bg-[url('path/to/your/background-image.jpg')] bg-cover bg-center relative`;

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <section className={headerStyle}>
      <div className={tw(`max-w-4xl mx-auto py-12 px-14 sm:px-6 lg:px-8 relative`)}>
        <h1 className={tw(`font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-center leading-snug text-gray-800`)}>
          Scope 3 reporting, made easy
        </h1>
        
        <div className={tw(`pt-5 relative`)}>
          <img src="images/composite-video-thumbnail.png" className={tw(`w-full h-auto rounded-lg`)} alt="Thumbnail" />
          <button 
            onClick={togglePopup} 
            className={tw(`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-3 px-6 rounded-full text-lg font-bold shadow-lg z-10 flex items-center z-20`)}
          >
            <svg className={tw(`w-8 h-8 mr-1`)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.597-2.098A1 1 0 009 10.5v3a1 1 0 001.155.832l3.597-2.098a1 1 0 000-1.732z" />
            </svg>
            Learn about Composite.ai in 60s!
          </button>
        </div>

        {isPopupOpen && (
          <div 
            className={tw(`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30`)} 
            onClick={togglePopup}
          >
            <div className={tw(`bg-white p-4 rounded relative`)} onClick={(e) => e.stopPropagation()}>
              <iframe
                width="750"
                height="400"
                src="https://www.youtube.com/embed/zb09FdILFWA"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-5 text-gray-500 text-center text-xl lg:text-3xl`)}>
            Gather ESG data from your supply chain with the click of a button.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
