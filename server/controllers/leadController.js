// @desc    Create a new lead
// @route   POST /api/leads
// @access  Public
exports.createLead = async (req, res) => {
  try {
    const { name, email, budgetRange, message } = req.body;

    console.log('📝 Received lead data:', { name, email, budgetRange, message });

    // Server-side validation
    const errors = {};
    if (!name || name.length < 2) errors.name = 'Name must be at least 2 characters';
    if (!email || !email.match(/^\S+@\S+\.\S+$/)) errors.email = 'Please enter a valid email';
    if (!budgetRange) errors.budgetRange = 'Please select a budget range';
    if (!message || message.length < 10) errors.message = 'Message must be at least 10 characters';

    if (Object.keys(errors).length > 0) {
      console.log('❌ Validation errors:', errors);
      return res.status(400).json({ success: false, errors });
    }

    const supabase = req.app.locals.supabase;
    
    console.log('🔄 Inserting lead into Supabase...');
    
    // Insert lead with budget_range (matching your table schema)
    const { data, error } = await supabase
      .from('leads')
      .insert([{ 
        name, 
        email, 
        budget_range: budgetRange,  // This matches your table column name
        message 
      }])
      .select()
      .single();

    if (error) {
      console.error('❌ Supabase error:', error);
      console.error('❌ Error details:', error.details);
      console.error('❌ Error hint:', error.hint);
      
      return res.status(500).json({
        success: false,
        message: 'Database error: ' + error.message,
        details: error.details || error.message,
        code: error.code
      });
    }

    console.log('✅ Lead created successfully:', data);
    res.status(201).json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('❌ Create lead error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating lead: ' + error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (Admin)
exports.getLeads = async (req, res) => {
  try {
    const { search, status } = req.query;
    const supabase = req.app.locals.supabase;

    console.log('🔍 Fetching leads with filters:', { search, status });

    let query = supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
    }

    if (status && status !== 'All') {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      console.error('❌ Supabase error:', error);
      throw error;
    }

    console.log(`✅ Found ${data.length} leads`);
    res.status(200).json({
      success: true,
      count: data.length,
      data: data
    });
  } catch (error) {
    console.error('❌ Get leads error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching leads: ' + error.message
    });
  }
};

// @desc    Update lead status
// @route   PATCH /api/leads/:id/status
// @access  Private (Admin)
exports.updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['New', 'Contacted', 'Closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    console.log(`🔄 Updating lead ${req.params.id} status to: ${status}`);

    const supabase = req.app.locals.supabase;
    
    const { data, error } = await supabase
      .from('leads')
      .update({ 
        status, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) {
      console.error('❌ Supabase error:', error);
      throw error;
    }

    if (!data) {
      console.log('❌ Lead not found:', req.params.id);
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }

    console.log('✅ Lead status updated:', data);
    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('❌ Update lead status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating lead status: ' + error.message
    });
  }
};