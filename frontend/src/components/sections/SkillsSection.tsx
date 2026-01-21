import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Typography, Grid, LinearProgress, Paper } from '@mui/material';

const skills = [
  { name: 'React & TypeScript', level: 90, color: '#61dafb' },
  { name: 'Node.js & Express', level: 85, color: '#68a063' },
  { name: 'Spring Boot & Java', level: 80, color: '#6db33f' },
  { name: 'Three.js & 3D Graphics', level: 75, color: '#000000' },
  { name: 'Database & SQL', level: 85, color: '#4479a1' },
  { name: 'UI/UX Design', level: 80, color: '#ff69b4' },
];

export const SkillsSection = () => {
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
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
            Skills & Expertise
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 6,
            }}
          >
            Technologies I work with
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: 'white', fontWeight: 600 }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: skill.color, fontWeight: 700 }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: skill.color,
                          borderRadius: 5,
                        },
                      }}
                    />
                  </motion.div>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
