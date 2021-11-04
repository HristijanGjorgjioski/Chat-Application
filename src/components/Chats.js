import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine} from 'react-chat-engine';

import { auth } from '../firebase';

const Chats = () => {
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine />
        </div>
    )
}

export default Chats
