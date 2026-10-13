
export type Client = {
  name: string;
  email?: string;
  phone?: string;
}

export type Session = {
  package: string;
  date: string;
  basePrice: number;
  extraHours: number;
  hourlyRate: number;
}

export type Review = {
  rating: number;
  comment: string;
}

//Input
export type RawBooking = {
  id: string;
  client: Client;
  session: Session;
  deliveryStatus: string;
  review?: Review | null;
}

//Output
export type ProcessedBooking = {
  id: string;
  clientName: string;
  clientPhone: string;
  package: string;
  deliveryDate: string;
  totalPrice: number;
  rating: number;
}

