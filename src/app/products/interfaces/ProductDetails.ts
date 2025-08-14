export interface ProductDetails {
  ratingsQuantity: string;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: string;
  price: string;
  imageCover: string;
  images: string[]; // ✅ أضفنا images كمصفوفة من strings
  brand: {          // ✅ أضفنا brand كـ object فيه name
    name: string;
  };
}

