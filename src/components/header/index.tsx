import { tw, css } from 'twind/css';
import Button from '@/components/button';
import SLSBlack from '@/constants/svg/SLS-Black (1).svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Your Supply Chain ESG Data Platform
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          No more spreadsheets, no more questionnaires. Just one place to manage your Scope 3 ESG data.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <a href="mailto:mhanafeelaplante@College.harvard.edu">
          <Button>Contact us</Button>
        </a>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}> </p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <SLSBlack className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
