import { Check } from "lucide-react";

export function Features() {
  const features = [
    "Save time on note-taking",
    "Automatically structure your ideas",
    "Stay focused on your content",
  ];

  return (
    <section id="features" className="py-20 mt-8 px-6 text-center bg-gray-100 dark:bg-gray-800">
    <div className="mx-auto md:max-w-5xl">
      <h2 className="text-3xl font-semibold">Why Thought Notes?</h2>
      <ul className="mt-6 space-y-4 flex flex-col items-center">
        {features.map((feature, index) => (
          <li key={index} className="text-md sm:text-lg flex gap-2 items-center"><Check color="#93C572" /> {feature}</li>
        ))}
      </ul>
    </div>
    </section>
  );
}
