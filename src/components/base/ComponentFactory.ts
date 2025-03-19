/**
 * Component Factory Pattern
 * 
 * Factory for creating component instances with consistent configuration.
 */

import { BaseComponent, BaseComponentProps } from './BaseComponent';

export type ComponentType = 'button' | 'input' | 'select' | 'modal' | 'card';

export interface ComponentConfig {
  type: ComponentType;
  props: BaseComponentProps;
  theme?: string;
}

export class ComponentFactory {
  private static registry = new Map<ComponentType, any>();

  /**
   * Register a component type
   */
  static register(type: ComponentType, component: any): void {
    this.registry.set(type, component);
  }

  /**
   * Create a component instance
   */
  static create(config: ComponentConfig): BaseComponent {
    const Component = this.registry.get(config.type);
    
    if (!Component) {
      throw new Error(`Component type "${config.type}" not registered`);
    }

    return new Component(config.props);
  }

  /**
   * Check if component type is registered
   */
  static has(type: ComponentType): boolean {
    return this.registry.has(type);
  }
}
