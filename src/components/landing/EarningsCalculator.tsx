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
    <section id="calculator" className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Калькулятор заработка</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Рассчитай свой потенциальный доход за месяц
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl bg-gradient-to-br from-background to-primary/5">
          <CardHeader className="text-center pb-6">
            <h3 className="text-xl font-semibold mb-4">Выбери тип курьера</h3>
            <div className="grid grid-cols-3 gap-4">
              {(Object.keys(courierData) as CourierType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setCourierType(type)}
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl transition-all border-2 ${
                    courierType === type
                      ? 'bg-primary text-secondary border-primary shadow-lg scale-105'
                      : 'bg-background border-border hover:border-primary/50'
                  }`}
                >
                  <span className="text-5xl">{courierData[type].icon}</span>
                  <span className="text-sm font-semibold">{courierData[type].title}</span>
                </button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold">Сколько часов готов работать?</label>
                <div className="flex items-center gap-2 rounded-lg px-4 py-2 bg-primary">
                  <span className="text-3xl font-bold text-secondary">{hours}</span>
                  <span className="text-lg text-secondary font-semibold">ч/день</span>
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
              <div className="flex justify-between text-sm text-muted-foreground mt-3">
                <span>1 час</span>
                <span>12 часов</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary rounded-xl p-6 text-secondary">
                <div className="text-center">
                  <p className="text-sm font-medium mb-2">Доход в день</p>
                  <p className="text-4xl font-bold mb-4">
                    {earningsPerDay.toLocaleString('ru-RU')} ₽
                  </p>
                  <div className="space-y-1 text-xs text-secondary/80">
                    <div className="flex justify-between">
                      <span>Заказов в час:</span>
                      <span className="font-semibold">{currentData.ordersPerHour}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Цена заказа:</span>
                      <span className="font-semibold">{currentData.pricePerOrder} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Всего заказов:</span>
                      <span className="font-semibold">{ordersPerDay.toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-secondary">
                <div className="text-center">
                  <p className="text-sm font-medium mb-2">Доход в месяц</p>
                  <p className="text-5xl font-bold mb-2">
                    {earningsPerMonth.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-xs text-secondary/80">при 22 рабочих днях</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <Button className="bg-primary hover:bg-primary/90 text-secondary font-semibold" asChild>
                <a href={yandexEdaLink} target="_blank" rel="noopener noreferrer">
                  Хочу так зарабатывать
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground pt-2">
              * Расчёт является примерным
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EarningsCalculator;