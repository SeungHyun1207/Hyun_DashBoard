/**
 *  내용 : 공지사항
 */

import { useEffect } from 'react';
import React from 'react';
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NoticeIndex = () => {
  useEffect(() => {}, []);
  return (
    <>
      {/* <CommonCommentWrap>
        <CommentTitleBox>
          <Avatar src="" alt="Profile" />
          <Box></Box>
        </CommentTitleBox>
      </CommonCommentWrap> */}

      <Box sx={{ pl: 4, mb: 2 }}>
        <Box>
          <Avatar src={''} alt={''} />
          <Box flex={1}>
            <Box>
              <Typography variant="subtitle2"></Typography>
              <Typography variant="caption" color="text.secondary"></Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 0.5 }}></Typography>
            <Box>
              <IconButton size="small" color={'default'}>
                <FavoriteIcon fontSize="small" />

                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
              <Typography variant="caption"></Typography>

              <Button size="small" sx={{ fontSize: '12px' }}>
                답글
              </Button>

              <Button size="small" sx={{ fontSize: '12px' }}>
                수정
              </Button>
              <Button
                size="small"
                sx={{ fontSize: '12px', color: 'error.main' }}
              >
                삭제
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NoticeIndex;
