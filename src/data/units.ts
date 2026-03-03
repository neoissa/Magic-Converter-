export type Unit = {
  id: string;
  name: string;
  symbol: string;
  rate: number;
  offset?: number;
  example: string;
  emoji: string;
  description: string;
  minGrade?: number; // Optional tag, defaults to 3 if omitted by the filter
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
  shadowColor: string;
  minGrade?: number; // Optional tag, category unlocks at this grade level
  units: Unit[];
};

export const categories: Category[] = [
  // --- GRADE 3+ CATEGORIES ---
  {
    id: 'length',
    name: 'Length',
    icon: '📏',
    color: 'bg-yellow-400',
    shadowColor: 'shadow-yellow-600',
    units: [
      { id: 'meter', name: 'Meter', symbol: 'm', rate: 1, example: 'A giant step!', emoji: '🚶', description: 'The base unit of length in the metric system.' },
      { id: 'centimeter', name: 'Centimeter', symbol: 'cm', rate: 0.01, example: 'Width of a finger!', emoji: '👆', description: 'Great for measuring small things like books or pencils.' },
      { id: 'kilometer', name: 'Kilometer', symbol: 'km', rate: 1000, example: 'A long walk!', emoji: '🚶‍♂️', description: 'Used for measuring long distances.' },
      { id: 'millimeter', name: 'Millimeter', symbol: 'mm', rate: 0.001, example: 'Thickness of an ID card!', emoji: '💳', description: 'Used for very tiny measurements.' },
      // Grade 6 unlocks Imperial
      { id: 'inch', name: 'Inch', symbol: 'in', rate: 0.0254, example: 'Length of a paperclip!', emoji: '📎', description: 'Used in the US for small measurements.', minGrade: 6 },
      { id: 'foot', name: 'Foot', symbol: 'ft', rate: 0.3048, example: 'Length of a ruler!', emoji: '📐', description: 'Based on the average length of a human foot.', minGrade: 6 },
      { id: 'yard', name: 'Yard', symbol: 'yd', rate: 0.9144, example: 'A big step!', emoji: '👣', description: 'Often used in sports like American football.', minGrade: 6 },
      { id: 'mile', name: 'Mile', symbol: 'mi', rate: 1609.34, example: 'A very long drive!', emoji: '🚗', description: 'Commonly used in the US for measuring road distances.', minGrade: 6 },
    ]
  },
  {
    id: 'mass',
    name: 'Mass',
    icon: '⚖️',
    color: 'bg-green-400',
    shadowColor: 'shadow-green-600',
    units: [
      { id: 'gram', name: 'Gram', symbol: 'g', rate: 1, example: 'A paperclip!', emoji: '📎', description: 'Used for measuring light things, like ingredients for baking.' },
      { id: 'kilogram', name: 'Kilogram', symbol: 'kg', rate: 1000, example: 'A thick book!', emoji: '📘', description: 'The base unit of mass in the metric system.' },
      { id: 'milligram', name: 'Milligram', symbol: 'mg', rate: 0.001, example: 'A grain of sand!', emoji: '🏖️', description: 'Used for very tiny things, like medicine.' },
      // Grade 6 unlocks Imperial and heavy units
      { id: 'metric_ton', name: 'Metric Ton', symbol: 't', rate: 1000000, example: 'A small car!', emoji: '🚗', description: 'Used for extremely heavy things.', minGrade: 6 },
      { id: 'ounce', name: 'Ounce', symbol: 'oz', rate: 28.3495, example: 'A slice of bread!', emoji: '🥪', description: 'Used for measuring very light items in the US.', minGrade: 6 },
      { id: 'pound', name: 'Pound', symbol: 'lb', rate: 453.592, example: 'A loaf of bread!', emoji: '🍞', description: 'Commonly used to measure body weight in the US.', minGrade: 6 },
      { id: 'ton', name: 'Ton', symbol: 'ton', rate: 907184.74, example: 'A heavy truck!', emoji: '🚙', description: 'A US unit for very heavy objects.', minGrade: 6 },
    ]
  },
  {
    id: 'volume',
    name: 'Liquid',
    icon: '🥛',
    color: 'bg-blue-400',
    shadowColor: 'shadow-blue-600',
    units: [
      { id: 'liter', name: 'Liter', symbol: 'L', rate: 1, example: 'A large water bottle!', emoji: '🍼', description: 'The base unit for measuring liquids in the metric system.' },
      { id: 'milliliter', name: 'Milliliter', symbol: 'mL', rate: 0.001, example: 'A few drops!', emoji: '💧', description: 'Used for small amounts of liquid, like medicine.' },
      // Grade 6 unlocks Imperial volume
      { id: 'fluid_ounce', name: 'Fluid Ounce', symbol: 'fl oz', rate: 0.0295735, example: 'A spoonful of medicine!', emoji: '🥄', description: 'A small unit of volume used in the US.', minGrade: 6 },
      { id: 'cup', name: 'Cup', symbol: 'c', rate: 0.236588, example: 'A cup of tea!', emoji: '☕', description: 'Commonly used in cooking recipes.', minGrade: 6 },
      { id: 'pint', name: 'Pint', symbol: 'pt', rate: 0.473176, example: 'A small bottle of water!', emoji: '🥤', description: 'Half of a quart.', minGrade: 6 },
      { id: 'quart', name: 'Quart', symbol: 'qt', rate: 0.946353, example: 'A tall glass of juice!', emoji: '🧃', description: 'A quarter of a gallon.', minGrade: 6 },
      { id: 'gallon', name: 'Gallon', symbol: 'gal', rate: 3.78541, example: 'A big milk jug!', emoji: '🥛', description: 'A large unit of liquid volume used mostly in the US.', minGrade: 6 },
    ]
  },
  {
    id: 'time',
    name: 'Time',
    icon: '⏰',
    color: 'bg-purple-400',
    shadowColor: 'shadow-purple-600',
    units: [
      { id: 'second', name: 'Second', symbol: 's', rate: 1, example: 'A quick blink!', emoji: '👁️', description: 'The base unit of time.' },
      { id: 'minute', name: 'Minute', symbol: 'min', rate: 60, example: 'Time to brush your teeth!', emoji: '🪥', description: '60 seconds long.' },
      { id: 'hour', name: 'Hour', symbol: 'hr', rate: 3600, example: 'Time for a long cartoon!', emoji: '📺', description: '60 minutes long.' },
      { id: 'day', name: 'Day', symbol: 'd', rate: 86400, example: 'Time to sleep, play, and learn!', emoji: '☀️', description: 'The time it takes for Earth to spin once.' },
      { id: 'week', name: 'Week', symbol: 'wk', rate: 604800, example: 'Time for a weekend to come back!', emoji: '📅', description: 'Seven days long.' },
      { id: 'month', name: 'Month', symbol: 'mo', rate: 2592000, example: 'Time for the moon to orbit Earth!', emoji: '🌕', description: 'About 30 days, based on the moon\'s cycle.' },
      { id: 'year', name: 'Year', symbol: 'yr', rate: 31536000, example: 'Time until your next birthday!', emoji: '🎂', description: 'The time it takes for Earth to orbit the Sun.' },
    ]
  },

  // --- GRADE 6+ CATEGORIES ---
  {
    id: 'temperature',
    name: 'Temperature',
    icon: '🌡️',
    color: 'bg-red-400',
    shadowColor: 'shadow-red-600',
    minGrade: 6,
    units: [
      { id: 'celsius', name: 'Celsius', symbol: '°C', rate: 1, offset: 0, example: 'Water freezes at 0°C!', emoji: '🧊', description: 'The most common temperature scale worldwide.' },
      { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F', rate: 5 / 9, offset: -32, example: 'A hot summer day!', emoji: '☀️', description: 'Primarily used in the United States.' },
      // Grade 9 unlocks advanced temperature scale
      { id: 'kelvin', name: 'Kelvin', symbol: 'K', rate: 1, offset: -273.15, example: 'Used by scientists!', emoji: '🔬', description: 'Used in science; starts at absolute zero.', minGrade: 9 },
    ]
  },
  {
    id: 'area',
    name: 'Area',
    icon: '🗺️',
    color: 'bg-emerald-400',
    shadowColor: 'shadow-emerald-600',
    minGrade: 6,
    units: [
      { id: 'square_meter', name: 'Square Meter', symbol: 'm²', rate: 1, example: 'A large dining table!', emoji: '🍽️', description: 'The base unit of area in the metric system.' },
      { id: 'square_centimeter', name: 'Square Centimeter', symbol: 'cm²', rate: 0.0001, example: 'A postage stamp!', emoji: '✉️', description: 'Used for measuring very small surfaces.' },
      { id: 'square_kilometer', name: 'Square Kilometer', symbol: 'km²', rate: 1000000, example: 'A whole city!', emoji: '🏙️', description: 'Used to measure large areas of land.' },
      { id: 'hectare', name: 'Hectare', symbol: 'ha', rate: 10000, example: 'A large sports field!', emoji: '🏟️', description: 'Often used for measuring farming land.' },
      { id: 'square_inch', name: 'Square Inch', symbol: 'sq in', rate: 0.00064516, example: 'A small sticker!', emoji: '🏷️', description: 'Used for very small areas in the US.' },
      { id: 'square_foot', name: 'Square Foot', symbol: 'sq ft', rate: 0.092903, example: 'A floor tile!', emoji: '🔲', description: 'Commonly used to measure room sizes in the US.' },
      { id: 'square_yard', name: 'Square Yard', symbol: 'sq yd', rate: 0.836127, example: 'A small rug!', emoji: '🧶', description: 'Used for measuring things like carpet.' },
      { id: 'acre', name: 'Acre', symbol: 'ac', rate: 4046.86, example: 'A big farm!', emoji: '🚜', description: 'Commonly used in the US to measure land.' },
      { id: 'square_mile', name: 'Square Mile', symbol: 'sq mi', rate: 2589988.11, example: 'A big national park!', emoji: '🏞️', description: 'Used in the US to measure very large areas.' },
    ]
  },
  {
    id: 'speed',
    name: 'Speed',
    icon: '🚀',
    color: 'bg-orange-400',
    shadowColor: 'shadow-orange-600',
    minGrade: 6,
    units: [
      { id: 'meters_per_second', name: 'Meters per Second', symbol: 'm/s', rate: 1, example: 'A fast runner!', emoji: '🏃', description: 'The base unit of speed in the metric system.' },
      { id: 'kilometers_per_hour', name: 'Kilometers/Hour', symbol: 'km/h', rate: 0.277778, example: 'A car on the highway!', emoji: '🚗', description: 'Commonly used for vehicle speeds worldwide.' },
      { id: 'miles_per_hour', name: 'Miles per Hour', symbol: 'mph', rate: 0.44704, example: 'A car on a US highway!', emoji: '🚙', description: 'Commonly used for vehicle speeds in the US and UK.' },
      // Grade 9 unlocks advanced speed
      { id: 'feet_per_second', name: 'Feet per Second', symbol: 'ft/s', rate: 0.3048, example: 'A thrown baseball!', emoji: '⚾', description: 'Used in the US for measuring velocity.', minGrade: 9 },
      { id: 'knot', name: 'Knot', symbol: 'kn', rate: 0.514444, example: 'A fast boat!', emoji: '⛵', description: 'Used for measuring speed of ships and airplanes.', minGrade: 9 },
      { id: 'mach', name: 'Mach (Sound)', symbol: 'Ma', rate: 343, example: 'A super fast jet!', emoji: '✈️', description: 'The speed of sound in air.', minGrade: 9 },
      { id: 'speed_of_light', name: 'Speed of Light', symbol: 'c', rate: 299792458, example: 'The fastest thing in the universe!', emoji: '✨', description: 'How fast light travels in a vacuum.', minGrade: 9 },
    ]
  },

  // --- GRADE 9+ CATEGORIES ---
  {
    id: 'pressure',
    name: 'Pressure',
    icon: '🎈',
    color: 'bg-rose-400',
    shadowColor: 'shadow-rose-600',
    minGrade: 9,
    units: [
      { id: 'pascal', name: 'Pascal', symbol: 'Pa', rate: 1, example: 'A tiny push!', emoji: '👆', description: 'The SI unit for pressure.' },
      { id: 'kilopascal', name: 'Kilopascal', symbol: 'kPa', rate: 1000, example: 'Tire inflation!', emoji: '🚗', description: '1000 Pascals.' },
      { id: 'bar', name: 'Bar', symbol: 'bar', rate: 100000, example: 'Weather pressure!', emoji: '🌤️', description: 'Roughly atmospheric pressure.' },
      { id: 'atmosphere', name: 'Atmosphere', symbol: 'atm', rate: 101325, example: 'Air pushing on you!', emoji: '🌍', description: 'Standard pressure at sea level.' },
      { id: 'psi', name: 'Pounds/Sq Inch', symbol: 'psi', rate: 6894.76, example: 'A bike tire!', emoji: '🚲', description: 'Imperial unit for pressure.' }
    ]
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: '⚡',
    color: 'bg-amber-400',
    shadowColor: 'shadow-amber-600',
    minGrade: 9,
    units: [
      { id: 'joule', name: 'Joule', symbol: 'J', rate: 1, example: 'Lifting an apple!', emoji: '🍎', description: 'The SI unit for energy.' },
      { id: 'kilojoule', name: 'Kilojoule', symbol: 'kJ', rate: 1000, example: 'Running a mile!', emoji: '🏃', description: '1000 Joules.' },
      { id: 'calorie', name: 'Calorie (food)', symbol: 'kcal', rate: 4184, example: 'Eating a snack!', emoji: '🍫', description: 'Energy from food (kilocalorie).' },
      { id: 'watt_hour', name: 'Watt Hour', symbol: 'Wh', rate: 3600, example: 'A lightbulb burning!', emoji: '💡', description: 'Electrical energy over time.' },
      { id: 'kilowatt_hour', name: 'Kilowatt Hour', symbol: 'kWh', rate: 3600000, example: 'House electricity!', emoji: '🏠', description: 'Standard billing unit for electricity.' }
    ]
  },
  {
    id: 'power',
    name: 'Power',
    icon: '💪',
    color: 'bg-sky-400',
    shadowColor: 'shadow-sky-600',
    minGrade: 9,
    units: [
      { id: 'watt', name: 'Watt', symbol: 'W', rate: 1, example: 'A lightbulb!', emoji: '💡', description: 'The SI unit of power (1 Joule/second).' },
      { id: 'kilowatt', name: 'Kilowatt', symbol: 'kW', rate: 1000, example: 'A microwave oven!', emoji: '♨️', description: '1000 Watts.' },
      { id: 'megawatt', name: 'Megawatt', symbol: 'MW', rate: 1000000, example: 'A big wind turbine!', emoji: '🌬️', description: '1 million Watts.' },
      { id: 'horsepower', name: 'Horsepower', symbol: 'hp', rate: 745.7, example: 'A car engine!', emoji: '🏎️', description: 'Mechanical power.' }
    ]
  },
  {
    id: 'data',
    name: 'Digital',
    icon: '💾',
    color: 'bg-indigo-400',
    shadowColor: 'shadow-indigo-600',
    minGrade: 9,
    units: [
      { id: 'byte', name: 'Byte', symbol: 'B', rate: 1, example: 'A single letter!', emoji: '🔤', description: 'Basic unit of digital data.' },
      { id: 'kilobyte', name: 'Kilobyte', symbol: 'KB', rate: 1024, example: 'A small text file!', emoji: '📄', description: '1024 bytes.' },
      { id: 'megabyte', name: 'Megabyte', symbol: 'MB', rate: 1048576, example: 'An MP3 song!', emoji: '🎵', description: '1024 Kilobytes.' },
      { id: 'gigabyte', name: 'Gigabyte', symbol: 'GB', rate: 1073741824, example: 'An HD movie!', emoji: '🎬', description: '1024 Megabytes.' },
      { id: 'terabyte', name: 'Terabyte', symbol: 'TB', rate: 1099511627776, example: 'A big hard drive!', emoji: '💽', description: '1024 Gigabytes.' }
    ]
  }
];
