import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


const randomUser = new User();
const randomCompany = new Company();

const drawnMap = new CustomMap("map");
drawnMap.addMarker(randomUser);
drawnMap.addMarker(randomCompany);