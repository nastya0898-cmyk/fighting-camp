export default function StartupBenefits() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Why Choose This Template
          </h2>

          <p className="mt-4 text-neutral-400">
            Built for speed, scalability and beautiful user experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border p-8">
            <h3 className="mb-3 text-xl font-semibold">
              Production Ready
            </h3>
            <p className="text-neutral-500">
              Clean architecture ready for real business projects.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="mb-3 text-xl font-semibold">
              Reusable Sections
            </h3>
            <p className="text-neutral-500">
              Build once and reuse on future websites.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="mb-3 text-xl font-semibold">
              Modern Stack
            </h3>
            <p className="text-neutral-500">
              Next.js, Tailwind, shadcn/ui, Aceternity UI and Magic UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}