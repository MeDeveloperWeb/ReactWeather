export default function NavBar() {
  return (
    <header className="flex justify-between gap-4 px-8 py-2 md:py-4 shadow-md backdrop-blur-sm bg-inherit z-[1000]">
      <a
        href="/"
        className="font-logo text-xl md:test-2xl lg:text-3xl font-semibold"
      >
        GoWeather
      </a>
    </header>
  );
}