import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-5 md:grid-rows-[auto_1fr] gap-1 text-center">
      <div className="bg-amber-400 p-4 md:row-span-2 md:min-h-screen">
        <div className="hidden md:block">Desktop Nav</div>
        <div className="md:hidden">Mobile Nav </div>

        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </div>
      <div className="flex-1 md:col-span-4 flex flex-col gap-1">
        <div className="border bg-amber-200 p-4 h-20 md:h-auto">
          Dashboard Header
        </div>
        <div className="border bg-amber-200 p-4 flex-1 overflow-auto">
          <div className="min-h-[calc(100vh-12rem)]">
            Main Content Area
            <div className="h-[200vh]">Scrollable Content</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App