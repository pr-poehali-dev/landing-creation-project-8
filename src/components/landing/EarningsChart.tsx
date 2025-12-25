import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface DayData {
  day: string;
  hours: number;
  earnings: number;
}

const EarningsChart = () => {
  const [selectedHours, setSelectedHours] = useState(8);

  const weekData: DayData[] = [
    { day: 'ПН', hours: selectedHours, earnings: Math.round(selectedHours * 1500) },
    { day: 'ВТ', hours: selectedHours, earnings: Math.round(selectedHours * 1500) },
    { day: 'СР', hours: selectedHours, earnings: Math.round(selectedHours * 1500) },
    { day: 'ЧТ', hours: selectedHours, earnings: Math.round(selectedHours * 1500) },
    { day: 'ПТ', hours: selectedHours, earnings: Math.round(selectedHours * 1800) },
    { day: 'СБ', hours: selectedHours, earnings: Math.round(selectedHours * 2000) },
    { day: 'ВС', hours: selectedHours, earnings: Math.round(selectedHours * 2000) },
  ];

  const totalWeek = weekData.reduce((sum, day) => sum + day.earnings, 0);
  const totalMonth = Math.round(totalWeek * 4.3);
  const maxEarnings = Math.max(...weekData.map(d => d.earnings));

  return (
    <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">График твоего заработка</h3>
        <p className="text-muted-foreground">
          Выбери сколько часов в день готов работать
        </p>
      </div>

      {/* Переключатель часов */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[4, 6, 8, 10, 12].map((hours) => (
          <Button
            key={hours}
            variant={selectedHours === hours ? 'default' : 'outline'}
            size="lg"
            onClick={() => setSelectedHours(hours)}
            className="flex-1 min-w-[80px]"
          >
            {hours}ч
          </Button>
        ))}
      </div>

      {/* График */}
      <div className="mb-8">
        <div className="flex items-end justify-between gap-2 h-64 mb-4">
          {weekData.map((day, index) => {
            const heightPercent = (day.earnings / maxEarnings) * 100;
            const isWeekend = day.day === 'СБ' || day.day === 'ВС';
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full group">
                  <div 
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      isWeekend ? 'bg-primary' : 'bg-primary/70'
                    } hover:opacity-80 cursor-pointer`}
                    style={{ height: `${heightPercent}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {day.earnings.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>
                <span className={`text-sm font-medium ${isWeekend ? 'text-primary' : 'text-muted-foreground'}`}>
                  {day.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Итоги */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Calendar" size={20} className="text-primary" />
            <span className="text-sm text-muted-foreground">За неделю</span>
          </div>
          <p className="text-3xl font-bold text-primary">
            {totalWeek.toLocaleString('ru-RU')} ₽
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-primary">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            <span className="text-sm text-muted-foreground">За месяц</span>
          </div>
          <p className="text-3xl font-bold text-primary">
            {totalMonth.toLocaleString('ru-RU')} ₽
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 bg-blue-50 rounded-lg p-4">
        <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
        <div className="text-sm text-blue-900">
          <span className="font-semibold">Важно:</span> Расчёт приблизительный. Реальный заработок зависит от количества заказов, чаевых и бонусов. В выходные и праздники ставки выше!
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
