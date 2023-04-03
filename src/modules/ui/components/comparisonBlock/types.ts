export interface InterfaceComparisonBlock {
  cartDescription?: string;
  description?: string;
  features?: string[];
  imagePath?: string;
  items?: [{
    category?: string;
    description?: string;
    features?: string;
  }];
  name?: string;
  price?: number;
}
