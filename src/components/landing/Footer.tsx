import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🍔</span>
              </div>
              <span className="text-xl font-bold">Яндекс Еда</span>
            </div>
            <p className="text-white/70 text-sm">
              Крупнейший сервис доставки еды в России. Присоединяйся к команде курьеров!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:88001234567" className="hover:text-white transition-colors">8 (800) 123-45-67</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:support@eda.yandex.ru" className="hover:text-white transition-colors">support@eda.yandex.ru</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Поделиться</h3>
            <div className="flex gap-3 mb-4">
              <a 
                href="https://wa.me/?text=Работай курьером в Яндекс Еда! Гибкий график и высокий доход" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Поделиться в WhatsApp"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a 
                href="https://t.me/share/url?url=&text=Работай курьером в Яндекс Еда! Гибкий график и высокий доход" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Поделиться в Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
              <a 
                href="https://vk.com/share.php?url=&title=Работай курьером в Яндекс Еда!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Поделиться ВКонтакте"
              >
                <Icon name="Share2" size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Вакансии</a>
              <a href="#" className="hover:text-white transition-colors">Поддержка</a>
              <a href="#" className="hover:text-white transition-colors">Условия</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>© 2024 Яндекс Еда. Информация на сайте не является публичной офертой.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
