import React, { useState, useRef } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import IncomeExpenseSummary from './income-expense-summary'

const TransactionTags = () => {
  const generateMonths = ({
    startDate = new Date(),
    prev = 6,
    next = 5
  }: {
    startDate?: Date
    prev?: number
    next?: number
  }) => {
    const months = []

    // Generate months (prev before current, current, next after)
    for (let i = next; i >= -prev; i--) {
      const date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1)
      months.push(date)
    }

    return months
  }
  const [availableMonths, setAvailableMonths] = useState<Date[]>(
    generateMonths({ startDate: new Date(), prev: 6, next: 5 })
  )
  const [selectedMonth, setSelectedMonth] = useState(new Date())
  const flatListRef = useRef<FlatList>(null)

  const getMonthDisplay = (date: Date) => {
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const year = date.getFullYear()

    return {
      month,
      year: year.toString(),
      fullYear: year
    }
  }

  const getMonthData = (date: Date) => {
    // Mock data - in real app this would come from your data source
    return {
      needs: { income: 1650.06, expense: 302.5 },
      wants: { income: 850.3, expense: 450.2 },
      investments: { income: 2100.0, expense: 0 }
    }
  }

  const handleMonthSelect = (date: Date) => {
    setSelectedMonth(date)
    flatListRef.current?.scrollToIndex({
      index: availableMonths.findIndex(
        (month) => month.getMonth() === date.getMonth() && month.getFullYear() === date.getFullYear()
      ),
      animated: true,
      viewPosition: 0.5
      // viewOffset: 10
    })
  }

  const renderMonthItem = ({ item, index }: { item: Date; index: number }) => {
    const monthDisplay = getMonthDisplay(item)
    const isSelected =
      item.getMonth() === selectedMonth.getMonth() && item.getFullYear() === selectedMonth.getFullYear()

    return (
      <TouchableOpacity
        onPress={() => handleMonthSelect(item)}
        className={`mx-1 w-16 px-4 py-2 rounded-xl ${isSelected ? 'bg-primary' : 'bg-gray-100'}`}
        activeOpacity={0.7}
      >
        <Text className={`text-center font-semibold ${isSelected ? 'text-primary-foreground' : 'text-gray-700'}`}>
          {monthDisplay.month}
        </Text>
        <Text className={`text-center text-xs ${isSelected ? 'text-primary-foreground' : 'text-gray-500'}`}>
          {monthDisplay.year}
        </Text>
      </TouchableOpacity>
    )
  }

  const monthData = getMonthData(selectedMonth)

  return (
    <View className='flex flex-col gap-4'>
      {/* Horizontal month list */}
      <FlatList
        ref={flatListRef}
        data={availableMonths}
        renderItem={renderMonthItem}
        keyExtractor={(item) => item.toISOString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={6} // Start at current month
        getItemLayout={(data, index) => ({
          length: 64, // Approximate item width
          offset: 64 * index,
          index
        })}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setAvailableMonths((prev) => [
            ...prev,
            ...generateMonths({ startDate: availableMonths[availableMonths.length - 1], prev: 5, next: -1 })
          ])
        }}
        inverted
      />

      <IncomeExpenseSummary />

      {/* Minimal transaction tags */}
      <View className='flex-row flex-1 w-full justify-between gap-3'>
        <View className='flex-1 bg-gray-50 rounded-lg p-4'>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='w-6 h-6 bg-gray-200 rounded-full items-center justify-center'>
              <MaterialIcons name='home' size={14} color='#6B7280' />
            </View>
            <Text className='text-gray-700 text-sm font-medium'>Needs</Text>
          </View>
          <View className='flex flex-col gap-1'>
            <Text className='text-gray-900 text-sm font-semibold'>+${monthData.needs.income.toLocaleString()}</Text>
            <Text className='text-gray-600 text-xs'>-${monthData.needs.expense.toLocaleString()}</Text>
          </View>
        </View>

        <View className='flex-1 bg-gray-50 rounded-lg p-4'>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='w-6 h-6 bg-gray-200 rounded-full items-center justify-center'>
              <FontAwesome5 name='shopping-bag' size={12} color='#6B7280' />
            </View>
            <Text className='text-gray-700 text-sm font-medium'>Wants</Text>
          </View>
          <View className='flex flex-col gap-1'>
            <Text className='text-gray-900 text-sm font-semibold'>+${monthData.wants.income.toLocaleString()}</Text>
            <Text className='text-gray-600 text-xs'>-${monthData.wants.expense.toLocaleString()}</Text>
          </View>
        </View>

        <View className='flex-1 bg-gray-50 rounded-lg p-4'>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='w-6 h-6 bg-gray-200 rounded-full items-center justify-center'>
              <AntDesign name='linechart' size={14} color='#6B7280' />
            </View>
            <Text className='text-gray-700 text-sm font-medium'>Investments</Text>
          </View>
          <View className='flex flex-col gap-1'>
            <Text className='text-gray-900 text-sm font-semibold'>
              +${monthData.investments.income.toLocaleString()}
            </Text>
            <Text className='text-gray-600 text-xs'>-${monthData.investments.expense.toLocaleString()}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TransactionTags
