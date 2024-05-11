import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Transactions({ transactions }) {
  return (
    <Box sx={{ minWidth: 275, margin: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Recent Transactions
          </Typography>
          {transactions.map(tx => (
            <Typography key={tx.txId} variant="body2">
              {`${tx.date} - ${tx.user}: $${tx.cost}`}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
