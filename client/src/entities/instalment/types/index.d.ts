export namespace InstalmentTypes {
  type One = {
    id: string
    images: Array<string>
    due_amount: string
    due_date: string
    actual_amount: string | null
    payment_date: string | null
    status: 'paid' | 'on-schedule' | 'overdue'
    total: string
  }

  type All = Array<One>
}
