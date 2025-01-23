import Page from '@/components/page';
import Header from '@/components/header';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <Header />
      <main>
        <FeatureSection />
      </main>
      <Footer />
    </Page>
  );
}
