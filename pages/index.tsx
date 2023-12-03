import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SquigglyLines from '../components/SquigglyLines';
import { Testimonials } from '../components/Testimonials';
import va from '@vercel/analytics';

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>VisualMilap</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20">
        <a
          href="https://twitter.com/nutlope/status/1704894145003741611"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Used by over <span className="font-semibold">4,700</span> happy
          users
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white-900 sm:text-7xl">
          Get your photos{' '}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{' '}
          for everyone.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-white-700 leading-7">
        Enjoy your functions and take selfies; let AI get your personal photos.
        </p>
        <div className="flex justify-center space-x-4">
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Scattered Photos</h2>
                <Image
                  alt="Original photo of my bro"
                  src="https://media.kairos.com/blog-images/crowd.png"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Your Photos</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={400}
                  height={400}
                  src="https://roc.ai/wp-content/uploads/2018/11/howfrworks-1080x675.png"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
