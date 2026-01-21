import { useState, useRef } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#a855f7',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setActiveSection(index);
  };

  const sections = [
    <HeroSection />,
    <AboutSection />,
    <SkillsSection />,
    <ProjectsSection />,
    <ContactSection />,
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          overflow: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0f172a',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#6366f1',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#4f46e5',
          },
        }}
      >
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            style={{ scrollMarginTop: '64px' }}
          >
            {section}
          </div>
        ))}
      </Box>
    </ThemeProvider>
  );
}

export default App;
