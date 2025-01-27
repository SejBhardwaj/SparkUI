/**
 * Bundle analyzer configuration
 * Helps identify large dependencies and optimize bundle size
 */

module.exports = {
  analyzerMode: 'static',
  reportFilename: 'bundle-report.html',
  openAnalyzer: false,
  generateStatsFile: true,
  statsFilename: 'bundle-stats.json',
  statsOptions: {
    source: false,
  },
  excludeAssets: /\.(map|txt|html)$/,
  logLevel: 'info',
};
