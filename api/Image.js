export default function handler(req, res) {
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B5CF6"/>
          <stop offset="50%" style="stop-color:#3B82F6"/>
          <stop offset="100%" style="stop-color:#4F46E5"/>
        </linearGradient>
      </defs>
      
      <rect width="1200" height="630" fill="url(#bg)"/>
      
      <rect x="100" y="100" width="1000" height="430" rx="20" fill="white" opacity="0.95"/>
      
      <text x="600" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="#1F2937">🎯 Color Rush</text>
      
      <text x="600" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" fill="#6B7280">Match colors as fast as you can!</text>
      
      <rect x="200" y="320" width="200" height="80" rx="10" fill="#EF4444"/>
      <text x="300" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">RED</text>
      
      <rect x="420" y="320" width="200" height="80" rx="10" fill="#3B82F6"/>
      <text x="520" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">BLUE</text>
      
      <rect x="640" y="320" width="200" height="80" rx="10" fill="#10B981"/>
      <text x="740" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">GREEN</text>
      
      <rect x="860" y="320" width="200" height="80" rx="10" fill="#F59E0B"/>
      <text x="960" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white">YELLOW</text>
      
      <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" fill="#4B5563">30 seconds • High scores • Share results</text>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}
