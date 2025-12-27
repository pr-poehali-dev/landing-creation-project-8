import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ReviewsSectionProps {
  yandexEdaLink: string;
}

const ReviewsSection = ({ yandexEdaLink }: ReviewsSectionProps) => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-background">
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
                    <Badge className="mt-2 bg-primary text-secondary border-primary font-semibold">
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
            <a 
              href={yandexEdaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(105912288, 'reachGoal', 'klik_na_knopku_zayavki');
                }
              }}
            >
              Я тоже хочу так зарабатывать
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;