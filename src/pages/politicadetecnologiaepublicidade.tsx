import { NextSeo } from "next-seo";

import styles from "styles/Termos.module.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";

import { getSettingsContent, getSegments } from "../lib/api";

export default function TermoDeUso({ settings, segments }: any) {
  return (
    <>
      <NextSeo
        title={
          "Política das Tecnologias e Publicidade de Rastreamento Online - Napoleon Abrasives"
        }
        description={
          "Política das Tecnologias e Publicidade de Rastreamento Online, Napoleon, Abrasives"
        }
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern
          title={"Política das Tecnologias e Publicidade"}
          fundo="sobre"
        />

        <div className={styles.termos}>
          <p style={{ textAlign: "center" }}>
            <strong>Conhecendo a </strong>
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
              da
            </strong>
            <strong>NAPOLEON</strong>
            <strong></strong>
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
            importando os tipos de meios, marcas, produtos e servi&#231;os da{" "}
            <strong>NAPOLEON</strong>. Sempre iremos considerar os seus dados
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
            , a
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>{" "}
            e a{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            .
          </p>
          <p>
            A nossa
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
            </strong>
            obedece a esses crit&#233;rios maiores, integrando esse documento
            que se ocupa das informa&#231;&#245;es relativas ao tratamento de
            dados pessoais, inclusive no tocante aos seus direitos. Recomendamos
            a voc&#234;, titular de dados pessoais, que conhe&#231;a, mais
            abaixo, os termos adotados quando se trata da utiliza&#231;&#227;o
            de outras tecnologias de rastreamento on- <em>line</em>, al&#233;m
            dos <em>cookies</em>, ent&#227;o utilizadas pelo nosso{" "}
            <em>Website</em>, de modo a permitir o
            <strong>
              gerenciamento de suas pr&#243;prias configura&#231;&#245;es,
              personalizando a sua experi&#234;ncia e garantindo seus direitos.
            </strong>
          </p>
          <p>
            <strong>Estrutura e conte&#250;do da </strong>
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
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
            procedimentos da<strong>NAPOLEON</strong> quando o assunto s&#227;o{" "}
            <em>tecnologias de rastreamento on-line</em>, ou seja, para que
            utilizamos essas tecnologias no nosso <em>Website</em>, plataforma,
            aplicativos e servi&#231;os atrelados;
          </p>
          <p>
            &#9679; <strong>Parte 2: </strong>indica&#231;&#227;o das suas
            op&#231;&#245;es de gerenciamento dessas{" "}
            <em>tecnologias de rastreamento on-line</em>, com destaque para a
            op&#231;&#227;o <em>opt-out</em>, ou seja, a op&#231;&#227;o de
            desativa&#231;&#227;o dessas ferramentas;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Parte 3:</strong> descri&#231;&#227;o
            exemplificativa de algumas{" "}
            <em>tecnologias de rastreamento on-line</em>, seus funcionamentos,
            ou seja, o que s&#227;o e como funcionam;
          </p>
          <p>
            &#9679; <strong>Parte 4: </strong>listagem dos diversos tipos de{" "}
            <em>tecnologias de rastreamento on-line</em> utilizados por n&#243;s
            e suas finalidades, ent&#227;o apontados no
            <strong>
              <em>Diret&#243;rio de</em>
            </strong>
            <strong>
              <em> T</em>
            </strong>
            <strong>
              <em>ecnologias de Rastreamento On-line</em>
            </strong>
            . <strong></strong>
          </p>
          <p>
            <strong>
              Parte 1: Para que utilizamos as
              <em>tecnologias de rastreamento on-line </em>vinculados no{" "}
              <em>Website, </em>plataforma, aplicativos e servi&#231;os
              vinculados?
            </strong>
          </p>
          <p>
            N&#243;s, e determinados prestadores de servi&#231;os que operam em
            nosso nome, coletamos informa&#231;&#245;es sobre suas atividades ou
            atividades em dispositivos associados a voc&#234; em nosso{" "}
            <em>Website</em>, plataforma, aplicativos ou servi&#231;os
            vinculados usando outras tecnologias de rastreamento al&#233;m dos{" "}
            <em>cookies</em>, como<em>Flash cookies</em>, <em>pixels</em>,{" "}
            <em>tags</em>,<em>kits de desenvolvimento de software</em>,
            <em>interfaces de programa&#231;&#227;o de aplicativos</em> e{" "}
            <em>Web beacons</em>.
          </p>
          <p>
            Podemos coletar informa&#231;&#245;es, independentemente de
            voc&#234; estar logado ou registrado, e podemos associar esses dados
            de rastreamento &#224; sua conta de registro, caso em que iremos
            trat&#225;-los como dados pessoais, com aplica&#231;&#227;o dos
            cuidados inerentes.
          </p>
          <p>
            Provedores de servi&#231;os que coletam dados de rastreamento em
            nosso nome podem fornecer uma oportunidade para voc&#234; escolher
            n&#227;o ser rastreado <em>on-line</em>. Anunciantes e terceiros
            tamb&#233;m podem coletar informa&#231;&#245;es sobre sua atividade
            em nosso <em>Website</em>, plataforma, aplicativos ou servi&#231;os
            vinculados, em dispositivos associados a voc&#234; e em{" "}
            <em>websites</em> e aplicativos de terceiros usando tecnologias de
            rastreamento. Os dados de rastreamento coletados por esses
            anunciantes e terceiros s&#227;o usados para decidir quais mensagens
            e/ou an&#250;ncios voc&#234; vai receber em nossos canais virtuais
            de relacionamento.
          </p>
          <p>
            Saiba que as informa&#231;&#245;es colhidas e contidas nas nossas{" "}
            <em>tecnologias de rastreamento on-line</em> s&#227;o utilizadas com
            o objetivo maior de melhorar os servi&#231;os de navega&#231;&#227;o
            e de relacionamento. Leia, abaixo, uma descri&#231;&#227;o mais
            detalhada dos nossos principais objetivos com o uso das{" "}
            <em>tecnologias de rastreamento on-line</em>:
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
            &#9679; possibilitar a melhoria dos nossos produtos e servi&#231;os
            em seu favor.
          </p>
          <p>
            <strong>
              Parte 2: Gerenciando suas{" "}
              <em>tecnologias de rastreamento on-line</em>
            </strong>
          </p>
          <p>
            Para que se consiga a total transpar&#234;ncia nos nossos
            procedimentos, usamos um
            <strong>
              {" "}
              <em>Banner</em>{" "}
            </strong>
            flutuante, consistindo naquela <em>janelinha</em> destacada dentro
            do nosso <em>Website</em>, com o objetivo de precisar a
            utiliza&#231;&#227;o e finalidade dos <em>cookies</em> e{" "}
            <em>demais tecnologias de rastreamento on-line</em>, mais al&#233;m
            dos <em>cookies</em>, sendo um instrumento de gerenciamento da
            experi&#234;ncia de navega&#231;&#227;o no nosso <em>Website</em>.
            Com o{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante consegue-se transpar&#234;ncia e objetividade, sem
            complica&#231;&#227;o, de maneira a acionar ou desativar as
            ferramentas conforme sua escolha.
          </p>
          <p>
            <img
              style={{objectFit: "none"}}
              src="/assets/img/termos/cookies.png"
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
            autorizado o uso das
            <em>tecnologias de publicidade e rastreamento on-line</em> por meio
            do{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante, decidir ser notificado sobre a recep&#231;&#227;o dessas,
            bem como bloquear a respectiva entrada no seu sistema por meio da
            desativa&#231;&#227;o de parte ou da totalidade deste ferramental.
          </p>
          <p>
            Alerta-se que a recusa de certas{" "}
            <em>tecnologias de publicidade e rastreamento on-line</em> pode vir
            a prejudicar a navega&#231;&#227;o, com comprometimento de certos
            servi&#231;os, &#225;reas do nosso <em>Website</em> ou n&#227;o
            envio de informa&#231;&#245;es de sua prefer&#234;ncia. Por isso,
            lembre-se que ao desativar essas ferramentas, partes do nosso{" "}
            <em>Website</em> poder&#227;o apresentar problemas de
            funcionalidade. Caso a elimina&#231;&#227;o seja ap&#243;s a
            sa&#237;da do <em>Website</em>, tenha em considera&#231;&#227;o que
            todas as defini&#231;&#245;es e prefer&#234;ncias controladas por
            aquelas ferramentas ser&#227;o descartadas e necessitar&#227;o serem
            recriadas quando do retorno ao <em>Website</em>.
          </p>
          <p>
            Independente destas ferramentas de desativa&#231;&#227;o
            disponibilizadas por n&#243;s da <strong>NAPOLEON</strong>,
            exclusivamente para as nossas tecnologias, voc&#234; pode
            <a href="http://optout.aboutads.info/?c=2#!/">
              optar por n&#227;o receber publicidade direcionada de muitas redes
              de an&#250;ncios e parceiros
            </a>
            , troca de dados e an&#225;lises de marketing e outros provedores de
            servi&#231;os de publicidade e marketing digital. Voc&#234;
            tamb&#233;m pode optar por controlar a publicidade direcionada em
            outros <em>websites</em> e plataformas que visita. Al&#233;m disso,
            voc&#234; pode optar por controlar a publicidade direcionada
            recebida nos aplicativos usando as configura&#231;&#245;es e
            controles em seu(s) dispositivo(s) (redefinindo o identificador de
            publicidade do dispositivo m&#243;vel e/ou desativando os
            an&#250;ncios com base em interesses, por exemplo). Informe-se
            melhor sobre essas op&#231;&#245;es. Somos uma organiza&#231;&#227;o
            que respeita a sua decis&#227;o de escolha e por isso aderimos aos
            princ&#237;pios inerentes &#224; auto-regulamenta&#231;&#227;o do
            setor.
          </p>
          <p>
            Os navegadores da <em>web</em> podem transmitir sinais sem
            rastreamento que indicam que um usu&#225;rio n&#227;o deseja ter
            atividade monitorada. Atualmente n&#227;o existe um padr&#227;o
            universalmente aceito de como interpretar esses sinais, embora o
            trabalho para criar um consenso esteja em andamento.
            Consequentemente, n&#243;s aderimos aos padr&#245;es estabelecidos
            em nossa{" "}
            <strong>
              <em>Pol&#237;tica de Privacidade</em>
            </strong>
            . Como salientado antes, voc&#234; pode gerenciar suas escolhas em
            rela&#231;&#227;o &#224; publicidade direcionada, conforme descrito
            nesta se&#231;&#227;o.
          </p>
          <p>
            <strong>
              Parte 3: O que s&#227;o e como funcionam as{" "}
              <em>tecnologias de rastreamento</em>?
            </strong>
          </p>
          <p>
            Quando voc&#234; visita um <em>website</em>, rastreadores
            (conhecidos por &#8220;tecnologia de rastreamento de
            terceiros&#8221;) s&#227;o armazenados em seu computador. O
            propriet&#225;rio ou respons&#225;vel pelo<em>website</em> determina
            quantos e quais tipo de <em>tecnologias de rastreamento on-line</em>{" "}
            ser&#227;o inclu&#237;dos. Alguns <em>websites</em> podem ter
            at&#233; mais de sessenta rastreadores, enquanto outros podem
            apresentar apenas um ou at&#233; mesmo nenhum. A esp&#233;cie mais
            comum de rastreador &#233; o not&#243;rio <em>cookie</em>, mas os
            rastreadores n&#227;o se resumem a esse tipo.
          </p>
          <p>
            Rastreadores conseguem coletar diversas informa&#231;&#245;es sobre
            seu dispositivo, incluindo seu endere&#231;o IP, seus
            hist&#243;ricos de navega&#231;&#227;o, o tamanho da sua tela, o
            fuso-hor&#225;rio, <em>plug-ins</em> e sistema operacional. A
            combina&#231;&#227;o de todos esses elementos gera uma esp&#233;cie
            de <em>impress&#227;o digital</em> de navega&#231;&#227;o.
          </p>
          <p>
            Nem todos os rastreadores est&#227;o necessariamente ligados a
            empreendimentos que apuram h&#225;bitos de navega&#231;&#227;o.
            Alguns s&#227;o utilizados t&#227;o somente para que um{" "}
            <em>website</em> aponte o n&#250;mero de acesso de usu&#225;rios e
            suas origens. Alguns s&#227;o realmente necess&#225;rios para fazer
            o <em>website</em> funcionar adequadamente. Entretanto, via de
            regra, a aceita&#231;&#227;o de <em>cookies</em> implica
            concord&#226;ncia no recebimento de todos os rastreadores deste{" "}
            <em>website</em>, incluindo aqueles que passam informa&#231;&#245;es
            para empresas.
          </p>
          <p>
            Exemplos de{" "}
            <em>tecnologias de publicidade e rastreamento on-line</em>
            incluem:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies</em>:
            </strong>{" "}
            notoriamente conhecidos, consistindo em informa&#231;&#245;es que um{" "}
            <em>website</em> coloca no disco r&#237;gido do seu computador
            quando voc&#234; o visita. Da nossa parte conferimos a voc&#234;,
            nosso usu&#225;rio, gerenciamento completo sobre essa ferramenta,
            acessando nossa{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            ;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Flash cookies</em>:
            </strong>{" "}
            podemos usar objetos compartilhados locais, &#224;s vezes conhecidos
            como <em>Flash cookies</em>, para armazenar suas prefer&#234;ncias
            ou exibir conte&#250;do com base no que voc&#234; visualiza em nosso{" "}
            <em>Website</em> para personalizar sua visita. Nossos anunciantes e
            provedores de servi&#231;os terceirizados tamb&#233;m podem usar{" "}
            <em>Flash cookies</em> para coletar e armazenar
            informa&#231;&#245;es;
          </p>
          <p>
            &#9679; <strong>Destaque:</strong> <em>Flash cookies</em> s&#227;o
            diferentes dos <em>cookies</em> do navegador devido &#224;
            quantidade, tipo e forma de armazenamento dos dados. As ferramentas
            de gerenciamento de<em>cookies</em> fornecidas pelo seu navegador
            n&#227;o remover&#227;o os <em>Flash cookies</em>.
            Aten&#231;&#227;o, caso voc&#234; venha desabilitar os{" "}
            <em>cookies</em>, n&#227;o ter&#225; acesso a muitos recursos que
            tornam a experi&#234;ncia do convidado mais eficiente, e alguns de
            nossos servi&#231;os n&#227;o funcionar&#227;o corretamente;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Web beacons:</em>
            </strong>{" "}
            s&#227;o pequenos peda&#231;os de dados incorporados em imagens nas
            p&#225;ginas de <em>websites</em>. <em>Web beacons</em> podem
            envolver a transmiss&#227;o de nossas informa&#231;&#245;es para
            voc&#234; e de suas informa&#231;&#245;es diretamente para n&#243;s,
            para outra parte em nosso nome ou para outra parte de acordo com sua
            respectiva pol&#237;tica de privacidade.
          </p>
          <p>
            Nem todos os dados (informa&#231;&#245;es) que as{" "}
            <em>tecnologias de publicidade e rastreamento on-line</em> carregam
            s&#227;o pessoais. Afinal, dado pessoal &#233; considerado toda
            informa&#231;&#227;o relacionada &#224; pessoa f&#237;sica ou
            natural identificada ou identific&#225;vel. Por&#233;m, sendo dado
            pessoal, seu tempo de manuten&#231;&#227;o ligado a uma{" "}
            <em>tecnologia de publicidade e rastreamento on-line</em> regula-se
            pelo crit&#233;rio de necessidade, isto &#233;, pode ser mantido
            pelo tempo necess&#225;rio para cumprir a sua leg&#237;tima
            finalidade.
          </p>
          <p>
            <strong>
              Parte 4: saiba quais s&#227;o as nossas
              <em>tecnologias de rastreamento on-line</em> (al&#233;m dos{" "}
              <em>cookies</em>) descritas no
              <em>
                Diret&#243;rio de Tecnologias de Publicidade e Rastreamento
                On-line
              </em>
              !
            </strong>
          </p>
          <p>
            Al&#233;m dos <em>cookies</em>, nosso <em>Website</em> poder&#225;
            eventualmente utilizar outras{" "}
            <em>tecnologias de publicidade e rastreamento on-line</em>.
            Conhe&#231;a quais s&#227;o:
          </p>
          <p>
            Nome da <em>tecnologia de rastreamento on-line</em>: Google
            Analytics
          </p>
          <p>Dura&#231;&#227;o de armazenamento:</p>
          <p>
            Objetivo: Coletar estat&#237;sticas de visita&#231;&#227;o ao
            website
          </p>
          <p>Fornecedor: Google</p>
          <p>Categoria: Estat&#237;stico</p>
          <p>
            Nome da <em>tecnologia de rastreamento on-line</em>: Pixel do
            Facebook
          </p>
          <p>Dura&#231;&#227;o de armazenamento:</p>
          <p>
            Objetivo: Analisar comportamento de navega&#231;&#227;o e
            visita&#231;&#227;o ao website
          </p>
          <p>Fornecedor: Facebook</p>
          <p>Categoria: Anal&#237;tico</p>
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
