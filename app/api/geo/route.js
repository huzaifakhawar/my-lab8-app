export const runtime = 'edge';

export async function GET(request) {
  // On Edge Functions, geolocation is available via request.geo
  const geo = request.geo || {};
  
  return Response.json({
    message: "Geolocation from Vercel Edge Function",
    geolocation: {
      country: geo.country || "Unknown",
      city: geo.city || "Unknown",
      region: geo.region || "Unknown",
      latitude: geo.latitude || "N/A",
      longitude: geo.longitude || "N/A",
      timezone: geo.timezone || "N/A",
    },
    note: "Geolocation only available in production/edge, not localhost",
    runtime: "edge",
  });
}
