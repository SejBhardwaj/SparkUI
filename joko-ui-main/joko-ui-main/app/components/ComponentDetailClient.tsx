'use client';

import { useState } from 'react';
import ComponentPreview from './ComponentPreview';
import Pagination from './Pagination';
import { ComponentVariant } from '@/lib/data/components/types';

interface ComponentDetailClientProps {
  variants: ComponentVariant[];
  itemsPerPage?: number;
}

export default function ComponentDetailClient({ 
  variants, 
  itemsPerPage = 6 
}: ComponentDetailClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(variants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVariants = variants.slice(startIndex, endIndex);

  return (
    <>
      {/* Component Variants */}
      <div className="space-y-12">
        {currentVariants.map((variant, index) => (
          <div key={variant.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                {startIndex + index + 1}
              </span>
              <h2 className="text-xl font-semibold text-foreground">
                {variant.name}
              </h2>
            </div>

            {/* Preview */}
            <ComponentPreview title={variant.name} code={variant.code}>
              <div dangerouslySetInnerHTML={{ __html: variant.code }} />
            </ComponentPreview>

            <div className="flex items-center -mt-2">
              <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
                contributed by&nbsp;
                <a
                  href={`https://github.com/${variant.contributor ?? ""}`}
                  target="_blank"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary hover:underline font-semibold transition-colors"
                >
                  {variant.contributor ?? "unknown"}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Page Info */}
      {totalPages > 1 && (
        <div className="text-center text-sm text-muted-foreground mt-4">
          Showing {startIndex + 1}-{Math.min(endIndex, variants.length)} of {variants.length} components
        </div>
      )}
    </>
  );
}