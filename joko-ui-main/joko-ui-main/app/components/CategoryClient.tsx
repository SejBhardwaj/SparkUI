'use client';

import { useState } from 'react';
import ComponentCard from './ComponentCard';
import Pagination from './Pagination';
import { ComponentType } from '@/lib/data/components/types';

interface CategoryClientProps {
  components: ComponentType[];
  category: string;
  itemsPerPage?: number;
}

export default function CategoryClient({ 
  components, 
  category, 
  itemsPerPage = 9 
}: CategoryClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(components.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentComponents = components.slice(startIndex, endIndex);

  return (
    <>
      {/* Components Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentComponents.map((component) => (
          <ComponentCard
            key={component.slug}
            title={component.name}
            count={component.variants.length}
            icon={component.icon}
            href={`/components/${category}/${component.slug}`}
            description={component.description}
          />
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
          Showing {startIndex + 1}-{Math.min(endIndex, components.length)} of {components.length} components
        </div>
      )}
    </>
  );
}