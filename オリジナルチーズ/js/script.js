$(function() {
    setTimeout(function() {
        $('.start p').fadeIn(1600);
    }, 500); //0.5秒後にロゴをフェードイン!
    setTimeout(function() {
        $('.start').fadeOut(2500);
    }, 2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
$(function() {
    // 設定
    var $width = 1000; // 横幅
    var $height = 600; // 高さ
    var $interval = 6000; // 切り替わりの間隔（ミリ秒）
    var $fade_speed = 2500; // フェード処理の早さ（ミリ秒）
    $("#slide ul li").css({ "position": "relative", "overflow": "hidden", "width": $width, "height": $height });
    $("#slide ul li").hide().css({ "position": "absolute", "top": 0, "left": 0 });
    $("#slide ul li:first").addClass("active").show();
    setInterval(function() {
        var $active = $("#slide ul li.active");
        var $next = $active.next("li").length ? $active.next("li") : $("#slide ul li:first");
        $active.fadeOut($fade_speed).removeClass("active");
        $next.fadeIn($fade_speed).addClass("active");
    }, $interval);
});

function initialize() {
    var latlng = new google.maps.LatLng(37.4220, -122.08491731);
    var myOptions = {
        zoom: 17,
        center: latlng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    /* アイコン設定 */
    var image = 'images/ico_map.png';
    var mapMarker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: image,
        title: 'コントローラーを非表示',
    });

    /* スタイル */
    var styleOptions = [{
        featureType: 'all',
        elementType: 'labels',
        stylers: [{
            visibility: 'off'
        }]
    }];
    var lopanType = new google.maps.StyledMapType(styleOptions);
    map.mapTypes.set('noText', lopanType);
    map.setMapTypeId('noText');
}
google.maps.event.addDomListener(window, 'load', initialize);