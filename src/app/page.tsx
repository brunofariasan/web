export default function Home() {
  return (
  <main className="grid grid-cols-2 min-h-screen">
    {/* Left */}
    <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-700 opacity-50"/>
    </div>

    {/* Right */}
    <div className="flex flex-col p-16">
      <div className="flex flex-1  items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a {' '}<a href="#" className="underline hover:text-gray-50">criar agora</a>!
      </p>
      </div>
    </div>
  </main>
  )
}
