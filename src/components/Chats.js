import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine} from 'react-chat-engine';

import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContex';
import axios from 'axios';

const Chats = () => {
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const { user } = useAuth();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/')
    }

    useEffect(() => {
        if(!user) {
            history.push('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "645c5a3d-e1aa-40f7-b767-0787117a8f96",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
        .then(() => {
            setLoading(false)
        })
    })

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogout} className="logout-tab">
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
