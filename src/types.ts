export interface Treatment {
  id: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  hours: string;
  instagram: string;
  whatsappUrl: string;
}
