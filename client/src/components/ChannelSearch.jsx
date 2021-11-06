import React from 'react'
import { useChatContext } from 'stream-chat-react'

import { SearchIcon } from '../assets'

const ChannelSearch = () => {
    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search_input__icon">
                    <SearchIcon />
                </div>
                <input 
                    className="channel-search__input__text" 
                    placeholder="search" 
                    type="text" 
                    value={''}
                    onChange={''} 
                />
            </div>
        </div>
    )
}

export default ChannelSearch
