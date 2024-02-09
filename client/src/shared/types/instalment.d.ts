export namespace InstalmentTypes {
  type One = {
    id: string
    images: Array<string>
    due_amount: string
    due_date: string
    actual_amount: string | null
    payment_date: string | null
    status: 'paid' | 'on-schedule'
    total: string
  }

  type All = Array<One>
}
