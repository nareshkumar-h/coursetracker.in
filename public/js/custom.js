$(window).on("scroll", function () {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
}), $(document).on("click", ".navbar-collapse.show", function (t) {
    $(t.target).is("a") && $(this).collapse("hide")
}), $(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
    }
}), $(window).on("load", function () {
    var t = $(".work-filter"),
        o = $("#menu-filter");
    t.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    }), o.find("a").on("click", function () {
        var e = $(this).attr("data-filter");
        return o.find("a").removeClass("active"), $(this).addClass("active"), t.isotope({
            filter: e,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), $("#owl-demo").owlCarousel({
    autoPlay: 1e4,
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
});
var a = 0;
$(window).on("scroll", function () {
    var t = $("#counter").offset().top - window.innerHeight;
    0 == a && $(window).scrollTop() > t && ($(".lan_fun_value").each(function () {
        var t = $(this),
            o = t.attr("data-count");
        $({
            countNum: t.text()
        }).animate({
            countNum: o
        }, {
            duration: 2e3,
            easing: "swing",
            step: function () {
                t.text(Math.floor(this.countNum))
            },
            complete: function () {
                t.text(this.countNum)
            }
        })
    }), a = 1)
}), $(".video_about , .video_home , .video_blog").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: !1,
    fixedContentPos: !1
}), $(window).on("scroll", function () {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").on("click", function () {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
}), $(".text-typed").each(function () {
    var t = $(this);
    t.typed({
        strings: t.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}), $(".simple-text-rotate").textrotator({
    animation: "fade",
    speed: 3500
}), $(".youtube-bg").mb_YTPlayer(), AOS.init({
    easing: "ease-in-out-sine",
    duration: 1e3
});

//function toggleRadio() {
//    const st = {};
//
//    st.flap = document.querySelector('#flap');
//    st.toggle = document.querySelector('.toggle');
//
//    st.choice1 = document.querySelector('#choice1');
//    st.choice2 = document.querySelector('#choice2');
//
//    st.flap.addEventListener('transitionend', () => {
//
//        if (st.choice1.checked) {
//            st.toggle.style.transform = 'rotateY(-15deg)';
//            setTimeout(() => st.toggle.style.transform = '', 400);
//        } else {
//            st.toggle.style.transform = 'rotateY(15deg)';
//            setTimeout(() => st.toggle.style.transform = '', 400);
//        }
//
//    })
//
//    st.clickHandler = (e) => {
//
//        if (e.target.tagName === 'LABEL') {
//            setTimeout(() => {
//                st.flap.children[0].textContent = e.target.textContent;
//            }, 250);
//        }
//    }
//
//    document.addEventListener('DOMContentLoaded', () => {
//        st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
//    });
//
//    document.addEventListener('click', (e) => st.clickHandler(e));
//}
//toggleRadio();

function setCountData() {
    var data = {
        "learning": "5+",
        "activeCourse": "10+",
        "instructors": "2+",
        "earned": "1000+"
    };
    $('[data-count]').each(function () {
        var self = $(this),
            loc_attr = self.attr("data-count");
        $('[data-count="' + loc_attr + '"]').html(data[loc_attr]);
    });

}
setCountData();
