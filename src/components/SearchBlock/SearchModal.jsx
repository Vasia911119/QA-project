import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment, useState } from 'react';
import SearchResult from './SearchResult';
import SearchField from './SearchField';
import { Dialog, Transition } from '@headlessui/react';
import { RiSearchLine } from 'react-icons/ri';

const query = graphql`
  {
    localSearchPages {
      publicIndexURL
      publicStoreURL
    }
  }
`;

export const SearchModal = ({ closeModal, isOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pagesIndexStore, setPagesIndexStore] = useState(null);
  const data = useStaticQuery(query);

  const {
    publicStoreURL: pagesPublicStoreURL,
    publicIndexURL: pagesPublicIndexURL,
  } = data.localSearchPages;

  const handleOnFocus = async () => {
    if (pagesIndexStore) return;

    const [{ data: pagesIndex }, { data: pagesStore }] = await Promise.all([
      axios.get(`${pagesPublicIndexURL}`),
      axios.get(`${pagesPublicStoreURL}`),
    ]);

    setPagesIndexStore({
      index: pagesIndex,
      store: pagesStore,
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gradient-to-r from-[#8af2fc33] to-[#8af2fc33]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" rounded-2xl absolute top-[196px] min-h-[60px] w-[96%] max-w-[488px] transform overflow-hidden rounded-[10px] bg-white text-left align-middle shadow-xl transition-all md:top-[200px] md:w-[488px] xl:top-[160px] xl:w-[480px]">
                <div className="relative">
                  <RiSearchLine
                    color="#9EA2C6"
                    size={24}
                    className="absolute inset-y-1/2 left-3 -translate-y-1/2"
                  />

                  <SearchField
                    setValue={setSearchQuery}
                    value={searchQuery}
                    onFocus={handleOnFocus}
                  />
                </div>

                {searchQuery && pagesIndexStore && (
                  <div>
                    <SearchResult
                      searchQuery={searchQuery}
                      pagesIndexStore={pagesIndexStore}
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
