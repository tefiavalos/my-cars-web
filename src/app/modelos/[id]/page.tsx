import { fetchModelById } from "@/app/lib/api";
import { Carousel, MainTextBox, TextBox } from "@/components";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function ModelDetailsPage({ params }: PageProps) {
  const model = await fetchModelById(Number(params.id));

  if (!model) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <MainTextBox model={model} />
      </section>

      <section className="mt-20 w-screen relative left-1/2 -translate-x-1/2">
        <Carousel features={model.model_features} />
      </section>

      <section className="mt-20 space-y-12">
        {model.model_highlights.map((highlight, index) => (
          <TextBox
            key={index}
            title={highlight.title}
            description={highlight.content}
            imageSrc={highlight.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  );
};

