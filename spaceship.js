import Spaceship from "./index";
import spaceship_engine from "./spaceship_engine";

const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4)



const sophiaEngine = new spaceship_engine(sophia)
const amsterdaEngine = new spaceship_engine(amsterda)
const dwarfStartEngine = new spaceship_engine(dwarfStart)


sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()