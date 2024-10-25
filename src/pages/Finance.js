import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, CreditCard, TrendingUp, Send, Plus } from 'lucide-react';

const Finance = () => {
  const monthlyData = [
    { month: 'Jan', income: 12000, expenses: 5000 },
    { month: 'Feb', income: 13000, expenses: 5500 },
    { month: 'Mar', income: 14000, expenses: 6000 },
    { month: 'Apr', income: 13500, expenses: 5800 },
    { month: 'May', income: 15000, expenses: 6200 },
    { month: 'Jun', income: 14500, expenses: 6100 },
    { month: 'Jul', income: 16281, expenses: 6638 },
    { month: 'Dec', income: 16000, expenses: 6300 },
  ];

  const expenses = [
    { category: 'Food & health', amount: 985.90, percentage: 63 },
    { category: 'Platform', amount: 682.20, percentage: 56 },
    { category: 'Shopping', amount: 552.15, percentage: 48 },
    { category: 'Entertainment', amount: 463.30, percentage: 46 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold mb-1">Good morning, Jaylon</h1>
          <p className="text-gray-500">This is your finance report</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Balance Card */}
        <div className="col-span-4 bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-500">My balance</p>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold">$83,172</span>
            <span className="text-xl text-gray-400">.64</span>
            <span className="ml-2 text-green-500 text-sm">+6.7%</span>
          </div>
          <div className="mt-4 font-mono text-gray-600">
            6549 7329 9821 2472
          </div>
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Send money
            </button>
            <button className="flex-1 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition-colors">
              Request money
            </button>
          </div>
        </div>

        {/* Income Card */}
        <div className="col-span-4 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Monthly income</h3>
            <DollarSign className="text-green-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">$16,281</span>
            <span className="text-xl text-gray-400">.48</span>
          </div>
          <p className="text-green-500 text-sm mt-2">+9.8% compared to last month</p>
        </div>

        {/* Expenses Card */}
        <div className="col-span-4 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Monthly expenses</h3>
            <CreditCard className="text-red-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">$6,638</span>
            <span className="text-xl text-gray-400">.72</span>
          </div>
          <p className="text-red-500 text-sm mt-2">-8.6% compared to last month</p>
        </div>

        {/* Statistics Chart */}
        <div className="col-span-8 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-medium mb-4">Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" />
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

        {/* Expenses Breakdown */}
        <div className="col-span-4 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-medium mb-4">All expenses</h3>
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
          </div>
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div key={expense.category} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{expense.category}</p>
                  <p className="text-sm text-gray-500">${expense.amount}</p>
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${expense.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500">{expense.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
