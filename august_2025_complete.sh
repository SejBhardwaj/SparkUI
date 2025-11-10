#!/bin/bash

# August 2025 Complete Commit Script
# Executes all 11 working days with 60 commits
# Time range: 12:00 AM - 1:59 AM

echo "=========================================="
echo "AUGUST 2025 COMMIT SCRIPT"
echo "=========================================="
echo "Total commits: 60"
echo "Working days: 11"
echo "Skip days: 20"
echo "Time range: 12:00 AM - 1:59 AM"
echo "=========================================="
echo ""

# Make all scripts executable
chmod +x august_2025_days_1_3.sh
chmod +x august_2025_days_4_6.sh
chmod +x august_2025_days_7_9.sh
chmod +x august_2025_days_10_11.sh

# Execute Days 1-3 (18 commits)
echo "Executing Days 1-3..."
./august_2025_days_1_3.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 1-3 script"
    exit 1
fi
echo ""

# Execute Days 4-6 (15 commits)
echo "Executing Days 4-6..."
./august_2025_days_4_6.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 4-6 script"
    exit 1
fi
echo ""

# Execute Days 7-9 (18 commits)
echo "Executing Days 7-9..."
./august_2025_days_7_9.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 7-9 script"
    exit 1
fi
echo ""

# Execute Days 10-11 (9 commits)
echo "Executing Days 10-11..."
./august_2025_days_10_11.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 10-11 script"
    exit 1
fi
echo ""

echo "=========================================="
echo "ALL AUGUST 2025 COMMITS COMPLETE!"
echo "=========================================="
echo "Summary:"
echo "- Days 1-3: 18 commits"
echo "- Days 4-6: 15 commits"
echo "- Days 7-9: 18 commits"
echo "- Days 10-11: 9 commits"
echo "- Total: 60 commits"
echo "=========================================="
echo ""
echo "Ready to push to GitHub:"
echo "git push origin main"
echo "=========================================="
