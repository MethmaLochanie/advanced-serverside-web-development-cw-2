import React from 'react';
import {
    Paper,
    Box,
    Typography,
    Avatar,
    Divider
} from '@mui/material';
import FollowButton from './FollowButton';

const UserProfile = ({ profileUser, currentUser, onRefreshLists }) => {
    if (!profileUser) {
        return null;
    }

    const getInitial = (username) => {
        return username ? username[0].toUpperCase() : '?';
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
            <Box display="flex" alignItems="center" mb={3}>
                <Avatar sx={{ width: 100, height: 100, mr: 3 }}>
                    {getInitial(profileUser.username)}
                </Avatar>
                <Box flex={1}>
                    <Typography variant="h4" gutterBottom>
                        {profileUser.username || 'Unknown User'}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {profileUser.email || 'No email provided'}
                    </Typography>
                </Box>
                {currentUser && currentUser.id !== profileUser.id && (
                    <FollowButton
                        targetUserId={profileUser.id}
                        onFollowChange={onRefreshLists}
                    />
                )}
            </Box>
            <Divider sx={{ mb: 3 }} />
        </Paper>
    );
};

export default UserProfile; 