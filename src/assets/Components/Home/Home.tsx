import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Home: React.FC = () => {
  const users = [
    { id: 1, name: 'Alice', department: 'Engineering', email: 'alice@example.com' },
    { id: 2, name: 'Bob', department: 'Marketing', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', department: 'Engineering', email: 'charlie@example.com' },
    { id: 4, name: 'Dave', department: 'Sales', email: 'dave@example.com' },
    { id: 5, name: 'Eve', department: 'Marketing', email: 'eve@example.com' },
  ];

  const departmentCount = users.reduce((acc, user) => {
    acc[user.department] = (acc[user.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(departmentCount),
    datasets: [
      {
        label: 'Number of Users',
        data: Object.values(departmentCount),
        backgroundColor: ['#60A5FA', '#FCA5A5', '#FCD34D'],
        borderColor: ['#3B82F6', '#F87171', '#FBBF24'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 md:p-8 overflow-hidden">
      <h1 className="text-2xl font-bold mb-6 text-center">User Management System</h1>

      {/* User Table */}
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-50 text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                <td className="py-3 px-4">{user.id}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.department}</td>
                <td className="py-3 px-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="my-8" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <h2 className="text-xl font-semibold mb-4">Users by Department</h2>
        <div style={{ maxWidth: '1200px', margin: '0 auto' , height:"300px" }}>
          <Bar data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
