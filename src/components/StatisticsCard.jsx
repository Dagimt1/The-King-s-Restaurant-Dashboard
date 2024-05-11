import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function StatisticsCard({ title, value }) {
  return (
    <Box sx={{ minWidth: 275, margin: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
