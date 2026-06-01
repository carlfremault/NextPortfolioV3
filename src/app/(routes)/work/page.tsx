import Collapse from "@/app/_components/Collapse";
import Synergie, { synergieInfo } from "./(content)/Synergie";
import Faibrik, { faibrikInfo } from "./(content)/Faibrik";
import SDI, { SDIInfo } from "./(content)/SDI";
import Kairon, { kaironInfo } from "./(content)/Kairon";
import PackYourBag, { packYourBagInfo } from "./(content)/PackYourBag";

const WorkPage = () => {
  return (
    <div className="space-y-12">
      <Collapse headerInfo={packYourBagInfo}>
        <PackYourBag />
      </Collapse>
      <Collapse headerInfo={kaironInfo}>
        <Kairon />
      </Collapse>
      <Collapse headerInfo={synergieInfo}>
        <Synergie />
      </Collapse>
      <Collapse headerInfo={faibrikInfo}>
        <Faibrik />
      </Collapse>
      <Collapse headerInfo={SDIInfo}>
        <SDI />
      </Collapse>
    </div>
  );
};

export default WorkPage;
