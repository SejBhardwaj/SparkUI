export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
};

export const reportWebVitals = (metric: any) => {
  console.log(metric);
};

export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  
  mark(name: string) {
    const time = performance.now();
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(time);
  }
  
  measure(startMark: string, endMark: string) {
    const starts = this.metrics.get(startMark);
    const ends = this.metrics.get(endMark);
    if (starts && ends) {
      return ends[ends.length - 1] - starts[starts.length - 1];
    }
    return 0;
  }
}
