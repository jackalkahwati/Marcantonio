import Image from 'next/image';

const Partners = () => {
  const partners = [
    {
      name: 'Vantiq',
      logo: '/partners/vantiq.png',
      alt: 'Vantiq Logo'
    },
    {
      name: 'Department of Defense',
      logo: '/partners/dod.png',
      alt: 'Department of Defense Logo'
    },
    {
      name: 'DARPA',
      logo: '/partners/darpa.png',
      alt: 'DARPA Logo'
    },
    {
      name: 'Defense Innovation Unit',
      logo: '/partners/diu.png',
      alt: 'Defense Innovation Unit Logo'
    },
    {
      name: 'AI Strategy Corporation',
      logo: '/partners/ai-strategy.png',
      alt: 'AI Strategy Corporation Logo'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Strategic Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver innovative defense solutions and drive technological advancement
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="w-full flex items-center justify-center">
              <div className="relative w-40 h-24">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity duration-300 hover:opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 