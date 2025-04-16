import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from './store/reduxStore';
import toolkitStore from './store/toolkitStore';
import UseReducerCalculator from './pages/UseReducerCalculator';
import ReduxCalculator from './pages/ReduxCalculator';
import ToolkitCalculator from './pages/ToolkitCalculator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center space-x-8 py-4">
              <Link
                to="/use-reducer"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                useReducer
              </Link>
              <Link
                to="/redux"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Redux
              </Link>
              <Link
                to="/redux-toolkit"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Redux Toolkit
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/use-reducer" element={<UseReducerCalculator />} />
          <Route
            path="/redux"
            element={
              <Provider store={reduxStore}>
                <ReduxCalculator />
              </Provider>
            }
          />
          <Route
            path="/redux-toolkit"
            element={
              <Provider store={toolkitStore}>
                <ToolkitCalculator />
              </Provider>
            }
          />
          <Route path="/" element={<UseReducerCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
