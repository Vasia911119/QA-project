import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment, useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SearchResult from './SearchResult';
import { Dialog, Transition } from '@headlessui/react';
import { BiSearch } from 'react-icons/bi';
import { useEffect } from 'react';
// import SearchClsBtn from './SearchClsBtn';
import * as s from './Search.module.css';

const queryFull = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          page_chapter_name
          page_chapter_title
          page_title
          language
        }
        rawMarkdownBody
        html
      }
    }
  }
`;

export const SearchModal = ({
  closeModal,
  isOpen,
  searchQuery,
  setSearchQuery,
  onClsClick,
}) => {
  const [pagesIndexStore, setPagesIndexStore] = useState(null);
  const dataFull = useStaticQuery(queryFull);

  const { t } = useTranslation();

  const { placeholder } = t('search', {
    returnObjects: true,
  });

  const { nodes: arrData } = dataFull.allMarkdownRemark;

  const handleOnFocus = () => {
    if (arrData) {
      setPagesIndexStore(arrData);
    }
  };

  useEffect(() => {
    handleOnFocus();
  }, [handleOnFocus]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={s.searchModalWrapper} onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={s.searchModalBackdrop} />
        </Transition.Child>

        <div className={s.searchModalBlock}>
          <div className={s.searchModalBlockCenter}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={s.searchBlockPanel}>
                <div className="relative">
                  <BiSearch
                    color="#9EA2C6"
                    size={24}
                    className={s.searchModalIcon}
                  />

                  <input
                    className={s.searchField}
                    placeholder={placeholder}
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                {searchQuery && pagesIndexStore && (
                  <div>
                    <SearchResult
                      onClick={closeModal}
                      searchQuery={searchQuery}
                      pagesIndexStore={pagesIndexStore}
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
            {/* <SearchClsBtn onClsClick={closeModal} /> */}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
