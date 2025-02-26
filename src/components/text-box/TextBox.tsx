import Image from "next/image";

interface InfoBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "",
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-6 justify-between`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-full md:w-5/12">
        <h2 className="text-md font-bold text-black mb-4">{title}</h2>
        <p className="text-gray-600 text-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
