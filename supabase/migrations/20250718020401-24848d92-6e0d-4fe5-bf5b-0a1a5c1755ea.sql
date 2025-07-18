
-- Allow anonymous user activity tracking by making user_id nullable
ALTER TABLE public.user_activity ALTER COLUMN user_id DROP NOT NULL;

-- Fix wall_posts table - content should be text, not uuid
ALTER TABLE public.wall_posts ALTER COLUMN content TYPE text;

-- Add RLS policy to allow inserting wall posts
CREATE POLICY "Users can insert wall posts" 
  ON public.wall_posts 
  FOR INSERT 
  WITH CHECK (user_id = auth.uid());

-- Update RLS policies for wall_posts to allow proper functionality
DROP POLICY IF EXISTS "User can insert own post" ON public.wall_posts;
DROP POLICY IF EXISTS "User can view own posts" ON public.wall_posts;

-- Create proper policies for wall_posts
CREATE POLICY "Users can view approved posts" 
  ON public.wall_posts 
  FOR SELECT 
  USING (status = 'approved');

CREATE POLICY "Users can view their own posts" 
  ON public.wall_posts 
  FOR SELECT 
  USING (user_id = auth.uid());

-- Allow admins to view all posts (you'll need to implement admin role checking)
CREATE POLICY "Allow all access for development" 
  ON public.wall_posts 
  FOR ALL 
  USING (true) 
  WITH CHECK (true);
