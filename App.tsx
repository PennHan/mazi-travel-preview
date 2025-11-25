import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  ChevronRight, 
  Phone, 
  Mail, 
  Globe, 
  Instagram, 
  Facebook, 
  Linkedin,
  Ship,
  Users,
  Briefcase,
  Info
} from 'lucide-react';
import { Itinerary, Service } from './types';

// Mock Data
const ITINERARIES: Itinerary[] = [
  {
    id: 1,
    title: "经典希腊之旅",
    duration: "7 天",
    description: "穿越雅典、埃皮达鲁斯、迈锡尼、奥林匹亚和德尔斐，探索古希腊的灵魂，一段充满历史、文化和精神的时空之旅。",
    imageUrl: "https://picsum.photos/id/1015/800/600",
    featured: true
  },
  {
    id: 2,
    title: "经典希腊之旅 (含迈泰奥拉)",
    duration: "8 天",
    description: "古希腊之旅：迈泰奥拉和雅典的完美结合，感受悬空修道院的震撼。",
    imageUrl: "https://picsum.photos/id/1018/800/600"
  },
  {
    id: 3,
    title: "雅典海滨之旅",
    duration: "8 天",
    description: "尽情享受雅典半岛东南海岸线的假期，体验独特的爱琴海风情。",
    imageUrl: "https://picsum.photos/id/1036/800/600"
  },
  {
    id: 4,
    title: "雅典与扎金索斯岛",
    duration: "8 天",
    description: "游览历史名城雅典及其独特古迹，享受清澈湛蓝的海水、美丽的沙滩、海龟以及热情好客的希腊式待客之道。",
    imageUrl: "https://picsum.photos/id/1039/800/600"
  },
  {
    id: 5,
    title: "雅典、扎金索斯岛与圣托里尼岛",
    duration: "12 天",
    description: "探索雅典的历史古迹，欣赏圣托里尼独特的日落与火山地貌，感受扎金索斯的海滩、洞穴和独特的自然风光。",
    imageUrl: "https://picsum.photos/id/1043/800/600"
  },
  {
    id: 6,
    title: "雅典 - 米科诺斯岛 - 圣托里尼岛",
    duration: "8 天",
    description: "雅典、米科诺斯岛和圣托里尼岛是希腊最受欢迎的旅游目的地之一，体验蓝白世界的浪漫。",
    imageUrl: "https://picsum.photos/id/1053/800/600"
  },
  {
    id: 7,
    title: "雅典 - 莱夫卡斯岛 - 凯法利尼亚岛",
    duration: "8 天",
    description: "探索历史、自然和海滩生活的完美融合，沉醉于郁郁葱葱的景观和清澈湛蓝的海水。",
    imageUrl: "https://picsum.photos/id/1028/800/600"
  },
  {
    id: 8,
    title: "雅典 - 克里特岛",
    duration: "8 天",
    description: "探索历史名城雅典，享受迷人的海滩、美味佳肴和克里特岛原始的自然风光。",
    imageUrl: "https://picsum.photos/id/1016/800/600"
  }
];

const SERVICES: Service[] = [
  { id: 1, title: "关于我们", icon: "Info", imageUrl: "https://picsum.photos/id/1011/400/300" },
  { id: 2, title: "我们的团队", icon: "Users", imageUrl: "https://picsum.photos/id/1012/400/300" },
  { id: 3, title: "我们的服务", icon: "Briefcase", imageUrl: "https://picsum.photos/id/1013/400/300" },
  { id: 4, title: "我们的车队", icon: "Ship", imageUrl: "https://picsum.photos/id/1014/400/300" },
];

const NAV_LINKS = ["首页", "关于我们", "服务项目", "推荐行程", "联系我们"];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700 bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <div className={`text-2xl font-bold font-serif-header tracking-tighter ${isScrolled ? 'text-mazi-blue' : 'text-white drop-shadow-md'}`}>
              MAZI <span className="text-sm font-sans font-normal opacity-80">Travel & Events</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href="#" 
                className={`text-sm uppercase tracking-widest hover:text-gold transition-colors font-medium ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-sm'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4 animate-fade-in-down">
            {NAV_LINKS.map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-gray-800 hover:text-mazi-blue font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1040/1920/1080" 
            alt="Greece Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h2 className="text-white text-lg md:text-xl font-light tracking-[0.3em] mb-4 uppercase animate-fade-in-up">Mazi Travel & Events</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif-header mb-8 leading-tight drop-shadow-lg animate-fade-in-up delay-100">
            探索希腊 <br/> <span className="text-3xl md:text-5xl font-light mt-2 block">中国游客心中最经典的旅游目的地</span>
          </h1>
          <button className="bg-gold hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg transition-transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto animate-fade-in-up delay-200">
            开始探索 <ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="w-20 h-1 bg-mazi-blue mx-auto mb-8"></div>
          <h3 className="text-3xl font-bold text-mazi-dark mb-8 font-serif-header">关于我们</h3>
          <p className="text-gray-600 leading-loose mb-6 text-lg">
            <strong className="text-mazi-blue">Mazi Travel & Events</strong> 是一家目的地旅游管理集团，为休闲、商务旅行和企业活动提供全面的旅游方案。我们为希腊旅游行业制定全球旅行套餐和 B2B 旅游方案，包括完全定制的企业会议、奖励旅游、大型会议和展览 (MICE)。
          </p>
          <p className="text-gray-600 leading-loose">
            我们在<strong className="text-gray-800">雅典、塞萨洛尼基和利马索尔</strong>设有办事处，拥有 40 名经验丰富、精通多种语言的专业人员，无论您计划的是简单的入门行程还是复杂的高端旅行体验，他们都能以深厚的专业知识和对细节的关注为您打造完美的旅程。
          </p>
        </div>
      </section>

      {/* Services Grid (Images) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mazi-dark/90 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                  <h4 className="text-white text-xl font-bold tracking-wider group-hover:text-gold transition-colors">
                    {service.title}
                  </h4>
                  <div className="w-10 h-0.5 bg-gold mx-auto mt-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-mazi-dark mb-4 font-serif-header">推荐行程</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">精心策划的希腊之旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ITINERARIES.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-mazi-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    {item.duration}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-mazi-blue transition-colors line-clamp-1" title={item.title}>
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {item.description}
                  </p>
                  
                  <button className="w-full py-2.5 border border-mazi-blue text-mazi-blue font-medium rounded hover:bg-mazi-blue hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
                    查看更多
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-20 bg-mazi-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%">
             <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
               <circle cx="20" cy="20" r="2" fill="currentColor" />
             </pattern>
             <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
           </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl font-serif-header mb-8">您感兴趣吗？</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
            请联系我们以讨论并为您安排个性化行程。我们的团队随时准备为您服务。
          </p>
          <button className="bg-white text-mazi-blue px-10 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors">
            立即联系我们
          </button>
        </div>
      </section>

      {/* Detailed Footer Area */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mb-16">
            
            {/* Left: Brand & Personal Contact */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6">
                <div className="text-4xl font-serif-header font-bold text-mazi-blue tracking-tighter mb-1">MAZI</div>
                <div className="text-xs text-gray-400 tracking-[0.4em] uppercase">Travel & Events</div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100 w-full">
                <img 
                  src="https://picsum.photos/id/338/150/150" 
                  alt="Fanying Liu" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="text-left">
                  <h5 className="font-bold text-gray-800 text-lg">FANYING LIU</h5>
                  <p className="text-sm text-gray-500 mb-3">中国区业务发展经理</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2"><Phone size={14} className="text-mazi-blue"/> +30 6955312556</li>
                    <li className="flex items-center gap-2"><MapPin size={14} className="text-mazi-blue"/> 58, Ippokratous str. Kolonaki</li>
                    <li className="flex items-center gap-2"><Mail size={14} className="text-mazi-blue"/> fany@mazi.travel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle: QR Code */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="text-center">
                <div className="bg-white p-2 shadow-lg border border-gray-100 inline-block rounded-lg mb-3">
                   {/* Simulated QR Code */}
                   <div className="w-32 h-32 bg-gray-800 flex items-center justify-center text-white text-xs">
                     WeChat QR
                   </div>
                </div>
                <p className="text-sm text-gray-500">扫描二维码关注我们</p>
              </div>
            </div>

            {/* Right: Office Info */}
            <div className="w-full lg:w-1/3 text-sm text-gray-600 space-y-6">
               <div>
                 <h6 className="font-bold text-gray-800 mb-2">Athens Office</h6>
                 <p>58 Ippokratous str. Kolonaki, 2nd floor PC10680</p>
                 <p className="text-mazi-blue hover:underline cursor-pointer">info@mazitravel.com</p>
               </div>
               <div>
                 <h6 className="font-bold text-gray-800 mb-2">Thessaloniki Office</h6>
                 <p>85 Tsimiski str. 6th, floor. PC 54622</p>
                 <p className="text-mazi-blue hover:underline cursor-pointer">info@mazitravel.com</p>
               </div>
            </div>
          </div>

          {/* Memberships / Certifications */}
          <div className="border-t border-gray-100 pt-10 pb-10">
             <div className="text-center mb-6 text-sm text-gray-400 font-medium">我们是以下组织的成员 & 获得认证</div>
             <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="h-10 w-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">
                   Logo {i}
                 </div>
               ))}
             </div>
          </div>

          {/* Bottom Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-gray-500 border-t border-gray-100 pt-8">
            <div>
              <h6 className="font-bold text-gray-800 mb-3">General Info</h6>
              <ul className="space-y-2">
                <li className="hover:text-mazi-blue cursor-pointer">Why Mazi Travel</li>
                <li className="hover:text-mazi-blue cursor-pointer">Sustainability Policy</li>
                <li className="hover:text-mazi-blue cursor-pointer">Projects</li>
                <li className="hover:text-mazi-blue cursor-pointer">Quality Policy</li>
              </ul>
            </div>
             <div>
              <h6 className="font-bold text-gray-800 mb-3">Travel Services</h6>
              <ul className="space-y-2">
                <li className="hover:text-mazi-blue cursor-pointer">Travel for free</li>
                <li className="hover:text-mazi-blue cursor-pointer">Book with confidence</li>
                <li className="hover:text-mazi-blue cursor-pointer">Mazi & Environment</li>
              </ul>
            </div>
             <div>
              <h6 className="font-bold text-gray-800 mb-3">Resources</h6>
              <ul className="space-y-2">
                <li className="hover:text-mazi-blue cursor-pointer">Travel Brochures</li>
                <li className="hover:text-mazi-blue cursor-pointer">General Terms</li>
                <li className="hover:text-mazi-blue cursor-pointer">Payment methods</li>
              </ul>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="flex gap-4 mb-4">
                <Facebook size={18} className="hover:text-mazi-blue cursor-pointer"/>
                <Instagram size={18} className="hover:text-mazi-blue cursor-pointer"/>
                <Linkedin size={18} className="hover:text-mazi-blue cursor-pointer"/>
              </div>
              <p>© 2024 Mazi Travel. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;