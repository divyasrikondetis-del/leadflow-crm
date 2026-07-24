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
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Import routes
const leadRoutes = require('./routes/leadRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);

// Test endpoint
app.get('/api/test', async (req, res) => {
  try {
    const { data, error } = await supabase.from('leads').select('count');
    if (error) throw error;
    res.json({ 
      message: '✅ Supabase connected successfully!', 
      leads: data 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Supabase URL: ${process.env.SUPABASE_URL}`);
});