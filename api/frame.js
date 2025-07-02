export default function handler(req, res) {
That's the proper way to start a Vercel API function. Here's the complete API code to copy:
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { untrustedData } = req.body;
  const buttonIndex = untrustedData?.buttonIndex;

  const gameImageUrl = `https://color-rush-game.vercel.app/game-preview.png`;

  if (buttonIndex === 1) {
    return res.status(200).setHeader('Content-Type', 'text/html').send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${gameImageUrl}" />
          <meta property="fc:frame:button:1" content="🎮 Start Playing" />
          <meta property="fc:frame:button:2" content="📊 View Stats" />
          <meta property="fc:frame:post_url" content="https://color-rush-game.vercel.app/api/frame" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="https://color-rush-game.vercel.app" />
        </head>
        <body>
          <h1>Color Rush Game</h1>
          <p>Click "Start Playing" to play the game!</p>
        </body>
      </html>
    `);
  }

  return res.status(200).setHeader('Content-Type', 'text/html').send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${gameImageUrl}" />
        <meta property="fc:frame:button:1" content="🎯 Play Color Rush" />
        <meta property="fc:frame:post_url" content="https://color-rush-game.vercel.app/api/frame" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://color-rush-game.vercel.app" />
      </head>
      <body>
        <h1>Color Rush - Farcaster Game</h1>
        <p>Test your color matching skills!</p>
      </body>
    </html>
  `);
}
