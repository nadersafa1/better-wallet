import { create } from 'zustand';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'premium';
  createdAt: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  balance: number;
  currency: string;
  accountNumber: string;
  isActive: boolean;
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense' | 'transfer';
  amount: number;
  currency: string;
  description: string;
  category: string;
  accountId: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  reference?: string;
}

export interface Notification {
  id: string;
  type: 'transaction' | 'security' | 'promo' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  date: string;
  actionUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  icon: string;
  color: string;
}

// Mock Data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'premium',
    createdAt: '2024-01-15T10:30:00Z',
  },
];

const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Main Checking',
    type: 'checking',
    balance: 26887.09,
    currency: 'USD',
    accountNumber: '****1234',
    isActive: true,
  },
  {
    id: '2',
    name: 'Savings Account',
    type: 'savings',
    balance: 15420.50,
    currency: 'USD',
    accountNumber: '****5678',
    isActive: true,
  },
  {
    id: '3',
    name: 'Credit Card',
    type: 'credit',
    balance: -2101.70,
    currency: 'USD',
    accountNumber: '****9012',
    isActive: true,
  },
];

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 5000.00,
    currency: 'USD',
    description: 'Salary Payment',
    category: 'Salary',
    accountId: '1',
    date: '2024-01-15T09:00:00Z',
    status: 'completed',
    reference: 'SAL-2024-001',
  },
  {
    id: '2',
    type: 'expense',
    amount: -125.50,
    currency: 'USD',
    description: 'Grocery Shopping',
    category: 'Food & Dining',
    accountId: '1',
    date: '2024-01-14T16:30:00Z',
    status: 'completed',
    reference: 'TXN-2024-002',
  },
  {
    id: '3',
    type: 'expense',
    amount: -89.99,
    currency: 'USD',
    description: 'Netflix Subscription',
    category: 'Entertainment',
    accountId: '3',
    date: '2024-01-13T12:00:00Z',
    status: 'completed',
    reference: 'TXN-2024-003',
  },
  {
    id: '4',
    type: 'income',
    amount: 2500.00,
    currency: 'USD',
    description: 'Freelance Payment',
    category: 'Freelance',
    accountId: '1',
    date: '2024-01-12T14:20:00Z',
    status: 'completed',
    reference: 'FRE-2024-001',
  },
  {
    id: '5',
    type: 'expense',
    amount: -45.00,
    currency: 'USD',
    description: 'Gas Station',
    category: 'Transportation',
    accountId: '1',
    date: '2024-01-11T08:15:00Z',
    status: 'completed',
    reference: 'TXN-2024-004',
  },
];

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'transaction',
    title: 'Payment Received',
    message: 'You received $5,000.00 from ABC Company',
    isRead: false,
    date: '2024-01-15T09:00:00Z',
  },
  {
    id: '2',
    type: 'security',
    title: 'Login Alert',
    message: 'New login detected from New York, NY',
    isRead: false,
    date: '2024-01-14T16:30:00Z',
  },
  {
    id: '3',
    type: 'promo',
    title: 'Special Offer',
    message: 'Get 2% cashback on all purchases this month',
    isRead: true,
    date: '2024-01-13T12:00:00Z',
  },
];

const mockCategories: Category[] = [
  { id: '1', name: 'Salary', type: 'income', icon: 'cash', color: '#10B981' },
  { id: '2', name: 'Freelance', type: 'income', icon: 'briefcase', color: '#3B82F6' },
  { id: '3', name: 'Investment', type: 'income', icon: 'trending-up', color: '#8B5CF6' },
  { id: '4', name: 'Food & Dining', type: 'expense', icon: 'restaurant', color: '#EF4444' },
  { id: '5', name: 'Transportation', type: 'expense', icon: 'car', color: '#F59E0B' },
  { id: '6', name: 'Entertainment', type: 'expense', icon: 'film', color: '#EC4899' },
  { id: '7', name: 'Shopping', type: 'expense', icon: 'bag', color: '#8B5CF6' },
  { id: '8', name: 'Bills', type: 'expense', icon: 'receipt', color: '#6B7280' },
];

// Store
interface MockStore {
  // Data
  user: User | null;
  accounts: Account[];
  transactions: Transaction[];
  notifications: Notification[];
  categories: Category[];
  
  // Loading states
  isLoading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  markNotificationAsRead: (id: string) => void;
  deleteNotification: (id: string) => void;
  addAccount: (account: Omit<Account, 'id'>) => void;
  updateAccount: (id: string, updates: Partial<Account>) => void;
  setLoading: (loading: boolean) => void;
  
  // Computed
  getTotalBalance: () => number;
  getTransactionsByAccount: (accountId: string) => Transaction[];
  getUnreadNotificationsCount: () => number;
  getTransactionsByType: (type: Transaction['type']) => Transaction[];
}

export const useMockStore = create<MockStore>((set, get) => ({
  // Initial state
  user: mockUsers[0],
  accounts: mockAccounts,
  transactions: mockTransactions,
  notifications: mockNotifications,
  categories: mockCategories,
  isLoading: false,

  // Actions
  setUser: (user) => set({ user }),
  
  addTransaction: (transaction) => set((state) => ({
    transactions: [
      {
        ...transaction,
        id: Date.now().toString(),
        date: new Date().toISOString(),
        status: 'completed',
      },
      ...state.transactions,
    ],
  })),
  
  updateTransaction: (id, updates) => set((state) => ({
    transactions: state.transactions.map((t) =>
      t.id === id ? { ...t, ...updates } : t
    ),
  })),
  
  deleteTransaction: (id) => set((state) => ({
    transactions: state.transactions.filter((t) => t.id !== id),
  })),
  
  markNotificationAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((n) =>
      n.id === id ? { ...n, isRead: true } : n
    ),
  })),
  
  deleteNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id),
  })),
  
  addAccount: (account) => set((state) => ({
    accounts: [
      ...state.accounts,
      {
        ...account,
        id: Date.now().toString(),
      },
    ],
  })),
  
  updateAccount: (id, updates) => set((state) => ({
    accounts: state.accounts.map((a) =>
      a.id === id ? { ...a, ...updates } : a
    ),
  })),
  
  setLoading: (loading) => set({ isLoading: loading }),

  // Computed
  getTotalBalance: () => {
    const { accounts } = get();
    return accounts.reduce((total, account) => total + account.balance, 0);
  },
  
  getTransactionsByAccount: (accountId) => {
    const { transactions } = get();
    return transactions.filter((t) => t.accountId === accountId);
  },
  
  getUnreadNotificationsCount: () => {
    const { notifications } = get();
    return notifications.filter((n) => !n.isRead).length;
  },
  
  getTransactionsByType: (type) => {
    const { transactions } = get();
    return transactions.filter((t) => t.type === type);
  },
}));
