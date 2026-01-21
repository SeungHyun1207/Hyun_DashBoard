import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const cards = [
  {
    icon: <SchoolIcon sx={{ fontSize: 50 }} />,
    title: 'Education',
    description: 'Computer Science & Engineering',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 50 }} />,
    title: 'Experience',
    description: '3+ Years in Web Development',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 50 }} />,
    title: 'Achievement',
    description: 'Multiple Award-Winning Projects',
  },
];

export const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
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
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 6,
            }}
          >
            Passionate about creating beautiful and functional web experiences
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: 'center',
                      p: 4,
                    }}
                  >
                    <Box sx={{ color: '#6366f1', mb: 2 }}>{card.icon}</Box>
                    <Typography
                      variant="h5"
                      sx={{ color: 'white', fontWeight: 700, mb: 2 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      {card.description}
                    </Typography>
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
