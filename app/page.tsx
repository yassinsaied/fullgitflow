export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Welcome
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Build something
            <span className="block text-blue-500">beautiful.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
            A simple and modern starting point built with Next.js.
          </p>
          <p>Testing Pull Request template</p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-900">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
