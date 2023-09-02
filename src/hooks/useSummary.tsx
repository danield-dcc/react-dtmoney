import { useTransactions } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useTransactions()

  // {income:0, outcome: 0, total:0 }

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    // initial values
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
