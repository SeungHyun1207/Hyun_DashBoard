import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const socialLinks = [
  { icon: <EmailIcon />, url: 'mailto:your@email.com', label: 'Email' },
  { icon: <GitHubIcon />, url: 'https://github.com', label: 'GitHub' },
  { icon: <LinkedInIcon />, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <TwitterIcon />, url: 'https://twitter.com', label: 'Twitter' },
];

export const ContactSection = () => {
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
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 6,
            }}
          >
            Let's work together on your next project
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: 'white', fontWeight: 700, mb: 3 }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4 }}
                >
                  Feel free to reach out to me through any of these platforms.
                  I'm always open to discussing new projects and opportunities.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={link.url}
                        target="_blank"
                        sx={{
                          backgroundColor: 'rgba(99, 102, 241, 0.2)',
                          color: '#6366f1',
                          '&:hover': {
                            backgroundColor: '#6366f1',
                            color: 'white',
                          },
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper
                component="form"
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 3,
                    backgroundColor: '#6366f1',
                    '&:hover': {
                      backgroundColor: '#4f46e5',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
