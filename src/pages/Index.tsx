import HeroSection from '@/components/landing/HeroSection';
import EarningsCalculator from '@/components/landing/EarningsCalculator';
import ReviewsSection from '@/components/landing/ReviewsSection';
import InfoSections from '@/components/landing/InfoSections';

const YANDEX_EDA_LINK = 'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=97ea05f4a54f41f59d3b2aafca5efea2&utm_content=blank';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection yandexEdaLink={YANDEX_EDA_LINK} />
      <InfoSections yandexEdaLink={YANDEX_EDA_LINK} />
      <ReviewsSection yandexEdaLink={YANDEX_EDA_LINK} />
      <EarningsCalculator yandexEdaLink={YANDEX_EDA_LINK} />
    </div>
  );
};

export default Index;
