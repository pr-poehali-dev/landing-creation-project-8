import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

type CourierType = 'walk' | 'bike' | 'car';

const CITIES = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Нижний Новгород',
  'Челябинск',
  'Самара',
  'Омск',
  'Ростов-на-Дону',
  'Уфа',
  'Красноярск',
  'Воронеж',
  'Пермь',
  'Волгоград',
  'Краснодар',
  'Саратов',
  'Тюмень',
  'Тольятти',
  'Ижевск',
  'Барнаул',
  'Ульяновск',
  'Иркутск',
  'Хабаровск',
  'Ярославль',
  'Владивосток',
  'Махачкала',
  'Томск',
  'Оренбург',
  'Кемерово',
  'Новокузнецк',
  'Рязань',
  'Астрахань',
  'Набережные Челны',
  'Пенза',
  'Липецк',
  'Киров',
  'Чебоксары',
  'Балашиха',
  'Калининград',
  'Тула',
  'Курск',
  'Сочи',
  'Ставрополь',
  'Улан-Удэ',
  'Тверь',
  'Магнитогорск',
  'Иваново',
  'Брянск',
  'Белгород',
  'Сургут',
  'Владимир',
  'Нижний Тагил',
  'Архангельск',
  'Чита',
  'Калуга',
  'Смоленск',
  'Волжский',
  'Курган',
  'Череповец',
  'Орёл',
  'Владикавказ',
  'Грозный',
  'Мурманск',
  'Тамбов',
  'Петрозаводск',
  'Нижневартовск',
  'Кострома',
  'Новороссийск',
  'Йошкар-Ола',
  'Химки',
  'Таганрог',
  'Комсомольск-на-Амуре',
  'Сыктывкар',
  'Нижнекамск',
  'Братск',
  'Дзержинск',
  'Шахты',
  'Орск',
  'Ангарск',
  'Старый Оскол',
  'Великий Новгород',
  'Благовещенск',
  'Энгельс',
  'Подольск',
  'Псков',
  'Бийск',
  'Прокопьевск',
  'Рыбинск',
  'Балаково',
  'Армавир',
  'Северодвинск',
  'Королёв',
  'Петропавловск-Камчатский',
  'Мытищи',
  'Люберцы',
  'Новочеркасск',
  'Каменск-Уральский',
  'Златоуст',
  'Электросталь',
  'Альметьевск',
  'Салават',
  'Пятигорск',
  'Миасс',
  'Абакан',
  'Находка',
  'Копейск',
  'Коломна'
];

interface EarningsCalculatorProps {
  yandexEdaLink: string;
}

const EarningsCalculator = ({ yandexEdaLink }: EarningsCalculatorProps) => {
  const [courierType, setCourierType] = useState<CourierType>('car');
  const [hoursPerDay, setHoursPerDay] = useState([5]);
  const [daysPerMonth, setDaysPerMonth] = useState([20]);
  const [selectedCity, setSelectedCity] = useState('Москва');
  const [includeReferralBonus, setIncludeReferralBonus] = useState(false);

  const cityMultipliers: Record<string, number> = {
    'Москва': 1.0,
    'Санкт-Петербург': 0.85,
    'Новосибирск': 0.7,
    'Екатеринбург': 0.75,
    'Казань': 0.72,
    'Нижний Новгород': 0.73,
    'Челябинск': 0.68,
    'Самара': 0.71,
    'Омск': 0.67,
    'Ростов-на-Дону': 0.74,
    'Уфа': 0.69,
    'Красноярск': 0.72,
    'Воронеж': 0.70,
    'Пермь': 0.71,
    'Волгоград': 0.69,
    'Краснодар': 0.76,
    'Саратов': 0.66,
    'Тюмень': 0.78,
    'Тольятти': 0.68,
    'Ижевск': 0.67,
    'Барнаул': 0.65,
    'Ульяновск': 0.66,
    'Иркутск': 0.70,
    'Хабаровск': 0.73,
    'Ярославль': 0.69,
    'Владивосток': 0.75,
    'Махачкала': 0.62,
    'Томск': 0.68,
    'Оренбург': 0.66,
    'Кемерово': 0.65,
    'Новокузнецк': 0.64,
    'Рязань': 0.67,
    'Астрахань': 0.65,
    'Набережные Челны': 0.68,
    'Пенза': 0.65,
    'Липецк': 0.66,
    'Киров': 0.65,
    'Чебоксары': 0.64,
    'Балашиха': 0.92,
    'Калининград': 0.71,
    'Тула': 0.68,
    'Курск': 0.64,
    'Сочи': 0.80,
    'Ставрополь': 0.66,
    'Улан-Удэ': 0.63,
    'Тверь': 0.67,
    'Магнитогорск': 0.66,
    'Иваново': 0.63,
    'Брянск': 0.63,
    'Белгород': 0.67,
    'Сургут': 0.82,
    'Владимир': 0.66,
    'Нижний Тагил': 0.65,
    'Архангельск': 0.68,
    'Чита': 0.64,
    'Калуга': 0.68,
    'Смоленск': 0.64,
    'Волжский': 0.65,
    'Курган': 0.62,
    'Череповец': 0.67,
    'Орёл': 0.63,
    'Владикавказ': 0.63,
    'Грозный': 0.60,
    'Мурманск': 0.75,
    'Тамбов': 0.63,
    'Петрозаводск': 0.65,
    'Нижневартовск': 0.80,
    'Кострома': 0.64,
    'Новороссийск': 0.72,
    'Йошкар-Ола': 0.63,
    'Химки': 0.93,
    'Таганрог': 0.65,
    'Комсомольск-на-Амуре': 0.66,
    'Сыктывкар': 0.66,
    'Нижнекамск': 0.66,
    'Братск': 0.65,
    'Дзержинск': 0.66,
    'Шахты': 0.63,
    'Орск': 0.62,
    'Ангарск': 0.65,
    'Старый Оскол': 0.66,
    'Великий Новгород': 0.65,
    'Благовещенск': 0.67,
    'Энгельс': 0.64,
    'Подольск': 0.90,
    'Псков': 0.64,
    'Бийск': 0.63,
    'Прокопьевск': 0.62,
    'Рыбинск': 0.64,
    'Балаково': 0.63,
    'Армавир': 0.64,
    'Северодвинск': 0.68,
    'Королёв': 0.92,
    'Петропавловск-Камчатский': 0.76,
    'Мытищи': 0.91,
    'Люберцы': 0.90,
    'Новочеркасск': 0.65,
    'Каменск-Уральский': 0.65,
    'Златоуст': 0.64,
    'Электросталь': 0.88,
    'Альметьевск': 0.68,
    'Салават': 0.66,
    'Пятигорск': 0.65,
    'Миасс': 0.65,
    'Абакан': 0.64,
    'Находка': 0.68,
    'Копейск': 0.64,
    'Коломна': 0.87
  };

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
  const cityMultiplier = cityMultipliers[selectedCity] || 0.65;
  const hours = hoursPerDay[0];
  const days = daysPerMonth[0];
  const ordersPerDay = currentData.ordersPerHour * hours;
  const baseEarningsPerDay = ordersPerDay * currentData.pricePerOrder;
  const earningsPerDay = Math.round(baseEarningsPerDay * cityMultiplier);
  const earningsPerMonth = earningsPerDay * days;
  const referralBonus = 100000;
  const totalEarnings = includeReferralBonus ? earningsPerMonth + referralBonus : earningsPerMonth;

  return (
    <section id="calculator" className="py-8 md:py-12 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Рассчитайте ваш доход</h2>
        </div>
        
        <Card className="mx-auto border-2 border-primary/30 shadow-2xl bg-background">
          <CardHeader className="text-center pb-1.5 pt-2">
            <div className="mb-3">
              <h3 className="text-sm md:text-base font-bold mb-2">Выберите ваш город</h3>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберите город" />
                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <h3 className="text-sm md:text-base font-bold mb-1.5">Выбери тип курьера</h3>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {(Object.keys(courierData) as CourierType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setCourierType(type)}
                  className={`flex flex-col items-center gap-0.5 p-1 rounded transition-all border-2 overflow-hidden ${
                    courierType === type
                      ? 'border-primary shadow-lg ring-2 ring-primary/20'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="w-full aspect-square rounded overflow-hidden">
                    <img 
                      src={courierData[type].image} 
                      alt={courierData[type].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold">{courierData[type].title}</span>
                </button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-1.5 pb-2">
            <div className="bg-muted/20 rounded p-1.5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 mb-1">
                <label className="text-[11px] md:text-xs font-bold">Часов в день</label>
                <div className="flex items-center gap-1 rounded px-1.5 py-0.5 bg-primary self-start">
                  <span className="text-base md:text-lg font-bold text-secondary">{hours}</span>
                  <span className="text-[10px] text-secondary font-bold">ч/день</span>
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
              <div className="flex justify-between text-[9px] text-muted-foreground mt-0.5">
                <span>1 час</span>
                <span>12 часов</span>
              </div>
            </div>

            <div className="bg-muted/20 rounded p-1.5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 mb-1">
                <label className="text-[11px] md:text-xs font-bold">Дней в месяц</label>
                <div className="flex items-center gap-1 rounded px-1.5 py-0.5 bg-primary self-start">
                  <span className="text-base md:text-lg font-bold text-secondary">{days}</span>
                  <span className="text-[10px] text-secondary font-bold">дн/мес</span>
                </div>
              </div>
              <Slider
                value={daysPerMonth}
                onValueChange={setDaysPerMonth}
                min={1}
                max={30}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-[9px] text-muted-foreground mt-0.5">
                <span>1 день</span>
                <span>30 дней</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-1.5">
              <div className="bg-primary rounded p-1.5 text-secondary">
                <div className="text-center">
                  <p className="text-[9px] font-semibold mb-0">Доход в день</p>
                  <p className="text-lg md:text-xl font-bold mb-0.5">
                    {earningsPerDay.toLocaleString('ru-RU')} ₽
                  </p>
                  <div className="space-y-0 text-[9px] text-secondary/90">
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
              
              <div className="bg-primary rounded p-1.5 text-secondary">
                <div className="text-center">
                  <p className="text-[9px] font-semibold mb-0">Доход в месяц</p>
                  <p className="text-xl md:text-2xl font-bold mb-0.5">
                    {totalEarnings.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-[9px] text-secondary/90">при {days} рабочих днях</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/20 rounded p-2 flex items-start gap-2">
              <Checkbox
                id="referral-bonus"
                checked={includeReferralBonus}
                onCheckedChange={(checked) => setIncludeReferralBonus(checked === true)}
              />
              <div className="flex-1">
                <label
                  htmlFor="referral-bonus"
                  className="text-xs font-semibold cursor-pointer leading-tight"
                >
                  + {referralBonus.toLocaleString('ru-RU')} ₽ за каждого привлеченного вами нового курьера
                </label>
              </div>
            </div>

            <div className="text-center">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-secondary font-bold w-full md:w-auto animate-pulse-scale text-xs h-8" asChild>
                <a 
                  href={yandexEdaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105912288, 'reachGoal', 'ispolzovanie_kalkulyatora');
                    }
                  }}
                >
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