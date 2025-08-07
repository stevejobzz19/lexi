'use client';

import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Code, 
  Lock,
  Cpu,
  Database,
  Cloud
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-millisecond response times with our optimized routing engine and global edge network.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and advanced threat protection for your AI workloads.',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy across 200+ edge locations worldwide with automatic failover and load balancing.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive monitoring, logging, and analytics to optimize your AI model performance.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Code,
    title: 'Developer First',
    description: 'RESTful APIs, SDKs for all major languages, and extensive documentation to get you started.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Fine-grained permissions, API key management, and role-based access control.',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Cpu,
    title: 'Smart Routing',
    description: 'Intelligent request routing based on model availability, cost, and performance metrics.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Database,
    title: 'Model Management',
    description: 'Version control, A/B testing, and seamless model deployment and rollback capabilities.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud',
    description: 'Deploy across AWS, Azure, GCP, and other cloud providers with unified management.',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-50'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Powerful Features for{' '}
            <span className="gradient-text">Modern AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to build, deploy, and scale AI-powered applications 
            with confidence and reliability.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 gradient-bg text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}