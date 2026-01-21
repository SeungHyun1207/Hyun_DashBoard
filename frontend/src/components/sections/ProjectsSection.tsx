import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: '3D Portfolio Website',
    description: 'Interactive portfolio with Three.js animations',
    image: 'https://via.placeholder.com/400x250/a855f7/ffffff?text=3D+Portfolio',
    tags: ['React', 'Three.js', 'TypeScript'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaboration tool for teams',
    image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Task+Manager',
    tags: ['Spring Boot', 'React', 'WebSocket'],
    github: '#',
    demo: '#',
  },
];

export const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #334155 0%, #475569 100%)',
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 800,
              mb: 2,
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 6,
            }}
          >
            Some of my recent work
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      boxShadow: '0 10px 40px rgba(99, 102, 241, 0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{ color: 'white', fontWeight: 700, mb: 2 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(99, 102, 241, 0.2)',
                            color: '#6366f1',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        sx={{
                          color: 'white',
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          '&:hover': {
                            borderColor: '#6366f1',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                          },
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<LaunchIcon />}
                        href={project.demo}
                        sx={{
                          backgroundColor: '#6366f1',
                          '&:hover': {
                            backgroundColor: '#4f46e5',
                          },
                        }}
                      >
                        Demo
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
