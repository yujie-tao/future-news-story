(function() {
  "use strict";

  class Component {
    printError(error) {
      return console.log(error);
    }

    toggleСlass(node, className) {
      return node.classList.toggle(className);
    }
  }

  class Menu extends Component {
    constructor(settings) {
      super();
      this.nodeMenu = settings.nodeMenu;
      this.stateErrorHint =
        settings.stateErrorHint || "activeClassName is not a string";
    }

    toggleState(stateClassName) {
      if (typeof stateClassName !== "string")
        return super.printError(this.stateErrorHint);

      return super.toggleСlass(this.nodeMenu, stateClassName);
    }
  }

  let nodeJSMenu = document.querySelector("body");

  let demoMenu = new Menu({
    nodeMenu: nodeJSMenu
  });

  nodeJSMenu
    .querySelector(".js-menu__toggle")
    .addEventListener("click", function() {
    demoMenu.toggleState("js-menu_activated");
  });
})();

