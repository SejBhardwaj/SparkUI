#!/bin/bash

# October 2025 Complete Commit Script
# Executes all October 2025 commits in sequence

echo "=========================================="
echo "October 2025 Complete Commit Script"
echo "Phase 5 Month 1: Modal & Overlay Components"
echo "=========================================="
echo ""
echo "Total Working Days: 12"
echo "Total Commits: 80"
echo "Date Range: October 1-31, 2025"
echo ""
echo "=========================================="
echo ""

# Make scripts executable
chmod +x october_2025_days_1_3.sh
chmod +x october_2025_days_4_6.sh
chmod +x october_2025_days_7_9.sh
chmod +x october_2025_days_10_12.sh

# Execute each script
echo "Executing Days 1-3 script..."
./october_2025_days_1_3.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 1-3 script"
    exit 1
fi
echo ""

echo "Executing Days 4-6 script..."
./october_2025_days_4_6.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 4-6 script"
    exit 1
fi
echo ""

echo "Executing Days 7-9 script..."
./october_2025_days_7_9.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 7-9 script"
    exit 1
fi
echo ""

echo "Executing Days 10-12 script..."
./october_2025_days_10_12.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 10-12 script"
    exit 1
fi
echo ""

echo "=========================================="
echo "ALL OCTOBER 2025 COMMITS COMPLETED!"
echo "=========================================="
echo ""
echo "Summary:"
echo "- Days 1-3: 21 commits"
echo "- Days 4-6: 20 commits"
echo "- Days 7-9: 21 commits"
echo "- Days 10-12: 27 commits"
echo "- Total: 80 commits"
echo ""
echo "Next step: Push to GitHub"
echo "Run: git push origin main"
echo ""
