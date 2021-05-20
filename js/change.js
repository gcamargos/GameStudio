function changeLol() {
  let h1 = document.querySelector('.nick')
  let img = document.querySelector('.change-img')
  let txt = document.querySelector('.text')
  let txt2 = document.querySelector('.text2')
  let paragraph1 = 'League of Legends: Wild Rift é um jogo eletrônico do gênero MOBA desenvolvido e publicado pela Riot Games para Android, iOS, e consoles ainda desconhecidos. O jogo é uma versão adaptada de seu equivalente para PC, League of Legends.'
  let paragraph2 = 'Como em League of Legends, os jogadores controlam um personagem ("campeão") com habilidades únicas e batalham contra um time de jogadores ou inteligência artificial. O objetivo de cada time é destruir o nexus (uma construção localizada na base e protegida por outras estruturas) da equipe adversária.'
  h1.innerHTML = 'WILD RIFT'
  img.src = 'img/wild.jpg'
  txt.innerHTML = paragraph1;
  txt2.innerHTML = paragraph2;
}
function changeVal() {
  let h1 = document.querySelector('.nick')
  let img = document.querySelector('.change-img')
  let txt = document.querySelector('.text')
  let txt2 = document.querySelector('.text2')
  let paragraph1 = 'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.Duas equipes de cinco jogam uma contra a outra, e os jogadores assumem o papel de "agentes" com habilidades únicas e especiais'
  let paragraph2 = 'O jogo conta com varios modos de jogo como "desarme da spike","disputa da spike", "mata-mata", entre varios outros. O jogo tambem conta com o modo competitivo e o modo sem classificação para jogadores casuais.  '
  h1.innerHTML = 'VALORANT'
  img.src = '../img/val.jpg'
  txt.innerHTML = paragraph1;
  txt2.innerHTML = paragraph2;
}
function changePala() {
  let h1 = document.querySelector('.nick')
  let img = document.querySelector('.change-img')
  let txt = document.querySelector('.text')
  let txt2 = document.querySelector('.text2')
  let paragraph1 = 'Paladins é um jogo eletrônico de tiro em primeira pessoa com multijogador online, baseado em equipes e gratuito para jogar, lançado como closed beta em 17 de novembro de 2015, e tendo seu beta aberto somente em 16 de setembro de 2016.'
  let paragraph2 = 'O jogo saiu do beta no dia 8 de maio de 2018 e recebeu muitas mudanças visuais graças a nova direção da empresa desenvolvedora do jogo. O diretor da Hi-rez, conhecido pelos jogadores como HirezChris, anunciou no dia 30 de abril de 2018 a retirada do beta do jogo abertamente para a comunidade do jogo.'
  h1.innerHTML = 'Paladins'
  img.src = '../img/pala.png'
  txt.innerHTML = paragraph1;
  txt2.innerHTML = paragraph2;
}
function impact() {
  let h1 = document.querySelector('.nick')
  let img = document.querySelector('.change-img')
  let txt = document.querySelector('.text')
  let txt2 = document.querySelector('.text2')
  let paragraph1 = 'Genshin Impact é um jogo eletrônico RPG de ação gratuito desenvolvido e publicado pela miHoYo. O jogo apresenta um ambiente de mundo aberto de fantasia e sistema de batalha baseado em ação usando magia elemental e troca de personagem.'
  let paragraph2 = 'O jogo é apenas online e apresenta um modo multiplayer limitado que permite até quatro jogadores jogarem juntos. Foi lançado para Microsoft Windows, PlayStation 4, Android e iOS em 28 de setembro de 2020.'
  h1.innerHTML = 'GESHIN IMPACT'
  img.src = '../img/impact.jpg'
  txt.innerHTML = paragraph1;
  txt2.innerHTML = paragraph2;
}
