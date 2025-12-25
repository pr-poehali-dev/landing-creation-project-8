import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const VacancyCounter = () => {
  const [vacancies, setVacancies] = useState(47);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Имитация уменьшения вакансий каждые 5 минут
    const interval = setInterval(() => {
      setVacancies(prev => Math.max(12, prev - 1));
    }, 300000); // 5 минут

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`bg-gradient-to-r from-red-50 to-orange-50 border-2 border-primary/30 rounded-xl p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/20 rounded-full p-3 animate-pulse">
          <Icon name="Users" size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-primary">{vacancies}</span>
            <span className="text-muted-foreground">свободных мест</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Осталось в твоём городе. Успей подать заявку!
          </p>
          <div className="flex items-center gap-2 text-xs text-orange-600">
            <Icon name="Clock" size={14} />
            <span>Места заканчиваются быстро</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyCounter;
