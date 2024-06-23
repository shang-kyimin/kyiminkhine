export default function Footer() {
  return (
    <footer className="pt-4 pb-14 px-6 flex flex-col items-start gap-1">
      <span className="text-[0.9rem] md:text-base font-medium">
        <a href="https://github.com/shang-kyimin/kyiminkhine" target="_blank">Source Code</a>
      </span>
      <span className="text-[0.69rem] md:text-[0.85rem] leading-4">
        &copy; 2024 - {new Date().getFullYear() === 2024 ? "" : new Date().getFullYear()} Kyi Min Khine, Personal Portfolio<br />All rights reserved
      </span>
    </footer>
  );
}


