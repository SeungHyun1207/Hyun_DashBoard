/**
 *  공통 Layout
 */

import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

interface CommonLayoutProps {
  isMain?: boolean; // 메인 체크 여부
}

const CommonLayout = (props: CommonLayoutProps) => {
  return (
    <MainContainer isMain={props.isMain ? props.isMain.toString() : ''}>
      <Box>
        <Outlet />
      </Box>
    </MainContainer>
  );
};

export default CommonLayout;

const MainContainer = styled(Box)((props: { isMain: string }) => {
  return {
    width: '100%',
  };
});
