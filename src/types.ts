export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
  email: string;
  phone: string;
  imageUrl: string;
  socials?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface Review {
  id: string;
  clientName: string;
  text: string;
  videoUrl?: string; // If they have a video review
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}
