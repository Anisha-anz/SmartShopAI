# SmartShop AI 👟

SmartShop AI is a mobile AI-powered shoe shopping application built using Expo, React Native, TypeScript, and the Google Gemini API.

## Features

* AI-powered shoe search
* Understands shoe type, brand, and budget
* AI-generated shoe recommendations
* 15 shoe products with images
* Product details screen
* Search and filtering
* Price and rating display
* Favorite/heart functionality
* Responsive mobile UI

## Technologies Used

* React Native
* Expo
* Expo Router
* TypeScript
* Google Gemini API
* Unsplash images

## AI Implementation

The application uses the Google Gemini API to understand natural-language shopping requests.

For example:

`Nike running shoes under ₹5,000`

The AI identifies:

1. Shoe type — Running shoes
2. Maximum budget — ₹5,000
3. Preferred brand — Nike
4. Recommendation based on the request

The AI request is handled through an API route so the Gemini API key is not directly exposed in the mobile interface.

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Gemini API

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Replace `YOUR_GEMINI_API_KEY` with your own Gemini API key.

**Do not upload the `.env` file or your API key to GitHub.**

### 3. Start the application

```bash
npx expo start
```

For web:

```bash
npx expo start --web
```

## Project Structure

```text
SmartShopAI
├── src
│   └── app
│       ├── index.tsx
│       ├── product.tsx
│       └── ai+api.ts
├── .env
├── package.json
└── README.md
```

## Third-Party Libraries and Services

* Expo / React Native — mobile application development
* Expo Router — navigation
* Google Gemini API — AI-powered shopping assistant
* Unsplash — shoe product images

## Example AI Search

**User:**
Nike running shoes under ₹5,000

**SmartShop AI:**
Identifies the shoe type, budget, preferred brand, and provides a recommendation.

## Conclusion

SmartShop AI demonstrates how AI can be integrated into a shopping application to understand natural-language user requirements and provide personalized shoe recommendations.


