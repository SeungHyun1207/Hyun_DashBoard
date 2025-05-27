/**
 *  내용 : 레이아웃 공통 컴포넌트
 */

import { Box, styled } from '@mui/material';

export const ColumnBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const FlexBox = styled(Box)({
  display: 'flex',
});

export const CenterBox = styled(FlexBox)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
}));

export const FullHeight = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 100px)',
}));

export const SubFullHeight = styled(FullHeight)(({ theme }) => ({}));

export const TitleHeader = styled(Box)(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 'bold',
}));

export const TitleDescription = styled(Box)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
}));
