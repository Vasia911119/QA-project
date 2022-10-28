import axios from 'axios'
import { graphql, useStaticQuery } from 'gatsby'
import React, { Fragment, useEffect, useState } from 'react'
import SearchResult from './SearchResult'
import SearchField from './SearchField'
import { Dialog, Transition } from '@headlessui/react'
import { RiSearchLine } from 'react-icons/ri'

const query = graphql`
  {
    localSearchPages {
      publicIndexURL
      publicStoreURL
    }
  }
`

export const SearchModal = ({ closeModal, isOpen }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [pagesIndexStore, setPagesIndexStore] = useState(null)
  const data = useStaticQuery(query)

  const {
    publicStoreURL: pagesPublicStoreURL,
    publicIndexURL: pagesPublicIndexURL,
  } = data.localSearchPages

  const handleOnFocus = async () => {
    if (pagesIndexStore) return

    const [{ data: pagesIndex }, { data: pagesStore }] = await Promise.all([
      axios.get(`${pagesPublicIndexURL}`),
      axios.get(`${pagesPublicStoreURL}`),
    ])

    setPagesIndexStore({
      index: pagesIndex,
      store: pagesStore,
    })
  }

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
              <Dialog.Panel className=" absolute w-[96%] max-w-[488px] top-[196px] md:w-[488px] md:top-[200px] xl:w-[480px] xl:top-[160px] rounded-[10px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all min-h-[60px]">
                <div className="relative">
                  <RiSearchLine
                    color="#9EA2C6"
                    size={24}
                    className="absolute left-3 inset-y-1/2 -translate-y-1/2"
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
  )
}

// function Search({ isSearchModalOpen}) {
//   const [searchQuery, setSearchQuery] = useState('')
//   const [pagesIndexStore, setPagesIndexStore] = useState(null)
//   const data = useStaticQuery(query)

//   useEffect(() => {
//     if (isSearchModalOpen) {
//       document.body.style.overflow = 'hidden'
//       setSearchQuery('')
//     } else {
//       document.body.style.overflow = 'initial'
//     }
//   }, [isSearchModalOpen])

// const {
//   publicStoreURL: pagesPublicStoreURL,
//   publicIndexURL: pagesPublicIndexURL,
// } = data.localSearchPages

// const handleOnFocus = async () => {
//   if (pagesIndexStore) return;

//   const [{ data: pagesIndex }, { data: pagesStore }] = await Promise.all([
//     axios.get(`${pagesPublicIndexURL}`),
//     axios.get(`${pagesPublicStoreURL}`),
//   ])

//   setPagesIndexStore({
//     index: pagesIndex,
//     store: pagesStore,
//   })
// }

// if (!isSearchModalOpen) return null

//   return (
//     <div
//       id="search-modal"
//       tabindex="-1"
//       aria-hidden="true"
//       className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
//     >
//       <div>
//         {/* <ActionButton
//                     onClick={() => closeSearchModal()}>

//                 </ActionButton> */}
// <SearchField
//   value={searchQuery}
//   setValue={setSearchQuery}
//   onFocus={handleOnFocus}
// />
// {searchQuery &&
//   pagesIndexStore(
//     <div>
//       <SearchResult
//         searchQuery={searchQuery}
//         pagesIndexStore={pagesIndexStore}
//       />
//     </div>
//           )}
//       </div>
//     </div>
//   )
// }

// export default Search
