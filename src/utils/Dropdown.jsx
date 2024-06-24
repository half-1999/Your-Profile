// Dropdown.js

const Dropdown = ({ label, value, onChange, options, className = 'block' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-2 ${className} rounded-lg`}>
          <label className="font-bold text-[#36454F] text-lg">
              {label}
              </label>
              <select
            value={value}
            onChange={onChange}
            className="mt-1 p-2 border rounded bg-[#36454F] focus:outline-none focus:ring-indigo-500 focus:border-[#36454F] font-semibold text-white"
          >
            <option value="" className="">SELECT {label}</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
      
    </div>
  );
};

export default Dropdown;
