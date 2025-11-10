#!/usr/bin/env python3
"""
Scan folders to find actual files for August commits
"""
import os
import glob

folders = [
    "tailadmin-free-tailwind-dashboard-template-main",
    "hyperui-main",
    "bootstrap-ui-components-main",
    "joko-ui-main",
    "dev.ui-main",
    "html.tailus.io-main",
    "shadcraft-free-main",
    "matdash-react-tailwind-free-main",
    "preblocks-main",
    "forklifter-master",
    "s-shadcn-ui-angular-master",
    "jolyui-main",
    "NamelessUI-master",
    "material-kit-react-main",
    "heroui-canary"
]

print("Scanning for files...")
print("=" * 60)

for folder in folders:
    if os.path.exists(folder):
        # Find HTML files
        html_files = glob.glob(f"{folder}/**/*.html", recursive=True)
        # Find TSX/JSX files
        tsx_files = glob.glob(f"{folder}/**/*.tsx", recursive=True)
        jsx_files = glob.glob(f"{folder}/**/*.jsx", recursive=True)
        
        total = len(html_files) + len(tsx_files) + len(jsx_files)
        
        if total > 0:
            print(f"\n{folder}:")
            print(f"  HTML: {len(html_files)}")
            print(f"  TSX: {len(tsx_files)}")
            print(f"  JSX: {len(jsx_files)}")
            print(f"  Total: {total}")
            
            # Show first 5 files as examples
            all_files = html_files[:3] + tsx_files[:2]
            if all_files:
                print("  Examples:")
                for f in all_files[:5]:
                    print(f"    - {f}")

print("\n" + "=" * 60)
print("Scan complete!")
