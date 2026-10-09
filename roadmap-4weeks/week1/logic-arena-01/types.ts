export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type RejectedItem = {
  raw: string;
  reason: string;
}

export type ParseResult = {
  orders: OrderItem[],
  rejectedItems: RejectedItem[]
}



export type BranchSummary = {
  id: string;
  totalBranchRevenue: number;
}

export type Report = {
  totalRevenue: number;
  revenueByBranch: BranchSummary[];
  totalRejected: number;
  rejectedItems: RejectedItem[];
}

