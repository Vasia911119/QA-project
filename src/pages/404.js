// import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import * as s from '../styles/404.module.css';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';

const NotFoundPage = () => (
  <section className="relative h-screen w-screen bg-[#DBD9D9] ">
    <div className="absolute top-1/3 left-1/3  text-center font-inter">
      <h1 className="mb-10 smOnly:text-2xl md:text-3xl">
        Упс! <br /> Щось пішло не по плану
      </h1>
      <p className="mb-24 text-lg">
        Давай повернемось на головну сторінку та спробуємо ще раз
      </p>
      <Link
        to="/"
        className="mx-auto flex h-12 w-[257px] items-center justify-center rounded-[12px] bg-blue-600  text-white"
      >
        <span className="mr-4">На головну</span>
        <BiChevronRight className={s.iconArrow} alt="home" />
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
