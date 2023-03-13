import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>This is Friends {friends.length}</h1>
        </div>
    );
};

export default Friends;