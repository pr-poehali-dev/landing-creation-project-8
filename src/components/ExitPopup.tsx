import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ExitPopupProps {
  yandexEdaLink: string;
}

const ExitPopup = ({ yandexEdaLink }: ExitPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(105912288, 'reachGoal', 'exit_popup_shown');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-[999] animate-fade-in"
        onClick={() => setIsVisible(false)}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] w-[90%] max-w-md animate-scale-in">
        <div className="bg-background rounded-2xl shadow-2xl p-8 relative border-2 border-primary">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-4 rounded-full hover:bg-muted p-2 transition-colors"
          >
            <Icon name="X" size={20} />
          </button>

          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">🎁</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Подожди!
            </h2>

            <p className="text-lg mb-2">
              Получи <span className="text-primary font-bold text-2xl">бонус 500₽</span>
            </p>
            <p className="text-muted-foreground mb-6">
              к первому заказу при регистрации прямо сейчас
            </p>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold h-14 text-base animate-pulse-scale"
                asChild
              >
                <a 
                  href={yandexEdaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105912288, 'reachGoal', 'exit_popup_click');
                    }
                  }}
                >
                  Получить бонус 500₽
                  <Icon name="Gift" size={20} className="ml-2" />
                </a>
              </Button>

              <button
                onClick={() => setIsVisible(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Нет, спасибо
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitPopup;