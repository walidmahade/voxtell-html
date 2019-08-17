(function($) {
    console.log("Script loaded");

    const $deviceWidth = $(window).width(),
        $menuTriggerMobile = $("#menu-trigger-mobile"),
        $mainMenu = $("#main-menu"),
        $menuItem = $(".menu-item"),
        $menuItemHasDD = $(".menu-item--has-dropdown");

    // ----------------------------------- mobile menu open close
    $menuTriggerMobile.click(function() {
        $(this).toggleClass("is-active");
        $mainMenu.toggleClass("show");
    });

    // -----------------------------------  dropdown menu show hide
    if ($deviceWidth > 768) {
        // desktop attach hover event
        $menuItemHasDD.hover(
            function() {
                $(this).addClass("show");
            },
            function() {
                $(this).removeClass("show");
            }
        );
    } else {
        // mobile attach click event
        $menuItemHasDD.click(function() {
            // close any open dropdowns except clicked one
            $menuItemHasDD.not($(this)).removeClass("show");
            // show-hide current dropdown
            $(this).toggleClass("show");
        });
    }

    // -----------------------------------  on regular menu click hide all dropdowns
    $menuItem.click(function() {
        if ($(this).hasClass("menu-item--has-dropdown")) {
        } else {
            $menuItem.removeClass("show");
        }
    });
    // -----------------------------------  hide menu on click outside header
    $(document).mouseup(function(e) {
        const container = $("#site-header");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            // hide all visible dropdowns
            $menuItem.removeClass("show");
            // hide menu
            $mainMenu.removeClass("show");
            // restore trigger state
            $menuTriggerMobile.removeClass("is-active");
        }
    });
})(jQuery);
