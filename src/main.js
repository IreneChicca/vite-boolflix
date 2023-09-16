import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */

import { faStar } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faStar);

const app = createApp(App);

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
