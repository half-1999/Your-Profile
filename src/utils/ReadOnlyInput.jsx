
const ReadOnlyInput = ({ label, value }) => {
  return (
    <div>
      <label className="block mb-2 font-bold text-[#36454F]">{label.toLocaleUpperCase()}</label>
      <input type="text" value={value.toLocaleUpperCase()} readOnly className="w-full p-2 border rounded-lg text-[#fff] font-semibold text-sm bg-[#36454F]" />
    </div>
  );
};

export default ReadOnlyInput;
