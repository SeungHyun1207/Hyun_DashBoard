import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme/theme';
import AppErrorBoundary from './views/fallback/AppErrorBoundary';
import { Route, Routes, useLocation } from 'react-router-dom';
import CommunityRouter from './views/routers/community/CommunityRouter';
import ProtectRouter from './views/routers/ProtectRouter';
import CommonLayout from './views/layouts/CommonLayout';
import IntroPageIndex from './views/pages/intro/IntroPageIndex';

function App() {
  const activeMode = import.meta.env.MODE;

  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AppErrorBoundary>
          {/* <ProtectRouter> */}
          <CssBaseline />

          <Routes key={location.state?.key}>
            <Route element={<CommonLayout />}>
              <Route index element={<IntroPageIndex />} />
              <Route path="community/*" element={<CommunityRouter />} />
            </Route>
          </Routes>
          {/* </ProtectRouter> */}
        </AppErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
