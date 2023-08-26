/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/App.tsx',
    './src/main.tsx',
    './src/index.css',
    './src/Keyboard.tsx',
    './src/campaign/Word.tsx',
    './src/campaign/CampaignKey.tsx',
    './src/campaign/CampaignHang.tsx',
    './src/campaign/CampaignKey.tsx',
    './src/campaign/Campaign.tsx',
    './index.html',
    './src/components/Footer.tsx',
    './src/components/HangmanDrawing.tsx',
    './src/components/HangmanWord.tsx',
    './src/components/Keyboard.tsx',
    './src/components/Navbar.tsx',
  ],
  theme: {
    extend: {
      screens : {
        'xl': {'max' : '1300px'},
        'll': {'max' : '1125px'},
        'md': {'max' : '700px'},
        'ssm': {'max' : '550px'},
      },
    },
  },
  plugins: [],
}

