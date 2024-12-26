'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold focus:outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold text-navy-blue py-3 px-6 rounded font-semibold hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-300">contact@marcantoniodefense.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium">Office Location</h3>
                    <p className="text-gray-300">
                      1234 Defense Tech Plaza<br />
                      Suite 500<br />
                      Arlington, VA 22201<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Security Notice</h2>
              <p className="text-gray-300">
                For sensitive communications, please use our secure communication channels. 
                All inquiries are handled with strict confidentiality in accordance with 
                defense industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

