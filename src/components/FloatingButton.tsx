import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

interface FloatingButtonProps {
  yandexEdaLink: string;
}

const FloatingButton = ({ yandexEdaLink }: FloatingButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-secondary font-bold shadow-2xl animate-pulse-scale h-14 px-6"
        asChild
      >
        <a href={yandexEdaLink} target="_blank" rel="noopener noreferrer">
          <span className="hidden sm:inline">Стать курьером</span>
          <span className="sm:hidden">Подать заявку</span>
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButton;
