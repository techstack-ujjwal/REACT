import './App.css'
import BasicProps from './comopents/BasicProps.jsx'
import RefProps from './comopents/refProps.jsx'
import ChildrenProps from './comopents/ChildrenProps.jsx'
import ThemeToggler from './comopents/ThemeToggler.jsx'
import ComplexProps from './comopents/ComplexProps.jsx'

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "❤️" },
    { id: "children", label: "children Props", icon: "💕" },
    { id: "complex", label: "complex Props", icon: "👍" },
    { id: "theme", label: "theme Props", icon: "😁" },
  ];



  return (
    <nav className="sticky top-0 z-50 shadow-md bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 px-4 py-3">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {sections.map((section) => (
            <button
             
              className="px-4 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-all duration-200 cursor-pointer flex items-center shadow"
              key={section.id}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContennt() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 text-gray-100">
        <Navigation />

        <div className="container mx-auto px-4 py-8">
          <header className="text-center my-8">
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
              React props Explained
            </h1>
            <p className="text-gray-300 text-lg">
              A comprehensive guide to understanding props in react
            </p>
          </header>

          <div className="space-y-8">
            <div id="basic">
              <BasicProps />
            </div>
            <div id="children">
              <ChildrenProps />
            </div>

            <div id="complex">
              <ComplexProps />
            </div>
            <div id="ref">
              <RefProps />
            </div>

            <div id="theme">
              <ThemeToggler />
            </div>
          </div>

          <footer className="text-center mt-12 py-6 border-t border-gray-700 text-gray-400 text-sm">
            <p>made by ujjwal bihari</p>
          </footer>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <AppContennt />
    </>
  );
}

export default App;
