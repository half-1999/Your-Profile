import './Button.css'
const DisabledButton = ({label , onClick, isDisabled, className }) => {
  return (
    <div className='p-1'>
          <button
            onClick={onClick}
            disabled={isDisabled}
            className={`${className} py-3 px-4 text-[#fff] font-bold ${isDisabled ? 'bg-[#a3a3a3] cursor-not-allowed' : 'bg-gray-800'} text-white rounded-2xl ml-4`}
          >
      {label.toLocaleUpperCase()}
    </button>
    </div>
  )
}

export default DisabledButton
