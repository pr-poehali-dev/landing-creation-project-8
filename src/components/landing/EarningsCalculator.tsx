import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

type CourierType = 'walk' | 'bike' | 'car';

interface EarningsCalculatorProps {
  yandexEdaLink: string;
}

const EarningsCalculator = ({ yandexEdaLink }: EarningsCalculatorProps) => {
  const [courierType, setCourierType] = useState<CourierType>('bike');
  const [hoursPerDay, setHoursPerDay] = useState([6]);

  const courierData = {
    walk: {
      icon: '🚶',
      title: 'Пеший',
      ordersPerHour: 2,
      pricePerOrder: 150,
      emoji: '🚶‍♂️'
    },
    bike: {
      icon: '🚴',
      title: 'Велокурьер',
      ordersPerHour: 2.5,
      pricePerOrder: 180,
      emoji: '🚴‍♂️'
    },
    car: {
      icon: '🚗',
      title: 'Автокурьер',
      ordersPerHour: 3,
      pricePerOrder: 220,
      emoji: '🚗'
    }
  };

  const currentData = courierData[courierType];
  const hours = hoursPerDay[0];
  const ordersPerDay = currentData.ordersPerHour * hours;
  const earningsPerDay = ordersPerDay * currentData.pricePerOrder;
  const earningsPerMonth = earningsPerDay * 22;

  return (
    <section id="calculator" className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор заработка</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Рассчитай свой потенциальный доход за месяц
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center gap-2">
              {(Object.keys(courierData) as CourierType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setCourierType(type)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all ${
                    courierType === type
                      ? 'bg-primary text-secondary shadow-lg scale-105'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <span className="text-3xl">{courierData[type].icon}</span>
                  <span className="text-xs font-semibold">{courierData[type].title}</span>
                </button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold">Часов работы в день</label>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">{hours}</span>
                  <span className="text-lg text-muted-foreground">ч</span>
                </div>
              </div>
              <Slider
                value={hoursPerDay}
                onValueChange={setHoursPerDay}
                min={1}
                max={12}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 час</span>
                <span>12 часов</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Заказов в час:</span>
                <span className="text-xl font-semibold">{currentData.ordersPerHour}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Средняя цена заказа:</span>
                <span className="text-xl font-semibold">{currentData.pricePerOrder} ₽</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Заказов в день:</span>
                  <span className="text-xl font-semibold">{ordersPerDay.toFixed(0)}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6">
              <div className="text-center space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Доход в день</p>
                  <p className="text-3xl font-bold text-primary">
                    {earningsPerDay.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
                <div className="border-t-2 border-primary/20 pt-3">
                  <p className="text-sm text-muted-foreground mb-2">Доход в месяц (22 дня)</p>
                  <p className="text-5xl font-bold">
                    {earningsPerMonth.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold" asChild>
                <a href={yandexEdaLink} target="_blank" rel="noopener noreferrer">
                  Хочу так зарабатывать
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              * Расчёт является примерным. Реальный доход зависит от количества заказов, чаевых, бонусов и региона работы.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EarningsCalculator;