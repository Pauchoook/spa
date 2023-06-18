import * as functions from "./files/functions.js";

import "../scss/style.scss";
import dropdown from "./files/dropdown.js";
import burger from "./files/burger.js";
import spoller from "./files/spoller.js";
import hoverImg from "./files/hover-img.js";
import sliders from "./files/sliders.js";

functions.isWebp();
functions.mediaAdaptive();

dropdown();
burger();
spoller();
hoverImg();
sliders();