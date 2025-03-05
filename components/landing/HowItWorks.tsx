import { Mic, Settings, FileText } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { icon: <Mic size={32} />, title: "Record or Write", desc: "Quickly capture your ideas." },
    { icon: <Settings size={32} />, title: "AI Processing", desc: "Organizes and structures your note." },
    { icon: <FileText size={32} />, title: "Save & Share", desc: "Download your note in multiple formats." },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 text-center mx-auto md:max-w-5xl">
      <h2 className="text-3xl font-semibold">How it works</h2>
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md w-full text-left">
            {step.icon}
            <h3 className="mt-4 font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
