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

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type: 'image/jpg '});
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
        }).then(() => {
            setLoading(false)
        }).catch((err) => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.displayName);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatrar', avatar, avatar.name);

                    axios.post('htpps://api.chatengine.io/users/', 
                        formdata,
                        { headers: { "private-key": "e7766a70-5bc7-40b6-b702-60e7a6f51d93" } }
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
        })
    }, [user, history])

    if (!user || loading) return 'Loading...';

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
                projectID="645c5a3d-e1aa-40f7-b767-0787117a8f96"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}

export default Chats
