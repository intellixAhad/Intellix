import Badge from "@/components/Badge";

const page = () => {
  return (
    <>
      <section id="top" className="relative overflow-visible p-[64px_clamp(20px,5vw,64px)_92px] flex flex-col justify-center items-center">
        <div aria-hidden="true" className="absolute -top-17.5 -right-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-22.5 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.09),rgba(255,255,255,0)_65%)] blur-[50px] pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(255,255,255,.07)_0px,rgba(255,255,255,.07)_1px,transparent_1px,transparent_64px),repeating-linear-gradient(90deg,rgba(255,255,255,.07)_0px,rgba(255,255,255,.07)_1px,transparent_1px,transparent_64px)]"
        />

        <div className="relative w-full max-w-360 mx-auto flex flex-col items-center justify-center gap-4">
          <Badge label="who we are" />
          <h1 className="font-playfair text-[48px] font-bold tracking-[-0.01em] text-white-01 max-w-2xl leading-[105%] italic text-center">A team based in Dhaka, building for the world.</h1>
          <p className="text-[16.5px] leading-[1.7] text-gray-02 max-w-160 text-center">Intellix started as a small group of developers and designers who wanted to build software the way they'd want it built for themselves — thoughtfully, transparently, and without cutting corners. Here's who we are and the people behind the work.</p>
        </div>
      </section>
    </>
  );
};

export default page;
