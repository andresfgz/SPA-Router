const routes = [
    {
        path: '/',
        template: `
             <h1>Pagina SPA Con JS Vanilla</h1>
             <h1>Algunos de mis proyectos: </h1>
             
             <div class="home-div-descr">
                <div class="container" >
                   <a href="https://andresfgz.github.io/RicknMortySPA/" target="_blank"> <h2>Rick N Morty</h2>
                    <p>SPA Usando la API de Rick N Morty</p>
                    <img src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=61a26bf43da26e4ca97e932e5ee113f7" alt="Rick and morty" width="400px"> </a>
                </div>

                <div class="container" >
                    <a href="https://andresfgz.github.io/SimonDice/" target="_blank"> <h2>SimonSay Game</h2>
                     <p>Juego de Simon Dice Usando JS</p>
                     <img src="https://www.mindgames.com/uploaded/screenshot/simonsays500300.jpg" alt="SimonSay Game" width="404px" height="305px"> </a>
                 </div>

                 <div class="container" >
                    <a href="https://andresfgz.github.io/PingComingSoon/" target="_blank"> <h2>Ping Coming </h2>
                     <p>Landing Page Usando HTML CSS JS</p>
                     <img src="https://raw.githubusercontent.com/andresfgz/PingComingSoon/master/design/desktop-preview.jpg" alt="Ping Coming" width="398px"> </a>
                 </div>

                 <div class="container" >
                    <a href="https://andresfgz.github.io/Four-Card-Section/" target="_blank"> <h2>Four Card</h2>
                     <p>Four Card Section</p>
                     <img src="https://raw.githubusercontent.com/andresfgz/Four-Card-Section/master/design/desktop-preview.jpg" alt="Four Card" width="400px"> </a>
                 </div>

                 <div class="container" >
                    <a href="https://andresfgz.github.io/Clipboard-landing-page/" target="_blank"> <h2>Clipboard page</h2>
                     <p>Pagina Completa HTML CSS</p>
                     <img src="https://raw.githubusercontent.com/andresfgz/Clipboard-landing-page/master/design/desktop-preview.jpg" alt="Clipboard page" width="400px"> </a>
                 </div>

                 <div class="container" >
                    <a href="https://andresfgz.github.io/LandingSocialProof/" target="_blank"> <h2>Social Proof</h2>
                     <p>Landing Page Social Proof</p>
                     <img src="https://miro.medium.com/max/2880/1*GKqzC97_9m6j8rudfQrUkw.png" alt="Social Proof " width="400px" height="300px"> </a>
                 </div>

                 <div class="container" >
                    <a href="https://andresfgz.github.io/Hundle/" target="_blank"> <h2>Hundle Landing</h2>
                     <p>Hundle Landing Page HTML CSS</p>
                     <img src="https://repository-images.githubusercontent.com/266831475/d16e7880-9e7d-11ea-8941-1771334ffbb9" alt="Hundle Landing" width="400px"> </a>
                 </div>

            </div>

        `
    },
    {
        path: '/contacto',
        template: `<h1> Mi repositorio de 
            <a href="https://github.com/andresfgz?tab=repositories" target="_blank" class="git">github Aqui</a> <br>
            <a href="https://twitter.com/Andresfgz2" target="_blank" class="git">Sigueme en Twitter</a>
        </h1>
                
        `        
    },
    {
        path: '/about',
        template: '<h1>About Me</h1>'   
    },
];