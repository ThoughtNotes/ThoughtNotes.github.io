import { Button } from "@/components/ui/button";

type CTAProps = {
  highlightForm: () => void;
};


export function CTA({highlightForm}: CTAProps) {
  const handleTry = () => {
    window.scrollTo(0,0);
    
    highlightForm();
    
  }

  return (
    <section className="py-16 px-6 text-center bg-indigo-600 text-white">
      <h2 className="text-3xl font-semibold">Get Started with Thought Notes</h2>
      <p className="mt-4 text-lg opacity-80">Structure your thoughts fast, and make them useful with AI.</p>
      <Button className="mt-6" onClick={handleTry}>
        Try for Free
      </Button>
    </section>
  );
}
