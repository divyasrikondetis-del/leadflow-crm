const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

dotenv.config();

const app = express();

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Make supabase available to routes
app.locals.supabase = supabase;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://leadflow-crm-divya.vercel.app',
    'https://leadflow-crm-flax.vercel.app',
    'https://leadflow-crm.vercel.app',
    'https://leadflow-crm-git-main-divyasrikondetis-dels-projects.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Import routes
const leadRoutes = require('./routes/leadRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);

// ✅ Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 LeadFlow CRM Backend is Running'
  });
});

// ✅ API route
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'LeadFlow CRM API is Running'
  });
});

// Test endpoint
app.get('/api/test', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('count');

    if (error) throw error;

    res.json({
      message: '✅ Supabase connected successfully!',
      leads: data
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Supabase URL: ${process.env.SUPABASE_URL}`);
});