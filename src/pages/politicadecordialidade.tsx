import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

import styles from "styles/Termos.module.scss";

import Header from "components/Header";
import Title from "components/Title";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";

import { getSettingsContent, getSegments } from "../lib/api";

export default function TermoDeUso({ settings, segments }: any) {
  return (
    <>
      <NextSeo
        title={"Política de Cordialidade - Napoleon Abrasives"}
        description={"Política de Cordialidade, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Política de Cordialidade"} fundo="sobre" />

        <div className={styles.termos}>
          <p style={{ textAlign: "center" }}>
            <strong>Conhecendo a </strong>
            <strong>
              <em>Pol&#237;tica de Cordialidade </em>
            </strong>
            <strong>da NAPOLEON</strong>
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
            , alinhada &#224;s mais relevantes leis informacionais pelo mundo,
            da qual sentimos muito orgulho e convidamos que a conhe&#231;a,
            condi&#231;&#227;o para permanecer navegando no nosso{" "}
            <em>Website</em> face &#224;s atividades de tratamento de dados
            pessoais envolvidas. Em igual medida, disponibilizamos para
            voc&#234;, nosso usu&#225;rio, o
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>
            , a{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            , a
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
            </strong>
            e a{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            .
          </p>
          <p>
            A nossa{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>{" "}
            obedece a esses crit&#233;rios maiores, integrando esse documento
            que se ocupa das informa&#231;&#245;es relativas ao tratamento de
            dados pessoais, inclusive no tocante aos seus direitos. Recomendamos
            a voc&#234;, titular de dados pessoais, que{" "}
            <strong>conhe&#231;a</strong>, mais abaixo, os termos adotados
            quando se trata das
            <strong>
              formas de condu&#231;&#227;o comportamental para a excel&#234;ncia
              das rela&#231;&#245;es humanas.
            </strong>
          </p>
          <p>
            <strong>Declara&#231;&#227;o de compromisso</strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            Na <strong>NAPOLEON</strong> temos como compromisso primordial o
            tratamento de todos os usu&#225;rios, titulares de dados pessoais ou
            n&#227;o, com{" "}
            <strong>
              respeito, civilidade, considera&#231;&#227;o e gentileza
            </strong>
            , independente das opini&#245;es opostas ou diferentes,
            cren&#231;as, posi&#231;&#245;es e conclus&#245;es. Assumimos a
            premissa de que todas as pessoas podem contribuir para que os meios
            de intera&#231;&#227;o da <strong>NAPOLEON</strong> sejam
            espa&#231;os para crescimento individual e coletivo, espa&#231;os
            para constru&#231;&#227;o de solu&#231;&#245;es a partir da
            diverg&#234;ncia. Acreditamos que somos todos respons&#225;veis pela
            cria&#231;&#227;o e manuten&#231;&#227;o de uma comunidade receptiva
            e respeitosa, uma tarefa vi&#225;vel quando reconhecidos os
            pr&#243;prios limites e as necessidades do outro.
          </p>
          <p>
            <strong>Ataque a pessoas ou a conte&#250;dos</strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            Ataques pessoais n&#227;o s&#227;o permitidos na{" "}
            <strong>NAPOLEON</strong>, mesmo que n&#227;o sejam desrespeitosos
            ou sejam direcionados ao conte&#250;do do publicador. As pessoas
            devem se pautar pela urbanidade e civilidade, sempre primando pelo
            respeito absoluto na hip&#243;tese da discord&#226;ncia. Portanto,
            resta terminantemente proibido:
          </p>
          <p>
            &#9679; Atacar ou depreciar outras pessoas em raz&#227;o de
            opini&#227;o ou manifesta&#231;&#227;o igualmente respeitosa;
          </p>
          <p>
            &#9679; Proferir coment&#225;rios ou material atentat&#243;rio
            contra origem racial ou &#233;tnica, convic&#231;&#227;o religiosa,
            opini&#227;o pol&#237;tica, filia&#231;&#227;o a sindicato ou a
            organiza&#231;&#227;o de car&#225;ter religioso, filos&#243;fico ou
            pol&#237;tico, dado referente &#224; sa&#250;de ou &#224; vida
            sexual, dado gen&#233;tico ou biom&#233;trico, quando vinculado a
            uma pessoa;
          </p>
          <p>
            &#9679; Referir-se ao conte&#250;do alheio de forma depreciativa,
            insultante ou desprovida de respeito;
          </p>
          <p>
            &#9679; Assediar outros usu&#225;rios dos canais de
            intera&#231;&#227;o e comunica&#231;&#227;o.
          </p>
          <p>
            Entendemos que esses tipos de comportamento n&#227;o agregam valor e
            tampouco conhecimento, al&#233;m de inibirem e/ou impedirem que
            outras pessoas contribuam com sua participa&#231;&#227;o &#250;til e
            diversificado para a constru&#231;&#227;o de um ambiente, comunidade
            e sociedade melhor.
          </p>
          <p>
            <strong>Intera&#231;&#227;o entre pessoas</strong>
          </p>
          <p>
            Considerando que a intera&#231;&#227;o entre pessoas desconhecidas
            seja comumente desprovida de empatia, &#233; necess&#225;rio que se
            mantenha qualquer tipo de rela&#231;&#227;o em um alto n&#237;vel de
            educa&#231;&#227;o e urbanidade, diferente de conversas mantidas em
            redes sociais de grupos fechados ou em rodas mais &#237;ntimas. Ser
            respeitoso e gentil implica assegurar que os seus
            coment&#225;rios/respostas n&#227;o ir&#227;o desencorajar ou
            intimidar outras pessoas.
          </p>
          <p>
            Incentivamos o debate e as opini&#245;es discordantes sempre que
            necess&#225;rio, por&#233;m &#233; imprescind&#237;vel que se
            agregue valor ao conte&#250;do debatido, sempre com vistas &#224;
            solu&#231;&#227;o e pacifica&#231;&#227;o das rela&#231;&#245;es
            sociais. O problema n&#227;o repousa na discord&#226;ncia para com o
            outro, mas a forma com que se expressa essa posi&#231;&#227;o
            oposta, sempre carecedora de respeito, urbanidade e
            educa&#231;&#227;o.
          </p>
          <p>
            Constituem exemplos de comportamento violadores da presente{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>
            :
          </p>
          <p>
            &#9679; Ataques pessoais, incluindo coment&#225;rios ofensivos,
            hostis e desrespeitosos;
          </p>
          <p>
            &#9679; Acusa&#231;&#245;es injustificadas sobre outros
            usu&#225;rios;
          </p>
          <p>
            &#9679; Padr&#245;es de comportamento que constituem ass&#233;dio a
            um alvo, seja uma pessoa ou um grupo delas, como &#233; o caso de
            amea&#231;as, perturba&#231;&#245;es repetitivas, contatos
            indesejados, ataques pessoais ou revela&#231;&#227;o de
            informa&#231;&#245;es pessoais de algum usu&#225;rio sem sua
            permiss&#227;o;
          </p>
          <p>
            &#9679; Ofensas raciais, sexuais, homof&#243;bicas, ate&#237;stas,
            religiosas, pol&#237;ticas, &#233;ticas ou outras refer&#234;ncias
            similares contra algum membro da comunidade;
          </p>
          <p>
            &#9679; Uso da filia&#231;&#227;o de algu&#233;m como motivo para
            descreditar ou depreciar a vis&#227;o de uma pessoa (isso n&#227;o
            inclui apontar um conflito de interesse relevante &#224;
            quest&#227;o discutida).
          </p>
          <p>
            <strong>Ass&#233;dio</strong>
          </p>
          <p>
            O ass&#233;dio &#233; claramente um sinal de comportamento abusivo e
            ofensivo utilizado por pessoas que t&#234;m como prop&#243;sito
            afetar, de qualquer modo, pessoa ou pessoas espec&#237;ficas destas
            ofensas. Com esse tipo de postura inadequada, a pretens&#227;o do
            assediador &#233; tornar os canais e meios de intera&#231;&#227;o da{" "}
            <strong>NAPOLEON</strong> um espa&#231;o desagrad&#225;vel para seu
            ofendido, desencorajando a participa&#231;&#227;o ou a presen&#231;a
            de determinada pessoa ou grupo de pessoas. Constituem exemplos de
            comportamento violadores da presente{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>{" "}
            por ass&#233;dio:
          </p>
          <p>&#9679; Amea&#231;as;</p>
          <p>&#9679; Perturba&#231;&#245;es repetitivas;</p>
          <p>&#9679; Contatos indesejados;</p>
          <p>&#9679; Ataques pessoais;</p>
          <p>
            &#9679; Revela&#231;&#227;o de informa&#231;&#245;es pessoais
            desprovidas de permiss&#227;o.
          </p>
          <p>
            <strong>Discursos de &#243;dio</strong>
          </p>
          <p>
            Absolutamente nenhuma pessoa est&#225; autorizada a postar
            conte&#250;do ou adotar tom que pode ser interpretado, ao observador
            comum, como uma forma de discurso de &#243;dio, particularmente
            voltado a ra&#231;a, g&#234;nero, religi&#227;o, nacionalidade,
            etnia, grupo pol&#237;tico, orienta&#231;&#227;o sexual ou outra
            caracter&#237;stica similar. Coment&#225;rios e/ou conte&#250;dos
            que abordem esses temas de forma gen&#233;rica devem ser redigidos
            de forma neutra e a mais respeitosa poss&#237;vel.
          </p>
          <p>
            <strong>
              Retalia&#231;&#245;es n&#227;o ser&#227;o permitidas
            </strong>
          </p>
          <p>
            Violar a{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>{" "}
            em resposta a outra pessoa na condi&#231;&#227;o de agressor
            tampouco &#233; tolerado.
          </p>
          <p>
            <strong>
              Abrang&#234;ncia destas normas de condu&#231;&#227;o
            </strong>
          </p>
          <p>
            Observe que a nossa{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>
            tamb&#233;m &#233; direcionada aos usu&#225;rios e outros
            interessados que deixaram de utilizar os canais e ambientes de
            relacionamento da <strong>NAPOLEON</strong>.
          </p>
          <p>
            <strong>
              Medidas e comunica&#231;&#245;es de comportamentos inadequados
            </strong>
          </p>
          <p>
            Muito embora nossa prefer&#234;ncia seja ter todas as pessoas
            conosco, n&#227;o s&#227;o tolerados comportamentos inadequados,
            como os descritos acima. Caso voc&#234; n&#227;o concorde com os
            termos antes descritos, ent&#227;o pedimos que n&#227;o acesse ou
            n&#227;o continue a utilizar nosso <em>Website</em> e demais canais
            e ambientes de relacionamento da <strong>NAPOLEON</strong>.
          </p>
          <p>
            Independente disso, coment&#225;rios e/ou conte&#250;dos que violem
            a{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>{" "}
            podem ser comunicados no nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            , e com isso, removidos sem aviso pr&#233;vio, sendo que os
            usu&#225;rios que insistirem em desrespeitar estas normas de
            condu&#231;&#227;o podem ser proibidos de fazer coment&#225;rios ou
            sofrer bloqueio tempor&#225;rio ou permanente nos nossos canais e
            ambientes de relacionamento.
          </p>
          <p>
            <strong>Canais de comunica&#231;&#227;o</strong>
          </p>
          <p>
            &#9679;
            <strong>
              Nosso <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>:
            </strong>
            servi&#231;o de atendimento preparado para todas as demandas
            oriundas de voc&#234;, nosso usu&#225;rio, comportando
            solicita&#231;&#245;es, dificuldades, d&#250;vidas,
            reclama&#231;&#245;es, sugest&#245;es ou qualquer outra
            contribui&#231;&#227;o espec&#237;fica sobre nossos procedimentos
            que digam respeito &#224;s normas previstas nesta{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>
            . Dispon&#237;vel por meio do e-mail
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            .
          </p>
          <p>
            &#9679;
            <strong>
              <em>
                Canal de Comunica&#231;&#227;o com o Encarregado da
                Prote&#231;&#227;o da Privacidade e dos Dados Pessoais:
              </em>
            </strong>
            profissional respons&#225;vel por zelar por todas as pol&#237;ticas,
            processos e procedimentos referentes &#224; privacidade e dados
            pessoais de todos os titulares. Recomendamos o contato quando as
            demandas dirigidas ao{" "}
            <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em> sejam
            consideradas n&#227;o satisfat&#243;rias. Dispon&#237;vel por meio
            do e-mail
            <a href="mailto:encarregado@actatechlaw.com.br">
              encarregado@actatechlaw.com.br
            </a>
            .<strong></strong>
          </p>
          <p>
            <strong>Demais documentos legais</strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            Para conhecimento completo de todas nossas normas de
            condu&#231;&#227;o, recomendamos a leitura da nossa
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            , do{" "}
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>
            , da{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>{" "}
            e da
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
            </strong>
            .
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>NAPOLEON ABRASIVOS (ABT ABRASIVOS LTDA.)</strong>
          </p>
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
