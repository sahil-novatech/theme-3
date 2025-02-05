export type BlogData = {
  title: string;
  id: string;
  image: string | null;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  content: string;
  slug: string;
  posted_at?: string;
  user_id: number | string;
}

export type SingleBlogData = {
  content: string;
  id: string;
  image: string;
  posted_at: string;
  slug: string;
  title: string;
}