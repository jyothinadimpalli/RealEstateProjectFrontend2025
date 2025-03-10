// src/app/models/property.model.ts

export interface Property {
    _id?: string;  // Optional for new properties
    title: string;
    description: string;
    price: number;
    location: {
      latitude: number;
      longitude: number;
      address: string;
    };
    propertyType: 'Apartment' | 'Individual House';
    size: number;
    bedrooms: number;
    bathrooms: number;
    amenities: string[];
    builderId?: string;  // Reference to User ID
    images: string[];
    status: 'Available' | 'Sold';
    createdAt?: Date;  // Optional timestamps
    updatedAt?: Date;  // Optional timestamps
  }
  