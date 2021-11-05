import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelContainer, ChannelListContainer } from './Components';
import './App.css';

const apiKey = 'szb7j6e4kv2h';
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team dark">
        <ChannelListContainer
        
        />

        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App
