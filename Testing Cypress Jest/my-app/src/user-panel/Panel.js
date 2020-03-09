import React from 'react';
import { Auth } from './Auth.js';

const Panel = () => {
    return <Auth>
        {({userData}) => {
            return <div>
                <h3>Witaj {userData.username || 'nieznajomy'}</h3>
                <h4>Twoje punkty to: {userData.points}</h4>
            </div>
        }}
    </Auth>
}

export default Panel;