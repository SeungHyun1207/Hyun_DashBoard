import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';
import { Scene3D } from '../3d/Scene3D';

export const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden',
      }}
    >
      {/* 3D Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene3D />
        </Canvas>
      </Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 900,
              background: 'linear-gradient(45deg, #fff 30%, #6366f1 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Welcome to My Portfolio
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Full Stack Developer & Designer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mt: 3,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Creating innovative digital experiences with modern technologies
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};
