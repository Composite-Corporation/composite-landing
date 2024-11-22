import Page from '@/components/page';
import Header from '@/components/header';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <Header />
      <main>
        <FeatureSection />
        <SocialProof />
      </main>
      <Footer />
    </Page>
  );
}
