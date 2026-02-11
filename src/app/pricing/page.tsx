"use client";

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';

export default function PricingPage() {
    const plans = [
        {
            name: 'Starter',
            price: '$0',
            description: 'Perfect for exploration and side projects.',
            features: ['10 Free models per month', 'Standard license', 'Community support', '720p Render previews'],
            buttonText: 'Get Started',
            highlight: false,
        },
        {
            name: 'Professional',
            price: '$29',
            period: '/mo',
            description: 'Advanced tools for professional creators.',
            features: ['Unlimited downloads', 'Commercial license', 'Priority support', '4K Render previews', 'Source files included'],
            buttonText: 'Try 7 days free',
            highlight: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Scalable solutions for large studios and teams.',
            features: ['Unlimited everything', 'Enterprise license', 'Dedicated account manager', 'API access', 'Custom asset requests'],
            buttonText: 'Contact Sales',
            highlight: false,
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center py-20">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8"
                    >
                        Pricing <span className="text-purple-600">Built</span> for you.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto"
                    >
                        Simple, transparent pricing. No hidden fees. Choose the plan that best fits your workflow.
                    </motion.p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-4xl border ${plan.highlight
                                    ? 'border-purple-600 ring-2 ring-purple-600 ring-opacity-20 bg-white'
                                    : 'border-gray-100 bg-gray-50/50'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
                                </div>
                                <p className="mt-4 text-gray-600 leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                            <Check className="w-3 h-3" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={`w-full h-14 rounded-2xl text-lg font-bold transition-all ${plan.highlight
                                        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-100'
                                        : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white'
                                    }`}
                            >
                                {plan.buttonText}
                                {plan.highlight && <ArrowRight className="ml-2 w-5 h-5" />}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ - Quick version */}
                <div className="max-w-3xl mx-auto py-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500 mb-12">Everything you need to know about our pricing and licenses.</p>

                    <div className="grid grid-cols-1 gap-6 text-left">
                        {[
                            { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time from your account settings. You will retain access until the end of your billing cycle." },
                            { q: "What's included in the Commercial License?", a: "Our commercial license allows you to use the assets in client work, commercial projects, and advertising without attribution." },
                        ].map((faq) => (
                            <div key={faq.q} className="p-6 bg-white border border-gray-100 rounded-2xl">
                                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
