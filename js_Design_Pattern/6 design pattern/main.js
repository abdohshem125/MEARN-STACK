import { Teacher, TeacherDecorator } from "./decoratorTeach/decorator.js";
import { TV, Speaker, Bridge, BridgeWithMute } from "./bridge/bridge.js";
import mainBox from "./composite/composite.js";
import StoreFacade from "./Facade/storeFacade.js";
import ProxyCity from "./proxy/proxy.js";
import ToDo, {
  InProgressState,
  ReadyForReviewState,
  DoneState,
} from "./toDo/todoState.js";

console.log("------------- DECORATOR -----------------");

const teacher1 = new Teacher("Abdo", "Math");
teacher1.display();

const decoratedTeacher = new TeacherDecorator(
  teacher1,
  1500,
  "Egyptian",
  "el maadi"
);
decoratedTeacher.showDetails();

console.log("------------- BRIDGE PATTERN -----------------");

const tv = new TV();
const speaker = new Speaker();

const tvController = new BridgeWithMute(tv);
const speakerController = new Bridge(speaker);

console.log("---- TV Controls ----");
tvController.increase();
tvController.decrease();
tvController.mute();

console.log("---- Speaker Controls ----");
speakerController.increase();
speakerController.decrease();

console.log("------------- COMPOSITE PATTERN -----------------");
mainBox.show();

console.log("------------- FACADE PATTERN -----------------");

const store = new StoreFacade();
store.buyProduct("Book", 20);
store.buyProduct("Laptop", 800);

console.log("------------- PROXY PATTERN -----------------");

const proxy = new ProxyCity();

proxy.getCity("Egypt");
proxy.getCity("USA");
proxy.getCity("Egypt");

console.log("------------- STATE PATTERN -----------------");
const task = new ToDo("Margherita");

task.setState(new InProgressState());
task.setState(new ReadyForReviewState());
task.setState(new DoneState());
