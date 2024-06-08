$(function () {
  // ヘッダー固定
  $(window).on("scroll", function () {
    // トップページの高さを取得
    imgHeight = $(".main__top--img").height();
    // トップページを超えた後の動き
    if ($(window).scrollTop() > imgHeight) {
      $("#header").addClass("scroll");
    } else {
      $("#header").removeClass("scroll");
    }
  });

  
  //ハンバーガーメニュー
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
  });

  //ハンバーガーメニュー　同ページのアンカーに飛んでも表示消す
  $(".header_nav ul li a").click(function () {
    $(".hamburger").removeClass("active");
    $(".header_nav").removeClass("active");
  });
  

  $(".slider").slick({
    infinite: true, //スライドのループを有効
    arrows: false, //前へ、次への矢印ボタンの有無
    fade: true, //スライドの切り替えをフェードに
    speed: 3000, //アニメーションの切り替えスピード
    autoplaySpeed: 3000, //自動再生時のスライドの静止時間
    autoplay: true, //スライダーの自動再生
    pauseOnFocus: false, //フォーカスで一時停止を無効
    pauseOnHover: false, //マウスホバーで一時停止を無効
    pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
  });
});
