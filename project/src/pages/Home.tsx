import { Link } from 'react-router-dom';
import { ArrowRight, Users, Settings, Calendar, Award, Shirt, Package, Globe } from 'lucide-react';
import HeroVideo from '../components/HeroVideo';

const Home = () => {
  const stats = [
    {
      icon: Calendar,
      title: '20+',
      subtitle: 'Years of Excellence',
      description:
        'Established since 2004, leading the textile industry with innovation and quality',
    },
    {
      icon: Users,
      title: '1,200+',
      subtitle: 'Skilled Employees',
      description: 'Our greatest asset - dedicated professionals driving our success',
    },
    {
      icon: Settings,
      title: '680+',
      subtitle: 'Advanced Machines',
      description: 'State-of-the-art equipment ensuring premium quality production',
    },
    {
      icon: Package,
      title: '360K+',
      subtitle: 'Annual Production',
      description: 'Dozen capacity - meeting global demand with efficiency',
    },
    {
      icon: Globe,
      title: 'Global',
      subtitle: 'Market Presence',
      description: 'Serving international brands across multiple continents',
    },
    {
      icon: Award,
      title: 'Certified',
      subtitle: 'Quality Standards',
      description: 'Sedex, Green Certified, BGMEA compliant operations',
    },
  ];

  const products = [
    {
      name: 'Denims',
      icon: Shirt,
      description: 'Premium denim products including jeans, jackets, and shirts for all ages',
      category: 'Casual Wear',
    },
    {
      name: 'T-Shirts',
      icon: Shirt,
      description: 'High-quality cotton and blended t-shirts for everyday comfort',
      category: 'Casual Wear',
    },
    {
      name: 'Polo Shirts',
      icon: Shirt,
      description: 'Professional polo shirts perfect for business and casual occasions',
      category: 'Business Wear',
    },
    {
      name: 'Activewear',
      icon: Package,
      description: 'Performance-driven athletic wear for sports and fitness',
      category: 'Sports Wear',
    },
    {
      name: 'Outerwear',
      icon: Package,
      description: 'Stylish jackets, coats, and outerwear for all seasons',
      category: 'Seasonal Wear',
    },
    {
      name: 'Dresses',
      icon: Shirt,
      description: 'Elegant dresses for women and children in contemporary styles',
      category: "Women's Wear",
    },
    {
      name: 'Bottoms',
      icon: Package,
      description: 'Comfortable pants, shorts, and trousers for all occasions',
      category: 'Casual Wear',
    },
    {
      name: 'Swimwear',
      icon: Package,
      description: 'High-quality swim trunks and swimwear for active lifestyles',
      category: 'Sports Wear',
    },
  ];

  const certifications = [
    { name: 'Sedex', description: 'Ethical trade certification' },
    { name: 'Green Certified', description: 'Environmental compliance' },
    { name: 'BGMEA', description: 'Bangladesh Garment Manufacturers' },
  ];

  const newsItems = [
    {
      title: 'Kattali Textile Expands Sustainable Manufacturing',
      excerpt: 'New eco-friendly production lines installed to reduce environmental impact by 40%',
      image: './assets/designer-1.jpeg',
      date: 'December 2024',
      slug: 'sustainable-manufacturing-expansion',
    },
    {
      title: 'Partnership with Global Fashion Brands',
      excerpt: 'Strategic alliances established with leading international retailers',
      image: './assets/designer-2.jpeg',
      date: 'November 2024',
      slug: 'global-brand-partnerships',
    },
    {
      title: 'Employee Development Program Launch',
      excerpt: 'Comprehensive training initiative to enhance workforce skills and capabilities',
      image: './assets/hero.jpeg',
      date: 'October 2024',
      slug: 'employee-development-program',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroVideo
        title={
          <>
            Fashionably Sustaining
            <br />
            Apparel Industry Innovation
            <br />
            <span className="text-6xl md:text-7xl lg:text-8xl">and Design</span>
          </>
        }
        subtitle={
          "Designing, developing and manufacturing private-label apparel products for the world's leading brands and retailers."
        }
        ctas={[
          { label: 'Explore Our Products', href: '/products' },
          { label: 'Learn More About Us', href: '/about' },
        ]}
      />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-ananta mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose <span className="text-primary">Kattali Textile</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="card-ananta text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-h3 font-bold text-neutral-600 mb-2 text-numeric">
                  {stat.title}
                </h3>
                <p className="text-primary font-semibold mb-2">{stat.subtitle}</p>
                <p className="text-neutral-500 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 flex items-center justify-center space-x-4">
              <span className="flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                Sedex Certified
              </span>
              <span className="flex items-center">
                <Globe className="w-5 h-5 text-primary mr-2" />
                Green Factory Initiatives
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-ananta mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="card-ananta hover-lift p-6 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center mb-3">
                  <span className="chip bg-primary/10 text-primary mb-2">{product.category}</span>
                  <h3 className="font-heading text-h4 font-semibold text-neutral-600">
                    {product.name}
                  </h3>
                </div>
                <p className="text-neutral-500 text-center text-sm">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary inline-flex items-center group">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-ananta mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-primary">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="max-w-ananta mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900">
            Latest <span className="text-primary">News</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article key={index} className="card-ananta card-image-top group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover-zoom"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium">{news.date}</span>
                  </div>
                  <h3 className="font-heading text-h4 font-semibold mb-3 text-neutral-600 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-neutral-500 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                  <Link
                    to={`/news/${news.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/news" className="btn-primary inline-flex items-center group">
              View All News
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready for Global Apparel Sourcing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us for premium quality textiles, ethical manufacturing, and reliable global
            delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 group"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
