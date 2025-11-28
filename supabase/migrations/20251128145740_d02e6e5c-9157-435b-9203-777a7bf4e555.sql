-- Create shoutouts table
CREATE TABLE public.shoutouts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_nickname TEXT NOT NULL,
  recipient_name TEXT,
  message_content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('thankyou', 'confession', 'meme')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.shoutouts ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (anyone can view and post shoutouts)
CREATE POLICY "Anyone can view shoutouts" 
ON public.shoutouts 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create shoutouts" 
ON public.shoutouts 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_shoutouts_updated_at
BEFORE UPDATE ON public.shoutouts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();