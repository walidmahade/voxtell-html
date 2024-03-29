(function($) {
    console.log("Script loaded");

    const $deviceWidth = $(window).width(),
        $menuTriggerMobile = $("#menu-trigger-mobile"),
        $mainMenu = $("#main-menu"),
        $menuItem = $(".menu-item"),
        $menuItemHasDD = $(".menu-item--has-dropdown"),
        $logo = $(".brand");

    // ----------------------------------- megamenu positioning
    /*
    function calculateMegamenuPosition() {
        $(".dd-menu--mega").each(function(index) {
            // console.log( index + ": " + $(this).innerWidth() );
            $(this).css("left", 0);

            let menuWidth = $(this).innerWidth();

            if (menuWidth > 900) {
                if ($deviceWidth > 1140) {
                    console.log($logo.offset().left - $(this).offset().left);
                    let leftOffsetCurrentItem =
                        $logo.offset().left - $(this).offset().left;
                    console.log($logo.offset().left);
                    console.log(
                        $(this)
                            .parent()
                            .offset().left
                    );
                    // console.log($(this).parent());
                    let calculateLeftCss =
                        (1140 - menuWidth) / 2 + leftOffsetCurrentItem;

                    $(this).css("left", calculateLeftCss);
                } else {
                    // console.log($logo.offset().left - $(this).offset().left);
                    let leftOffsetCurrentItem =
                        $logo.offset().left - $(this).offset().left;
                    // console.log($logo.offset().left);
                    // console.log($(this).parent().offset().left);
                    // console.log($(this).parent());
                    let calculateLeftCss =
                        ($deviceWidth - menuWidth) / 2 +
                        leftOffsetCurrentItem -
                        30;

                    $(this).css("left", calculateLeftCss);
                }
            }
        });
    }


    // calculateMegamenuPosition();
    setTimeout(calculateMegamenuPosition, 800);

*/

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

    // ------------------------------------------------ widget accordion
    // const $accdnItem = $(".accdn__item");
    const $accdnItemTitle = $(".accdn__title");

    $accdnItemTitle.click(function() {
        $(this)
            .parent()
            .siblings()
            .removeClass("accdn__item--active");
        $(this)
            .parent()
            .toggleClass("accdn__item--active");
    });

    /*========================================================
        careers page form script
    =========================================================*/
    const uploadButton = $("#form-field-upload_resume_visible"),
        realInput = $("#form-field-resume_up_field");

    // helper function
    function truncate(n, len) {
        var ext = n.substring(n.lastIndexOf(".") + 1, n.length).toLowerCase();
        var filename = n.replace("." + ext, "");
        if (filename.length <= len) {
            return n;
        }
        filename = filename.substr(0, len) + (n.length > len ? "[..]" : "");
        return filename + "." + ext;
    }

    uploadButton.on("click", function(e) {
        e.preventDefault();
        realInput.click();
    });

    realInput.on("change", function(e) {
        let fileName = e.target.files[0].name;
        uploadButton.children("#btn-val").html(truncate(fileName, 13));
    });

    /*========================================================
        modals
    =========================================================*/
    $(".info-modal-trigger").click(function(e) {
        e.preventDefault();
        openModal();
    });

    $(".close").click(function(e) {
        e.preventDefault();
        closeModal();
    });

    function openModal() {
        $(".modal").addClass("open");
    }
    function closeModal() {
        $(".modal").removeClass("open");
    }

    /*--------------------------------------------------*/
    /*-------------------------widnow resize functions-------------------------*/
    /*--------------------------------------------------*/
    // $(window).on("resize", function() {
    // reposition megamenu
    // calculateMegamenuPosition();
    // });
})(jQuery);
