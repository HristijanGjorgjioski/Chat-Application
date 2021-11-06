import React from 'react'

import { AddChannel } from '../assets'

const TeamChannelList = ({ children, error=false, loading, type }) => {
    if(error) {
        return type === 'team' && (
            <div className="team-channel-list">
                <div className="team-channel-list__message">
                    Connection error, please wait a moment and try again.
                </div>
            </div>
        );
    };

    if(loading) {
        return (
            <div className="team-channel-list">
                <div className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages'} loading ...
                </div>
            </div>
        );
    };
    
    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Direct Message'}
                </p>
                {/* { Button - add channel } */}
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
