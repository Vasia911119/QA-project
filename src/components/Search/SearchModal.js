import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import SearchField from './SearchField';

const query = graphql`
  {
    localSearchPages {
     publicIndexURL
     publicStoreURL
                    }
  }
`;

function Search({isSearchModalOpen}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [pagesIndexStore, setPagesIndexStore] = useState(null);
    const data = useStaticQuery(query);

    useEffect(() => {
        if (isSearchModalOpen) {
            document.body.style.overflow = 'hidden';
            setSearchQuery('');
        } else {
            document.body.style.overflow = 'initial';
        }
    }, [isSearchModalOpen]);

    const {
        publicStoreURL: pagesPublicStoreURL,
        publicIndexURL: pagesPublicIndexURL,
    } = data.localSearchPages;

    const handleOnFocus = async () => {
        if (pagesIndexStore) return;
        const [
            { data: pagesIndex },
            { data: pagesStore },
        ] = await Promise.all([
            axios.get(`${pagesPublicIndexURL}`),
            axios.get(`${pagesPublicStoreURL}`),
        ]);
        setPagesIndexStore({
            index: pagesIndex,
            store: pagesStore,
        });
    };
 
      if (!isSearchModalOpen) return null;
    return (
        <div id="search-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div>
                {/* <ActionButton
                    onClick={() => closeSearchModal()}>

                </ActionButton> */}
                <SearchField
                    value={searchQuery}
                    setValue={setSearchQuery}
                    onFocus={handleOnFocus}
                />
                {searchQuery &&
                    pagesIndexStore(
                        <div>
                            <SearchResult
                                searchQuery={searchQuery}
                                pagesIndexStore={pagesIndexStore}
                            />
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Search;
