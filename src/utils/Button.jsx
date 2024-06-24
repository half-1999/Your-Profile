import './Button.css'
const Button = ({label , onClick,isDisabled, type = 'submit'}) => {
  return (
    <div className=''>
          <button
        type={type}
        disabled={isDisabled}
        className={`${isDisabled ? 'bg-[#a3a3a3] cursor-not-allowed' : 'bg-gray-600 text-white'} py-3 px-4 text-[#36454F] font-bold `}
        onClick={onClick}
          >
                {label.toLocaleUpperCase()}
          </button>
    </div>
  )
}

export default Button
