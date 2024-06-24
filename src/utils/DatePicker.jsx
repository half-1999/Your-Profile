// DatePicker.js
import { format } from 'date-fns';

const DatePicker = ({ label, selectedDate, onDateChange, className = '' }) => {
  return (
    <div className={className}>
      <label className="block text-lg font-bold text-[#36454F]">{label}</label>
      <input
        type="date"
        value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
        onChange={(e) => onDateChange(new Date(e.target.value))}
        className="block w-full px-3 py-2 mt-1 text-[#000] font-semibold bg-[#a3a3a3] border border-[#36454F] rounded-xl shadow-2xl focus:outline-none focus:ring-indigo-500 focus:border-[#36454F] sm:text-sm"
      />
    </div>
  );
};

export default DatePicker;
