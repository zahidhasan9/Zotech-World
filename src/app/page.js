import Banner from '@/components/Banner/Banner';
import BottomBanner from '@/components/BottomBanner/BottomBanner';
import Featured from '@/components/Featured/Featured';
import Support from '@/components/Support/Support';
export default function Home() {
  return (
    <div className=''>
      <Banner />
      <Featured />
      <BottomBanner />
      <Support />
    </div>
  );
}
