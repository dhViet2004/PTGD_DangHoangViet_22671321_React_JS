import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Overview from './components/Overview';
import Dashboard from './pages/Dashboard';
import { DataProvider } from './components/DataContext'; // Import DataProvider
import Project from './pages/Project';
import Analytics from './pages/Analytics';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="min-h-screen flex flex-col md:grid md:grid-cols-5 md:grid-rows-[auto_1fr] gap-1">
          <div className="md:row-span-2 md:min-h-screen bg-white shadow-md">
            <div className="hidden md:block p-4">
              <Menu />
            </div>
            <div className="md:hidden">
              
            </div>
          </div>
          <div className="flex-1 md:col-span-4 flex flex-col">
            <main className="flex-1 p-4 overflow-auto">
              <div className="min-h-[calc(100vh-12rem)]">
                <Routes>
                  <Route path="/" element={<Dashboard />}>
                    <Route index element={<Overview />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="turnover" element={<Overview />} />
                    <Route path="profit" element={<Overview />} />
                    <Route path="customers" element={<Overview />} />
                  </Route>
                  <Route path='/Project' element={<Project/>}/>
                  <Route path='/Team' element={<Team/>}/>
                  <Route path='/Analytics' element={<Analytics/>}/>
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;