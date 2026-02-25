import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { categories, Category, Unit } from './data/units';
import { ArrowDownUp, Sparkles } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [fromUnit, setFromUnit] = useState<Unit>(categories[0].units[1]); // Meter
  const [toUnit, setToUnit] = useState<Unit>(categories[0].units[2]); // Centimeter
  const [inputValue, setInputValue] = useState<string>('1');

  // Reset units when category changes
  useEffect(() => {
    setFromUnit(activeCategory.units[1] || activeCategory.units[0]);
    setToUnit(activeCategory.units[2] || activeCategory.units[1] || activeCategory.units[0]);
  }, [activeCategory]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const result = useMemo(() => {
    const numValue = parseFloat(inputValue);
    if (isNaN(numValue)) return 0;
    
    const fromOffset = fromUnit.offset || 0;
    const toOffset = toUnit.offset || 0;
    
    // Convert to base unit first, then to target unit
    const baseValue = (numValue + fromOffset) * fromUnit.rate;
    const finalValue = (baseValue / toUnit.rate) - toOffset;
    
    // Format nicely
    return parseFloat(finalValue.toFixed(4));
  }, [inputValue, fromUnit, toUnit]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white max-w-md w-full rounded-[2rem] p-6 shadow-[0_10px_0px_#80b5e3,0_15px_20px_rgba(0,0,0,0.2)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"></div>
        
        <h1 className="text-4xl font-bold text-center text-pink-500 mt-4 mb-6 flex items-center justify-center gap-2">
          <Sparkles className="text-yellow-400" fill="currentColor" />
          Magic Converter
          <Sparkles className="text-yellow-400" fill="currentColor" />
        </h1>

        {/* Categories */}
        <div className="flex justify-around flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, y: 4, boxShadow: "0 0px 0 rgba(0,0,0,0)" }}
              onClick={() => setActiveCategory(cat)}
              className={`text-4xl p-4 rounded-2xl transition-colors shadow-[0_6px_0_rgba(0,0,0,0.2)] ${
                activeCategory.id === cat.id 
                  ? `${cat.color} ${cat.shadowColor} text-white` 
                  : 'bg-gray-100 shadow-gray-300 hover:bg-gray-200 text-gray-400'
              }`}
            >
              {cat.icon}
            </motion.button>
          ))}
        </div>

        {/* From Box */}
        <div className="bg-blue-50 border-4 border-dashed border-blue-400 rounded-3xl p-5 mb-4 relative">
          <label className="block text-xl font-bold text-blue-500 mb-3">I have...</label>
          <div className="flex gap-3">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-1/3 text-3xl font-bold text-center rounded-2xl border-4 border-blue-200 focus:border-yellow-400 focus:outline-none py-2 text-blue-900"
            />
            <select
              value={fromUnit.id}
              onChange={(e) => setFromUnit(activeCategory.units.find(u => u.id === e.target.value) || activeCategory.units[0])}
              className="w-2/3 text-xl font-bold rounded-2xl border-4 border-blue-200 focus:border-yellow-400 focus:outline-none px-3 py-2 bg-white appearance-none cursor-pointer text-blue-900"
            >
              {activeCategory.units.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
          <div className="mt-3 text-blue-600 font-medium flex items-center gap-2">
             <span className="text-2xl">{fromUnit.emoji}</span> {fromUnit.example}
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-8 relative z-10">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSwap}
            className="bg-yellow-400 text-yellow-900 p-4 rounded-full shadow-[0_6px_0_#b48600] border-4 border-white"
          >
            <ArrowDownUp size={28} strokeWidth={3} />
          </motion.button>
        </div>

        {/* To Box */}
        <div className="bg-green-50 border-4 border-dashed border-green-400 rounded-3xl p-5 mt-4">
          <label className="block text-xl font-bold text-green-500 mb-3">And I want to know...</label>
          <select
            value={toUnit.id}
            onChange={(e) => setToUnit(activeCategory.units.find(u => u.id === e.target.value) || activeCategory.units[0])}
            className="w-full text-xl font-bold rounded-2xl border-4 border-green-200 focus:border-yellow-400 focus:outline-none px-3 py-3 bg-white appearance-none cursor-pointer mb-4 text-green-900"
          >
            {activeCategory.units.map(u => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
          
          <div className="bg-white rounded-2xl py-4 px-2 text-center border-4 border-green-200 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={result + toUnit.id}
                initial={{ scale: 0.5, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0, y: -20 }}
                className="text-5xl font-bold text-purple-600 break-words"
              >
                {result}
              </motion.div>
            </AnimatePresence>
            <div className="text-green-600 font-bold text-lg mt-2">{toUnit.name}s</div>
          </div>
          <div className="mt-3 text-green-600 font-medium flex items-center gap-2 justify-center">
             <span className="text-2xl">{toUnit.emoji}</span> {toUnit.example}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
