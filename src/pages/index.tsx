import Page from '@/components/page';
import Header from '@/components/header';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';

export default function Home() {
  return (
    <Page>
      <Header />
      <main>
        <FeatureSection />
        <SocialProof />
      </main>
    </Page>
  );
}
