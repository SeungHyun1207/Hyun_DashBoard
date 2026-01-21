import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

interface NavigationProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const navItems = [
  { icon: <HomeIcon />, label: 'Home', index: 0 },
  { icon: <PersonIcon />, label: 'About', index: 1 },
  { icon: <CodeIcon />, label: 'Skills', index: 2 },
  { icon: <WorkIcon />, label: 'Projects', index: 3 },
  { icon: <EmailIcon />, label: 'Contact', index: 4 },
];

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #6366f1 30%, #a855f7 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <motion.div
              key={item.index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                color="inherit"
                startIcon={item.icon}
                onClick={() => onNavigate(item.index)}
                sx={{
                  color: activeSection === item.index ? '#6366f1' : 'white',
                  fontWeight: activeSection === item.index ? 700 : 400,
                  transition: 'all 0.3s ease',
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
