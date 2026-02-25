import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Unit } from '../data/units';
import { ChevronDown, Info } from 'lucide-react';

interface UnitSelectProps {
  value: Unit;
  onChange: (unit: Unit) => void;
  options: Unit[];
  colorTheme: 'blue' | 'green';
}

export function UnitSelect({ value, onChange, options, colorTheme }: UnitSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeColors = {
    blue: {
      border: 'border-blue-200',
      text: 'text-blue-900',
      bgHover: 'hover:bg-blue-50',
      icon: 'text-blue-400',
      focus: 'focus:border-yellow-400',
    },
    green: {
      border: 'border-green-200',
      text: 'text-green-900',
      bgHover: 'hover:bg-green-50',
      icon: 'text-green-400',
      focus: 'focus:border-yellow-400',
    }
  };

  const colors = themeColors[colorTheme];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between text-xl font-bold rounded-2xl border-4 ${colors.border} ${colors.focus} px-3 py-2 bg-white ${colors.text} transition-colors`}
      >
        <div className="flex items-center gap-2">
          <span>{value.emoji}</span>
          <span>{value.name}</span>
        </div>
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${colors.icon}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute z-50 w-full mt-2 bg-white border-4 ${colors.border} rounded-2xl shadow-xl overflow-hidden`}
          >
            <div className="max-h-60 overflow-y-auto">
              {options.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => {
                    onChange(unit);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 border-b-2 last:border-b-0 ${colors.border} ${colors.bgHover} transition-colors flex flex-col gap-1`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-lg text-gray-800">
                      <span>{unit.emoji}</span>
                      <span>{unit.name}</span>
                      <span className="text-gray-400 text-sm font-normal">({unit.symbol})</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 flex items-start gap-1">
                    <Info size={14} className="mt-0.5 flex-shrink-0 text-gray-400" />
                    <span>{unit.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
