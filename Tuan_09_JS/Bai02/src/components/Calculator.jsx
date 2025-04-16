import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, calculateResult } from '../store';

const Calculator = () => {
  const dispatch = useDispatch();
  const { formData, results } = useSelector((state) => state.calculator);

  const handleInputChange = (field, value) => {
    dispatch(updateInput({ field, value }));
  };

  const handleCalculate = () => {
    dispatch(calculateResult());
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>
      
      <div className="space-y-6">
        {/* BMI Calculator */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">BMI Calculator</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
              <input
                type="number"
                value={formData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          {results.bmi && (
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium">Your BMI: {results.bmi}</p>
            </div>
          )}
        </div>

        {/* Tax Calculator */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Tax Calculator</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Income ($)</label>
              <input
                type="number"
                value={formData.income}
                onChange={(e) => handleInputChange('income', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tax Rate (%)</label>
              <input
                type="number"
                value={formData.taxRate}
                onChange={(e) => handleInputChange('taxRate', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          {results.tax && (
            <div className="p-4 bg-gray-50 rounded">
              <p className="font-medium">Tax Amount: ${results.tax}</p>
            </div>
          )}
        </div>

        <button
          onClick={handleCalculate}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Calculator; 