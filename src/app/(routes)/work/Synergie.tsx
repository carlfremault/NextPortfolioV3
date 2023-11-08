import BulletPoints from "@/app/_components/BulletPoints";
import ImageGrid from "@/app/_components/ImageGrid";
import { synergieBP, synergieImages } from "./synergieContent";

const Synergie = (): JSX.Element => {
  return (
    <>
      <p className="mb-10 indent-6">
        In my role at Synergie Belgium within the Digital Development team, I am
        dedicated to developing and maintaining various web assets, encompassing
        websites, web applications, and the intranet platform.
      </p>
      <BulletPoints bulletpoints={synergieBP} />
      <ImageGrid images={synergieImages} />
    </>
  );
};

export default Synergie;
