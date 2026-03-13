import Counter from './components/Counter';
import './App.css';

/**
 * App Component
 * 
 * Root component that renders the Counter component.
 * This is the main application component.
 */
export default function App() {
  return (
    <div className="app">
      {/* Import and render the Counter component */}
      <Counter />
    </div>
  );
}
