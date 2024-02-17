export namespace InstalmentTypes {
  type ResponseOne = {
    id: string
    images: Array<string>
    due_amount: string
    due_date: string
    actual_amount: string | null
    payment_date: string | null
    status: 'paid' | 'on-schedule' | 'overdue'
    total: string
  }

  type ResponseAll = Array<ResponseOne>

  type One = {
    id: string
    images: Array<string>
    dueAmount: string
    dueDate: string
    actualAmount: string | null
    paymentDate: string | null
    status: string
    total: string
  }

  export type All = Array<One>
}
