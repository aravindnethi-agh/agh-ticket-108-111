import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Header, Card, ChartWrapper, MetricsOverview } from './AdminDashboard.style';

// Dummy data
const dummyData = {
  totalAffiliates: 15000,
  totalSales: 20000,
  earnings: 50000,
  performance: [
    { month: 'Jan', value: 10 },
    { month: 'Feb', value: 20 },
    { month: 'Mar', value: 30 },
    { month: 'Apr', value: 40 },
    { month: 'May', value: 50 },
    { month: 'Jun', value: 60 },
    { month: 'Jul', value: 70 }
  ]
};

const AdminDashboard = () => {
  return (
    <Container>
      <Header>
        <h1>Admin Dashboard</h1>
      </Header>
      
      <MetricsOverview>
        <div>
          <h2>Total Affiliates</h2>
          <p>{dummyData.totalAffiliates.toLocaleString()}</p>
        </div>
        <div>
          <h2>Total Sales</h2>
          <p>{dummyData.totalSales.toLocaleString()}</p>
        </div>
        <div>
          <h2>Earnings</h2>
          <p>${dummyData.earnings.toLocaleString()}</p>
        </div>
      </MetricsOverview>
      
      <Card>
        <h2>Key Metrics</h2>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[dummyData]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalAffiliates" fill="#8884d8" />
              <Bar dataKey="totalSales" fill="#82ca9d" />
              <Bar dataKey="earnings" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </Card>
      
      <Card>
        <h2>Performance Analysis</h2>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dummyData.performance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </Card>
    </Container>
  );
};

export default AdminDashboard;