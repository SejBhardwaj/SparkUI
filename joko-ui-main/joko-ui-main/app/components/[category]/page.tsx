import Link from "next/link";
import { notFound } from "next/navigation";
import { getComponentsByCategory } from "@/lib/data/components";
import CategoryClient from "@/app/components/CategoryClient";
import { IconLayoutGrid, IconChartLine } from "@tabler/icons-react";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: "application" },
    { category: "marketing" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;

  if (category !== "application" && category !== "marketing") {
    return { title: "Category Not Found - Joko UI" };
  }

  const title = category === "application" ? "Application Components" : "Marketing Components";
  const description = category === "application"
    ? "UI components for building modern web applications with Tailwind CSS"
    : "Marketing and landing page components with Tailwind CSS";

  return {
    title: `${title} - Joko UI`,
    description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (category !== "application" && category !== "marketing") {
    notFound();
  }

  const components = getComponentsByCategory(category);
  const title = category === "application" ? "Application Components" : "Marketing Components";
  const description = category === "application"
    ? "UI components for building modern web applications. From buttons to forms, these components are designed to be functional and beautiful."
    : "Components for marketing websites and landing pages. Hero sections, CTAs, footers, and more to help you convert visitors.";
  const Icon = category === "application" ? IconLayoutGrid : IconChartLine;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground transition-colors" prefetch={false}>
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground capitalize">{category}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          <Icon stroke={1.5} className="mr-2 inline-block" /> {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      </div>

      {/* Components with Pagination */}
      <CategoryClient 
        components={components} 
        category={category}
        itemsPerPage={9}
      />
    </div>
  );
}
