import { Lightbulb } from "lucide-react";
import { SectionTitle } from "@/components/reusable/SectionTitle";
import { Paragraph} from "@/components/reusable/Paragraph";
import { ImpactBox } from "@/components/reusable/ImpactBox";

export function Problem() {
  return (
    <section className="w-full py-16 px-6 md:px-12 mx-auto md:max-w-5xl">
      <div className="max-w-3xl mx-auto">
        {/* Icona e Titolo */}
        <SectionTitle>
          Your notes <span className="opacity-25 dark:opacity-50">are slowing you down.</span>
        </SectionTitle>

        {/* Testo Descrittivo */}
        <Paragraph>
          <span className="opacity-80">Taking notes should be </span>
          <strong>simple</strong>
          <span className="opacity-80">, but we often end up with </span>
          <strong>messy</strong>, <strong>unstructured</strong>{" "}
          <span className="opacity-80">notes that are hard to review.</span>
          <span className="opacity-80"> Plus, too much time is</span>
          <strong> wasted</strong>
          <span className="opacity-80"> organizing them, making it difficult to focus on what really matters.</span>
        </Paragraph>

        <Paragraph>
          <strong>Thought Notes</strong>
          <span className="opacity-80"> leverages artificial intelligence to turn your rough ideas into</span>
          <span className="text-indigo-600 dark:text-indigo-500 font-bold"> structured and ready-to-use notes</span>.
          <span className="opacity-80">
            {" "}
            Just type a quick draft — or simply speak — and within minutes, you’ll have a complete note with a clear title,
            well-organized sections, and all your content structured for easy reference.
          </span>
        </Paragraph>

        {/* Chiusura ad impatto */}
        <ImpactBox>
          <Lightbulb className="inline" />
          <p className="text-md font-semibold">
            <strong>Stay in the flow.</strong> With Thought Notes, every thought takes shape instantly.
          </p>
        </ImpactBox>
      </div>
    </section>
  );
}
