import { AntDesign, Ionicons } from '@expo/vector-icons'
import type { Route } from 'expo-router'
import { Link, router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Background from '@/components/background'
import { HomeHeader, MainBalanceCard, TransactionTags, IncomeExpenseSummary } from '@/components/home'

const HomeScreen = () => {
  const mockBalance = '$3,500.00'
  const mockAccounts = [
    { id: '1', name: 'Daily Account', balance: '$2,150.00', type: 'checking' },
    { id: '2', name: 'Savings', balance: '$1,350.00', type: 'savings' }
  ]

  const quickActions = [
    {
      title: 'Accounts',
      icon: 'wallet',
      route: '/home/accounts',
      color: '#A8D5BA'
    },
    {
      title: 'Transactions',
      icon: 'list',
      route: '/home/transactions',
      color: '#FFE082'
    },
    {
      title: 'Transfer',
      icon: 'swap-horizontal',
      route: '/home/transfer',
      color: '#C8E6C9'
    },
    {
      title: 'Cards',
      icon: 'card',
      route: '/home/credit-cards',
      color: '#FFF59D'
    },
    {
      title: 'Analytics',
      icon: 'analytics',
      route: '/home/analytics',
      color: '#A8D5BA'
    },
    {
      title: 'Budget',
      icon: 'pie-chart',
      route: '/home/budget',
      color: '#FFE082'
    },
    {
      title: 'Reports',
      icon: 'document-text',
      route: '/home/reports',
      color: '#C8E6C9'
    },
    {
      title: 'Portfolio',
      icon: 'pie-chart',
      route: '/home/balance-breakdown',
      color: '#FFB3BA'
    },
    {
      title: 'Settings',
      icon: 'settings',
      route: '/home/settings',
      color: '#FFF59D'
    }
  ]

  return (
    <Background>
      <HomeHeader />
      <MainBalanceCard />
      <TransactionTags />

      {/* Quick Actions Grid */}
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#000000',
            marginBottom: 16
          }}
        >
          Quick Actions
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {quickActions.map((action) => (
            <Link key={action.title} href={action.route as Route} asChild>
              <TouchableOpacity
                style={{
                  width: '48%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  padding: 20,
                  marginBottom: 12,
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.06,
                  shadowRadius: 8,
                  elevation: 2
                }}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: action.color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 12
                  }}
                >
                  <Ionicons name={action.icon as keyof typeof Ionicons.glyphMap} size={24} color='#424242' />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#424242',
                    textAlign: 'center'
                  }}
                >
                  {action.title}
                </Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </View>

      {/* Recent Accounts */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#000000' }}>Your Accounts</Text>
          <Link href='/home/accounts' asChild>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#424242',
                  fontWeight: '600'
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        {mockAccounts.map((account) => (
          <TouchableOpacity
            key={account.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 16,
              marginBottom: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 2
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: account.type === 'checking' ? '#A8D5BA' : '#FFE082',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 12
                }}
              >
                <Ionicons name={account.type === 'checking' ? 'wallet' : 'save'} size={20} color='#424242' />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000000'
                  }}
                >
                  {account.name}
                </Text>
                <Text style={{ fontSize: 14, color: '#757575' }}>
                  {account.type === 'checking' ? 'Checking' : 'Savings'}
                </Text>
              </View>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#000000' }}>{account.balance}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Transactions */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#000000' }}>Recent Transactions</Text>
          <Link href='/home/transactions' asChild>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#424242',
                  fontWeight: '600'
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        {[
          {
            id: '1',
            description: 'Grocery Store',
            amount: '-$75.50',
            date: 'Today',
            category: 'Food'
          },
          {
            id: '2',
            description: 'Salary Deposit',
            amount: '+$2,500.00',
            date: 'Yesterday',
            category: 'Income'
          },
          {
            id: '3',
            description: 'Gas Station',
            amount: '-$45.00',
            date: 'Mar 14',
            category: 'Transport'
          }
        ].map((transaction) => (
          <TouchableOpacity
            key={transaction.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 16,
              marginBottom: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 2
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#000000',
                  marginBottom: 4
                }}
              >
                {transaction.description}
              </Text>
              <Text style={{ fontSize: 14, color: '#757575' }}>
                {transaction.date} • {transaction.category}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: transaction.amount.startsWith('+') ? '#4CAF50' : '#F44336'
              }}
            >
              {transaction.amount}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Background>
  )
}

export default HomeScreen
