import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <Header />
      <main>
        {/* <VideoSection /> */}
        {/* <FeatureSection /> */}
        <SocialProof />
        {/* <SocialProof /> */}
      </main>
      {/* <Footer /> */}
    </Page>
  );
}
