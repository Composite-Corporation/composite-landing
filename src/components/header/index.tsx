import { tw, css } from 'twind/css';
import Button from '@/components/button';
import SLSBlack from '@/constants/svg/SLS-Black (1).svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <section>
    <div className={tw(`max-w-4xl mx-auto py-12 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-3xl md:text4xl lg:text-5xl text-center leading-snug text-gray-800`)}>
        Scope 3 reporting, made easy
      </h1>
      <div className={tw(`mt-10 flex justify-center`)}>
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/8PeewXqtUzI"
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Gather ESG data from your supply chain with the click of a button.
        </p>
      </div>
      {/* <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div> */}
    </div>
  </section>
);

export default Header;
