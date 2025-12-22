import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={32} className="text-secondary" />
              <span className="text-2xl font-bold text-primary">LogiPro</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#advantages" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Преимущества</a>
              <a href="#features" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Возможности</a>
              <a href="#cases" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Кейсы</a>
              <a href="#pricing" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Тарифы</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Контакты</a>
            </nav>
            <Button size="lg" className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-medium">
              Цифровая трансформация логистики
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Полный контроль над вашими<br />цепочками поставок
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Автоматизируйте логистику, сократите издержки до 40% и повысьте прозрачность операций с помощью облачной платформы LogiPro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 py-6 bg-accent hover:bg-accent/90">
                Запросить демо
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                Смотреть видео
                <Icon name="Play" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={18} className="text-secondary" />
                <span>Без кредитной карты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={18} className="text-secondary" />
                <span>14 дней бесплатно</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Почему выбирают LogiPro
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексное решение для управления логистикой, проверенное сотнями компаний
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Быстрое внедрение',
                description: 'Запуск системы за 2 недели без остановки бизнес-процессов'
              },
              {
                icon: 'Shield',
                title: 'Безопасность данных',
                description: 'Шифрование по стандарту ISO 27001 и резервное копирование в реальном времени'
              },
              {
                icon: 'TrendingUp',
                title: 'Рост эффективности',
                description: 'Сокращение времени обработки заказов на 60% и повышение точности до 99.5%'
              },
              {
                icon: 'Layers',
                title: 'Интеграция с ERP',
                description: 'Бесшовная интеграция с SAP, 1C, Oracle и другими системами'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика в реальном времени',
                description: 'Полная визуализация операций и прогнозирование с помощью AI'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Выделенный аккаунт-менеджер и техническая поддержка без выходных'
              }
            ].map((advantage, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={28} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Функции и возможности
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для управления современными цепочками поставок
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: 'Package',
                  title: 'Управление складом',
                  description: 'WMS-система с автоматическим учётом товаров, оптимизацией размещения и контролем сроков годности'
                },
                {
                  icon: 'Route',
                  title: 'Планирование маршрутов',
                  description: 'Оптимизация логистических маршрутов с учётом трафика, стоимости топлива и времени доставки'
                },
                {
                  icon: 'FileText',
                  title: 'Электронный документооборот',
                  description: 'Автоматическое формирование ТТН, счетов, актов и интеграция с ЭДО операторами'
                },
                {
                  icon: 'MapPin',
                  title: 'Трекинг в реальном времени',
                  description: 'GPS-мониторинг транспорта, уведомления о статусе груза и прогнозы времени прибытия'
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center min-h-[500px]">
              <div className="text-center">
                <Icon name="Boxes" size={120} className="text-secondary/40 mx-auto mb-6" />
                <p className="text-lg font-medium text-muted-foreground">Интерактивная демонстрация платформы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Истории успеха клиентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты от внедрения LogiPro в крупных компаниях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'РосТранс Групп',
                industry: 'Федеральная логистическая сеть',
                result: '-42%',
                metric: 'операционных расходов',
                description: 'Автоматизация маршрутизации и внедрение AI-прогнозирования позволили оптимизировать парк транспорта на 35%'
              },
              {
                company: 'ПродЛогистика',
                industry: 'Холодная цепь поставок',
                result: '+60%',
                metric: 'скорости обработки',
                description: 'Цифровизация складских операций сократила время комплектации с 4 часов до 1.5 часа'
              },
              {
                company: 'СтройСнаб',
                industry: 'Строительные материалы',
                result: '99.7%',
                metric: 'точность доставки',
                description: 'Система трекинга и автоматических уведомлений улучшила качество сервиса и сократила претензии на 80%'
              }
            ].map((caseStudy, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">{caseStudy.industry}</Badge>
                  <CardTitle className="text-2xl">{caseStudy.company}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-1">{caseStudy.result}</div>
                    <div className="text-sm text-muted-foreground font-medium">{caseStudy.metric}</div>
                  </div>
                  <p className="text-muted-foreground">{caseStudy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Прозрачные тарифные планы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий план для вашего бизнеса без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Старт',
                price: '29 900',
                period: 'в месяц',
                description: 'Для малого бизнеса',
                features: [
                  'До 100 заказов/месяц',
                  'Управление складом (1 локация)',
                  'Базовая аналитика',
                  'Мобильное приложение',
                  'Email поддержка'
                ],
                highlighted: false
              },
              {
                name: 'Бизнес',
                price: '79 900',
                period: 'в месяц',
                description: 'Для растущих компаний',
                features: [
                  'До 1000 заказов/месяц',
                  'Мультискладская система',
                  'Расширенная аналитика + AI',
                  'Интеграция с ERP',
                  'Приоритетная поддержка 24/7',
                  'Персональный менеджер'
                ],
                highlighted: true
              },
              {
                name: 'Корпоративный',
                price: 'По запросу',
                period: '',
                description: 'Для крупных предприятий',
                features: [
                  'Неограниченное количество заказов',
                  'Кастомизация под процессы',
                  'Выделенный сервер',
                  'SLA 99.95%',
                  'Техническая поддержка 24/7',
                  'Обучение персонала'
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`border-border relative ${plan.highlighted ? 'border-2 border-accent shadow-xl scale-105' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mb-4">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.price === 'По запросу' ? 'Связаться с нами' : 'Начать работу'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и наш специалист свяжется с вами в течение 1 часа
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя</label>
                        <Input 
                          placeholder="Иван Петров"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input 
                          type="email"
                          placeholder="ivan@company.ru"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон</label>
                        <Input 
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Textarea 
                          placeholder="Расскажите о вашем проекте..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Отправить заявку
                        <Icon name="Send" size={18} className="ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">sales@logipro.ru</p>
                    <p className="text-muted-foreground">support@logipro.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00 МСК</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 10</p>
                    <p className="text-muted-foreground">БЦ "Логистик Плаза", офис 501</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">График работы</h3>
                    <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Техподдержка: круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} className="text-secondary" />
                <span className="text-xl font-bold text-primary">LogiPro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Цифровая платформа для управления цепочками поставок нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-secondary transition-colors">Функции</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Интеграции</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-secondary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-secondary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Помощь</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 LogiPro. Все права защищены.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-secondary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-secondary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
