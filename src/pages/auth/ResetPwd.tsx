import React from 'react';
import Layout from "../../components/Layout";
import {Button, TextField} from '@mui/material';
import { Typography, Box} from '@mui/material';
import Menu from '../../components/Menu';

export default function ResetPwd() {
  return (
    <Layout>
          <Box
            sx={{
              my: 15,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="h1"
              sx={{ letterSpacing: 3, m: 1}}
            >
              RESET
            </Box>
            <Box
              component="h1"
              sx={{ letterSpacing: 3, m: 1}}
            >
              PASSWORD
            </Box>
              <TextField
                
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                  type="button"
                  variant="contained"
                  size="small"
                  sx={{ mb: 2, backgroundColor: '#FF8E23', alignItems: 'right', borderRadius:"10px"}}
                >
                 Generate OTP
                </Button>
              <TextField
                
                margin="normal"
                fullWidth
                name="password"
                label="OTP"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                <Button
                  type="button"
                  variant="contained"
                  size="medium"
                  sx={{ mt: 5, mb: 2, backgroundColor: '#FF8E23', alignItems: 'center', justifyContent: 'center',borderRadius: "8px"}}
                  href="/changepwd"
                >
                 Next
                </Button>
                </Box>
    </Layout>
  );
}
