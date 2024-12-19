export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_4fr_1fr] grid-rows-[100px_auto_100px] h-screen">
      <header className="col-span-3 bg-green-400 text-white text-center text-2xl font-bold p-4">
        Header
      </header>
      <aside className="bg-green-400 text-white text-center font-semibold p-2">
        Sidebar Left
      </aside>
      <main className="bg-green-100 flex flex-col justify-center items-center p-4">
        <div className="grid grid-cols-3 gap-2 w-full h-96">
          <div className="bg-green-200 rounded">you 1</div>
          <div className="bg-green-300 rounded">you 2</div>
          <div className="bg-green-400 rounded">you 3</div>
          <div className="bg-green-500 rounded col-span-2">you 4</div>
          <div className="bg-green-500 rounded">you 5</div>
          <div className="bg-green-600 rounded col-span-3">you 6</div>
        </div>
      </main>
      <aside className="bg-green-500 text-white text-center font-semibold p-2">
        Sidebar Right
      </aside>
      <footer className="col-span-3 bg-green-700 text-white text-center font-bold p-4">
        Footer
      </footer>
    </div>
  );
}
