# Recipe Dashboard Pro 🍳

**Submitted by:** Abubakr El Sobky

A modern, AI-enhanced recipe dashboard that allows users to explore recipes with intelligent filtering and AI-powered summaries.

**Live Demo:** [Your deployed URL here]

## 🌟 Features

### Core Functionality

- **Multi-Filter Search**: Filter recipes by category, area, and ingredients
- **Interactive Charts**: Visual cooking time analysis using Recharts
- **Detailed Recipe Views**: Complete recipe information with ingredients and instructions
- **Responsive Design**: Clean, modern UI that works on all devices

### AI-Enhanced Experience 🧠

- **Smart Recipe Summaries**: Get AI-generated recipe summaries powered by Google Gemini
- **One-Click Analysis**: Instantly understand what makes each recipe special
- **Loading States**: Smooth user experience with proper loading indicators

### Technical Highlights

- **React 18** with modern hooks and routing
- **TheMealDB API** integration for recipe data
- **Google Gemini AI** for intelligent content generation
- **Vite** for fast development and builds
- **Custom CSS** with modern design principles

## 🚀 Quick Start

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Google AI API key to .env:
# VITE_GOOGLE_AI_API_KEY=your_api_key_here

# Start development server
npm run dev
```

## 🔧 Environment Setup

1. **Get a Google AI API Key**:

   - Visit [Google AI Studio](https://aistudio.google.com/)
   - Create an API key
   - Add it to your `.env` file

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

## 📱 How to Use

1. **Browse Recipes**: Explore the recipe collection on the main page
2. **Apply Filters**: Use category, area, and ingredient filters to find specific recipes
3. **View Charts**: Analyze cooking times with the interactive line chart
4. **Get AI Summaries**: Click the 🧠 button on any recipe for an AI-generated summary
5. **View Details**: Click on recipes to see full instructions and ingredients

## 🛠️ Technology Stack

- **Frontend**: React 18, React Router
- **Styling**: CSS3 with modern layouts
- **Charts**: Recharts library
- **API**: TheMealDB (free recipe API)
- **AI**: Google Gemini for smart summaries
- **Build Tool**: Vite
- **Deployment**: [Your deployment platform]

## 📊 Project Structure

```
src/
├── components/
│   ├── RecipeCard.jsx     # Individual recipe display with AI
│   ├── RecipeChart.jsx    # Cooking time visualization
│   └── RecipeDetail.jsx   # Detailed recipe view
├── routes/
│   ├── Layout.jsx         # App layout and navigation
│   ├── DetailView.jsx     # Recipe detail page
│   └── NotFound.jsx       # 404 error page
├── utils/
│   └── aiService.js       # Google Gemini integration
└── App.jsx                # Main application logic
```

## 🎯 Key Features Implemented

### Multi-Filter System

- **Category Filter**: Italian, Mexican, Chinese, etc.
- **Area Filter**: Regional cuisine filtering
- **Ingredient Search**: Find recipes by specific ingredients
- **Real-time Updates**: Instant filtering with smooth animations

### AI Integration

- **Smart Summaries**: AI analyzes recipes and provides insights
- **Error Handling**: Graceful fallbacks for API issues
- **Loading States**: Professional user experience
- **Rate Limiting**: Respectful API usage

### Data Visualization

- **Interactive Charts**: Recharts-powered cooking time analysis
- **Responsive Design**: Charts adapt to screen size
- **Clear Labels**: Easy-to-understand data presentation

## 🔍 MLH Fellowship Highlights

This project demonstrates:

- **Modern React Development**: Hooks, routing, and component architecture
- **API Integration**: Multiple API services (TheMealDB, Google AI)
- **User Experience**: Loading states, error handling, responsive design
- **Code Quality**: Clean, maintainable, and well-documented code
- **Innovation**: AI-enhanced features for better user engagement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

Licensed under the Apache License, Version 2.0. See LICENSE file for details.

---
