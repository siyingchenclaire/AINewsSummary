import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Card() {
    return (
      <>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '32px'
        }}>
            <Box sx={{textAlign: 'left'}}>
                <Typography variant="h5" gutterBottom sx={{fontWeight: 500}}>Intelligence Cards</Typography>
                <Typography variant="subtitle1" gutterBottom color="textSecondary">AI-generated strategic insights from today's tech news</Typography>
            </Box>
        </Box>

        <div class="filters-bar">
            <select class="filter-dropdown">
                <option>All Impact Levels</option>
                <option>Critical</option>
                <option>Moderate</option>
                <option>Low</option>
            </select>
            <select class="filter-dropdown">
                <option>All Sources</option>
                <option>TechCrunch</option>
                <option>The Verge</option>
                <option>Bloomberg</option>
            </select>
            <select class="filter-dropdown">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
            </select>
            <div class="results-count">24 cards found</div>
        </div>

        <div class="cards-grid">
            <div class="intelligence-card">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">Amazon's Echo Show 10 Signals Ambient AI Strategy Shift</h3>
                        <div class="card-source">TechCrunch • 2 hours ago</div>
                    </div>
                    <div class="impact-badge impact-critical">Critical</div>
                </div>
                <div class="card-body">
                    <p class="card-summary">Amazon's latest Echo devices emphasize ambient intelligence over voice commands, potentially reshaping the smart home market and challenging Google's Nest ecosystem.</p>
                    <div class="card-tags">
                        <span class="tag">Smart Home</span>
                        <span class="tag">Amazon</span>
                        <span class="tag">AI Strategy</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span>Strategic Impact: Market positioning shift</span>
                    <button class="bookmark-btn">🔖</button>
                </div>
            </div>

            <div class="intelligence-card">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">OpenAI Content Licensing Expands Media Partnerships</h3>
                        <div class="card-source">The Verge • 4 hours ago</div>
                    </div>
                    <div class="impact-badge impact-moderate">Moderate</div>
                </div>
                <div class="card-body">
                    <p class="card-summary">New licensing agreements with major media companies suggest OpenAI is building a sustainable content acquisition strategy, potentially reducing training data risks.</p>
                    <div class="card-tags">
                        <span class="tag">OpenAI</span>
                        <span class="tag">Content Licensing</span>
                        <span class="tag">Media</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span>Strategic Impact: Risk mitigation</span>
                    <button class="bookmark-btn bookmarked">🔖</button>
                </div>
            </div>

            <div class="intelligence-card">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">Samsung Q1 2024: AI Chip Demand Drives Record Profits</h3>
                        <div class="card-source">Bloomberg • 6 hours ago</div>
                    </div>
                    <div class="impact-badge impact-critical">Critical</div>
                </div>
                <div class="card-body">
                    <p class="card-summary">Samsung's semiconductor division reports 40% profit increase driven by AI chip demand, indicating sustained growth in AI infrastructure spending.</p>
                    <div class="card-tags">
                        <span class="tag">Samsung</span>
                        <span class="tag">Semiconductors</span>
                        <span class="tag">AI Infrastructure</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span>Strategic Impact: Market opportunity</span>
                    <button class="bookmark-btn">🔖</button>
                </div>
            </div>

            <div class="intelligence-card">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">Microsoft Copilot Enterprise Adoption Accelerates</h3>
                        <div class="card-source">WSJ Tech • 8 hours ago</div>
                    </div>
                    <div class="impact-badge impact-moderate">Moderate</div>
                </div>
                <div class="card-body">
                    <p class="card-summary">Enterprise customers are rapidly adopting Microsoft Copilot, with 65% of Fortune 500 companies now in pilot or full deployment phases.</p>
                    <div class="card-tags">
                        <span class="tag">Microsoft</span>
                        <span class="tag">Enterprise AI</span>
                        <span class="tag">Productivity</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span>Strategic Impact: Competitive advantage</span>
                    <button class="bookmark-btn">🔖</button>
                </div>
            </div>

            <div class="intelligence-card">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">Tesla FSD Beta Expands to European Markets</h3>
                        <div class="card-source">Automotive News • 1 day ago</div>
                    </div>
                    <div class="impact-badge impact-low">Low</div>
                </div>
                <div class="card-body">
                    <p class="card-summary">Tesla's Full Self-Driving beta launches in select European cities, marking a significant regulatory milestone for autonomous vehicle deployment.</p>
                    <div class="card-tags">
                        <span class="tag">Tesla</span>
                        <span class="tag">Autonomous Vehicles</span>
                        <span class="tag">Regulation</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span>Strategic Impact: Regulatory progress</span>
                    <button class="bookmark-btn">🔖</button>
                </div>
            </div>

            <div class="intelligence-card">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">Apple Vision Pro Sales Fall Short of Expectations</h3>
                        <div class="card-source">MacRumors • 1 day ago</div>
                    </div>
                    <div class="impact-badge impact-moderate">Moderate</div>
                </div>
                <div class="card-body">
                    <p class="card-summary">Apple Vision Pro sales figures suggest slower consumer adoption than anticipated, potentially impacting the broader XR market momentum.</p>
                    <div class="card-tags">
                        <span class="tag">Apple</span>
                        <span class="tag">XR/VR</span>
                        <span class="tag">Consumer Hardware</span>
                    </div>
                </div>
                <div class="card-footer">
                    <span>Strategic Impact: Market timing</span>
                    <button class="bookmark-btn bookmarked">🔖</button>
                </div>
            </div>
        </div>
      </>
    );
}
export default Card;
  