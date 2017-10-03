$(document).ready(function() {
  function PageNav(conf) {
        idPageNav = conf["classNamePageNav"],
        idMainContainer = conf["classNameMainContainer"];

    return {
      "idPageNav": idPageNav,
      "idMainContainer": idMainContainer,

      "setPageNav": function() {
        var mainContainerData = {
          width: $("." + idMainContainer).width(),
          offset: $("." + idMainContainer).offset()
        };

        if($(window).width() > 1024) {
          $("." + idPageNav).css({
            left: mainContainerData.offset.left +  mainContainerData.width - 220
          });
        } else {
          $("." + idPageNav).css({
            left: 0
          });
        }
      },

      "bindEvents": function() {
        var _self = this;

        $(window).resize(function() {
          _self.setPageNav();
        });
      },

      "init": function() {
        this.bindEvents();
        this.setPageNav();
      }
    }
  }

  PageNav(
    {
      "classNamePageNav":"nav-page",
      "classNameMainContainer": "container-main-content"
    }
  ).init();
});
