import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

export default function Report() {
  return (
      <>
        <div class="page-header">
            <div>
                <h1 class="page-title">Intelligence Reports</h1>
                <p class="page-subtitle">AI-generated analysis and trend reports</p>
            </div>
            <button class="generate-btn">
                ⚡ Generate Report
            </button>
        </div>

        <div class="quick-insights">
            <div class="insight-card">
                <div class="insight-value">127</div>
                <div class="insight-label">Articles Today</div>
                <div class="insight-change change-positive">+15% from yesterday</div>
            </div>
            <div class="insight-card">
                <div class="insight-value">18</div>
                <div class="insight-label">Critical Alerts</div>
                <div class="insight-change change-positive">+3 from yesterday</div>
            </div>
            <div class="insight-card">
                <div class="insight-value">85%</div>
                <div class="insight-label">Avg Relevance</div>
                <div class="insight-change change-positive">+2% this week</div>
            </div>
            <div class="insight-card">
                <div class="insight-value">42</div>
                <div class="insight-label">Companies Tracked</div>
            </div>
        </div>
      </>
  );
}