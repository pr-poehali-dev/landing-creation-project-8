import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface InfoSectionsProps {
  yandexEdaLink: string;
}

const InfoSections = ({ yandexEdaLink }: InfoSectionsProps) => {
  return (
    <>
      <section id="advantages" className="py-16 md:py-20 bg-secondary text-white">
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

      <section id="faq" className="py-16 md:py-20 bg-background">
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
              <a href={yandexEdaLink} target="_blank" rel="noopener noreferrer">
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
    </>
  );
};

export default InfoSections;