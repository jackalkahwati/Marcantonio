import { Target, Eye, Lightbulb } from 'lucide-react'

const Highlights = () => {
  const highlights = [
    {
      title: "Our Mission",
      description: "To deliver innovative defense solutions that protect and empower.",
      icon: <Target className="w-12 h-12 text-gold" />
    },
    {
      title: "Our Vision",
      description: "A world where advanced technology ensures global security and peace.",
      icon: <Eye className="w-12 h-12 text-gold" />
    },
    {
      title: "Our Expertise",
      description: "Cutting-edge research, development, and implementation in defense technology.",
      icon: <Lightbulb className="w-12 h-12 text-gold" />
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-navy-blue p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{highlight.title}</h3>
              <p className="text-gray-300 text-center">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights

