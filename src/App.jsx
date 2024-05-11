import React from 'react';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';
import StatisticsCard from './components/StatisticsCard';
import Transactions from './components/Transactions';
import mockTransactions from './data/mockData';

function App() {
  const totalRevenue = mockTransactions.reduce((acc, curr) => acc + parseFloat(curr.cost), 0).toFixed(2);
  const totalClients = new Set(mockTransactions.map(tx => tx.user)).size;
  const totalSales = mockTransactions.length;
  const trafficReceived = Math.floor(Math.random() * 1000);

  return (
    <div className="App" style={{
      display: 'grid',
      gridTemplateColumns: '240px auto',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh',
    }}>
      <Sidebar />
      <div style={{
        padding: '24px',
        backgroundColor: '#f0f2f5',
        overflowY: 'auto'
      }}>
        <Heading />
        <StatisticsCard title="Sales Obtained" value={totalSales} />
        <StatisticsCard title="New Clients" value={totalClients} />
        <StatisticsCard title="Traffic Received" value={trafficReceived} />
        <StatisticsCard title="Revenue Generated" value={`$${totalRevenue}`} />
        <Transactions transactions={mockTransactions} />
      </div>
    </div>
  );
}

export default App;
