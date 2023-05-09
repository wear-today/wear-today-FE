function Header() {
  return (
    <header className="h-18 w-full flex gap-2 p-4 border-b-2 border-blue-300">
      <h2 className="text-xl font-bold pl-20">
        오늘, 당신의 옷차림은 어떤가요?
      </h2>
      <button className="flex w-12 h-8 text-sm p-1 ml-4">login</button>
    </header>
  );
}

export default Header;
