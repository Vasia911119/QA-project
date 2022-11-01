import React from 'react';
import * as s from '../styles/404.module.css';
import { Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import { StaticImage } from 'gatsby-plugin-image';
import useWindowResize from '../hooks/useWindowResize';

const NotFoundPage = function () {
  const width = useWindowResize();

  return (
    <section className={s.section}>
      {width < 768 ? (
        <StaticImage
          src="../images/404/FrameS.jpg"
          formats={['auto', 'webp', 'avif']}
          alt=""
          className={'block h-full w-full'}
          placeholder="blurred"
        />
      ) : width > 1280 ? (
        <StaticImage
          src="../images/404/FrameX.png"
          formats={['auto', 'webp', 'avif']}
          alt=""
          className={'block h-full w-full'}
          placeholder="blurred"
        />
      ) : (
        <StaticImage
          src="../images/404/FrameM.jpg"
          formats={['auto', 'webp', 'avif']}
          alt=""
          className={'block h-full w-full'}
          placeholder="blurred"
        />
      )}

      <div className={s.wrapper}>
        <h1 className={s.title}>
          Упс! <br /> Щось пішло не по плану
        </h1>
        <p className={s.text}>
          Давай повернемось на головну сторінку та спробуємо ще раз
        </p>
        <Link to="/" className={s.button}>
          <span className="mr-4">На головну</span>
          <BiChevronRight className={s.iconArrow} alt="home" />
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
