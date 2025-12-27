import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const StatsSection = () => {
  const stats = [
    {
      icon: 'Users',
      number: '10 000+',
      label: 'Активных курьеров'
    },
    {
      icon: 'Package',
      number: '500 000+',
      label: 'Доставок в месяц'
    },
    {
      icon: 'Star',
      number: '4.8',
      label: 'Средний рейтинг'
    },
    {
      icon: 'MapPin',
      number: '50+',
      label: 'Городов России'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-primary text-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Нам доверяют тысячи курьеров</h2>
          <p className="text-lg text-secondary/90 max-w-2xl mx-auto">
            Присоединяйся к крупнейшей команде доставки в России
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-secondary/10 border-secondary/20 backdrop-blur-sm hover:bg-secondary/15 transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <Icon name={stat.icon} size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">
                    {stat.number}
                  </div>
                  <p className="text-secondary/90 text-base">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
