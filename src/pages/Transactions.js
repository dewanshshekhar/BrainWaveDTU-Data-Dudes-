import React from 'react';
import { Search, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TransactionsPage = () => {
  // Sample data for the chart
  const chartData = [
    { name: 'Jan', income: 10000, expenses: 6000 },
    { name: 'Feb', income: 12000, expenses: 7000 },
    { name: 'Mar', income: 11000, expenses: 6500 },
    { name: 'Apr', income: 13000, expenses: 7200 },
    { name: 'May', income: 11500, expenses: 6800 },
    { name: 'Jun', income: 12500, expenses: 6900 },
    { name: 'Jul', income: 16281, expenses: 6638 },
    { name: 'Aug', income: 14000, expenses: 6400 },
    { name: 'Sep', income: 15000, expenses: 6700 },
    { name: 'Oct', income: 13500, expenses: 6500 },
    { name: 'Nov', income: 14500, expenses: 6600 },
    { name: 'Dec', income: 15500, expenses: 6800 }
  ];

  // Sample expense categories data
  const expenseCategories = [
    { name: 'Food & health', amount: 985.90, percentage: 63 },
    { name: 'Platform', percentage: 56 },
    { name: 'Shopping', percentage: 48 },
    { name: 'Entertainment', percentage: 46 }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Good morning, Jaylon</h1>
        <p className="text-gray-600">This is your finance report</p>
      </div>

      {/* Balance and actions section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600 mb-2">My balance</p>
          <div className="flex items-baseline">
            <h2 className="text-3xl font-bold">$83,172</h2>
            <span className="text-xl text-gray-500">.64</span>
          </div>
          <p className="text-sm text-green-600 mt-1">+6.7% compare to last month</p>
          <div className="mt-4">
            <p className="text-gray-600 font-mono mb-2">6549 7329 9821 2472</p>
            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex-1">
                Send money
              </button>
              <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg flex-1">
                Request money
              </button>
            </div>
          </div>
        </div>

        {/* Monthly income card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600">↑</span>
            </div>
            <h3>Monthly income</h3>
          </div>
          <div className="flex items-baseline">
            <h2 className="text-3xl font-bold">$16,281</h2>
            <span className="text-xl text-gray-500">.48</span>
          </div>
          <p className="text-sm text-green-600 mt-1">+9.8% compared to last month</p>
        </div>

        {/* Monthly expenses card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600">↓</span>
            </div>
            <h3>Monthly expenses</h3>
          </div>
          <div className="flex items-baseline">
            <h2 className="text-3xl font-bold">$6,638</h2>
            <span className="text-xl text-gray-500">.72</span>
          </div>
          <p className="text-sm text-red-600 mt-1">-8.6% compared to last month</p>
        </div>
      </div>

      {/* Statistics section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Statistics</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#22C55E" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* All expenses section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">All expenses</h3>
          <div className="flex justify-between mb-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Daily</p>
              <p className="font-semibold">$682.20</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Weekly</p>
              <p className="font-semibold">$2,183.26</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Monthly</p>
              <p className="font-semibold">$6,638.72</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {expenseCategories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{category.name}</span>
                  {category.amount && <span>${category.amount}</span>}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">Transaction and invoices</h3>
            <p className="text-sm text-gray-600">Stay update on recent financial activities</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;