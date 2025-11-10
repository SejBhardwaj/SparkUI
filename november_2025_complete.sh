#!/bin/bash

# November 2025 Complete Commit Script
# Executes all November 2025 commits in sequence

echo "=========================================="
echo "November 2025 Complete Commit Script"
echo "Phase 5 Month 2: Advanced Interactive Components"
echo "=========================================="
echo ""
echo "Total Working Days: 11"
echo "Total Commits: 46"
echo "Date Range: November 3-27, 2025"
echo ""
echo "=========================================="
echo ""

# Make scripts executable
chmod +x november_2025_days_1_3.sh
chmod +x november_2025_days_4_6.sh
chmod +x november_2025_days_7_9.sh
chmod +x november_2025_days_10_11.sh

# Execute each script
echo "Executing Days 1-3 script..."
./november_2025_days_1_3.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 1-3 script"
    exit 1
fi
echo ""

echo "Executing Days 4-6 script..."
./november_2025_days_4_6.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 4-6 script"
    exit 1
fi
echo ""

echo "Executing Days 7-9 script..."
./november_2025_days_7_9.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 7-9 script"
    exit 1
fi
echo ""

echo "Executing Days 10-11 script..."
./november_2025_days_10_11.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 10-11 script"
    exit 1
fi
echo ""

echo "=========================================="
echo "ALL NOVEMBER 2025 COMMITS COMPLETED!"
echo "=========================================="
echo ""
echo "Summary:"
echo "- Days 1-3: 13 commits"
echo "- Days 4-6: 13 commits"
echo "- Days 7-9: 13 commits"
echo "- Days 10-11: 8 commits"
echo "- Total: 46 commits"
echo ""
echo "Next step: Push to GitHub"
echo "Run: git push origin main"
echo ""
