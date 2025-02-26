import { fetchModelById } from "@/app/lib/api";
import FeatureSlider from "@/components/carousel/Carousel";
import MainTextBox from "@/components/text-box/MainTextBox";
import InfoBlock from "@/components/text-box/TextBox";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ModeloPage({
  params,
}: {
  params: { id: string };
}) {
  const model = await fetchModelById(Number(params.id));

  if (!model) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <MainTextBox model={model} />
      </section>

      <section className="mt-20 w-screen relative left-1/2 -translate-x-1/2">
        <FeatureSlider features={model.model_features} />
      </section>

      <section className="mt-20 space-y-12">
        {model.model_highlights.map((highlight, index) => (
          <InfoBlock
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
}
