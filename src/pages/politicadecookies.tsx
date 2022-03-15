import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

import styles from "styles/Termos.module.scss";

import CookiesImg from "assets/img/termos/cookies.png";

import Header from "components/Header";
import Title from "components/Title";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";

import { getSettingsContent, getSegments } from "../lib/api";

export default function TermoDeUso({ settings, segments }: any) {
  return (
    <>
      <NextSeo
        title={"Política de Cookies - Napoleon Abrasives"}
        description={"Política de Cookies, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Política de Cookies"} fundo="sobre" />

        <div className={styles.termos}>
          <p style={{ textAlign: "center" }}>
            <strong>Conhecendo a </strong>
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            <strong> da NAPOLEON</strong>
          </p>
          <p>
            <strong>Algumas refer&#234;ncias gerais</strong>
          </p>
          <p>
            Data da &#250;ltima atualiza&#231;&#227;o:{" "}
            <strong>19 de julho de 2021</strong>
          </p>
          <p>
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>:{" "}
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
          </p>
          <p>
            Encarregado da Prote&#231;&#227;o da Privacidade e dos Dados
            Pessoais: <strong>Luiz Fernando Del Rio Horn</strong>
          </p>
          <p>
            <strong>
              <em>Canal de Comunica&#231;&#227;o com o Encarregado:</em>
            </strong>
            <a href="mailto:encarregado@actatechlaw.com.br">
              encarregado@actatechlaw.com.br
            </a>
            <u></u>
          </p>
          <p>
            <strong>
              Declara&#231;&#227;o de Compromisso com a Privacidade e a
              Prote&#231;&#227;o dos Dados Pessoais
            </strong>
          </p>
          <p>
            A <strong>NAPOLEON</strong> deseja a voc&#234;, nosso colaborador,
            representante, parceiro, cliente, consumidor ou visitante, uma
            &#243;tima experi&#234;ncia de contato com nossos canais de
            comunica&#231;&#227;o, produtos ou servi&#231;os, sempre baseada na
            percep&#231;&#227;o de respeito, transpar&#234;ncia, autonomia,
            seguran&#231;a, satisfa&#231;&#227;o e alegria. Nossas
            a&#231;&#245;es sempre ir&#227;o priorizar o resguardo da sua
            privacidade em todas as etapas da rela&#231;&#227;o, n&#227;o
            importando os tipos de meios, marcas, produtos e servi&#231;os por
            n&#243;s disponibilizados. Sempre iremos considerar os seus dados
            pessoais, identificados ou identific&#225;veis, como uma prioridade
            a ser resguardada na nossa organiza&#231;&#227;o.
          </p>
          <p>
            Estes s&#227;o os valores condizentes com a nossa
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            , a qual se alinha &#224;s mais relevantes leis informacionais pelo
            mundo, sentimos muito orgulho e convidamos que a conhe&#231;a. Em
            igual medida, disponibilizamos para voc&#234;, nosso usu&#225;rio, o
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>
            , a{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>{" "}
            e a
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
            </strong>
            .
          </p>
          <p>
            A nossa{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>{" "}
            obedece a esses crit&#233;rios maiores, integrando esse documento
            que se ocupa das informa&#231;&#245;es relativas ao tratamento de
            dados pessoais, inclusive no tocante aos seus direitos. Recomendamos
            a voc&#234;, titular de dados pessoais, que conhe&#231;a, mais
            abaixo, os termos adotados quando se trata da utiliza&#231;&#227;o
            de <em>cookies</em> pelo nosso <em>Website</em>, de modo a permitir
            o
            <strong>
              gerenciamento de suas pr&#243;prias configura&#231;&#245;es,
              personalizando a sua experi&#234;ncia e garantindo seus direitos.
            </strong>
          </p>
          <p>
            <strong>Estrutura e conte&#250;do da </strong>
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
          </p>
          <p>
            Para facilitar sua compreens&#227;o, dividimos este documento em{" "}
            <strong>quatro partes</strong>. Entenda como bem aproveit&#225;-lo
            na sua leitura integral e, depois, como fazer a
            localiza&#231;&#227;o r&#225;pida das partes de destaque:
          </p>
          <p>
            &#9679; <strong>Parte 1:</strong> indica&#231;&#227;o dos
            procedimentos da <strong>NAPOLEON</strong> quando o assunto s&#227;o{" "}
            <em>cookies</em>, ou seja, para que utilizamos os <em>cookies</em>{" "}
            no nosso <em>Website</em>, plataforma, aplicativos e servi&#231;os
            atrelados;
          </p>
          <p>
            &#9679; <strong>Parte 2: </strong>indica&#231;&#227;o das suas
            op&#231;&#245;es de gerenciamento dos <em>cookies</em>, com destaque
            para a op&#231;&#227;o <em>opt-out</em>, ou seja, a op&#231;&#227;o
            de desativar <em>cookies</em>;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Parte 3:</strong> descri&#231;&#227;o detalhada dos{" "}
            <em>cookies</em> e seu funcionamento por categorias, ou seja, o que
            s&#227;o e como funcionam;
          </p>
          <p>
            &#9679; <strong>Parte 4: </strong>listagem dos diversos tipos de{" "}
            <em>cookies</em> utilizados por n&#243;s e suas finalidades,
            ent&#227;o apontados no{" "}
            <strong>
              <em>Diret&#243;rio de Cookies</em>
            </strong>
            . <strong></strong>
          </p>
          <p>
            <strong>
              Parte 1: Para que utilizamos os <em>cookies</em> vinculados no{" "}
              <em>Website, </em>plataforma, aplicativos e servi&#231;os
              vinculados?
            </strong>
          </p>
          <p>
            Saiba que as informa&#231;&#245;es colhidas e contidas nos nossos{" "}
            <em>cookies</em> s&#227;o utilizadas com o objetivo maior de
            melhorar os servi&#231;os de navega&#231;&#227;o e de
            relacionamento. Leia, abaixo, uma descri&#231;&#227;o mais detalhada
            dos nossos principais objetivos com o uso de <em>cookies</em>:
          </p>
          <p>
            &#9679; permitir que um servi&#231;o reconhe&#231;a seu dispositivo
            numa pr&#243;xima visita;
          </p>
          <p>
            &#9679; para que voc&#234; n&#227;o precise fornecer as mesmas
            informa&#231;&#245;es v&#225;rias vezes ao realizar uma tarefa
            durante uma sess&#227;o, seja no preenchimento de um formul&#225;rio
            ou de uma pesquisa <em>on</em>-<em>line</em>;
          </p>
          <p>
            &#9679; conferir suporte &#224; funcionalidade &#224;
            navega&#231;&#227;o personalizada;
          </p>
          <p>
            &#9679; permitir que o reprodutor de v&#237;deo funcione
            adequadamente medindo quantas pessoas est&#227;o utilizando os
            servi&#231;os, de modo que a utiliza&#231;&#227;o de tais
            servi&#231;os seja facilitada e garantindo que haja capacidade
            suficiente para manter sua agilidade;
          </p>
          <p>
            &#9679; analisando dados an&#244;nimos para nos ajudar a compreender
            como as pessoas interagem com os diferentes aspectos de nossos
            servi&#231;os <em>on-line</em> com vistas ao seu aprimoramento;
          </p>
          <p>
            &#9679; gerar uma melhoria na forma de divulga&#231;&#227;o de
            nossos produtos e servi&#231;os visando a objetividade,
            transpar&#234;ncia e dinamismo;
          </p>
          <p>
            &#9679; possibilitar a melhoria nos nossos produtos e servi&#231;os
            em seu favor.
          </p>
          <p>
            <strong>
              Parte 2: Gerenciando seus <em>cookies</em>!
            </strong>
          </p>
          <p>
            Para que se consiga a total transpar&#234;ncia nos nossos
            procedimentos, utilizamos{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante, consistindo naquela <em>janelinha</em> destacada dentro
            do nosso <em>Website</em>, com o objetivo de precisar sua
            utiliza&#231;&#227;o e finalidade, sendo um instrumento de
            gerenciamento da experi&#234;ncia de navega&#231;&#227;o no nosso{" "}
            <em>Website</em>. Com o{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante consegue-se transpar&#234;ncia e objetividade, sem
            complica&#231;&#227;o, de maneira a acionar ou desativar as
            ferramentas.
          </p>
          <p>
            <Image
              src={CookiesImg}
              width={CookiesImg.width}
              height={CookiesImg.height}
              alt="Cookies"
            />
          </p>
          <p>
            Em quaisquer casos de d&#250;vidas, erros, sugest&#245;es ou
            problemas de utiliza&#231;&#227;o da plataforma concernentes ao
            emprego de<em>cookies e </em>das{" "}
            <em>tecnologias de publicidade e rastreamento on-line</em>, pedimos
            para contatar o{" "}
            <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em> por meio do
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ou, como &#250;ltima inst&#226;ncia, utilizar o
            <em>
              Canal de Comunica&#231;&#227;o com o Encarregado da
              Prote&#231;&#227;o da Privacidade e dos Dados Pessoais
            </em>
            , por meio do
            <a href="mailto:encarregado@actatechlaw.com.br">
              encarregado@actatechlaw.com.br
            </a>
            .
          </p>
          <p>
            Independente desse gerenciamento das pr&#243;prias
            configura&#231;&#245;es presentes no nosso <em>Website</em>, o
            titular de dados pessoas pode, a qualquer momento, mesmo depois de
            autorizado o uso de <em>cookies</em> por meio do{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante, decidir ser notificado sobre a recep&#231;&#227;o de
            cookies, bem como bloquear a respectiva entrada no seu sistema por
            meio da desativa&#231;&#227;o de parte ou da totalidade dos nossos{" "}
            <em>cookies</em>.
          </p>
          <p>
            A maioria dos navegadores de internet (<em>browser</em>) permite que
            voc&#234; escolha se aceita os <em>cookies</em>. A maioria
            tamb&#233;m permite eliminar os <em>cookies</em> j&#225; definidos.
            As op&#231;&#245;es dispon&#237;veis e o mecanismo usado variam de
            navegador para navegador. Essas configura&#231;&#245;es do navegador
            s&#227;o normalmente encontradas no menu
            &quot;op&#231;&#245;es&quot;, &quot;ferramentas&quot; ou
            &quot;prefer&#234;ncias&quot;. Voc&#234; tamb&#233;m poder&#225;
            consultar o menu &quot;ajuda&quot; do navegador.
          </p>
          <p>
            Nos pr&#243;prios <em>browsers</em> (tamb&#233;m conhecido como
            navegador, correspondendo a um programa criado para permitir a
            navega&#231;&#227;o pela internet) &#233; poss&#237;vel ao titular
            de dados pessoais aceitar, recusar ou apagar <em>cookies </em>(com
            exce&#231;&#227;o, normalmente, dos <em>cookies flash</em>),
            utilizando comandos de configura&#231;&#227;o do seu{" "}
            <em>browser</em>. Muito embora, alerta-se que a recusa de{" "}
            <em>cookies</em> pode vir a prejudicar a navega&#231;&#227;o, com
            comprometimento de certos servi&#231;os, &#225;reas do{" "}
            <em>Website</em> ou n&#227;o envio de informa&#231;&#245;es de sua
            prefer&#234;ncia. Por isso, fique atento: lembre-se sempre que ao
            desativar cookies, partes do nosso <em>Website</em> podem n&#227;o
            funcionar corretamente. Caso a elimina&#231;&#227;o seja ap&#243;s a
            sa&#237;da do W<em>ebsite</em>, tenha em mente que todas as
            defini&#231;&#245;es e prefer&#234;ncias controladas por aqueles{" "}
            <em>cookies</em> ser&#227;o descartadas e necessitar&#227;o serem
            recriadas quando do retorno ao <em>Website</em>.
          </p>
          <p>
            <strong>
              Parte 3: O que s&#227;o e como funcionam os cookies?
            </strong>
          </p>
          <p>
            <em>Cookies</em>
            s&#227;o pequenas unidades de dados temporariamente armazenadas no
            disco r&#237;gido do seu computador ou do seu dispositivo m&#243;vel
            pelo navegador de internet (<em>browser</em>), necess&#225;rias para
            navegar no nosso <em>Website</em>. Os <em>cookies</em> s&#227;o
            usados para determinar a utilidade, interesse e o n&#250;mero de
            acesso ao <em>Website</em>, permitindo uma navega&#231;&#227;o de
            maior qualidade (r&#225;pida e eficiente).
          </p>
          <p>
            Um <em>cookie</em> geralmente inclui um identificador exclusivo, que
            &#233; um n&#250;mero an&#244;nimo (gerado aleatoriamente)
            armazenado em seu dispositivo. Alguns expiram no final da
            sess&#227;o do seu <em>website</em>, outros permanecem no seu
            computador por mais tempo.
          </p>
          <p>
            Nem todos os dados (informa&#231;&#245;es) que os <em>cookies</em>{" "}
            carregam s&#227;o pessoais. Afinal, dado pessoal &#233; considerado
            toda informa&#231;&#227;o relacionada &#224; pessoa f&#237;sica ou
            natural identificada ou identific&#225;vel. Por&#233;m, sendo dado
            pessoal, seu tempo de manuten&#231;&#227;o ligado a um{" "}
            <em>cookie</em> regula-se pelo crit&#233;rio de necessidade, isto
            &#233;, pode ser mantido apenas pelo tempo necess&#225;rio para
            cumprir a sua leg&#237;tima finalidade.
          </p>
          <p>
            Existem duas categorias gerais de <em>cookies</em>:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> de origem:
            </strong>{" "}
            s&#227;o<em>cookies</em> gerados pelo pr&#243;prio dom&#237;nio,
            isto &#233;, pelo<em>website</em> que voc&#234; visita, dos quais
            nos responsabilizamos. Os <em>cookies</em> de origem s&#227;o
            definidos pelo <em>website</em> que voc&#234; est&#225; acessando e
            podem ser lidos somente por aquele website;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> de terceiros:
            </strong>{" "}
            s&#227;o <em>cookies</em> gerados por terceiros, originados de fonte
            externa ao dom&#237;nio. Os <em>cookies</em> de terceiros s&#227;o
            definidos por outras organiza&#231;&#245;es que n&#243;s utilizamos
            para diferentes servi&#231;os, sendo geralmente utilizados para
            medir o sucesso de aplica&#231;&#245;es e a efic&#225;cia da
            publicidade de terceiros nos <em>websites</em>. &#201; o caso, por
            exemplo, de servi&#231;os anal&#237;ticos externos de fornecedores
            que definem <em>cookies</em> de nosso interesse, a fim de relatar o
            que &#233; visualizado e o que n&#227;o &#233;. O <em>website</em>{" "}
            que voc&#234; est&#225; acessando tamb&#233;m pode ter conte&#250;do
            integrado ao YouTube, por exemplo, e esses <em>websites</em> podem
            definir seus pr&#243;prios <em>cookies</em>.
          </p>
          <p>
            Os cookies tamb&#233;m podem ser classificados pelas diferentes
            fun&#231;&#245;es que assumem:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> essenciais ou necess&#225;rios:
            </strong>
            alguns <em>cookies</em> s&#227;o essenciais para acessar a
            &#225;reas espec&#237;ficas do nosso <em>website</em>. Permitem a
            navega&#231;&#227;o e a utiliza&#231;&#227;o das suas
            aplica&#231;&#245;es, tal como acessar &#225;reas seguras por meio
            de <em>login</em>. Sem estes <em>cookies</em>, os servi&#231;os que
            o exijam n&#227;o podem ser prestados, como no caso dos cestos de
            compras ou fatura eletr&#244;nica;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> anal&#237;ticos ou de desempenho:
            </strong>
            utilizamos estes <em>cookies</em> para analisar a forma como os
            usu&#225;rios usam o <em>website</em> e monitorar a sua performance.
            Isto permite-nos fornecer uma experi&#234;ncia de alta qualidade ao
            personalizar a nossa oferta e rapidamente identificar e corrigir
            quaisquer problemas que surjam. Por exemplo, usamos <em>cookies</em>{" "}
            de desempenho para saber quais as p&#225;ginas mais acessadas; qual
            o m&#233;todo de liga&#231;&#227;o entre p&#225;ginas que &#233;
            mais eficaz; para determinar a raz&#227;o de algumas p&#225;ginas
            receberem mensagens de erro; para destacar artigos ou servi&#231;os
            do <em>website</em> que pensamos ser do interesse dos usu&#225;rios.
            Estes cookies s&#227;o utilizados apenas para efeitos de
            cria&#231;&#227;o e an&#225;lise estat&#237;stica, sem nunca
            recolher informa&#231;&#227;o de car&#225;ter pessoal;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> de funcionalidade:
            </strong>{" "}
            utilizamos <em>cookies</em> de funcionalidade para nos permitir
            relembrar as prefer&#234;ncias do usu&#225;rio relativamente &#224;
            utiliza&#231;&#227;o do <em>website</em>, de forma que n&#227;o seja
            necess&#225;rio voltar a configurar a p&#225;gina toda vez que a
            visita. Os <em>cookies</em>, nessa fun&#231;&#227;o, evitam digitar
            o nome do utilizador cada vez que este acede ao <em>website;</em>{" "}
            permitem fornecer servi&#231;os avan&#231;ados ao usu&#225;rio, como
            no caso de coment&#225;rios a um artigo;
          </p>
          <p>
            &#9679;
            <strong>
              <em>Cookies</em>
              de publicidade ou direcionados ou segmenta&#231;&#227;o:
            </strong>
            servem para direcionar a publicidade em fun&#231;&#227;o dos
            interesses de cada usu&#225;rio e do n&#250;mero de visitas que
            realizou, permitindo limitar o n&#250;mero de vezes da
            exibi&#231;&#227;o do an&#250;ncio ou a medir a efic&#225;cia da
            publicidade;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> de m&#237;dia social:{" "}
            </strong>
            facilitam o compartilhamento em redes sociais, fornecem ferramentas
            para que voc&#234; se conecte ao nosso <em>website</em> e nos ajudam
            a entender melhor tanto o p&#250;blico-alvo como a efic&#225;cia de
            nossa divulga&#231;&#227;o nas m&#237;dias sociais. Estes s&#227;o{" "}
            <em>cookies</em> de terceiros. Suas escolhas em rela&#231;&#227;o a
            esses <em>cookies</em> s&#227;o determinadas pelas plataformas de
            m&#237;dia social nas quais voc&#234; possui conta.<strong></strong>
          </p>
          <p>
            Quanto aos tipos, os <em>cookies</em> podem ser:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> permanentes ou persistentes:
            </strong>
            ficam armazenados no navegador de internet (<em>browser</em>) nos
            seus dispositivos de acesso (<em>desktop</em>, <em>mobile</em> ou{" "}
            <em>tablet</em>) e s&#227;o utilizados sempre que o usu&#225;rio faz
            uma nova visita ao <em>website</em>. Geralmente s&#227;o utilizados
            para direcionar a navega&#231;&#227;o de acordo com os interesses do
            usu&#225;rio, permitindo-nos prestar um servi&#231;o mais
            personalizado;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em> de sess&#227;o:
            </strong>{" "}
            s&#227;o tempor&#225;rios, expirando automaticamente quando fechado
            o navegador. A informa&#231;&#227;o obtida permite identificar
            problemas, com melhor experi&#234;ncia de navega&#231;&#227;o.
          </p>
          <p>
            <strong>
              Parte 4: saiba quais s&#227;o os nossos <em>cookies</em>{" "}
              utilizados no <em>Diret&#243;rio de Cookies</em>!
            </strong>
          </p>
          <p>
            Al&#233;m dos <em>cookies</em> abaixo arrolados, nosso{" "}
            <em>Website</em>
            poder&#225; eventualmente utilizar outros cookies de categorias,
            fun&#231;&#245;es e tipos diferentes.
          </p>
          <p>Nome do cookie: PHPSESSID</p>
          <p>Dura&#231;&#227;o de armazenamento: sess&#227;o</p>
          <p>Objetivo: identificador para sess&#227;o em PHP.</p>
          <p>Fornecedor: Linux</p>
          <p>Categoria: Necess&#225;rio</p>
          <p>Nome do cookie: _fbp</p>
          <p>Dura&#231;&#227;o de armazenamento: 2 meses</p>
          <p>
            Objetivo: Esse cookie &#233; definido pelo Facebook para entregar
            an&#250;ncios quando eles est&#227;o no pr&#243;prio Facebook ou em
            plataformas digitais alimentadas por an&#250;ncios do Facebook
            ap&#243;s a visita a esse website
          </p>
          <p>Fornecedor: Facebook</p>
          <p>Categoria: Publicidade</p>
          <p>Nome do cookie: _ga</p>
          <p>Dura&#231;&#227;o de armazenamento: 2 anos</p>
          <p>
            Objetivo: Esse cookie &#233; instalado pelo Google Analytics. &#201;
            usado para calcular os visitantes, as sess&#245;es, os dados de
            campanhas e acompanhar o uso do site para o relat&#243;rio de dados
            anal&#237;ticos do website. Os cookies armazenam
            informa&#231;&#245;es de forma an&#244;nima e atribuem um
            n&#250;mero gerado aleatoriamente para identificar visitantes
            &#250;nicos.
          </p>
          <p>Fornecedor: Google</p>
          <p>Categoria: An&#225;lise</p>
          <p>Nome do cookie: _gat_gtag_UA_121393597_1</p>
          <p>Dura&#231;&#227;o de armazenamento: 1 minuto</p>
          <p>
            Objetivo: Esse &#233; um tipo de cookie de padr&#227;o definido pelo
            Google Analytics, onde o elemento de padr&#227;o no nome cont&#233;m
            o n&#250;mero de identidade exclusivo da conta ou website ao qual
            est&#225; relacionado. Varia&#231;&#227;o do cookie _gat que &#233;
            usado para limitar a quantidade de dados registrados pelo Google em
            websites de alto volume de tr&#225;fego.
          </p>
          <p>Fornecedor: Google</p>
          <p>Categoria: An&#225;lise</p>
          <p>Nome do cookie: _gid</p>
          <p>Dura&#231;&#227;o de armazenamento: 24 horas</p>
          <p>
            Objetivo: Esse cookie &#233; instalado pelo Google Analytics. &#201;
            usado para armazenar informa&#231;&#245;es sobre como os visitantes
            usam o website e ajuda na cria&#231;&#227;o de um relat&#243;rio de
            dados anal&#237;ticos sobre como o website est&#225; performando. Os
            dados, incluindo n&#250;mero de visitantes, sua origem e as
            p&#225;ginas visitadas, s&#227;o mantidos de forma anonimizada.
          </p>
          <p>Fornecedor: Google</p>
          <p>Categoria: An&#225;lise</p>
        </div>

        <Footer settings={settings} segments={segments} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const segments = (await getSegments()) || [];
  const settings = (await getSettingsContent()) || [];

  return {
    props: {
      segments: segments?.segments || [],
      settings: settings?.setting || [],
    },
    revalidate: 10, // In seconds
  };
}
