#!/bin/bash

# September 2025 Complete Commit Script
# Executes all 14 working days with 84 commits
# Time range: 12:00 AM - 1:59 AM

echo "=========================================="
echo "SEPTEMBER 2025 COMMIT SCRIPT"
echo "=========================================="
echo "Total commits: 84"
echo "Working days: 14"
echo "Skip days: 16"
echo "Time range: 12:00 AM - 1:59 AM"
echo "=========================================="
echo ""

# Make all scripts executable
chmod +x september_2025_days_1_3.sh
chmod +x september_2025_days_4_6.sh
chmod +x september_2025_days_7_9.sh
chmod +x september_2025_days_10_12.sh
chmod +x september_2025_days_13_14.sh

# Execute Days 1-3 (18 commits)
echo "Executing Days 1-3..."
./september_2025_days_1_3.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 1-3 script"
    exit 1
fi
echo ""

# Execute Days 4-6 (18 commits)
echo "Executing Days 4-6..."
./september_2025_days_4_6.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 4-6 script"
    exit 1
fi
echo ""

# Execute Days 7-9 (18 commits)
echo "Executing Days 7-9..."
./september_2025_days_7_9.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 7-9 script"
    exit 1
fi
echo ""

# Execute Days 10-12 (18 commits)
echo "Executing Days 10-12..."
./september_2025_days_10_12.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 10-12 script"
    exit 1
fi
echo ""

# Execute Days 13-14 (12 commits)
echo "Executing Days 13-14..."
./september_2025_days_13_14.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 13-14 script"
    exit 1
fi
echo ""

echo "=========================================="
echo "ALL SEPTEMBER 2025 COMMITS COMPLETE!"
echo "=========================================="
echo "Summary:"
echo "- Days 1-3: 18 commits"
echo "- Days 4-6: 18 commits"
echo "- Days 7-9: 18 commits"
echo "- Days 10-12: 18 commits"
echo "- Days 13-14: 12 commits"
echo "- Total: 84 commits"
echo "=========================================="
echo ""
echo "Ready to push to GitHub:"
echo "git push origin main"
echo "=========================================="
