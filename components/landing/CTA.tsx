import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/reusable/SectionTitle"


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
      <SectionTitle>
        Get Started with Thought Notes
      </SectionTitle>
      <p className="mt-4 text-lg opacity-80">Structure your thoughts fast, and make them useful with AI.</p>
      <Button className="mt-6" onClick={handleTry}>
        Try for Free
      </Button>
    </section>
  );
}
