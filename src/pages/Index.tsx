
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cảm ơn bạn đã liên hệ",
      description: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const features = [
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      title: "Chế tác thủ công bởi bàn tay nghệ nhân Anh Quốc",
      description: "Mỗi chiếc điện thoại được chế tác tỉ mỉ bởi những nghệ nhân lành nghề"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      title: "Chất liệu cao cấp: Vàng hồng 18K, Thụy Sĩ, titanium grade 5, mặt hình sapphire nguyên khối",
      description: "Sử dụng những chất liệu quý hiếm nhất thế giới"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      title: "Sở hữu những công nghệ bảo mật hàng đầu thế giới",
      description: "Công nghệ bảo mật tiên tiến cho sự riêng tư tuyệt đối"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      title: "Thiết kế công thái học với vẻ đẹp Châu Âu trường tồn",
      description: "Thiết kế vượt thời gian với phong cách Châu Âu"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="absolute top-0 left-0 z-50 p-6 md:p-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">XOR</span>
          </div>
          <div className="text-black">
            <div className="text-xs md:text-sm font-light tracking-wider">MADE IN ENGLAND</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>
        
        <div className="relative z-20 text-center md:text-left max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
              <em className="italic">Khám phá kỷ nguyên sang trọng mới</em>
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide">
              Nâng tầm đẳng cấp cùng XOR
            </p>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-100 to-orange-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-gray-800">
            <em className="italic">Triển thoại xa xỉ XOR</em>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-light">
            Chuẩn mực nghệ thuật sống thượng lưu
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-200 to-amber-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Offer Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-200 to-orange-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
                <em className="italic">Ưu đãi lên đến 150 triệu</em>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg font-light">
                  Tặng ngay ưu đãi đặc quyền dành cho khách hàng khi đổi điện thoại cũ 
                  để sở hữu XOR X2 - biểu tượng của một kỷ nguyên mới.
                </p>
                <p className="text-base font-light">
                  <strong>Áp dụng đến hết ngày 30/06/2025</strong> tại XOR Boutique<br />
                  17 Hàng Bài và các hệ thống đại lý ủy quyền toàn quốc
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 md:w-80 md:h-96 bg-black rounded-lg shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
                    alt="XOR Luxury Phone"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 w-32 h-40 md:w-40 md:h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
                    alt="XOR Phone Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-300 to-amber-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">XOR</span>
                </div>
                <div className="text-black">
                  <div className="text-sm font-light tracking-wider">MADE IN ENGLAND</div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8">
                LIÊN HỆ XOR ĐỂ ĐƯỢC TU VẤN
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-medium mb-2">Hotline</h3>
                  <p className="text-lg">0944.756.756</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Dịch vụ chăm sóc khách hàng</h3>
                  <p className="text-lg">0867.247.365</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Zalo</h3>
                  <p className="text-lg">0867.247.365</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Họ và Tên"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/80 border-gray-300 text-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white/80 border-gray-300 text-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Để lại lời nhắn cho chúng tôi"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/80 border-gray-300 text-gray-800"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-medium transition-all duration-300"
                >
                  Đặt ngay
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
