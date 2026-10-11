const steps = [
  { number: "01", title: "Discover", description: "We learn about your goals, audience, and challenges." },
  { number: "02", title: "Define", description: "We turn insights into a clear strategy and creative direction." },
  { number: "03", title: "Design", description: "We bring ideas to life with thoughtful, pixel-perfect design." },
  { number: "04", title: "Deliver", description: "You get polished assets, ready to make an impact." },
];

export default function DesignProcess() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="mb-9 grid gap-5 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D8D8D3]">Our process</p>
            <h2 className="mt-3 max-w-[520px] font-serif text-3xl leading-tight tracking-[-0.035em] text-[#F5F5F2] sm:text-4xl">A simple process,<br />for extraordinary results.</h2>
          </div>
          <p className="max-w-[370px] text-xs leading-6 text-[#A6A6A2] md:justify-self-end">We keep things clear, collaborative, and focused — from the first conversation to the final delivery.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border border-[#7A7A7A] text-[10px] text-[#F5F5F2]">{step.number}</span>
                {index < steps.length - 1 && <span className="hidden h-px flex-1 bg-white/20 lg:block" />}
              </div>
              <h3 className="font-serif text-xl text-[#F5F5F2]">{step.title}</h3>
              <p className="mt-1 max-w-[230px] text-xs leading-5 text-[#A6A6A2]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
