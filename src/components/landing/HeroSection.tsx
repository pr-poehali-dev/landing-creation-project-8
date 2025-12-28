import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface HeroSectionProps {
  yandexEdaLink: string;
}

const HeroSection = ({ yandexEdaLink }: HeroSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#advantages', text: 'Преимущества' },
    { href: '#reviews', text: 'Отзывы' },
    { href: '#calculator', text: 'Калькулятор' },
    { href: '#faq', text: 'Вопросы' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="border-b border-border bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍔</span>
              </div>
              <span className="text-xl md:text-2xl font-bold">Яндекс Еда</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 mr-6">
              <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
              <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Вопросы</a>
            </nav>
            
            <div className="flex items-center gap-3">
              <Button size="lg" className="hidden md:flex bg-primary hover:bg-primary/90 text-secondary font-semibold animate-pulse-scale" asChild>
                <a 
                  href={yandexEdaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105912288, 'reachGoal', 'klik_na_knopku_zayavki');
                    }
                  }}
                >
                  Стать курьером
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icon name="Menu" size={24} />
              </Button>
              
              {isOpen && (
                <>
                  <div 
                    className="fixed inset-0 bg-black/80 z-[999] md:hidden"
                    onClick={() => setIsOpen(false)}
                  />
                  <div className="fixed top-0 right-0 h-screen w-[280px] bg-background shadow-lg z-[1000] p-6 md:hidden overflow-y-auto">
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
                    >
                      <Icon name="X" size={20} />
                    </button>
                    <nav className="flex flex-col gap-6 mt-12">
                      {menuItems.map((item) => (
                        <a 
                          key={item.href}
                          href={item.href} 
                          className="text-lg font-medium hover:text-primary block"
                          onClick={handleLinkClick}
                          style={{ lineHeight: '2', minHeight: '40px', display: 'flex', alignItems: 'center' }}
                        >
                          {item.text}
                        </a>
                      ))}
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold mt-2" asChild>
                        <a 
                          href={yandexEdaLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).ym) {
                              (window as any).ym(105912288, 'reachGoal', 'klik_na_knopku_zayavki');
                            }
                          }}
                        >
                          Стать курьером
                        </a>
                      </Button>
                    </nav>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <section 
        className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/bbc98ddfe32811f0803f121ccd90150b_1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: '85% 75%',
            filter: 'none',
            imageRendering: 'auto',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-foreground border-primary/30 text-base px-4 py-1">
                Набор курьеров
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Зарабатывай<br />
                <span className="text-primary">до 270 000 ₽</span><br />
                в месяц
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-[#000000]">
                Работай курьером в Яндекс Еде — выбирай удобный график, получай деньги сразу и бонусы за каждый заказ
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold h-14 px-8 text-base mb-6 animate-pulse-scale" asChild>
                <a 
                  href={yandexEdaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105912288, 'reachGoal', 'klik_na_knopku_zayavki');
                    }
                  }}
                >
                  Подать заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </a>
              </Button>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-black font-semibold">Быстрое оформление</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-black font-semibold">Без опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-black font-semibold">Старт за 3 дня</span>
                </div>
              </div>
            </div>
            <div className="lg:block hidden"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;