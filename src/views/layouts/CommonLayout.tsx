/**
 *  공통 Layout
 */

import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/sidebar/SideBar';

interface CommonLayoutProps {
  isMain?: boolean; // 메인 체크 여부
}

const CommonLayout = (props: CommonLayoutProps) => {
  return (
    <MainContainer isMain={props.isMain ? props.isMain.toString() : ''}>
      <Box display="flex">
        <Sidebar /> {/* 사이드 메뉴 */}
        <Box flexGrow={1} p={2}>
          <Outlet /> {/* 페이지 콘텐츠 */}
        </Box>
      </Box>
    </MainContainer>
  );
};

export default CommonLayout;

const drawerWidth = 240;

const MainContainer = styled(Box)((props: { isMain: string }) => ({
  width: '100%',
  display: 'flex',
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));
