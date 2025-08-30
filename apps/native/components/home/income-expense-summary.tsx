import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IncomeExpenseSummary = () => {
  // Mock data - in real app this would come from your data source
  const totalIncome = 4600.36 // Sum of all income categories
  const totalExpenses = 752.7 // Sum of all expense categories
  const netAmount = totalIncome - totalExpenses

  return (
    <View className='flex-row justify-between gap-3 mb-4'>
      {/* Income Card */}
      <View className='flex-1 bg-white rounded-xl p-4 shadow-sm'>
        <View className='flex-row items-center gap-2 mb-2'>
          <View className='w-6 h-6 bg-green-50 rounded-full items-center justify-center'>
            <Ionicons name='arrow-up' size={12} color='#10B981' />
          </View>
          <Text className='text-gray-600 text-xs font-medium'>Income</Text>
        </View>
        <Text className='text-green-600 text-lg font-bold'>${totalIncome.toLocaleString()}</Text>
      </View>

      {/* Expenses Card */}
      <View className='flex-1 bg-white rounded-xl p-4 shadow-sm'>
        <View className='flex-row items-center gap-2 mb-2'>
          <View className='w-6 h-6 bg-red-50 rounded-full items-center justify-center'>
            <Ionicons name='arrow-down' size={12} color='#EF4444' />
          </View>
          <Text className='text-gray-600 text-xs font-medium'>Expenses</Text>
        </View>
        <Text className='text-red-600 text-lg font-bold'>${totalExpenses.toLocaleString()}</Text>
      </View>

      {/* Net Amount Card */}
      <View className='flex-1 bg-white rounded-xl p-4 shadow-sm'>
        <View className='flex-row items-center gap-2 mb-2'>
          <View className='w-6 h-6 bg-blue-50 rounded-full items-center justify-center'>
            <Ionicons name='trending-up' size={12} color='#3B82F6' />
          </View>
          <Text className='text-gray-600 text-xs font-medium'>Net</Text>
        </View>
        <Text className={`text-lg font-bold ${netAmount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          ${netAmount.toLocaleString()}
        </Text>
      </View>
    </View>
  )
}

export default IncomeExpenseSummary
