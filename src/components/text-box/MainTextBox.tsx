import { ModelDetails } from "@/app/lib/types";
import Image from "next/image";

export default function MainTextBox({ model }: { model: ModelDetails }) {
  return (
    <>
      <div className="relative w-full h-60 md:h-[450px]">
        <Image
          src={model.photo}
          alt={model.name}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="text-left md:pl-10">
        <h4 className="text-md font-semibold leading-none mb-4 text-titleGray">
          {model.name}
        </h4>
        <h1 className="text-[35px] md:text-xl font-semibold leading-none mb-6">
          {model.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: model.description }} />
      </div>
    </>
  );
}
