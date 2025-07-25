const LoadingScreen = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        <p className="text-center text-black text-2xl font-bold dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
