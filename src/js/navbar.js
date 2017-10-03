$(document).ready(function() {
  function Navbar(conf) {
    var idCTA = conf["classNameCTA"],
        idContainer = conf["classNameContainer"],
        idNavMask = conf["classNameMask"],
        idSectionNav = conf["classNameSectionNav"];

    return {
      "idCTA": idCTA,
      "idContainer": idContainer,
      "idNavMask": idNavMask,
      "idSectionNav": idSectionNav,
      "hasSectionNav": false,

      "bindEvents": function() {
          var _self = this;

          if(_self.hasSectionNav) {
            $("." + _self.idCTA ).click(function(el) {
              $("." + _self.idNavMask).addClass("open");
              $("." + _self.idSectionNav).addClass("open");
            });

            $(".nav-section-back").click(function(el) {
              $("." + _self.idSectionNav).removeClass("open");
              $("." + _self.idContainer).addClass("open");
            });
          } else {
            $("." + _self.idCTA ).click(function(el) {
              $("." + _self.idNavMask).addClass("open");
              $("." + _self.idContainer).addClass("open");
            });
          }

          $("." + _self.idNavMask ).click(function(el) {
            $("." + _self.idNavMask).removeClass("open");
            $("." + _self.idContainer).removeClass("open");

            if(_self.hasSectionNav) {
              $("." + _self.idSectionNav).removeClass("open");
            }
          });
      },
      "findSectionNav": function() {
        var sectionNavEl = $('body').find("[data-section-nav]");

        if(sectionNavEl.length) {
          this.hasSectionNav = true;
        }
      },
      "init": function() {
        this.findSectionNav();
        this.bindEvents();
      }
    }

  }

  Navbar(
    {
      "classNameContainer":"navbar-container",
      "classNameSectionNav": "nav-section",
      "classNameCTA": "navbar-toggle",
      "classNameMask": "navbar-mask"
    }
  ).init();
});
