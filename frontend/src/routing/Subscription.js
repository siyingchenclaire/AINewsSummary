import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Subscription() {
    const sample = {display:'none'}
    return (
      <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px'
        }}>
            <Box sx={{textAlign: 'left' }}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500}}>Subscriptions & Alerts</Typography>
                <Typography variant="subtitle1" gutterBottom color="textSecondary">Customize your intelligence feed with targeted tracking</Typography>
            </Box>
            <Button variant="contained" onclick="openModal()" size="large">
                + Add Subscription
            </Button>
        </Box>

        <div class="subscriptions-grid">
            <div class="subscription-card">
                <div class="subscription-header">
                    <div>
                        <h3 class="subscription-title">OpenAI & Competitors</h3>
                        <div class="subscription-type">Company Watch</div>
                    </div>
                    <div class="subscription-menu">⋯</div>
                </div>
                <p class="subscription-description">Track all news, funding, product launches, and strategic moves from OpenAI, Anthropic, Google DeepMind, and other AI leaders.</p>
                <div class="subscription-stats">
                    <div class="stat">
                        <div class="stat-value">127</div>
                        <div class="stat-label">Articles</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">18</div>
                        <div class="stat-label">Alerts</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">85%</div>
                        <div class="stat-label">Relevance</div>
                    </div>
                </div>
                <div class="subscription-keywords">
                    <span class="keyword-tag">OpenAI</span>
                    <span class="keyword-tag">Anthropic</span>
                    <span class="keyword-tag">GPT</span>
                    <span class="keyword-tag">Claude</span>
                    <span class="keyword-tag">LLM</span>
                </div>
                <div class="subscription-controls">
                    <div class="toggle-switch active"></div>
                    <span style={{fontSize:'12px', color:'#64748b'}}>Active</span>
                </div>
            </div>

            <div class="subscription-card">
                <div class="subscription-header">
                    <div>
                        <h3 class="subscription-title">AI Chip Market</h3>
                        <div class="subscription-type">Sector Watch</div>
                    </div>
                    <div class="subscription-menu">⋯</div>
                </div>
                <p class="subscription-description">Monitor semiconductor developments, AI chip innovations, supply chain updates from NVIDIA, AMD, Intel, and emerging players.</p>
                <div class="subscription-stats">
                    <div class="stat">
                        <div class="stat-value">89</div>
                        <div class="stat-label">Articles</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">12</div>
                        <div class="stat-label">Alerts</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">92%</div>
                        <div class="stat-label">Relevance</div>
                    </div>
                </div>
                <div class="subscription-keywords">
                    <span class="keyword-tag">NVIDIA</span>
                    <span class="keyword-tag">AMD</span>
                    <span class="keyword-tag">GPU</span>
                    <span class="keyword-tag">AI Chips</span>
                    <span class="keyword-tag">Semiconductors</span>
                </div>
                <div class="subscription-controls">
                    <div class="toggle-switch active"></div>
                    <span style={{fontSize:'12px', color:'#64748b'}}>Active</span>
                </div>
            </div>

            <div class="subscription-card">
                <div class="subscription-header">
                    <div>
                        <h3 class="subscription-title">Apple Innovations</h3>
                        <div class="subscription-type">Company Watch</div>
                    </div>
                    <div class="subscription-menu">⋯</div>
                </div>
                <p class="subscription-description">Stay updated on Apple's product roadmap, AI integrations, Vision Pro developments, and strategic partnerships.</p>
                <div class="subscription-stats">
                    <div class="stat">
                        <div class="stat-value">56</div>
                        <div class="stat-label">Articles</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">8</div>
                        <div class="stat-label">Alerts</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">78%</div>
                        <div class="stat-label">Relevance</div>
                    </div>
                </div>
                <div class="subscription-keywords">
                    <span class="keyword-tag">Apple</span>
                    <span class="keyword-tag">Vision Pro</span>
                    <span class="keyword-tag">iOS</span>
                    <span class="keyword-tag">AR/VR</span>
                    <span class="keyword-tag">Apple Intelligence</span>
                </div>
                <div class="subscription-controls">
                    <div class="toggle-switch"></div>
                    <span style={{fontSize:'12px', color:'#94a3b8'}}>Paused</span>
                </div>
            </div>

            <div class="subscription-card">
                <div class="subscription-header">
                    <div>
                        <h3 class="subscription-title">Enterprise AI Adoption</h3>
                        <div class="subscription-type">Trend Watch</div>
                    </div>
                    <div class="subscription-menu">⋯</div>
                </div>
                <p class="subscription-description">Track enterprise AI implementation trends, case studies, ROI reports, and adoption challenges across industries.</p>
                <div class="subscription-stats">
                    <div class="stat">
                        <div class="stat-value">203</div>
                        <div class="stat-label">Articles</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">31</div>
                        <div class="stat-label">Alerts</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">81%</div>
                        <div class="stat-label">Relevance</div>
                    </div>
                </div>
                <div class="subscription-keywords">
                    <span class="keyword-tag">Enterprise AI</span>
                    <span class="keyword-tag">Digital Transformation</span>
                    <span class="keyword-tag">ROI</span>
                    <span class="keyword-tag">Implementation</span>
                </div>
                <div class="subscription-controls">
                    <div class="toggle-switch active"></div>
                    <span style={{fontSize:'12px', color:'#64748b'}}>Active</span>
                </div>
            </div>

            <div class="subscription-card">
                <div class="subscription-header">
                    <div>
                        <h3 class="subscription-title">Quantum Computing</h3>
                        <div class="subscription-type">Technology Watch</div>
                    </div>
                    <div class="subscription-menu">⋯</div>
                </div>
                <p class="subscription-description">Monitor quantum computing breakthroughs, commercial applications, and competitive developments from IBM, Google, and startups.</p>
                <div class="subscription-stats">
                    <div class="stat">
                        <div class="stat-value">34</div>
                        <div class="stat-label">Articles</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">5</div>
                        <div class="stat-label">Alerts</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">73%</div>
                        <div class="stat-label">Relevance</div>
                    </div>
                </div>
                <div class="subscription-keywords">
                    <span class="keyword-tag">Quantum Computing</span>
                    <span class="keyword-tag">IBM</span>
                    <span class="keyword-tag">Google Quantum</span>
                    <span class="keyword-tag">Qubits</span>
                </div>
                <div class="subscription-controls">
                    <div class="toggle-switch active"></div>
                    <span style={{fontSize:'12px', color:'#64748b'}}>Active</span>
                </div>
            </div>

            <div class="subscription-card">
                <div class="subscription-header">
                    <div>
                        <h3 class="subscription-title">Cybersecurity Threats</h3>
                        <div class="subscription-type">Security Watch</div>
                    </div>
                    <div class="subscription-menu">⋯</div>
                </div>
                <p class="subscription-description">Critical security alerts, breach reports, vulnerability disclosures, and defense technology developments.</p>
                <div class="subscription-stats">
                    <div class="stat">
                        <div class="stat-value">156</div>
                        <div class="stat-label">Articles</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">24</div>
                        <div class="stat-label">Alerts</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">88%</div>
                        <div class="stat-label">Relevance</div>
                    </div>
                </div>
                <div class="subscription-keywords">
                    <span class="keyword-tag">Cybersecurity</span>
                    <span class="keyword-tag">Data Breaches</span>
                    <span class="keyword-tag">Vulnerabilities</span>
                    <span class="keyword-tag">Zero-day</span>
                </div>
                <div class="subscription-controls">
                    <div class="toggle-switch active"></div>
                    <span style={{fontSize:'12px', color:'#64748b'}}>Active</span>
                </div>
            </div>
        </div>

        <div class="alerts-section">
            <h2 class="section-title">Recent Alerts</h2>
            <div class="alerts-list">
                <div class="alert-item">
                    <div class="alert-icon alert-high">🚨</div>
                    <div class="alert-content">
                        <div class="alert-title">Major AI Partnership Announced</div>
                        <div class="alert-description">Microsoft and OpenAI expand partnership with $10B investment commitment</div>
                    </div>
                    <div class="alert-time">2 hours ago</div>
                </div>
                <div class="alert-item">
                    <div class="alert-icon alert-medium">⚠️</div>
                    <div class="alert-content">
                        <div class="alert-title">Samsung Q1 Earnings Beat</div>
                        <div class="alert-description">Semiconductor division reports 40% profit increase driven by AI chip demand</div>
                    </div>
                    <div class="alert-time">6 hours ago</div>
                </div>
                <div class="alert-item">
                    <div class="alert-icon alert-info">💡</div>
                    <div class="alert-content">
                        <div class="alert-title">New Quantum Breakthrough</div>
                        <div class="alert-description">IBM announces 1000-qubit quantum processor milestone</div>
                    </div>
                    <div class="alert-time">1 day ago</div>
                </div>
                <div class="alert-item">
                    <div class="alert-icon alert-high">🚨</div>
                    <div class="alert-content">
                        <div class="alert-title">Critical Security Vulnerability</div>
                        <div class="alert-description">Zero-day exploit discovered in major cloud platform</div>
                    </div>
                    <div class="alert-time">2 days ago</div>
                </div>
            </div>
        </div>

        <div class="modal-overlay" id="modal" style={sample}>
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Add New Subscription</h3>
                </div>
                <form>
                    <div class="form-group">
                        <label class="form-label">Subscription Name</label>
                        <input type="text" class="form-input" placeholder="e.g., Tesla Autonomous Vehicle Updates"/>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Type</label>
                        <select class="form-input">
                            <option>Company Watch</option>
                            <option>Technology Watch</option>
                            <option>Sector Watch</option>
                            <option>Trend Watch</option>
                            <option>Security Watch</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Keywords (comma-separated)</label>
                        <input type="text" class="form-input" placeholder="e.g., Tesla, autonomous, self-driving, FSD"/>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea class="form-textarea" placeholder="Describe what this subscription should track..."></textarea>
                    </div>
                </form>
                <div class="modal-actions">
                    <button class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button class="btn-primary">Create Subscription</button>
                </div>
            </div>
        </div>
      </>
    );
}
export default Subscription;
  