import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Marcantonio Global's innovative approach has revolutionized our defense strategies.",
      author: "Major General Edward Vaughan",
      role: "US Air Force (Ret.)"
    },
    {
      quote: "Their expertise in cutting-edge technology has been invaluable to our operations.",
      author: "Jane Smith",
      role: "Director of Defense Innovation"
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-blue p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                <Image 
                  src="/placeholder.svg?height=50&width=50" 
                  alt={testimonial.author} 
                  width={50} 
                  height={50} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

