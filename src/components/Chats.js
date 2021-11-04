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

            <ChatEngine 
                height="calc(100vh - 66px)"
                projectId="645c5a3d-e1aa-40f7-b767-0787117a8f96"
                userName="."
                userSecret="."
            />
        </div>
    )
}

export default Chats
