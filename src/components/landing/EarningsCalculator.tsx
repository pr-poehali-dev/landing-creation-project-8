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
      image: 'https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/e7aacc6a-1920-489f-b5e2-b9d3183f4c08.jpg',
      title: 'Пеший',
      ordersPerHour: 2,
      pricePerOrder: 150
    },
    bike: {
      image: 'https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/a009e3c5-6d4b-411f-bbbe-4c5c387a65ef.jpg',
      title: 'Велокурьер',
      ordersPerHour: 2.5,
      pricePerOrder: 180
    },
    car: {
      image: 'https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/0be22b83-1487-439c-b585-287aae0904bc.jpg',
      title: 'Автокурьер',
      ordersPerHour: 3,
      pricePerOrder: 220
    }
  };

  const currentData = courierData[courierType];
  const hours = hoursPerDay[0];
  const ordersPerDay = currentData.ordersPerHour * hours;
  const earningsPerDay = ordersPerDay * currentData.pricePerOrder;
  const earningsPerMonth = earningsPerDay * 22;

  return (
    <section id="calculator" className="py-8 md:py-12 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Калькулятор заработка</h2>
          <p className="text-sm text-muted-foreground">
            Рассчитай свой потенциальный доход за месяц
          </p>
        </div>
        
        <Card className="mx-auto border-2 border-primary/30 shadow-2xl bg-background">
          <CardHeader className="text-center pb-4">
            <h3 className="text-lg md:text-xl font-bold mb-4">Выбери тип курьера</h3>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {(Object.keys(courierData) as CourierType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setCourierType(type)}
                  className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl transition-all border-2 overflow-hidden ${
                    courierType === type
                      ? 'border-primary shadow-lg ring-2 ring-primary/20'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="w-full aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={courierData[type].image} 
                      alt={courierData[type].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-bold">{courierData[type].title}</span>
                </button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-muted/20 rounded-xl p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 mb-3">
                <label className="text-sm md:text-base font-bold">Сколько часов готов работать?</label>
                <div className="flex items-center gap-2 rounded-lg px-4 py-2 bg-primary self-start">
                  <span className="text-2xl md:text-3xl font-bold text-secondary">{hours}</span>
                  <span className="text-sm md:text-base text-secondary font-bold">ч/день</span>
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
              <div className="flex justify-between text-xs text-muted-foreground mt-3">
                <span>1 час</span>
                <span>12 часов</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary rounded-xl p-4 text-secondary">
                <div className="text-center">
                  <p className="text-xs font-semibold mb-2">Доход в день</p>
                  <p className="text-3xl md:text-4xl font-bold mb-3">
                    {earningsPerDay.toLocaleString('ru-RU')} ₽
                  </p>
                  <div className="space-y-1 text-xs text-secondary/90">
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
              
              <div className="bg-primary rounded-xl p-4 text-secondary">
                <div className="text-center">
                  <p className="text-xs font-semibold mb-2">Доход в месяц</p>
                  <p className="text-4xl md:text-5xl font-bold mb-2">
                    {earningsPerMonth.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-xs text-secondary/90">при 22 рабочих днях</p>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold w-full md:w-auto animate-pulse-scale" asChild>
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