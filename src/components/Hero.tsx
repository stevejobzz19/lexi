'use client';

import { ArrowRight, Play, Zap, Shield, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8 border border-indigo-200 dark:border-indigo-800"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Introducing AI Gateway v2.0
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          The Ultimate{' '}
          <span className="gradient-text">AI Gateway</span>
          <br />
          for Modern Apps
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Seamlessly integrate, manage, and scale your AI models with our powerful gateway. 
          Built for developers who demand reliability, security, and performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <button className="px-8 py-4 gradient-bg text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span>Start Building</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center space-x-2 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md border border-gray-100 dark:border-slate-700">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enterprise Security</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md border border-gray-100 dark:border-slate-700">
            <Globe className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Global CDN</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-md border border-gray-100 dark:border-slate-700">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">99.9% Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}