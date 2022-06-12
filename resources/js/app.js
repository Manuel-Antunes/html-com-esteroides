import "flowbite";
import "alpine-magic-helpers";
import Alpine from "alpinejs";
import card from "./components/card";
import members from "./pages/members";

window.Alpine = Alpine;

// Components
Alpine.data("card", card);

// Pages
Alpine.data("members", members);

Alpine.start();
