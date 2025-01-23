import { tw, css } from 'twind/css';

const Header = () => {
  return (
    <section
      className={tw`bg-white h-96 bg-cover bg-center relative`}
      style={{ backgroundImage: "url('/images/high_school.jpg')" }}
    >
      <div className={tw(`absolute inset-0 bg-black opacity-50`)}></div> {/* Dark overlay */}
      <div className={tw(`max-w-4xl mx-auto py-12 px-14 sm:px-6 lg:px-8 relative flex flex-col justify-center h-full`)}>
        <h1 className={tw(`font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-center leading-snug text-white`)}>
          FOIA requests, made easy
        </h1>

        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-5 text-white text-center text-xl lg:text-2xl`)}>
            The smarter way to handle FOIA requests, ensuring speed, accuracy, and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
