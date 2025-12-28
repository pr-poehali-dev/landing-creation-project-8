import HeroSection from '@/components/landing/HeroSection';
import VacancyCounter from '@/components/landing/VacancyCounter';
import EarningsCalculator from '@/components/landing/EarningsCalculator';
import ReviewsSection from '@/components/landing/ReviewsSection';
import InfoSections from '@/components/landing/InfoSections';
import StatsSection from '@/components/landing/StatsSection';
import Footer from '@/components/landing/Footer';
import FloatingButton from '@/components/FloatingButton';
import ExitPopup from '@/components/ExitPopup';

const YANDEX_EDA_LINK = 'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=97ea05f4a54f41f59d3b2aafca5efea2&utm_content=blank&utm_source=suraika&utm_medium=landing&utm_campaign=kurier';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection yandexEdaLink={YANDEX_EDA_LINK} />
      
      <div id="benefits">
        <InfoSections yandexEdaLink={YANDEX_EDA_LINK} />
      </div>
      <ReviewsSection yandexEdaLink={YANDEX_EDA_LINK} />
      <EarningsCalculator yandexEdaLink={YANDEX_EDA_LINK} />
      <StatsSection />
      <Footer />
      
      <FloatingButton yandexEdaLink={YANDEX_EDA_LINK} />
      <ExitPopup yandexEdaLink={YANDEX_EDA_LINK} />
    </div>
  );
};

export default Index;