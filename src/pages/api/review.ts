import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const rating = formData.get('rating');
    const reaction = formData.getAll('reaction');
    const review = formData.get('review');

    // Validasi dasar
    if (!rating || !review) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Rating dan review harus diisi'
        }), 
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Insert ke Supabase
    const { data, error } = await supabase
      .from('reviews')
      .insert([
        {
          rating: parseInt(rating.toString()),
          reactions: reaction,
          review: review,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) throw error;

    // Redirect ke halaman terima kasih
    return redirect('/terimakasih');

  } catch (error) {
    console.error('Error submitting review:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Terjadi kesalahan saat menyimpan review'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
export const GET: APIRoute = async ({ request }) => {
  // Penanganan untuk metode GET di rute "/api/review"
  return new Response(
    JSON.stringify({ message: 'API endpoint for reviews' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
