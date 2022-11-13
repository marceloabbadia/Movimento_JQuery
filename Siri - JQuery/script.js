$(function () {
  $("body").on("keydown", function (e) {
    let codigo = e.keyCode;

    if (codigo == 39) {
      // direita
      $("#conteudo").animate({
        left: "+=40",
        right: "-=40",
      });
    } else if (codigo == 37) {
      // esquerda
      $("#conteudo").animate({
        right: "+=40",
        left: "-=40",
      });
    } else if (codigo == 38) {
      // cima
      $("#conteudo").animate({
        top: "-=40",
        botton: "+=40",
      });
    } else if (codigo == 40) {
      // baixo
      $("#conteudo").animate({
        top: "+=40",
        botton: "-=40",
      });
    }
  });

  $("[acao-direita]").on("click", function () {
    $("#conteudo").animate({
      left: "+=40",
      right: "-=40",
    });
  });

  $("[acao-esquerda]").on("click", function () {
    $("#conteudo").animate({
      right: "+=40",
      left: "-=40",
    });
  });

  $("[acao-sobe]").on("click", function () {
    $("#conteudo").animate({
      top: "-=40",
      botton: "+=40",
    });
  });

  $("[acao-desce]").on("click", function () {
    $("#conteudo").animate({
      top: "+=40",
      botton: "-=40",
    });
  });
});
