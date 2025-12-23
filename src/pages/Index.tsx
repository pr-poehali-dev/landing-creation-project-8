import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';

const YANDEX_EDA_LINK = 'https://reg.eda.yandex.ru/?advertisement_campaign=forms_for_agents&user_invite_code=97ea05f4a54f41f59d3b2aafca5efea2&utm_content=blank';

type CourierType = 'walk' | 'bike' | 'car';

const Index = () => {
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
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍔</span>
              </div>
              <span className="text-xl md:text-2xl font-bold">Яндекс Еда</span>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold" asChild>
              <a href={YANDEX_EDA_LINK} target="_blank" rel="noopener noreferrer">
                Стать курьером
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section 
        className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/6acec86d-962a-4597-8971-891a14bc05fb.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-foreground border-primary/30 text-base px-4 py-1">
                Набор курьеров
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Зарабатывай<br />
                <span className="text-primary">до 200 000 ₽</span><br />
                в месяц
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Работай курьером в Яндекс Еде — выбирай удобный график, получай деньги сразу и бонусы за каждый заказ
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold h-14 px-8 text-base mb-6" asChild>
                <a href={YANDEX_EDA_LINK} target="_blank" rel="noopener noreferrer">
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

      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему курьеры выбирают нас</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Мы создали лучшие условия для работы курьеров
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '💰',
                title: 'Высокий доход',
                description: 'От 2000 ₽ за смену + бонусы и чаевые'
              },
              {
                icon: '⏰',
                title: 'Гибкий график',
                description: 'Работай когда удобно — выбирай смены сам'
              },
              {
                icon: '⚡',
                title: 'Быстрые выплаты',
                description: 'Выводи деньги на карту каждый день'
              },
              {
                icon: '📱',
                title: 'Простое приложение',
                description: 'Всё в одном приложении — заказы, навигация, оплата'
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all">
                <CardHeader>
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших курьеров</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которые зарабатывают с нами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                name: 'Александр',
                age: '24 года',
                experience: '8 месяцев',
                photo: 'https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/9afc87d1-8335-4903-8154-aa2ef1169f82.jpg',
                text: 'Работаю после учёбы по 4-5 часов. За месяц выходит 70-80 тысяч, вполне хватает на жизнь. Главное — свободный график, сам выбираю когда выходить.',
                earnings: '75 000 ₽/мес'
              },
              {
                name: 'Мария',
                age: '29 лет',
                experience: '1 год',
                photo: 'https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/bd5589e3-e1c7-4393-9b7c-528b2f58ef8a.jpg',
                text: 'Ушла из офиса и не жалею! Работаю полный день, зарабатываю больше чем на прошлой работе. Люблю быть на свежем воздухе, плюс чаевые радуют.',
                earnings: '140 000 ₽/мес'
              },
              {
                name: 'Дмитрий',
                age: '35 лет',
                experience: '2 года',
                photo: 'https://cdn.poehali.dev/projects/704f2599-c4d3-472d-9589-891236468e4c/files/74d81d66-1230-42c7-8161-3da79bd1799f.jpg',
                text: 'Стабильный заработок и никакого начальника над головой. Работаю интенсивно, выхожу рано утром и до вечера. За месяц могу сделать до 200к, иногда больше.',
                earnings: '190 000 ₽/мес'
              }
            ].map((review, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={review.photo} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{review.name}, {review.age}</CardTitle>
                      <p className="text-sm text-muted-foreground">Работает {review.experience}</p>
                      <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">
                        {review.earnings}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-semibold" asChild>
              <a href={YANDEX_EDA_LINK} target="_blank" rel="noopener noreferrer">
                Я тоже хочу так зарабатывать
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как начать работать</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всего 3 простых шага до первого заказа
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                icon: 'FileText',
                title: 'Заполни анкету',
                description: 'Перейди по ссылке и заполни простую форму — это займёт 5 минут'
              },
              {
                step: '2',
                icon: 'UserCheck',
                title: 'Пройди обучение',
                description: 'Короткий онлайн-курс за 30 минут — узнаешь как работает приложение'
              },
              {
                step: '3',
                icon: 'Bike',
                title: 'Начни доставлять',
                description: 'Выходи на линию в любое удобное время и зарабатывай'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-secondary font-bold text-2xl flex items-center justify-center mb-6">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20">
                    <Icon name="ArrowRight" size={24} className="absolute -top-3 right-0 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор заработка</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Рассчитай свой потенциальный доход за месяц
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center gap-3 mb-6">
                {(Object.keys(courierData) as CourierType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setCourierType(type)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                      courierType === type
                        ? 'bg-primary text-secondary shadow-lg scale-105'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <span className="text-4xl">{courierData[type].icon}</span>
                    <span className="text-sm font-semibold">{courierData[type].title}</span>
                  </button>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
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
                  <a href={YANDEX_EDA_LINK} target="_blank" rel="noopener noreferrer">
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

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что нужно для старта</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Минимальные требования к курьерам
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: 'User',
                title: 'Возраст от 18 лет',
                description: 'Паспорт гражданина РФ'
              },
              {
                icon: 'Smartphone',
                title: 'Смартфон на Android или iOS',
                description: 'Для установки приложения курьера'
              },
              {
                icon: 'Bike',
                title: 'Транспорт',
                description: 'Велосипед, самокат, машина или пешком'
              },
              {
                icon: 'Sparkles',
                title: 'Хорошее настроение',
                description: 'Вежливость и доброжелательность'
              },
              {
                icon: 'Clock',
                title: 'Пунктуальность',
                description: 'Доставляй заказы вовремя'
              },
              {
                icon: 'Wallet',
                title: 'Банковская карта',
                description: 'Для получения выплат'
              }
            ].map((req, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={req.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Можно ли совмещать с учёбой или работой?',
                a: 'Да! Ты сам выбираешь удобное время для работы. Можешь выходить на несколько часов в день или только по выходным.'
              },
              {
                q: 'Сколько времени занимает оформление?',
                a: 'От подачи заявки до первого заказа проходит 2-3 дня. Оформление документов онлайн, приезжать в офис не нужно.'
              },
              {
                q: 'Нужен ли опыт работы курьером?',
                a: 'Нет, опыт не требуется. Мы обучим тебя всему необходимому — пройдёшь короткий онлайн-курс и получишь доступ к заказам.'
              },
              {
                q: 'Как происходит оплата?',
                a: 'Деньги можно выводить каждый день на банковскую карту. Оплата приходит в течение нескольких минут после вывода.'
              },
              {
                q: 'Что если у меня нет транспорта?',
                a: 'Можно работать пешком в центре города. Также можем помочь с арендой велосипеда или самоката на выгодных условиях.'
              },
              {
                q: 'Есть ли поддержка курьеров?',
                a: 'Да, наша служба поддержки работает 24/7. Всегда поможем решить любые вопросы в чате приложения.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-start gap-3">
                    <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground ml-9">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
              Готов начать зарабатывать?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-secondary/80">
              Нажми на кнопку ниже, заполни простую анкету и начни работать уже через 3 дня
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold h-14 px-8" asChild>
              <a href={YANDEX_EDA_LINK} target="_blank" rel="noopener noreferrer">
                Заполнить анкету
                <Icon name="ExternalLink" size={20} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍔</span>
              </div>
              <span className="text-xl font-bold">Яндекс Еда</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Вакансии</a>
              <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия</a>
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>© 2024 Яндекс Еда. Информация на сайте не является публичной офертой.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;