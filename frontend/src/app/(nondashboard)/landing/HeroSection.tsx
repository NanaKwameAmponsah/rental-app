"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
        <Image
            src='/landing-splash.jpg'
            alt ='Homeify Rental Platform Hero Section'
            fill
            className='object-cover object-center'
            priority
        />
        {/* Overlay to darken the image */}
        <div className='absolute inset-0 bg-black bg-opacity-60'/>
        {/*slide animations from framer motion will move 20 pixels from the start and fade in*/}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'
        >
            <div className='max-w-4xl mx-auto px-16 sm:px-12'>
                <h1 className='text-5xl font-bold text-white mb-4'>
                    Find Your Dream Home with Homeify
                </h1>   
                <p className='text-xl text-white mb-8'>
                    Discover a wide range of rental properties tailored to your needs. 
                </p>
                {/* Search input field */}
                <div className='flex justify-center'>
                    <Input 
                        type='text'
                        value = "Search by city, neighborhood, or address"
                        onChange={() => {}}
                        placeholder='Search by city, neighborhood, or address'
                        className='w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12'
                        />
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default HeroSection