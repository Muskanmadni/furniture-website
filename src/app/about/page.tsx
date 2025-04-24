import React from 'react';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and mission',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We are dedicated to creating innovative solutions that make a positive impact on people&apos;s lives.
            Our team of experts works tirelessly to deliver exceptional products and services that exceed
            expectations and drive meaningful change in the industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded with a vision to revolutionize the way people interact with technology, we&apos;ve grown
            from a small startup to a trusted name in the industry. Our journey has been marked by
            continuous innovation, customer satisfaction, and a commitment to excellence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new possibilities to create better solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all our operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product development to customer service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and building strong partnerships to achieve our goals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
