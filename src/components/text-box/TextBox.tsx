import Image from "next/image";

interface InfoBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; 
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, description, imageSrc, imageAlt = "", reverse = false }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6`}>
      <div className="w-full md:w-1/2">
        <Image src={imageSrc} alt={imageAlt} width={500} height={300} className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-bold text-black">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
