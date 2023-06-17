import * as functions from "./files/functions.js";

import "../scss/style.scss";
import dropdown from "./files/dropdown.js";
import burger from "./files/burger.js";
import spoller from "./files/spoller.js";

functions.isWebp();
functions.mediaAdaptive();

dropdown();
burger();
spoller();