import CircuitBackground from "@/components/CircuitBackground";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center relative">
      <CircuitBackground className="-z-10" /> 
    </div>
  );
};

export default page;
