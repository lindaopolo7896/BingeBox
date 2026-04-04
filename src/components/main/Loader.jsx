function Loader() {
  return (
    <div class="flex flex-row gap-2 items-center justify-center min-h-screen">
      <div class="w-4 h-4 rounded-full bg-[#67E8F9] animate-bounce"></div>
      <div class="w-4 h-4 rounded-full bg-[#67E8F9] animate-bounce [animation-delay:-.3s]"></div>
      <div class="w-4 h-4 rounded-full bg-[#67E8F9] animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

export default Loader;
