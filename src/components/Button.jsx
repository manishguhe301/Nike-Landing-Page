const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none bg-coral-red rounded-full text-[#fff] border-coral-red'>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='hero-right-icon'
          className='ml-2 rounded-full w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
