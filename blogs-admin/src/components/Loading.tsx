const LoadingSpinner = () => {
  return (
    <div className="fixed left-0 top-0 w-[100vw] h-[100vh] flex justify-center items-center z-[999]">
      <img src="/loader.svg" width={60} height={60} alt="loader" />
    </div>
  );
};

export default LoadingSpinner;
