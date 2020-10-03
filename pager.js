// Objeto para referenciar as paginas
let page = {
	'perfil'     : document.querySelector('#page-perfil'),
	'projetos'   : document.querySelector('#page-projetos'),
	'formacao'   : document.querySelector('#page-formacao'),
	'social'     : document.querySelector('#page-social'),
	'assinatura' : document.querySelector('#page-assinatura')
} // Fim page[]

// Objeto para referenciar os botoes de navegacao
let nav = {
	'perfil'     : document.querySelector('#nav-perfil'),
	'projetos'   : document.querySelector('#nav-projetos'),
	'formacao'   : document.querySelector('#nav-formacao'),
	'social'     : document.querySelector('#nav-social'),
	'assinatura' : document.querySelector('#nav-assinatura')
} // Fim nav[]

// Armazenar o botao de navegacao selecionado
let last_selected = document.querySelector('.selected');

// Atualizar o estado das paginas
updatePages();

function updatePages() {
	// Itera as chaves do objeto nav
	Object.keys(nav).map(function(key){
		// Testa se o botao possui a classe 'selected'
		if (nav[key].classList.contains('selected')) {
			// Se sim define o atributo 'dispay' da pagina para o padrao ''
			page[key].style.display = '';
		} else {
			// Se sim define o atributo 'dispay' da pagina para 'none'
			// fazendo com que a pagina nao seja desenhada na tela
			page[key].style.display = 'none';
		} // Fim if
	}); // Fim mapeamendo da navegacao
} // Fim updatePages()

function changePage(clicked) {
	last_selected.classList.remove('selected'); // Renove a classe 'selected' do botao atual
	clicked.classList.add('selected');          // Adiciona a classe 'selected' no botao clicado
	last_selected = clicked;                    // referencia o botao clicado como o botao atual
	updatePages();                              // Atualiza o estado das paginas
} // Fim changePage()
