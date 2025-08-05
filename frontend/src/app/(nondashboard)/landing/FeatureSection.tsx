"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { toggleFiltersFullOpen } from '@/state';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0 ,
  transition: { 
    duration: 0.5, 
    staggerChildren:0.2 
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();

const handleSearchClick = () => {
    router.push('/search');
};

  const handleDiscoverClick = () => {
      dispatch(toggleFiltersFullOpen());
      router.push('/search');
  };

  const handleExploreClick = () => {
      console.log('Explore clicked'); 
  };

  return (<motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    className='py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white'
  >
    <div className='max-w-4xl xl:max-w-6xl mx-auto'>
        <motion.h2
        variants={itemVariants}
        className='text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto'
        >

            Want to narrow down your search? Use our search filters!
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16'>
            {[
                {
                    imageSrc: '/landing-search3.png',
                    title: 'Verified Listings',
                    description: 'Discover the best rental options with user reviews and ratings',
                    linkText: 'Explore',
                    onClick: handleExploreClick  // Changed from href to onClick
                },
                {
                    imageSrc: '/landing-search2.png',
                    title: 'Browse Rental Listings with Ease',
                    description: 'Get access to user reviews and ratings for a better understanding of rental options',
                    linkText: 'Search',
                    onClick: handleSearchClick  // Changed from href to onClick
                },
                {
                    imageSrc: '/landing-search1.png',
                    title: 'Simplify Your Rental Search with Advanced Search',
                    description: 'Find trustworthy and verified rental listings to ensure a hassle-free experience.',
                    linkText: 'Discover',
                    onClick: handleDiscoverClick
                }
            ].map((card, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                >
                    <FeatureCard {...card} />
                </motion.div>
            ))}
        </div>
    </div>
  </motion.div>
);
};
const FeatureCard = ({ 
    imageSrc,
    title,
    description,
    linkText,
    linkHref,
    onClick
}:{
    imageSrc: string;
    title: string;
    description: string;
    linkText: string;
    linkHref?: string;
    onClick?: () => void;
}) =>  (
    <div className='text-center'>
        <div className='p-4 rounded-lg mb-4 flex items-center justify-center h-48'>
            <Image
            src={imageSrc} 
            width={400} 
            height={400} 
            className='w-full h-full object-contain'
             alt={title} />

        </div>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='mb-4'>{description}</p>
        {onClick ? (
            <button
                onClick={onClick}
                className='inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100'
            >
                {linkText}
            </button>
        ) : (
            <Link
                href={linkHref || '#'}
                className='inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100'
                scroll={false}
            >
                {linkText}
            </Link>
        )}

    </div>
  );


export default FeatureSection