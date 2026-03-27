#!/bin/bash

# December 2025 Complete Execution Script
# Executes all December 2025 commits

echo "========================================="
echo "December 2025 Commit Execution"
echo "Phase 5: Data Visualization Components"
echo "Total: 23 commits across 9 working days"
echo "========================================="
echo ""

# Make scripts executable
chmod +x december_2025_days_1_5.sh
chmod +x december_2025_days_6_9.sh

# Execute Days 1-5
echo "Executing Days 1-5..."
./december_2025_days_1_5.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 1-5 script"
    exit 1
fi

echo ""
echo "Days 1-5 complete!"
echo ""

# Execute Days 6-9
echo "Executing Days 6-9..."
./december_2025_days_6_9.sh
if [ $? -ne 0 ]; then
    echo "Error in Days 6-9 script"
    exit 1
fi

echo ""
echo "========================================="
echo "December 2025 Execution Complete!"
echo "========================================="
echo ""
echo "Summary:"
echo "- Total commits: 23"
echo "- Working days: 9"
echo "- Components created: 15+ chart types"
echo ""
echo "Next steps:"
echo "1. Review commits: git log --oneline --since='2025-12-01' --until='2025-12-31'"
echo "2. Push to GitHub: git push origin main"
echo ""
