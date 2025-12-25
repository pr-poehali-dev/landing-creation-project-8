import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

interface HeroSectionProps {
  yandexEdaLink: string;
}

const HeroSection = ({ yandexEdaLink }: HeroSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
                <a href={yandexEdaLink} target="_blank" rel="noopener noreferrer">
                  Стать курьером
                </a>
              </Button>
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[260px] p-4 pb-5">
                  <nav className="flex flex-col gap-1 mt-1">
                    <a 
                      href="#advantages" 
                      className="text-sm font-medium hover:text-primary transition-colors py-1.5 px-2"
                      onClick={handleLinkClick}
                    >
                      Преимущества
                    </a>
                    <a 
                      href="#reviews" 
                      className="text-sm font-medium hover:text-primary transition-colors py-1.5 px-2"
                      onClick={handleLinkClick}
                    >
                      Отзывы
                    </a>
                    <a 
                      href="#calculator" 
                      className="text-sm font-medium hover:text-primary transition-colors py-1.5 px-2"
                      onClick={handleLinkClick}
                    >
                      Калькулятор
                    </a>
                    <a 
                      href="#faq" 
                      className="text-sm font-medium hover:text-primary transition-colors py-1.5 px-2"
                      onClick={handleLinkClick}
                    >
                      Вопросы
                    </a>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-secondary font-semibold mt-3 w-full" asChild>
                      <a href={yandexEdaLink} target="_blank" rel="noopener noreferrer">
                        Стать курьером
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
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
            backgroundImage: 'url(https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/6acec86d-962a-4597-8971-891a14bc05fb.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.5) saturate(1.3) brightness(1.15)',
            imageRendering: '-webkit-optimize-contrast',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"></div>
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
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Работай курьером в Яндекс Еде — выбирай удобный график, получай деньги сразу и бонусы за каждый заказ
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold h-14 px-8 text-base mb-6 animate-pulse-scale" asChild>
                <a href={yandexEdaLink} target="_blank" rel="noopener noreferrer">
                  Подать заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </a>
              </Button>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span>Быстрое оформление</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span>Без опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span>Старт за 3 дня</span>
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