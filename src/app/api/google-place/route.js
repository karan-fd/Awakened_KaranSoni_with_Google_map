import { NextResponse } from 'next/server';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const GOOGLE_API_KEY = process.env.GOOGLE_MAP_API_KEYS;

export async function GET(req) {
  const { params } = new URL(req.url);
  const category = params.get['category'];
  const lat = params.get['lat'];
  const lng = params.get['lng'];
  const radius = params.get['radius'];

  const res = await fetch(
    BASE_URL +
      '/textsearch/json?query=' +
      category +
      '&location=' +
      lat +
      ',' +
      lng +
      '&radius=' +
      radius +
      '&key=' +
      GOOGLE_API_KEY,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const resturant = await res.json();
  return NextResponse.json({ resturant });
}
