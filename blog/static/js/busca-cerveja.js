var campoFiltro = document.querySelector("#busca-cerveja");

campoFiltro.addEventListener("input", function() {
    var produtos = document.querySelectorAll(".product");

    if (this.value.length > 0) {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            var tdNome = produto.querySelector(".product-title");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                produto.classList.add("invisivel");
            } else {
                produto.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            produto.classList.remove("invisivel");
        }
    }
});
