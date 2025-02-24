import { fetchModelById } from "@/app/lib/api";
import FeatureSlider from "@/components/carousel/Carousel";
import InfoBlock from "@/components/text-box/TextBox";
import Image from "next/image";
import { notFound } from "next/navigation";

  
  export default async function ModeloPage({ params }: { params: { id: string } }) {
    const model = await fetchModelById(Number(params.id));
  
    if (!model) return notFound();
  
    return (
      <div className="container mx-auto p-6">
        {/* Encabezado Principal */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative w-full h-80 md:h-96">
            <Image
              src={model.photo}
              alt={model.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{model.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: model.description }} />
          </div>
        </section>
  
        {/* FeatureSlider - Características */}
        <section className="mt-12">
          <FeatureSlider features={model.model_features} />
        </section>
  
        {/* InfoBlocks - Destacados */}
        <section className="mt-12 space-y-12">
          {model.model_highlights.map((highlight, index) => (
            <InfoBlock
              key={index}
              title={highlight.title}
              description={highlight.content}
              imageSrc={highlight.image}
              reverse={index % 2 !== 0} // Alterna izquierda/derecha
            />
          ))}
        </section>
      </div>
    );
  }
  