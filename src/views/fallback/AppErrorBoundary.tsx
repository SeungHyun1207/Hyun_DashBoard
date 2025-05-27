// App Error Page

import { Box, styled, Typography } from '@mui/material';
import { ErrorInfo, PropsWithChildren } from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';

const AppErrorBoundary = (props: PropsWithChildren) => {
  const logError = (error: Error, info: ErrorInfo) => {
    console.error('error name : %s', error.name);
    console.error('error message : %s', error.message);
    console.error('error stack : %s', error.stack);
    console.error('info component stack : %s', info.componentStack);
  };

  const fallbackRender = ({ error }: FallbackProps) => {
    const errorCode: number = error.error.response?.status;

    const handleErrorMessage = (errorCode?: number) => {
      switch (errorCode) {
        case 400:
          return <Typography>잘못된 요청입니다.</Typography>;
        case 401:
          return <Typography>로그인이 필요합니다.</Typography>;
        case 403:
          return <Typography>권한이 없습니다.</Typography>;
        case 404:
          return <Typography>요청한 페이지를 찾을 수 없습니다.</Typography>;
        case 408:
          return <Typography>요청 시간이 초과되었습니다.</Typography>;
        case 409:
          return <Typography>요청이 충돌했습니다.</Typography>;
        case 429:
          return (
            <Typography>
              요청이 너무 많습니다. 잠시 후 다시 시도해주세요.
            </Typography>
          );
        case 500:
          return <Typography>서버 오류입니다.</Typography>;
        case 502:
          return <Typography>일시적인 서버 오류입니다.</Typography>;
        case 503:
          return <Typography>현재 서버가 점검 중입니다.</Typography>;
        case 504:
          return <Typography>서버 응답 시간이 초과되었습니다.</Typography>;
        default:
          return <Typography>알 수 없는 오류가 발생했습니다.</Typography>;
      }
    };

    return (
      <ErrorWrap>
        <ErrorContent>{handleErrorMessage(errorCode)}</ErrorContent>
      </ErrorWrap>
    );
  };

  return (
    <ReactErrorBoundary
      onError={logError}
      fallbackRender={(fallbackProps) => fallbackRender(fallbackProps)}
    >
      {props.children}
    </ReactErrorBoundary>
  );
};

export default AppErrorBoundary;

const ErrorWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
}));

const ErrorContent = styled(Box)(({ theme }) => ({}));
