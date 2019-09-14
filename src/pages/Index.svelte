
<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';

    let state = {
        skillsExpanded: false
    };

    const onClickVerMais = () => {
        state.skillsExpanded = !state.skillsExpanded;
    }
</script>

<Header/>
<main id="home" class="row">

    <section class="col l9 content">
        <section class="info">
            <h1>Hugo Felippe de Souza Cruz</h1>
            <p class="role">Desenvolvedor Full-Stack</p>
            <blockquote>
                "Para quem só sabe usar martelo, todo problema é um prego."
                <strong>Abraham Maslow</strong>
            </blockquote>
            <p class="resume">
                Gosto de trabalhar com front-end desde que tenha uma certa liberdade, já trabalhei
                muito com wordpress, meu objetivo é trazer grandes aplicações para a web, inclusive
                aplicações que ainda são exclusivas para plataformas nativas, com 
                <a href="https://developers.google.com/web/progressive-web-apps/">PWA</a>, 
                <a href="https://electronjs.org/">Electron</a>,
                <a href="https://facebook.github.io/react-native/">React Native</a>, 
                meu objetivo está bem proximo de se concretizar
            </p>
        </section>

        <div class="row">
            <section class="col s6 academic">
                <h3>Formação</h3>
                <div>
                    <h5 class="indigo-text">UNOESTE</h5>
                    <p class="role">Sistemas de informação</p>
                    <span>01/01/2016 - Em Continuação</span>
                </div>
                <hr class="indigo">
                <div>
                    <h5 class="cyan-text">UNESP</h5>
                    <p class="role">Curso de Programação em Linguagem C para Iniciantes</p>
                    <span>60h</span>
                </div>
                <hr class="lime">
                <div>
                    <h5 class="lime-text">SENAI</h5>
                    <p class="role">Assistente de Produção</p>
                    <span>800h</span>
                </div>
                <hr class="cyan">
                <div>
                    <h5 class="amber-text">SENAC</h5>
                    <p class="role">Auxiliar de Recursos Humanos</p>
                    <span>180h</span>
                </div>
            </section>
            <section class="col s6 exp">
                <h3>Experiencia</h3>
                <div>
                    <h5 class="indigo-text">Uxer</h5>
                    <p class="role">Desenvolvedor Web - Remoto</p>
                    <span>01/06/2016 - 01/06/2017</span>
                </div>
                <hr class="cyan">
                <div>
                    <h5 class="amber-text">HauxLab</h5>
                    <p class="role">Desenvolvedor Web - Remoto</p>
                    <span>01/06/2017 - 01/01/2018</span>
                </div>
            </section>
        </div>

        <Footer/>
    </section>

    <aside class="col l3 sidebar z-depth-2">
        <section class="picture">
            <img src="/assets/img/perfil.png" alt="Foto de perfil">
        </section>
        <section class="contact">
            <ul>
                <li class="darken-3 indigo">
                    <a href="#/1">
                        <img src="/assets/icons/computer.svg" alt="Icone computador">
                        <p>hugofelippe.github.io</p>
                    </a>
                </li>
                <li class="darken-3 cyan">
                    <a href="#/2">
                        <img src="/assets/icons/email.svg" alt="Icone email">
                        <img src="/assets/icons/email-send.svg" alt="Icone email" class="hidden">
                        <p>hfelipecruz07@gmail.com</p>
                    </a>
                </li>
                <li class="darken-3 lime">
                    <a href="#/3">
                        <img src="/assets/icons/cell.svg" alt="Icone celular">
                        <p>(18) 98199-6197</p>
                    </a>
                </li>
                <li class="darken-3 amber">
                    <a href="#/4">
                        <img src="/assets/icons/triangular.svg" alt="Icone bandeira triangular">
                        <p>Presidente Prudente - SP | BR</p>
                    </a>
                </li>
            </ul>
        </section>
        <section class="skills {state.skillsExpanded ? 'open' : ''}">
            <h3>Habilidades</h3>
            <hr>
            <table>
                <tbody>
                    <tr>
                        <td>PHP</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>Node.js</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>Java</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>Angular</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>AngularJS</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>Ionic Framework</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>MySQL</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>MongoDB</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>Inglês</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                    <tr>
                        <td>Português</td>
                        <td>
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                            <img src="/assets/icons/star.svg" alt="Icone estrela">
                        </td>
                    </tr>
                </tbody>
            </table>
            <a class="btn see-more {state.skillsExpanded ? 'hidden' : ''}" on:click={onClickVerMais} href="#!">Ver Mais</a>
        </section>
    </aside>
</main>
