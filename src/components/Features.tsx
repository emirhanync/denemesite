import React from 'react';
import { Zap, Shield, Smartphone, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized architecture.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Your data is protected with enterprise-grade security measures.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Seamlessly work across all your devices with our responsive design.'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Work together in real-time with team collaboration features.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to boost your productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}