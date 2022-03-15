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
        title={"Política de Privacidade - Napoleon Abrasives"}
        description={"Política de Privacidade, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Política de Privacidade"} fundo="sobre" />

        <div className={styles.termos}>
          <p style={{ textAlign: "center" }}>
            <strong>Conhecendo a </strong>
            <strong>
              <em>Pol&#237;tica de Privacidade</em> da{" "}
            </strong>
            <strong>NAPOLEON</strong>
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
            &#243;tima experi&#234;ncia de contato com nossos canais e
            ambientes, bem como nossos produtos ou servi&#231;os, sempre baseada
            na percep&#231;&#227;o de respeito, transpar&#234;ncia, autonomia,
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
            da qual sentimos muito orgulho e convidamos que a conhe&#231;a em
            toda sua extens&#227;o, condi&#231;&#227;o para permanecer conectado
            ou, de qualquer forma, ligado &#224;s m&#250;ltiplas frentes de
            atua&#231;&#227;o da <strong>NAPOLEON</strong>, de modo a
            <strong>
              garantir a plena intera&#231;&#227;o aos procedimentos
              concernentes aos dados pessoais e suas implica&#231;&#245;es para
              a sua privacidade, indicado as pr&#225;ticas de acesso, coleta,
              utiliza&#231;&#227;o, armazenamento e descarte dos dados pessoais.
            </strong>
          </p>
          <p>
            <strong>
              Estrutura e conte&#250;do da <em>Pol&#237;tica de Privacidade</em>
            </strong>
          </p>
          <p>
            Para facilitar sua compreens&#227;o, dividimos este documento em{" "}
            <strong>dez partes</strong>. Entenda como bem aproveit&#225;-lo na
            sua leitura integral e, depois, como fazer a localiza&#231;&#227;o
            r&#225;pida das partes de destaque:
          </p>
          <p>
            &#9679; <strong>Parte 1:</strong> quem somos, defini&#231;&#245;es,
            outros documentos importantes e por que de uma pol&#237;tica de
            privacidade;
          </p>
          <p>
            &#9679; <strong>Parte 2: </strong>que tipos e fontes de dados
            pessoais s&#227;o coletados e quais n&#227;o s&#227;o coletados;
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Parte 3:</strong> como s&#227;o coletados os dados
            pessoais;
          </p>
          <p>
            &#9679; <strong>Parte 4:</strong> quais as finalidades
            (prop&#243;sitos) dos dados pessoais;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Parte 5: </strong>quais as bases legais para
            tratamento dos dados pessoais;
          </p>
          <p>
            &#9679; <strong>Parte 6:</strong> casos de compartilhamento dos{" "}
            <strong> </strong>dados pessoais, transfer&#234;ncia internacional
            de dados pessoais e as obriga&#231;&#245;es dos parceiros e
            terceiros;
          </p>
          <p>
            &#9679; <strong>Parte 7: </strong>seus direitos, mecanismos de
            autogerenciamento (controles e escolhas) e plataforma de gest&#227;o
            de consentimento (CMP);
          </p>
          <p>
            &#9679; <strong>Parte 8:</strong> seguran&#231;a, armazenamento e
            exclus&#227;o dos dados pessoais;
          </p>
          <p>
            &#9679; <strong>Parte 9:</strong> altera&#231;&#245;es desta
            pol&#237;tica de privacidade, demais documentos de regramento e
            legisla&#231;&#227;o aplic&#225;vel;
          </p>
          <p>
            &#9679; <strong>Parte 10:</strong> fale conosco, Encarregado da
            Prote&#231;&#227;o da Privacidade e dos Dados Pessoais,
            disposi&#231;&#245;es gerais e finais.
          </p>
          <p>
            <strong>
              Parte 1: Quem somos, defini&#231;&#245;es, outros documentos
              importantes e por que de uma pol&#237;tica de privacidade
            </strong>
          </p>
          <p>
            Somos a <strong>NAPOLEON</strong>, uma organiza&#231;&#227;o
            dedicada a voc&#234;, nosso usu&#225;rio, titular de dados pessoais.
            Por isso formulamos e disponibilizamos este documento dedicado
            unicamente para esclarecer, de forma clara e objetiva, nossos
            procedimentos quando o assunto &#233; privacidade e dados pessoais.
            Pedimos que leia atentamente, pois ao usar o <em>Website</em>,
            plataforma, aplicativos e outros servi&#231;os atrelados, bem como
            acessar outros ambientes e meios de comunica&#231;&#227;o, estas
            disposi&#231;&#245;es, assim como dos demais documentos legais,
            estar&#227;o valendo.
          </p>
          <p>
            &#9679; <strong>Quem somos: ABRASIVOS DBT LTDA</strong>, sociedade
            empres&#225;ria limitada, inscrita no CNPJ sob o n&#186;
            02.399.258/0001-38, com sede na Rua Professor Guerreiro Lima, 797,
            Bairro Pio X, na cidade de Caxias do Sul &#8211; RS, CEP:
            95.034-490;
          </p>
          <p>
            &#9679; <strong>Defini&#231;&#245;es:</strong>
          </p>
          <p>
            &#9679; <strong>Termos de designa&#231;&#227;o da NAPOLEON:</strong>{" "}
            todas as vezes que encontrar os termos &#8220;n&#243;s&#8221;,
            &#8220;nossos&#8221;, a refer&#234;ncia &#233; ao controlador dos
            seus dados pessoais, ou seja, a <strong>NAPOLEON</strong>;
          </p>
          <p>
            &#9679;{" "}
            <strong>Termos de designa&#231;&#227;o do usu&#225;rio: </strong>
            todas as vezes quer ler &#8220;voc&#234;&#8221;, &#8220;seu&#8221;,
            &#8220;sua&#8221;, nos referimos a voc&#234;, nosso usu&#225;rio,
            titular de dados pessoais;
          </p>
          <p>
            &#9679; <strong>Defini&#231;&#227;o de parceiros:</strong> todas as
            vezes que ler &#8220;parceiros&#8221;, nos referimos aos prestadores
            de servi&#231;os que operam em nosso nome, seja no nosso{" "}
            <em>Website</em>, plataforma, aplicativos e nos demais canais de
            relacionamento da <strong>NAPOLEON</strong>;
          </p>
          <p>
            &#9679; <strong>Defini&#231;&#227;o de terceiros:</strong> todas as
            vezes que ler &#8220;terceiros&#8221;, nos referimos aos demais
            prestadores de servi&#231;os da internet que n&#227;o operam em
            nosso nome e tampouco nos nossos canais de relacionamento, mas que,
            de qualquer forma, vinculam seus bancos de dados ou outras
            ferramentas de navega&#231;&#227;o ou anal&#237;ticas com a{" "}
            <strong>NAPOLEON</strong> para fins de operacionaliza&#231;&#227;o
            dos servi&#231;os disponibilizados no nosso <em>Website</em> e
            demais canais de relacionamento;
          </p>
          <p>
            &#9679; <strong>Dados n&#227;o pessoais:</strong>{" "}
            informa&#231;&#227;o, f&#237;sica ou virtual, n&#227;o relacionada
            &#224; pessoa natural ou f&#237;sica (designados como{" "}
            <strong>Tipo 1</strong>);
          </p>
          <p>
            &#9679; <strong>Dados pessoais p&#250;blicos:</strong>
            informa&#231;&#227;o, f&#237;sica ou virtual, relacionada &#224;
            pessoa natural ou f&#237;sica tornados manifestamente p&#250;blicos
            pelo pr&#243;prio titular (designados como <strong>Tipo 2</strong>);
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Dados pessoais <em>gen&#233;ricos</em>:
            </strong>
            informa&#231;&#227;o, f&#237;sica ou virtual, relacionada &#224;
            pessoa natural ou f&#237;sica identificada ou identific&#225;vel
            (designados como <strong>Tipo 3</strong>);
          </p>
          <p>
            &#9679; <strong>Dados pessoais sens&#237;veis: </strong>
            informa&#231;&#227;o, f&#237;sica ou virtual, vinculado &#224;
            pessoa natural ou f&#237;sica que diga respeito &#224; origem racial
            ou &#233;tnica, convic&#231;&#227;o religiosa, opini&#227;o
            pol&#237;tica, filia&#231;&#227;o a sindicato ou a
            organiza&#231;&#227;o de car&#225;ter religioso, filos&#243;fico ou
            pol&#237;tico, referente &#224; sa&#250;de ou &#224; vida sexual,
            gen&#233;tico ou biom&#233;trico (designados como{" "}
            <strong>Tipo 4</strong>);<strong></strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>Dados pessoais de crian&#231;as e adolescentes:</strong>
            informa&#231;&#227;o, f&#237;sica ou virtual, relacionada &#224;
            pessoa natural ou f&#237;sica identificada ou identific&#225;vel
            relativo &#224; crian&#231;a ou adolescente (designados como do{" "}
            <strong>Tipo 5</strong>). <strong></strong>
          </p>
          <p>
            &#9679; <strong>Outros documentos importantes: </strong>para a sua
            seguran&#231;a e maior facilidade de compreens&#227;o de todo o
            conjunto de regras aplic&#225;veis &#224; prote&#231;&#227;o da sua
            privacidade e seus dados pessoais, disponibilizamos outros cinco
            documentos muito importantes (todos integrantes desta{" "}
            <strong>
              <em>Pol&#237;tica de Privacidade</em>
            </strong>
            ), ent&#227;o necess&#225;rios para que voc&#234; possa permanecer
            conectado ou, de qualquer forma, ligado &#224;s m&#250;ltiplas
            frentes de atua&#231;&#227;o da <strong>NAPOLEON</strong>, inclusive
            gerenciando sua experi&#234;ncia conosco. S&#227;o:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Termo de Uso do Website</em>:
            </strong>{" "}
            traz as nossas regras de utiliza&#231;&#227;o do nosso{" "}
            <em>Website</em>, plataforma e aplicativos vinculados,
            personalizando a sua experi&#234;ncia e garantindo seus direitos;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>:{" "}
            </strong>
            traz as nossas regras de comportamento para a excel&#234;ncia das
            rela&#231;&#245;es humanas;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>:{" "}
            </strong>
            traz as nossas regras de funcionamento desse tipo de ferramenta de
            navega&#231;&#227;o, permitindo o gerenciamento de suas
            pr&#243;prias configura&#231;&#245;es (desabilitando o que n&#227;o
            interessa), por meio de{" "}
            <strong>
              <em> Banner</em>
            </strong>{" "}
            flutuante, personalizando a sua experi&#234;ncia e garantindo seus
            direitos de titular de dados pessoais;
          </p>
          <p>
            &#9679;
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line:
              </em>
            </strong>
            traz as nossas regras de funcionamento dos outros tipos de
            tecnologias aplicadas no rastreamento, como, por exemplo,{" "}
            <em>flash cookies</em>,<em>pixels</em>, <em>tags</em>, <em>kits</em>{" "}
            de desenvolvimento de<em>software</em>, aplicativos com interfaces
            programadas, <em>Web</em> <em>beacons</em>, permitindo o
            gerenciamento de suas pr&#243;prias configura&#231;&#245;es
            (desabilitando o que n&#227;o interessa), por meio de
            <strong>
              <em> Banner</em>
            </strong>{" "}
            flutuante, personalizando a sua experi&#234;ncia e garantindo seus
            direitos de titular de dados pessoais;
          </p>
          <p>
            &#9679;{" "}
            <strong>Por que de uma pol&#237;tica de privacidade:</strong>
            sempre que buscamos novas experi&#234;ncias temos a expectativa de
            nos sentirmos especiais e bem tratados a partir das
            inten&#231;&#245;es e necessidades pr&#243;prias. N&#243;s, da{" "}
            <strong>NAPOLEON</strong>, sabemos disso, raz&#227;o pela qual
            elegemos como prioridade o oferecimento da melhor experi&#234;ncia
            nos nossos relacionamentos em termos mais customizados
            poss&#237;vel. Para tanto, precisamos de informa&#231;&#245;es
            (dados pessoais) que permitam identificar essas particularidades,
            com vistas &#224; cria&#231;&#227;o do ambiente personalizado e
            &#250;til para cada um de nossos usu&#225;rios. Procedimento este
            que ocorre de forma respons&#225;vel, transparente, legal e leal. A
            nossa{" "}
            <strong>
              <em>Pol&#237;tica de Privacidade</em>
            </strong>{" "}
            reflete e contempla todos esses cuidados.
          </p>
          <p>
            <strong>
              Parte 2: Que tipos e fontes de dados pessoais s&#227;o coletados e
              quais n&#227;o s&#227;o coletados
            </strong>
          </p>
          <p>
            &#201; importante que voc&#234; saiba que os seus dados pessoais
            ser&#227;o acessados no limite da necessidade,
            <strong>
              n&#227;o sendo objeto de tratamento dados pessoais desprovidos de
              finalidade e base legal
            </strong>
            . Al&#233;m disso, a <strong>NAPOLEON</strong>
            <strong>
              n&#227;o coleta dados pessoais de crian&#231;as e adolescentes
              (T4), bem como dados pessoais sens&#237;veis (T5)
            </strong>
            . Saiba, em detalhes, quais s&#227;o os dados pessoais e n&#227;o
            pessoais coletados por n&#243;s (automatizados ou n&#227;o),
            independente de cadastro e/ou conta gerada:
          </p>
          <p>
            &#9679; <strong>Dados cadastrais:</strong> envolvem a categoria T3,
            abrangendo: nome completo, endere&#231;o de e-mail; n&#250;meros de
            telefone e, ainda, informa&#231;&#245;es fornecidas para
            participa&#231;&#227;o de concursos, competi&#231;&#245;es e
            torneios ou advindas de respostas suas das nossas pesquisas;
          </p>
          <p>
            &#9679; <strong>Nome de usu&#225;rio e senha:</strong> para sua
            maior seguran&#231;a, voc&#234; poder&#225; configurar uma conta a
            partir de um nome de usu&#225;rio e senha. Informa&#231;&#245;es a
            serem usadas para se referir &#224; sua conta de usu&#225;rio sem
            expor seus dados pessoais cadastrais.<strong></strong>
          </p>
          <p>
            &#9679; <strong>Dados de navega&#231;&#227;o:</strong> envolvem a
            categoria T3, abrangendo dados como acesso a p&#225;ginas e
            servi&#231;os da <strong>NAPOLEON</strong>, produtos, servi&#231;os
            e categorias pesquisados ou visualizados, conte&#250;do postado,
            recomenda&#231;&#245;es, coment&#225;rios, intera&#231;&#227;o com
            outros perfis e usu&#225;rios, p&#225;ginas visitadas em outros{" "}
            <em>sites</em>, informa&#231;&#245;es contidas nas conversas do{" "}
            <em>chat</em> ou bate-papo, contagem de visualiza&#231;&#245;es, de
            t&#243;picos e perfis seguidos, al&#233;m de dados coletados
            enquanto voc&#234;, usu&#225;rio, utiliza nossa plataforma, como
            dados sobre a localiza&#231;&#227;o derivada do seu endere&#231;o de
            IP e outros meios, dados t&#233;cnicos, como os computacionais,
            aparelhos e dispositivos usados na navega&#231;&#227;o, tipo de
            conex&#227;o de rede e desempenho do provedor, da rede e do
            dispositivo utilizado. <strong></strong>
          </p>
          <p>
            &#9679;
            <strong>
              Dados de avalia&#231;&#227;o, pagamento e transa&#231;&#245;es:
            </strong>
            dados cadastrais, tipo de produto e/ou servi&#231;o, quantidade,
            valores unit&#225;rios, valor total da transa&#231;&#227;o, natureza
            da transa&#231;&#227;o financeira, informa&#231;&#245;es da conta
            banc&#225;ria e outros meios utilizados, forma de pagamento,
            endere&#231;o de cobran&#231;a, dados do cart&#227;o de cr&#233;dito
            (nome, endere&#231;o, n&#250;mero do cart&#227;o de cr&#233;dito,
            data da validade e c&#243;digo de seguran&#231;a, mas somente quando
            escolhida essa op&#231;&#227;o, pelo que ser&#227;o processados e
            transmitidos os dados para o provedor de servi&#231;os de sua
            escolha para permitir a opera&#231;&#227;o e execu&#231;&#227;o dos
            controles antifraude), do local de entrega e dicas de
            localiza&#231;&#227;o;<strong></strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>Dados de detec&#231;&#227;o de viola&#231;&#245;es:</strong>
            coletados especificamente para fins de preven&#231;&#227;o e defesa
            (investiga&#231;&#227;o e tomada de medidas) a fraudes e outros
            tipos de viola&#231;&#245;es.<strong></strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>Outros dados que poder&#227;o ser coletados:</strong> todos
            em situa&#231;&#227;o de destaque, sendo:<strong></strong>
          </p>
          <p>
            &#9679; <strong>Dados pessoais p&#250;blicos:</strong> na categoria
            T2, abrangem informa&#231;&#245;es suas tornadas manifestamente
            p&#250;blicas por sua pr&#243;pria iniciativa, mas desde que
            atreladas a novas finalidades, observados os prop&#243;sitos
            leg&#237;timos e espec&#237;ficos para o novo tratamento e
            preserva&#231;&#227;o os seus direitos de titular;<strong></strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>Dados pessoais provenientes de coligados/terceiros:</strong>{" "}
            na categoria T1 e T3, coletados fora dos canais e ambientes da{" "}
            <strong>NAPOLEON </strong>por parceiros/terceiros como, por exemplo,
            complementos dos seus dados cadastrais (nome, filia&#231;&#227;o,
            data de nascimento, CPF, RG, n&#250;mero de celular, entre outros),{" "}
            <em>score</em>
            gerado por ag&#234;ncias de cr&#233;dito, integrante de listas de
            alerta (como OFAC, CSNU e outras), ou caso seja integrante de lista
            de Pessoas Expostas Politicamente (PEP), sujeitam-se &#224;
            prote&#231;&#227;o de cr&#233;dito nos termos da LGPD 7&#186; X. Em
            caso de d&#250;vida utilize nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            por meio do
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            para maiores esclarecimentos;<strong></strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            <strong>Parte 3: Como s&#227;o coletados os dados pessoais</strong>
          </p>
          <p>
            Os dados, pessoais ou n&#227;o (categorias T1, T2 e T3 e, ainda,
            provenientes de parceiros/terceiros) ser&#227;o coletados pelos
            seguintes meios:
          </p>
          <p>
            &#9679;
            <strong>
              Por meio do acesso ao nosso <em>Website</em> ou <em>website</em>
              /plataforma/aplicativo de terceiros:
            </strong>
            temos controle dos acessos ou das navega&#231;&#245;es que ocorrem
            no nosso <em>Website</em> e, geralmente, reunimos, coletamos e
            registramos (com aux&#237;lio de parceiros ou n&#227;o) tais usos,
            sess&#245;es e informa&#231;&#245;es relacionados ao uso de{" "}
            <em>cookies</em> e outras tecnologias de rastreamento, como no caso
            do <em>flash cookies</em>,<em>pixels</em>, <em>tags</em>,{" "}
            <em>kits</em> de desenvolvimento de<em>software</em>, aplicativos
            com interfaces programadas, <em>Web</em> <em>beacons</em>, inclusive
            quando voc&#234; visita nosso <em>Website</em>a partir de{" "}
            <em>websites</em>, aplicativos ou plataformas de terceiros,
            utilizando um ou mais dispositivos, estando ou n&#227;o conectado ou
            registrado;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies:</em>
            </strong>{" "}
            n&#243;s, e determinados parceiros, coletamos informa&#231;&#245;es
            sobre sua atividade ou atividade em dispositivos associados a
            voc&#234; em nosso <em>Website</em>, plataforma ou aplicativos
            usando tecnologias de rastreamento <em>cookies</em>.{" "}
            <em>Cookies</em> s&#227;o arquivos de texto adicionados ao seu
            dispositivo eletr&#244;nico que nos auxiliam na an&#225;lise de como
            os usu&#225;rios em geral est&#227;o utilizando os nossos
            servi&#231;os e como melhor&#225;-los, aplicados ao marketing e nos
            procedimentos de an&#225;lise. O uso de <em>cookies</em> &#233;
            padr&#227;o na internet. Embora a maior parte dos navegadores da{" "}
            <em>Web</em> aceitem automaticamente, a decis&#227;o de autorizar ou
            negar &#233; sua. Para gerenciamento de suas pr&#243;prias
            configura&#231;&#245;es, personalizando a sua experi&#234;ncia por
            meio da sele&#231;&#227;o (desabilita&#231;&#227;o) de{" "}
            <em>cookies</em>, favor utilizar o
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante e visitar a{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            ;
          </p>
          <p>
            &#9679; <strong>Outras tecnologias de rastreamento: </strong>
            n&#243;s, e determinados parceiros, coletamos informa&#231;&#245;es
            sobre sua atividade ou atividade em dispositivos associados a
            voc&#234; em nosso <em>Website</em>, plataforma ou aplicativos
            usando outras tecnologias de rastreamento. O uso dessas outras
            tecnologias de rastreamento &#233; padr&#227;o na internet. Embora a
            maior parte dos navegadores da <em>Web</em> aceitem automaticamente,
            a decis&#227;o de autorizar ou negar &#233; sua. Para gerenciamento
            de suas pr&#243;prias configura&#231;&#245;es, personalizando a sua
            experi&#234;ncia por meio da sele&#231;&#227;o
            (desabilita&#231;&#227;o) de <em>cookies</em>, favor utilizar o{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante e visitar a
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
            </strong>
            ;<strong></strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>Por meio do uso de ferramentas anal&#237;ticas:</strong>
            n&#243;s, e determinados parceiros, geramos informa&#231;&#245;es
            complementares sobre sua atividade ou atividade em dispositivos
            associados a voc&#234; em nosso <em>Website</em>, plataforma ou
            aplicativos. Nestas situa&#231;&#245;es exige-se{" "}
            <strong>consentimento espec&#237;fico, </strong>o qual pode ser
            aceito ou revogado a qualquer tempo por meio do nosso{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante ou<strong> </strong>utilizando nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>:{" "}
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Por meio de terceiros:</strong> sempre provenientes
            de fontes confi&#225;veis e id&#244;neas, exclusivamente para fins
            de confer&#234;ncia e/ou confirma&#231;&#227;o de alguns dados
            pessoais, como no caso da valida&#231;&#227;o do endere&#231;o
            postal por servi&#231;os de terceiros, por exemplo. Tamb&#233;m
            quando envolver determinadas funcionalidades do <em>Website</em> da{" "}
            <strong>NAPOLEON</strong> que dependam de terceiros, como nas
            m&#237;dias sociais. Nesta ou em outras situa&#231;&#245;es
            id&#234;nticas exige-se{" "}
            <strong>consentimento espec&#237;fico, </strong>o qual pode ser
            aceito ou revogado a qualquer tempo por meio do nosso{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante ou<strong> </strong>utilizando nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>:{" "}
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ;<strong></strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Por meio do cadastro e/ou gera&#231;&#227;o de conta:
            </strong>
            n&#243;s coletamos suas informa&#231;&#245;es disponibilizadas por
            voc&#234; quando do fazimento de cadastro ou de conta, inclusive
            quando voc&#234; vincula seu perfil em um <em>website</em> ou
            plataforma de terceiros com a sua conta de registro;
          </p>
          <p>
            &#9679;
            <strong>
              Por meio da tomada de servi&#231;os do nosso <em>Website</em>:
            </strong>
            n&#243;s coletamos suas informa&#231;&#245;es disponibilizadas por
            voc&#234; quando da tomada de servi&#231;os disponibilizados no
            nosso <em>Website</em>, como no caso da participa&#231;&#227;o de
            f&#243;runs p&#250;blicos ou outras atividades, responde a
            pesquisas, visita nossos espa&#231;os f&#237;sicos, liga para as
            centrais de atendimento ou interage conosco de outras formas por
            meio de um ou mais dispositivos, seja por digita&#231;&#227;o ou
            comando de voz;
          </p>
          <p>
            &#9679;
            <strong>
              Por meio da contrata&#231;&#227;o de nossos servi&#231;os ou
              produtos:
            </strong>
            n&#243;s coletamos suas informa&#231;&#245;es disponibilizadas por
            voc&#234; quando da contrata&#231;&#227;o dos nossos servi&#231;os
            ou produtos disponibilizados no nosso <em>Website</em> ou nos demais
            canais de relacionamento, visita nossos espa&#231;os f&#237;sicos,
            liga para as centrais de atendimento ou interage conosco de outras
            formas por meio de um ou mais dispositivos, seja por
            digita&#231;&#227;o ou comando de voz;
          </p>
          <p>
            &#9679; <strong>Por meio de fontes oficiais:</strong> n&#243;s
            coletamos suas informa&#231;&#245;es dispon&#237;veis em{" "}
            <em>websites</em>
            p&#250;blicos, como di&#225;rios oficiais, tribunais, salas de
            imprensa de &#243;rg&#227;os p&#250;blicos e legisla&#231;&#227;o.
            <strong></strong>
          </p>
          <p>
            <strong>
              Parte 4: Quais as finalidades (prop&#243;sitos) dos dados pessoais
            </strong>
          </p>
          <p>
            A <strong>NAPOLEON</strong> realiza o tratamento dos seus dados
            pessoais objetivando as seguintes finalidades:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Referentes &#224;s nossas rela&#231;&#245;es de consumo:
            </strong>
          </p>
          <p>
            &#9679; Disponibilizar o seu acesso &#224;s funcionalidades da nossa{" "}
            <em>Website</em>, plataforma e aplicativos e outros servi&#231;os
            atrelados;
          </p>
          <p>
            &#9679; Auxiliar na verifica&#231;&#227;o de contas, atividades e
            qualquer outra a&#231;&#227;o ou movimenta&#231;&#227;o para
            proporcionar seguran&#231;a<strong> </strong>dentro e fora do{" "}
            <em>Website</em>, plataforma, aplicativos e dos servi&#231;os
            vinculados, investigando atividades suspeitas ou viola&#231;&#245;es
            aos termos desta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            e aos demais documentos de regramento;
          </p>
          <p>&#9679; Efetuar o seu cadastro/conta;</p>
          <p>
            &#9679; Efetuar o seu cadastro especialmente destinado a
            participa&#231;&#227;o de promo&#231;&#245;es, descontos, eventos e
            outras atividades afins;
          </p>
          <p>
            &#9679; Efetuar o seu cadastro especialmente destinado a
            participa&#231;&#227;o de eventos e outras atividades afins, com
            confec&#231;&#227;o materiais de identifica&#231;&#227;o e/ou
            promocionais;
          </p>
          <p>
            &#9679; Permitir a comunica&#231;&#227;o com voc&#234;, nosso
            usu&#225;rio, e o envio de avisos referentes ao <em>Website</em>,
            plataforma, aplicativos e aos servi&#231;os vinculados;
          </p>
          <p>
            &#9679; Gerar an&#225;lises estat&#237;sticas, por meio da
            correla&#231;&#227;o e do cruzamento de dados (pessoais ou
            n&#227;o), sobre os modos de uso do nosso <em>Website</em>,
            plataforma, aplicativos e dos servi&#231;os vinculados, de maneira
            que se possa operar, avaliar e melhorar os relacionamentos a partir
            da melhor compreens&#227;o das suas necessidades e interesses;
          </p>
          <p>
            &#9679; Compartilhar informa&#231;&#245;es com outras plataformas,
            produtos e servi&#231;os com nossos parceiros, terceiros ou daqueles
            que fazem parte do grupo econ&#244;mico da <strong>NAPOLEON</strong>{" "}
            ou dos quais se pretende pertencer ou venha a pertencer,
            beneficiando-o, nosso usu&#225;rio, por meio do aperfei&#231;oamento
            e/ou inclus&#227;o de novos servi&#231;os a serem incorporados,
            sempre de maneira coordenada para evitar quaisquer preju&#237;zos;
          </p>
          <p>
            &#9679; Enviar material de marketing ou concursos da
            <strong>NAPOLEON</strong>, a partir do seu{" "}
            <strong>consentimento espec&#237;fico</strong>, com aproveitamento
            do cen&#225;rio em campanhas publicit&#225;rias,{" "}
            <em>newsletters</em>, sendo-lhe oferecidos produtos ou servi&#231;os
            e/ou anunciadas promo&#231;&#245;es, sorteios, concursos, convites
            para participa&#231;&#227;o de pesquisas, por meio de e-mail, SMS,
            telefonemas ou WhatsApp ou seu equivalente, cujas prefer&#234;ncias
            e continuidade da participa&#231;&#227;o poder&#227;o ser realizadas
            diretamente nos e-mails recebidos, clicando na op&#231;&#227;o
            desejada;
          </p>
          <p>
            &#9679; Aprimorar as iniciativas comerciais e promocionais da{" "}
            <strong>NAPOLEON</strong> e proporcionar experi&#234;ncias
            personalizadas para voc&#234; por meio de ferramentas
            anal&#237;ticas, nosso usu&#225;rio, por meio do envio de mensagens
            sobre novos servi&#231;os, publicidade, promo&#231;&#245;es ou
            outras formas de marketing;
          </p>
          <p>
            &#9679; Avalia&#231;&#227;o de cr&#233;dito, preven&#231;&#227;o de
            fraude, como nos casos de valida&#231;&#227;o de identidade para
            atendimento ao titular, e aplica&#231;&#227;o de termos e
            condi&#231;&#245;es dos produtos e servi&#231;os, conforme os
            interesses da <strong>NAPOLEON</strong>, casos em que ser&#227;o
            avaliados os interesses comerciais da quest&#227;o para garantir que
            estes n&#227;o se sobreponham aos direitos do usu&#225;rio, titular
            de dados pessoais;
          </p>
          <p>
            &#9679; Gera&#231;&#227;o de or&#231;amentos e cota&#231;&#245;es de
            pre&#231;os para a suas contrata&#231;&#245;es conosco;
          </p>
          <p>
            &#9679; Gera&#231;&#227;o de or&#231;amentos e cota&#231;&#245;es de
            pre&#231;os perante parceiros e/ou terceiros por nosso
            interm&#233;dio;
          </p>
          <p>&#9679; Executar o contrato;</p>
          <p>
            &#9679; Atender &#224;s solicita&#231;&#245;es de demanda ou de
            queixas, aprimorando os produtos e servi&#231;os: para processar os
            pedidos de aquisi&#231;&#227;o, fornecer o produto ou servi&#231;o
            solicitado (realizar <em>recall</em>, enviar mensagens, utilizar
            carro conectado, etc.), emitir a nota fiscal ou sua fatura com base
            na utiliza&#231;&#227;o dos servi&#231;os, etc.;
          </p>
          <p>
            &#9679; Aquisi&#231;&#227;o, em seu nome, bilhetes de passagens
            a&#233;reas ou terrestres, assim como hospedagens ligadas a
            atividades promocionais;
          </p>
          <p>
            &#9679; Execu&#231;&#245;es de pr&#233;-contratos, contratos,
            procura&#231;&#245;es, emiss&#227;o de pedidos de compras;
          </p>
          <p>
            &#9679; Receber produtos ou servi&#231;os em seu nome, permitindo o
            controle do acesso aos sistemas e depend&#234;ncias da{" "}
            <strong>NAPOLEON</strong>;
          </p>
          <p>&#9679; Gest&#227;o de faturamento e contabilidade;</p>
          <p>&#9679; Avali&#231;&#227;o financeira dos consumidores;</p>
          <p>
            &#9679; Cumprimento de exig&#234;ncias legais e regulat&#243;rias;
          </p>
          <p>
            &#9679; Desenvolver estudos sobre seus interesses, comportamentos e
            demografia dos usu&#225;rios em geral para fornecimento e
            personaliza&#231;&#227;o dos nossos servi&#231;os, melhorando do
            modo cont&#237;nuo a experi&#234;ncia de navega&#231;&#227;o de
            todos os nossos usu&#225;rios em nosso <em>Website</em>, plataforma
            e aplicativos;
          </p>
          <p>
            &#9679; Compartilhar informa&#231;&#245;es com parceiros e/ou
            terceiros, na medida do necess&#225;rio apenas, com o intuito de
            viabilizar o melhor acesso e uso do nosso <em>Website</em>,
            plataforma, aplicativos e servi&#231;os vinculados, respeitando os
            limites estabelecidos na legisla&#231;&#227;o vigente;
          </p>
          <p>
            &#9679; Fornecer, para fins estat&#237;sticos, a{" "}
            <strong>NAPOLEON</strong>
            dados anonimizados (que n&#227;o permitem a sua
            identifica&#231;&#227;o de usu&#225;rio) coletados sobre clientes,
            vendas, tipos de produto e informa&#231;&#245;es de exerc&#237;cios
            do nosso <em>website</em> a terceiros confi&#225;veis e
            id&#244;neos;
          </p>
          <p>
            &#9679; Permitir o estabelecimento de novas parcerias, sempre com o
            intuito de aprimorar os Servi&#231;os oferecidos a voc&#234;, nosso
            usu&#225;rio;
          </p>
          <p>
            &#9679; Cumprimento de obriga&#231;&#245;es legais e
            regulat&#243;rias: observ&#226;ncia de regras cont&#225;beis e
            fiscais, bem como da legisla&#231;&#227;o e de regula&#231;&#245;es
            setoriais, como, por exemplo, nas hip&#243;teses de
            reten&#231;&#227;o de informa&#231;&#245;es para fins de{" "}
            <em>recall</em> de ve&#237;culos, emiss&#227;o de documentos fiscais
            ou para presta&#231;&#227;o de contas &#224; Autoridade Nacional de
            Prote&#231;&#227;o de Dados - ANPD;
          </p>
          <p>
            &#9679; Permitir auditoria legal para fins de opera&#231;&#245;es
            societ&#225;rias, como fus&#227;o, aquisi&#231;&#227;o ou venda de
            todos os ativos da a <strong>NAPOLEON</strong>, nosso grupo
            econ&#244;mico (quando existente) ou de parte de cada um deles, e
            transferir as informa&#231;&#245;es para o novo propriet&#225;rio,
            caso o novo controlador (total ou parcial) ou seus ativos sejam
            alterados;
          </p>
          <p>
            &#9679; Responder &#224;s ordens/solicita&#231;&#245;es judiciais de
            qualquer tipo, caso em que incumbir&#225; &#224;{" "}
            <strong>NAPOLEON</strong>
            analisar se &#233; necess&#225;rio faz&#234;-lo para atender as
            premissas principiol&#243;gicas maiores ou, ao contr&#225;rio, cabe
            contest&#225;-las a partir dos par&#226;metros jur&#237;dicos para,
            conforme resultado, abster-se ou atend&#234;-las em definitivo;
          </p>
          <p>
            &#9679; Outros fins, na forma e nos limites do consentimento
            correspondente concedido por voc&#234;, nosso usu&#225;rio, quando
            necess&#225;rio e sempre no limite do que for permitido ou exigido
            pela lei.
          </p>
          <p>
            &#9679;
            <strong>
              Referentes &#224;s nossas rela&#231;&#245;es laborais e/ou
              comerciais:
            </strong>
          </p>
          <p>
            &#9679; Disponibilizar o seu acesso &#224;s funcionalidades da nossa{" "}
            <em>Website</em>, plataforma e aplicativos;
          </p>
          <p>
            &#9679; Auxiliar na verifica&#231;&#227;o de contas, atividades e
            qualquer outra a&#231;&#227;o ou movimenta&#231;&#227;o para
            proporcionar seguran&#231;a<strong> </strong>dentro e fora do
            Website, plataforma, aplicativos e dos servi&#231;os vinculados,
            investigando atividades suspeitas ou viola&#231;&#245;es aos termos
            desta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            e aos demais documentos de regramento;
          </p>
          <p>&#9679; Efetuar o seu cadastro/conta;</p>
          <p>
            &#9679; Efetuar o seu cadastro especialmente destinado a
            participa&#231;&#227;o de promo&#231;&#245;es, descontos, eventos e
            outras atividades afins;
          </p>
          <p>
            &#9679; Efetuar o seu cadastro especialmente destinado a
            participa&#231;&#227;o de eventos e outras atividades afins, com
            confec&#231;&#227;o materiais de identifica&#231;&#227;o e/ou
            promocionais;
          </p>
          <p>
            &#9679; Permitir a comunica&#231;&#227;o com voc&#234;, nosso
            usu&#225;rio, e o envio de avisos referentes ao <em>Website</em>,
            plataforma, aplicativos e aos servi&#231;os vinculados;
          </p>
          <p>
            &#9679; Gerar an&#225;lises estat&#237;sticas, por meio da
            correla&#231;&#227;o e do cruzamento de dados (pessoais ou
            n&#227;o), sobre os modos de uso do nosso <em>Website</em>,
            plataforma, aplicativos e dos servi&#231;os vinculados, de maneira
            que se possa operar, avaliar e melhorar os relacionamentos a partir
            da melhor compreens&#227;o das suas necessidades e interesses;
          </p>
          <p>
            &#9679; Compartilhar informa&#231;&#245;es com outras plataformas,
            produtos e servi&#231;os com nossos parceiros, terceiros ou daqueles
            que fazem parte do grupo econ&#244;mico da{" "}
            <strong>NAPOLEON </strong>ou dos quais se pretende pertencer ou
            venha a pertencer, beneficiando-o, nosso usu&#225;rio, por meio do
            aperfei&#231;oamento e/ou inclus&#227;o de novos servi&#231;os a
            serem incorporados, sempre de maneira coordenada para evitar
            quaisquer preju&#237;zos;
          </p>
          <p>
            &#9679; Enviar material de marketing ou concursos da
            <strong>NAPOLEON</strong>, a partir do seu{" "}
            <strong>consentimento espec&#237;fico</strong>, com aproveitamento
            do cen&#225;rio em campanhas publicit&#225;rias,{" "}
            <em>newsletters</em>, sendo-lhe oferecidos produtos ou servi&#231;os
            e/ou anunciadas promo&#231;&#245;es, sorteios, concursos, convites
            para participa&#231;&#227;o de pesquisas, por meio de e-mail, SMS,
            telefonemas ou WhatsApp ou seu equivalente, cujas prefer&#234;ncias
            e continuidade da participa&#231;&#227;o poder&#227;o ser realizadas
            diretamente nos e-mails recebidos, clicando na op&#231;&#227;o
            desejada;
          </p>
          <p>
            &#9679; Aprimorar as iniciativas comerciais e promocionais da{" "}
            <strong>NAPOLEON</strong> e proporcionar experi&#234;ncias
            personalizadas para voc&#234; por meio de ferramentas
            anal&#237;ticas, nosso usu&#225;rio, por meio do envio de mensagens
            sobre novos servi&#231;os, publicidade, promo&#231;&#245;es ou
            outras formas de marketing;
          </p>
          <p>
            &#9679; Avalia&#231;&#227;o de cr&#233;dito, preven&#231;&#227;o de
            fraude, como nos casos de valida&#231;&#227;o de identidade para
            atendimento ao titular, e aplica&#231;&#227;o de termos e
            condi&#231;&#245;es dos produtos e servi&#231;os, conforme os
            interesses da <strong>NAPOLEON,</strong> casos em que ser&#227;o
            avaliados os interesses comerciais da quest&#227;o para garantir que
            estes n&#227;o se sobreponham aos direitos do usu&#225;rio, titular
            de dados pessoais;
          </p>
          <p>
            &#9679; Gera&#231;&#227;o de or&#231;amentos e cota&#231;&#245;es de
            pre&#231;os para a suas contrata&#231;&#245;es conosco;
          </p>
          <p>
            &#9679; Gera&#231;&#227;o de or&#231;amentos e cota&#231;&#245;es de
            pre&#231;os perante parceiros e/ou terceiros por nosso
            interm&#233;dio;
          </p>
          <p>&#9679; Executar o contrato;</p>
          <p>
            &#9679; Atender &#224;s suas solicita&#231;&#245;es, aprimorando os
            produtos e servi&#231;os: para processar os pedidos de
            aquisi&#231;&#227;o, fornecer o produto ou servi&#231;o solicitado
            (realizar <em>recall</em>, enviar mensagens, utilizar carro
            conectado, etc.), emitir a nota fiscal ou sua fatura com base na
            utiliza&#231;&#227;o dos servi&#231;os e outras atividades afins;
          </p>
          <p>
            &#9679; Execu&#231;&#245;es de pr&#233;-contratos, contratos,
            procura&#231;&#245;es, emiss&#227;o de pedidos de compras;
          </p>
          <p>
            &#9679; Receber produtos ou servi&#231;os, permitindo o controle do
            acesso aos sistemas e depend&#234;ncias da <strong>NAPOLEON</strong>
            ;
          </p>
          <p>&#9679; Gest&#227;o de faturamento e contabilidade;</p>
          <p>
            &#9679; Cumprimento de exig&#234;ncias legais e regulat&#243;rias;
          </p>
          <p>
            &#9679; Desenvolver estudos sobre seus interesses, comportamentos e
            demografia dos usu&#225;rios em geral para fornecimento e
            personaliza&#231;&#227;o dos nossos servi&#231;os, melhorando do
            modo cont&#237;nuo a experi&#234;ncia de navega&#231;&#227;o de
            todos os nossos usu&#225;rios em nosso Website, plataforma e
            aplicativos;
          </p>
          <p>
            &#9679; Compartilhar informa&#231;&#245;es com parceiros e/ou
            terceiros, na medida do necess&#225;rio apenas, com o intuito de
            viabilizar o melhor acesso e uso do nosso <em>Website</em>,
            plataforma, aplicativos e servi&#231;os vinculados, respeitando os
            limites estabelecidos na legisla&#231;&#227;o vigente;
          </p>
          <p>
            &#9679; Fornecer, para fins estat&#237;sticos, a{" "}
            <strong>NAPOLEON</strong>
            dados anonimizados (que n&#227;o permitem a sua
            identifica&#231;&#227;o de usu&#225;rio) coletados sobre clientes,
            vendas, tipos de produto e informa&#231;&#245;es de exerc&#237;cios
            do nosso <em>website</em> a terceiros confi&#225;veis e
            id&#244;neos;
          </p>
          <p>
            &#9679; Permitir o estabelecimento de novas parcerias, sempre com o
            intuito de aprimorar os Servi&#231;os oferecidos a voc&#234;, nosso
            usu&#225;rio;
          </p>
          <p>
            &#9679; Cumprimento de obriga&#231;&#245;es legais e
            regulat&#243;rias: observ&#226;ncia de regras cont&#225;beis e
            fiscais, bem como da legisla&#231;&#227;o e de regula&#231;&#245;es
            setoriais, como, por exemplo, nas hip&#243;teses de
            reten&#231;&#227;o de informa&#231;&#245;es para fins de{" "}
            <em>recall</em> de produtos, emiss&#227;o de documentos fiscais ou
            para presta&#231;&#227;o de contas &#224; Autoridade Nacional de
            Prote&#231;&#227;o de Dados - ANPD;
          </p>
          <p>
            &#9679; Permitir auditoria legal para fins de opera&#231;&#245;es
            societ&#225;rias, como fus&#227;o, aquisi&#231;&#227;o ou venda de
            todos os ativos da <strong>NAPOLEON</strong>, nosso grupo
            econ&#244;mico (quando existente) ou de parte de cada um deles, e
            transferir as informa&#231;&#245;es para o novo propriet&#225;rio,
            caso o novo controlador (total ou parcial) ou seus ativos sejam
            alterados;
          </p>
          <p>
            &#9679; Responder &#224;s ordens/solicita&#231;&#245;es judiciais de
            qualquer tipo, caso em que incumbir&#225; &#224;{" "}
            <strong>NAPOLEON</strong>
            analisar se &#233; necess&#225;rio faz&#234;-lo para atender as
            premissas principiol&#243;gicas maiores ou, ao contr&#225;rio, cabe
            contest&#225;-las a partir dos par&#226;metros jur&#237;dicos para,
            conforme resultado, abster-se ou atend&#234;-las em definitivo;
          </p>
          <p>
            &#9679; Outros fins, na forma e nos limites do consentimento
            correspondente concedido por voc&#234;, nosso usu&#225;rio, quando
            necess&#225;rio e sempre no limite do que for permitido ou exigido
            pela lei.
          </p>
          <p>
            <strong>
              Parte 5: Quais as bases legais para o tratamento de dados pessoais
            </strong>
          </p>
          <p>
            O rol completo de hip&#243;teses legais para o tratamento de dados
            pessoais encontra-se elencada na Lei Federal n&#186; 13.709, de 14
            de agosto de 2018 (Lei Geral de Prote&#231;&#227;o de Dados Pessoais
            &#8211; LGPD), variando conforme os diferentes tipos de dados
            pessoais. Com rela&#231;&#227;o ao tratamento de dados pessoais
            praticado pela <strong>NAPOLEON</strong> e prevista nesta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            , nossas bases legais utilizadas podem variar entre:
          </p>
          <p>&#9679; Consentimento fornecido pelo titular de dados pessoais;</p>
          <p>
            &#9679; Procedimentos preliminares dos contratos (a pedido do
            titular de dados);
          </p>
          <p>&#9679; Execu&#231;&#245;es de contratos;</p>
          <p>
            &#9679; Exerc&#237;cio regular de direitos em processo judicial,
            administrativo ou arbitral;
          </p>
          <p>&#9679; Leg&#237;timo interesse;</p>
          <p>&#9679; Preven&#231;&#227;o &#224; fraude; e,</p>
          <p>&#9679; Cumprimento das obriga&#231;&#245;es legais.</p>
          <p>
            <strong>
              Parte 6: Casos de compartilhamento dos dados pessoais,
              transfer&#234;ncia internacional de dados pessoais e as
              obriga&#231;&#245;es dos parceiros e terceiros
            </strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>Casos de compartilhamento dos dados pessoais</strong>
          </p>
          <p>
            A <strong>NAPOLEON</strong>,<strong> </strong>declara, para todos os
            fins, n&#227;o comercializar dados pessoais. O compartilhamento
            existente dos seus dados pessoais coletados no nosso{" "}
            <em>Website</em>, plataforma, aplicativos e servi&#231;os vinculados
            com outras empresas do nosso grupo, com prestadores de
            servi&#231;os, parceiros, terceiros, &#243;rg&#227;os reguladores e
            fiscalizadores, ser&#225; sempre dentro dos limites desta{" "}
            <strong>
              <em>Pol&#237;tica de Privacidade</em>
            </strong>{" "}
            e da legisla&#231;&#227;o vigente e dos limites da necessidade
            razo&#225;vel, com vista &#224; execu&#231;&#227;o das atividades
            supra referidas na Parte 4 e tamb&#233;m para:
          </p>
          <p>
            &#9679; Viabilizar e aprimorar a presta&#231;&#227;o dos nossos
            produtos e servi&#231;os entre as empresas do grupo{" "}
            <strong>NAPOLEON</strong>, localizadas no territ&#243;rio nacional
            ou internacional;
          </p>
          <p>
            &#9679; Viabilizar e aprimorar a presta&#231;&#227;o dos nossos
            produtos e servi&#231;os, sendo que nestes casos o tratamento de
            dados pessoais ocorrer&#225; em conformidade com os termos desta{" "}
            <strong>Pol&#237;tica de Privacidade</strong>, e com os mesmos
            n&#237;veis de seguran&#231;a nela indicados;
          </p>
          <p>
            &#9679; Auxiliar no oferecimento ou na opera&#231;&#227;o do nosso{" "}
            <em>Website</em>, plataforma, aplicativos e servi&#231;os
            v&#237;nculos, por meio do<strong> </strong>compartilhamento de
            dados pessoais com fornecedores e prestadores de servi&#231;os;
          </p>
          <p>
            &#9679; Permitir que parceiros e terceiros possam realizar atividade
            de marketing, gest&#227;o de campanhas de marketing, enriquecimento
            de base de dados e armazenamento em nuvem an&#225;lises de marca ou
            direcionamento de publicidade com base em interesses ou atividades
            similares para a <strong>NAPOLEON</strong>;
          </p>
          <p>
            &#9679; Possibilitar que parceiros ou terceiros possam desenvolver
            promo&#231;&#245;es e a&#231;&#245;es conjuntas (hip&#243;tese em
            que ser&#225; adquirido um produto ou servi&#231;o de terceiro por
            meio dos canais de relacionamento da <strong>NAPOLEON</strong>);
          </p>
          <p>
            &#9679; Permitir que parceiros ou terceiros especializados na
            avalia&#231;&#227;o de cr&#233;dito possam atuar, seja na
            autentica&#231;&#227;o, preven&#231;&#227;o a fraudes e
            prote&#231;&#227;o ao cr&#233;dito em geral;
          </p>
          <p>
            &#9679; Analisar e solucionar problemas t&#233;cnicos, relacionados
            a fraudes e &#224; seguran&#231;a do nosso <em>Website</em>,
            plataforma, aplicativos e dos servi&#231;os vinculados da{" "}
            <strong>NAPOLEON</strong>;
          </p>
          <p>
            &#9679; Permitir auditoria legal para fins de opera&#231;&#245;es
            societ&#225;rias, como fus&#227;o, aquisi&#231;&#227;o ou venda de
            todos os ativos da <strong>NAPOLEON</strong>, seu grupo
            econ&#244;mico ou de parte de cada um deles, e transferir as
            informa&#231;&#245;es para o novo propriet&#225;rio, caso a
            propriedade ou o controle total ou parcial da{" "}
            <strong>NAPOLEON</strong>, ou seus ativos, sejam alterados;
          </p>
          <p>
            &#9679; Permitir a realiza&#231;&#227;o de parcerias por parte da{" "}
            <strong>NAPOLEON</strong>, por meio do compartilhamento de dados
            pessoais na medida do necess&#225;rio &#224; concretiza&#231;&#227;o
            destas novas rela&#231;&#245;es comerciais;
          </p>
          <p>
            &#9679; Responder a solicita&#231;&#245;es judiciais e cumprir
            requisitos das legisla&#231;&#245;es aplic&#225;veis,
            situa&#231;&#245;es nas quais os dados poder&#227;o ser
            compartilhados pela <strong>NAPOLEON</strong> com autoridades
            policiais &#243;rg&#227;os governamentais autoridades reguladoras,
            tribunais e outras autoridades p&#250;blicas, quando formos
            obrigados ou autorizados, nos termos da legisla&#231;&#227;o
            vigente;
          </p>
          <p>
            &#9679; Gerar e divulgar estat&#237;sticas de maneira p&#250;blica
            (ex.: em redes sociais, na m&#237;dia ou junto a parceiros
            comerciais), podendo incluir informa&#231;&#245;es, dados e
            tend&#234;ncias demogr&#225;ficas oriundos dos seus dados pessoais,
            os quais ser&#227;o divulgados de maneira agregada;
          </p>
          <p>
            &#9679; Permitir o acesso a dados pessoais disponibilizados de
            maneira p&#250;blica, como (i) dados do seu perfil de usu&#225;rio,
            compartilhados com motores de busca e dentro do pr&#243;prio{" "}
            <em>Website</em>, plataforma, aplicativos e servi&#231;os vinculados
            da <strong>NAPOLEON</strong>, (ii) suas not&#237;cias, artigos ou
            modelos de pe&#231;as processuais publicadas, e interagem com
            documentos, por meio de coment&#225;rios e vota&#231;&#245;es, e
            (iii) seus dados pessoais presentes em documentos obtidos de fontes
            oficiais;
          </p>
          <p>
            &#9679; Servi&#231;os de emerg&#234;ncia (chamada para os
            servi&#231;os de emerg&#234;ncia), o que incluir&#225; a partilha da
            sua localiza&#231;&#227;o aproximada;
          </p>
          <p>
            &#9679; Mediante respectiva autoriza&#231;&#227;o sua, nosso
            usu&#225;rio, nos demais casos nos quais venha surgir a necessidade
            de compartilhamento dos seus dados pessoais, nos limites da
            legisla&#231;&#227;o vigente e com altos n&#237;veis de
            seguran&#231;a;
          </p>
          <p>
            &#9679; <strong>Destaque:</strong> &#233; poss&#237;vel que a{" "}
            <strong>NAPOLEON</strong> recorra &#224; subcontrata&#231;&#227;o de
            empresas para a realiza&#231;&#227;o do tratamento total ou parcial
            dos seus dados pessoais, nos termos permitidos pela Lei Federal
            n&#186; 13.709, de 14 de agosto de 2018 (Lei Geral de
            Prote&#231;&#227;o de Dados Pessoais &#8211; LGPD). Hip&#243;tese em
            que todas ficar&#227;o obrigadas nos termos dos contratos
            celebrados, a guardar sigilo e a garantir a privacidade e a
            seguran&#231;a dos dados pessoais a que tiverem acesso, n&#227;o
            podendo utilizar esses dados para quaisquer outros fins, nem os
            relacionar com outros dados que possuam.
          </p>
          <p>
            &#9679;{" "}
            <strong>Transfer&#234;ncia internacional de dados pessoais</strong>
          </p>
          <p>
            &#9679; Caso a <strong>NAPOLEON</strong> precise enviar as suas
            informa&#231;&#245;es para fora do Brasil em opera&#231;&#245;es
            padr&#245;es (casos listados antes), adotaremos todas as medidas de
            seguran&#231;a necess&#225;rias, bem como asseguraremos que estas
            transfer&#234;ncias ocorram mediante a celebra&#231;&#227;o de
            acordos com cl&#225;usulas contratuais espec&#237;ficas para esta
            finalidade ou demais garantias previstas na legisla&#231;&#227;o
            aplic&#225;vel, especialmente caso o pa&#237;s destinat&#225;rio dos
            dados n&#227;o proporcione um alto n&#237;vel de prote&#231;&#227;o
            de dados pessoais adequado ao previsto na legisla&#231;&#227;o
            brasileira;
          </p>
          <p>
            &#9679; Nos casos de utiliza&#231;&#227;o de servi&#231;os
            computacionais em nuvem para processamento ou armazenamento de dados
            localizados fora do Brasil, tamb&#233;m em outras
            opera&#231;&#245;es computacionais ou comerciais globais, a{" "}
            <strong>NAPOLEON</strong> sempre tomar&#225; as medidas
            cab&#237;veis para prote&#231;&#227;o dos seus dados e privacidade,
            atendendo a legisla&#231;&#227;o nacional vigente, bem como das
            demais legisla&#231;&#245;es dos outros pa&#237;ses envolvidos;
          </p>
          <p>
            &#9679; Para essas opera&#231;&#245;es antes descritas
            (padr&#245;es) exige-se{" "}
            <strong>consentimento espec&#237;fico, </strong>o qual pode ser
            aceito ou revogado a qualquer tempo por meio do<strong> </strong>
            nosso<strong> </strong>
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante<strong> </strong>ou<strong> </strong>utilizando nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>{" "}
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            .
          </p>
          <p>
            &#9679;{" "}
            <strong>As obriga&#231;&#245;es dos parceiros e terceiros</strong>
          </p>
          <p>
            A <strong>NAPOLEON</strong> n&#227;o comercializa dados pessoais. Os
            compartilhamentos de dados pessoais, quando existentes, limitam-se
            &#224;s hip&#243;teses antes listadas, casos em que exigiremos dos
            parceiros e/ou terceiros a observ&#226;ncia de todas as medidas de
            seguran&#231;a, atreladas a celebra&#231;&#227;o de acordos com
            cl&#225;usulas contratuais espec&#237;ficas para esta finalidade,
            vinculadas &#224;s garantias previstas na legisla&#231;&#227;o
            aplic&#225;vel, de modo a proporcionar o alto n&#237;vel de
            prote&#231;&#227;o aos dados pessoais.<strong></strong>
          </p>
          <p>
            <strong>
              Parte 7: Seus direitos, mecanismos de autogerenciamento e
              plataforma de gest&#227;o de consentimento (CMP) e resumo dos
              controles e escolhas:
            </strong>
          </p>
          <p>
            Fornecemos a voc&#234;, nosso usu&#225;rio, a capacidade de exercer
            sua autogest&#227;o de relacionamento por meio do{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante quando o assunto &#233; tratamento dos seus dados
            pessoais. Para tanto, enumeramos direitos, apontamentos os
            mecanismos de autogerenciamento que permitem controles e escolhas,
            bem como indicamos a plataforma de gest&#227;o de consentimento
            (CMP) ligada ao{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante, tudo para garantir que as premissas ou valores desta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            sejam observadas, tendo a certeza de que a sua privacidade esteja
            resguardada em todos os sentidos.
          </p>
          <p>
            &#9679; <strong>Direitos:</strong> adotamos o roteiro{" "}
            <strong>
              <em>ARCO!</em>
            </strong>{" "}
            para melhor visualiza&#231;&#227;o e compreens&#227;o de todos os
            direitos estabelecidos na legisla&#231;&#227;o vigente, bastando
            clicar no &#8220;direito&#8221; para acionar o comando. Tudo muito
            f&#225;cil e pr&#225;tico. Vale conferir a seguir:
          </p>
          <p>
            &#9679; <strong>A &#8211; Acesso</strong> aos seus dados pessoais
            objeto de tratamento por n&#243;s;
          </p>
          <p>
            &#9679; <strong>R &#8211; Restri&#231;&#227;o</strong> abrangendo
            <strong>Anonimiza&#231;&#227;o</strong>, <strong>Bloqueio</strong>{" "}
            ou a <strong>Elimina&#231;&#227;o (1)</strong> dos seus dados
            pessoais desnecess&#225;rios, excessivos ou tratados em
            desconformidade, e, ainda, a{" "}
            <strong>Elimina&#231;&#227;o (2)</strong> dos dados pessoais
            desprovidos de consentimento, quando for o caso;
          </p>
          <p>
            &#9679; <strong>R &#8211; Retifica&#231;&#227;o</strong> ou
            corre&#231;&#227;o dos seus dados pessoais incompletos, inexatos ou
            desatualizados;
          </p>
          <p>
            &#9679; <strong>R &#8211; Revoga&#231;&#227;o</strong> do
            consentimento a qualquer momento mediante manifesta&#231;&#227;o
            expressa, sempre de forma gratuita e facilitada;
          </p>
          <p>
            &#9679; <strong>R &#8211; Revis&#227;o </strong>das decis&#245;es
            tomadas por n&#243;s unicamente com base no tratamento automatizado
            de dados pessoais que afetem seus interesses;
          </p>
          <p>
            &#9679; <strong>C &#8211; Cancelamento</strong> ou
            elimina&#231;&#227;o dos seus dados pessoais ap&#243;s o
            t&#233;rmino do seu tratamento de dados pessoais, ressalvadas as
            hip&#243;teses de guarda obrigat&#243;ria de registros previstas na
            legisla&#231;&#227;o vigente e nos demais casos previstos em lei;
          </p>
          <p>
            &#9679; <strong>Esclarecimento:</strong> n&#227;o confundir{" "}
            <strong>Cancelamento</strong> com{" "}
            <strong>Direito de Esquecimento</strong>, afinal este &#250;ltimo
            n&#227;o est&#225; previsto na legisla&#231;&#227;o brasileira e
            praticamente n&#227;o est&#225; ao alcance da{" "}
            <strong>NAPOLEON</strong>;
          </p>
          <p>
            &#9679; <strong>O &#8211; Oposi&#231;&#227;o </strong>contra o
            tratamento dos seus dados pessoais quando apoiado numa das
            hip&#243;teses de dispensa de consentimento;
          </p>
          <p>
            &#9679; <strong>O &#8211; Portabilidade </strong>ou transmiss&#227;o
            dos seus dados pessoais tratados por n&#243;s a outro prestador de
            servi&#231;o ou produto;
          </p>
          <p>
            &#9679; <strong>! &#8211; Informa&#231;&#227;o (1)</strong>{" "}
            confirmando a exist&#234;ncia do tratamento dos seus dados pessoais;
          </p>
          <p>
            &#9679; <strong>! &#8211; Informa&#231;&#227;o (2) </strong>das
            entidades p&#250;blicas e privadas com compartilhamento dos seus
            dados pessoais;
          </p>
          <p>
            &#9679; <strong>! &#8211; Informa&#231;&#227;o (3) </strong>quanto
            &#224;s possibilidades de negativa de consentimento e suas
            consequ&#234;ncias;
          </p>
          <p>
            &#9679; <strong>! &#8211; Informa&#231;&#227;o (4) </strong>no caso
            de altera&#231;&#227;o de finalidade, forma e dura&#231;&#227;o do
            tratamento, identifica&#231;&#227;o do controlador e do
            Encarregado/DPO e do uso compartilhado dos dados pessoais.
          </p>
          <p>
            &#9679; <strong>Mecanismos de autogerenciamento:</strong> suas
            decis&#245;es, suas escolhas, abrangendo:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Cookies Banners:</em>
            </strong>{" "}
            trata-se daquela janelinha (<em>pop-up</em>) destacada dentro do
            nosso <em>Website</em> com o objetivo de precisar sua
            utiliza&#231;&#227;o e finalidade em rela&#231;&#227;o aos{" "}
            <em>cookies</em> adotados ou descartados. Clique no t&#237;tulo
            deste t&#243;pico para ser transferido para l&#225; ou clique em{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>{" "}
            para maiores detalhamentos;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Outras tecnologias de rastreamento:</em>
            </strong>
            trata-se dos dados pessoais coletados pelo nosso <em>Website</em>,
            plataforma ou aplicativos usando outras tecnologias de rastreamento,
            procedimento padr&#227;o na maior parte dos navegadores da{" "}
            <em>Web</em>, mas que entendemos ser um direito seu, nosso
            usu&#225;rio, autorizar ou negar, bastando valer-se da janelinha
            (pop-up) destacada dentro do nosso <em>Website</em>. Clique no
            t&#237;tulo deste t&#243;pico para ser transferido para l&#225; ou
            clique em
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
            </strong>
            para maiores detalhamentos;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Global Positioning System</em> (GPS):
            </strong>{" "}
            trata-se das informa&#231;&#245;es enviadas pelo dispositivo
            m&#243;vel utilizado para fins de detec&#231;&#227;o da sua
            localiza&#231;&#227;o, a qual se exige{" "}
            <strong>consentimento espec&#237;fico</strong>, o qual pode ser
            aceito ou revogado a qualquer tempo por meio do nosso{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante ou<strong> </strong>utilizando nosso
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio </em>
              no
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ;
          </p>
          <p>
            &#9679;{" "}
            <strong>Dados pessoais provenientes de coligados/terceiros:</strong>
            trata-se dos dados pessoais coletados fora dos canais e ambientes da{" "}
            <strong>NAPOLEON</strong> por parceiros/terceiros, sujeitando-se
            &#224; prote&#231;&#227;o de cr&#233;dito nos termos da LGPD 7&#186;
            X. Em caso de d&#250;vida utilize nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            por meio do
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            para maiores esclarecimentos;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Dados pessoais provenientes de conta em rede social:
            </strong>{" "}
            caso voc&#234; realize seu cadastro por meio de uma conta em rede
            social, privada ou p&#250;blica, exige-se{" "}
            <strong>consentimento espec&#237;fico</strong> a ser declinado na
            pr&#243;pria rede social, da qual a <strong>NAPOLEON</strong>{" "}
            n&#227;o possui qualquer controle;
          </p>
          <p>
            &#9679;
            <strong>
              Informa&#231;&#245;es provenientes de ferramentas anal&#237;ticas:
            </strong>
            trata-se das informa&#231;&#245;es complementares sobre sua
            atividade ou atividade em dispositivos associados a voc&#234; em
            nosso <em>Website</em>, plataforma ou aplicativos, exigindo-se{" "}
            <strong>consentimento espec&#237;fico</strong>, podendo ser revogado
            a qualquer tempo, por meio do{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante ou utilizando nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            ;
          </p>
          <p>
            &#9679;{" "}
            <strong>Informa&#231;&#245;es provenientes de terceiros:</strong>
            trata-se das informa&#231;&#245;es de confer&#234;ncia e/ou
            confirma&#231;&#227;o de alguns dados pessoais ou de
            valida&#231;&#227;o das funcionalidades do <em>Website</em> da{" "}
            <strong>NAPOLEON</strong> que dependam de terceiros, sujeitando-se
            &#224; prote&#231;&#227;o de cr&#233;dito nos termos da LGPD 7&#186;
            X. Em caso de d&#250;vida utilize nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            por meio do
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            para maiores esclarecimentos;
          </p>
          <p>
            &#9679;
            <strong>
              Opera&#231;&#245;es de transfer&#234;ncia internacional de dados
              pessoais:
            </strong>
            nas opera&#231;&#245;es padr&#245;es de transfer&#234;ncia
            internacional de dados pessoais exige-se{" "}
            <strong>consentimento espec&#237;fico</strong>, o qual pode ser
            aceito ou revogado a qualquer tempo por meio do nosso
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante ou utilizando nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>{" "}
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ;
          </p>
          <p>
            &#9679; <strong>Procedimentos preliminares dos contratos:</strong>{" "}
            trata-se das situa&#231;&#245;es pr&#233;-contrato em que se exige
            do titular de dados pessoais{" "}
            <strong>consentimento espec&#237;fico</strong>, podendo ser revogado
            em tempo h&#225;bil por meio do nosso
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio </em>
            </strong>
            no <strong> </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ;
          </p>
          <p>
            &#9679; <strong>Procedimentos de contatos:</strong> trata-se das
            situa&#231;&#245;es para fins de cadastro inicial no nosso Website,
            em que se exige do titular de dados pessoais{" "}
            <strong>consentimento espec&#237;fico</strong>, podendo ser revogado
            em tempo h&#225;bil por meio do nosso
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio </em>
            </strong>
            no <strong> </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            <em>.</em>
          </p>
          <p>
            &#9679;{" "}
            <strong>Plataforma de gest&#227;o de consentimento (CMP):</strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Consent Management Platform:</em>
            </strong>{" "}
            CMP &#233; uma ferramenta automatizada que serve para gerir o seu
            consentimento, nosso usu&#225;rio, quando se tratar de tratamento de
            dados pessoais que precise de consentimentos espec&#237;ficos
            atrelados a objetivos legais previamente explicitados. A nossa CMP
            &#233; o{" "}
            <strong>
              <em>Banner</em>
            </strong>
            flutuante, possibilitando a voc&#234; saber o que foi consentido,
            conferindo a oportunidade de rever seus consentimentos, podendo
            revis&#225;-los e at&#233; revog&#225;-los, conforme a
            legisla&#231;&#227;o vigente. Essa ferramenta permite que n&#227;o
            tratemos nenhum dado pessoal de consentimento obrigat&#243;rio
            desautorizado da legisla&#231;&#227;o vigente.
          </p>
          <p>
            &#9679; <strong>Resumo dos controles e escolhas:</strong> a partir
            dos instrumentos acima descritos, fornecemos a voc&#234;, nosso
            usu&#225;rio, a capacidade de exercer certos controles e escolhas em
            rela&#231;&#227;o &#224; nossa coleta, uso e compartilhamento de
            suas informa&#231;&#245;es. Confira a seguir um resumo
            exemplificativo dessas possibilidades:
          </p>
          <p>
            &#9679; Corre&#231;&#227;o, atualiza&#231;&#227;o e exclus&#227;o da
            sua conta de registro (<em>logout</em>);
          </p>
          <p>
            &#9679; Escolher se receber&#225; ou n&#227;o ofertas e
            promo&#231;&#245;es de nossos produtos e servi&#231;os, ou produtos
            e servi&#231;os que acreditamos ser de seu interesse;
          </p>
          <p>
            &#9679; Controlar publicidade segmentada de muitas redes de
            an&#250;ncios e parceiros, trocas de dados, an&#225;lises de
            marketing e provedores de servi&#231;o de publicidade e marketing
            digital, visitando:
          </p>
          <p>
            &#9679; O <em>website</em> do Conselho Nacional de
            Autorregulamenta&#231;&#227;o Publicit&#225;ria &#8211; CONAR
            (Brasil);
          </p>
          <p>
            &#9679; O <em>website</em> da European Interactive Digital
            Advertising Alliance &#8211; EDAA (Europa);
          </p>
          <p>
            &#9679; O <em>website</em> da Digital Advertising Alliance &#8211;
            DAA (EUA).
          </p>
          <p>
            &#9679; Optar por controlar a publicidade segmentada a ser recebida
            nos aplicativos usando as configura&#231;&#245;es e escolhas
            disponibilizadas a voc&#234; por meio de seu(s) dispositivo(s), por
            exemplo, redefinindo o identificador de publicidade do dispositivo
            e/ou desativando os an&#250;ncios com base em interesses;
          </p>
          <p>
            &#9679; Escolhendo limitar sua participa&#231;&#227;o nas
            pr&#225;ticas gerais de medi&#231;&#227;o digital, quando existente;
          </p>
          <p>
            &#9679; Solicitar acesso &#224;s informa&#231;&#245;es pessoais que
            mantemos sobre voc&#234; e &#224;quelas que corrigimos ou
            exclu&#237;mos.
          </p>
          <p>
            <strong>
              Parte 8: Seguran&#231;a, armazenamento e exclus&#227;o dos dados
              pessoais
            </strong>
          </p>
          <p>
            <strong>Seguran&#231;a dos dados pessoais e da privacidade:</strong>
            n&#243;s, da <strong>NAPOLEON</strong>, empenhamo-nos na tomada de
            todos os tipos de medidas administrativas, t&#233;cnicas e
            f&#237;sicas de cunho preventivo em rela&#231;&#227;o &#224;
            seguran&#231;a e privacidade durante a execu&#231;&#227;o de suas
            atividades envolvendo dados pessoais, desde o treinamento e
            conscientiza&#231;&#227;o dos colaboradores, at&#233; o uso de
            tecnologias de criptografia e <em>firewall</em> avan&#231;adas. Com
            isso busca-se proteger os dados pessoas contra acessos n&#227;o
            autorizados, situa&#231;&#245;es acidentais ou il&#237;citas de
            destrui&#231;&#227;o, perda, altera&#231;&#227;o
            comunica&#231;&#227;o ou qualquer forma de tratamento inadequado ou
            il&#237;cito, raz&#227;o pela qual as nossas pr&#225;ticas
            relacionadas &#224; seguran&#231;a da informa&#231;&#227;o
            ser&#227;o norteadas pela legisla&#231;&#227;o aplic&#225;vel, pelas
            melhores pr&#225;ticas do mercado (<em>data centers</em> localizados
            no Brasil ou no exterior) e por nossas pol&#237;ticas internas
            relacionadas ao tema.
          </p>
          <p>
            &#9679; <strong>Alerta:</strong> &#201; importante saber que nenhum{" "}
            <em>website</em>, plataforma, aplicativos ou servi&#231;os
            vinculados (todos dispon&#237;veis no meio virtual) s&#227;o
            completamente seguros, mesmo que todas as medidas de seguran&#231;a
            conhecidas e poss&#237;veis sejam adotadas. Por isso, surgindo
            preocupa&#231;&#227;o ou suspeita de risco dos seus dados pessoais,
            por favor, entre em contato conosco por meio do nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>:{" "}
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ou, em &#250;ltima inst&#226;ncia, para nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o com o Encarregado:</em>
            </strong>
            <a href="mailto:encarregado@actatechlaw.com.br">
              encarregado@actatechlaw.com.br
            </a>
            ;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Destaque:</strong> caso nosso <em>Website</em>,
            plataforma, aplicativos e servi&#231;os vinculados possu&#237;rem
            liga&#231;&#245;es com <em>websites</em> de parceiros, &#233;
            poss&#237;vel que durante sua navega&#231;&#227;o voc&#234; seja
            direcionado a esses <em>websites</em>. Nesses casos, exigimos desses
            parceiros total adequa&#231;&#227;o &#224; legisla&#231;&#227;o
            vigente e aplicada &#224; prote&#231;&#227;o dos dados pessoais e
            privacidade. Ainda assim recomendamos a leitura integral dos
            documentos legais dos respectivos websites (pol&#237;ticas de
            privacidade, termos de uso, entre outros);
          </p>
          <p>
            &#9679; <strong>Compromisso:</strong> N&#243;s, da{" "}
            <strong>NAPOLEON</strong>, comprometemo-nos a firmar parcerias com
            empresas e/ou entidades que empreguem alto n&#237;vel de
            seguran&#231;a no armazenamento dos dados pessoais, estabelecendo
            contratos que n&#227;o violam os termos desta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            .
          </p>
          <p>
            &#9679; <strong>Destaque:</strong> caso nosso <em>Website</em>,
            plataforma, aplicativos e servi&#231;os vinculados possu&#237;rem
            liga&#231;&#245;es com <em>websites</em> de terceiros, &#233;
            poss&#237;vel que durante sua navega&#231;&#227;o voc&#234; seja
            direcionado a esses <em>websites</em>. Nesses casos, a
            responsabilidade sobre a seguran&#231;a e prote&#231;&#227;o dos
            seus dados pessoais caber&#225; aos referidos terceiros, de forma
            que recomendamos a leitura dos termos de uso, pol&#237;ticas de
            privacidade e de <em>cookies</em> dos respectivos <em>websites</em>.
            Este cen&#225;rio tamb&#233;m se aplica &#224;s hip&#243;teses em
            que voc&#234; divulgue seus dados pessoais em <em>plug-ins</em>{" "}
            sociais e <em>websites</em> de busca. Nesses casos, o tratamento dos
            dados ser&#225; realizado pelos terceiros em quest&#227;o e,
            novamente, sugerimos a leitura dos documentos legais destes
            respectivos <em>websites</em>/terceiros.
          </p>
          <p>
            &#9679; <strong>Armazenamento dos dados pessoais:</strong> todas as
            informa&#231;&#245;es fornecidas por voc&#234;, nosso usu&#225;rio,
            ser&#227;o armazenadas de forma segura e &#237;ntegra, em ambiente
            controlado, monitorado e de seguran&#231;a. O per&#237;odo de
            reten&#231;&#227;o respeitar&#225; as finalidades vinculadas a cada
            dado pessoal (vide Parte 4), segundo{" "}
            <strong>
              <em>Crit&#233;rios de Temporalidade</em>
            </strong>{" "}
            estabelecido internamente e baseados nos termos da
            legisla&#231;&#227;o aplic&#225;vel. Tamb&#233;m &#233;
            poss&#237;vel a reten&#231;&#227;o dos seus dados pessoais em
            raz&#227;o do seu consentimento, pelo per&#237;odo em que voc&#234;
            permitir e para casos espec&#237;ficos. As informa&#231;&#245;es
            obtidas ser&#227;o consideradas sigilosas e somente ser&#227;o
            acessadas por pessoas autorizadas pela <strong>NAPOLEON</strong> e
            capacitadas para lhes conferir o tratamento mais adequado;
          </p>
          <p>
            &#9679; <strong>Compromisso:</strong> a <strong>NAPOLEON</strong>
            compromete-se a reter os dados pessoais somente tempo em que forem
            necess&#225;rios para o alcance das finalidades l&#237;citas, leais,
            espec&#237;ficas e informadas;
          </p>
          <p>
            &#9679; <strong>Compromisso:</strong> a <strong>NAPOLEON</strong>{" "}
            permite que os seus dados pessoais sejam acessados pelos nossos
            colaboradores ou parceiros apenas no limite do necess&#225;rio para
            executarem suas atividades, de acordo com as previs&#245;es
            expressas estabelecidas nesta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            , sempre mediante obriga&#231;&#227;o contratual de
            confidencialidade dos dados pessoais tratados.
          </p>
          <p>
            &#9679; <strong>Exclus&#227;o dos dados pessoais:</strong> como
            explicado acima, vamos reter seus dados pessoais somente pelo tempo
            necess&#225;rio para atendimento das finalidades previstas nesta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            e na legisla&#231;&#227;o aplic&#225;vel, bem como para atender
            determina&#231;&#245;es legais (cumprimento de obriga&#231;&#227;o
            legal ou regulat&#243;ria) ou ordens judiciais e administrativas.
            Entretanto, excetuadas essas hip&#243;teses, voc&#234; mesmo
            poder&#225; optar pela exclus&#227;o dos seus dados pessoais da
            nossa base. Para o autogerenciamento no exerc&#237;cio dos seus
            direitos Vide Parte 7 ou clique nas op&#231;&#245;es abaixo,
            conforme o objetivo pretendido: <strong></strong>
          </p>
          <p>
            &#9679; <strong>Elimina&#231;&#227;o (1)</strong> dos seus dados
            pessoais desnecess&#225;rios, excessivos ou tratados em
            desconformidade;
          </p>
          <p>
            &#9679; <strong>Elimina&#231;&#227;o (2)</strong> dos dados pessoais
            desprovidos de consentimento;
          </p>
          <p>
            &#9679; <strong>Revoga&#231;&#227;o</strong> do consentimento a
            qualquer momento mediante manifesta&#231;&#227;o expressa, sempre de
            forma gratuita e facilitada;
          </p>
          <p>
            &#9679; <strong>Cancelamento</strong> dos seus dados pessoais
            ap&#243;s o t&#233;rmino do seu tratamento de dados pessoais,
            ressalvadas as hip&#243;teses de guarda obrigat&#243;ria de
            registros previstas na legisla&#231;&#227;o vigente e nos demais
            casos previstos em lei;
          </p>
          <p>
            &#9679;
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            para o nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            , nas situa&#231;&#245;es que demandem esclarecimentos ou queixas;
          </p>
          <p>
            &#9679;
            <a href="mailto:encarregado@actatechlaw.com.br">
              encarregado@actatechlaw.com.br
            </a>
            para o nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o com o Encarregado</em>
            </strong>
            quando o Suporte ou outro servi&#231;o de atendimento n&#227;o ficar
            a contento;
          </p>
          <p>
            &#9679; <strong>Alerta:</strong> a op&#231;&#227;o pela
            elimina&#231;&#227;o, revoga&#231;&#227;o (no que for o caso), ou
            cancelamento de parte ou de todos os dados pessoais poder&#225;
            comprometer a funcionalidade do nosso <em>Website</em>, plataforma,
            aplicativos e servi&#231;os vinculados.
          </p>
          <p>
            <strong>
              Parte 9: Altera&#231;&#245;es desta pol&#237;tica de privacidade,
              demais documentos de regramento e legisla&#231;&#227;o
              aplic&#225;vel
            </strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Altera&#231;&#245;es desta pol&#237;tica de privacidade:
            </strong>
          </p>
          <p>
            &#9679; A <strong>NAPOLEON</strong> est&#225; em constante busca de
            melhorias nos seus canais de relacionamento, de modo que voc&#234;,
            nosso usu&#225;rio, possa utilizar nossos espa&#231;os e
            servi&#231;os experimentando uma &#243;tima experi&#234;ncia,
            raz&#227;o pela qual precisamos implementar mudan&#231;as,
            altera&#231;&#245;es, adi&#231;&#245;es, supress&#245;es e quaisquer
            outras formas de modifica&#231;&#245;es no nosso <em>Website</em>,
            plataforma, aplicativos e outros canais, bem como alterar,
            periodicamente, esta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            e demais documentos de privacidade que a integram, de modo a
            acomodar novas tecnologias, pr&#225;ticas do setor, requisitos
            regulat&#243;rios ou outros fins;
          </p>
          <p>
            &#9679; Apesar disso, comprometemo-nos, frente a qualquer
            modifica&#231;&#227;o nesta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            que afete de forma <strong>relevante</strong> seus interesses ou
            diga respeito a exig&#234;ncias legais ou regulat&#243;rios, a
            comunic&#225;-lo previamente utilizando o &#250;ltimo endere&#231;o
            eletr&#244;nico ou f&#237;sico por voc&#234; informado. Caso
            necess&#225;rio, podemos nos valer de publica&#231;&#245;es abertas
            no nosso <em>Website</em>, plataforma, aplicativos ou por outros
            meios previstos na legisla&#231;&#227;o vigente para
            promo&#231;&#227;o dessa comunica&#231;&#227;o. Altera&#231;&#245;es
            decorrentes de determina&#231;&#245;es legais est&#227;o
            exclu&#237;dos dessa exig&#234;ncia, assim como novas
            funcionalidades de qualquer servi&#231;o atrelado ao nosso{" "}
            <em>Website</em>, plataforma ou aplicativo, bem como outro canal de
            relacionamento, casos em que entrar&#227;o em vigor imediatamente;
          </p>
          <p>
            &#9679; &#201; importante destacar que o uso cont&#237;nuo do nosso{" "}
            <em>Website</em>, plataforma e aplicativos depois das
            altera&#231;&#245;es implica concord&#226;ncia e aceita&#231;&#227;o
            autom&#225;tica quanto ao teor das modifica&#231;&#245;es
            realizadas.
          </p>
          <p>
            &#9679; <strong>Demais documentos de regramento:</strong> nosso
            conjunto de regras aplic&#225;veis &#224; prote&#231;&#227;o da sua
            privacidade e seus dados pessoais abrange esta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            e outros quatro documentos muito importantes (todos integrados).
            Confira clicando no nome abaixo:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>
            ;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>
            ;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            ;
          </p>
          <p>
            &#9679;
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line
              </em>
            </strong>
            .
          </p>
          <p>
            &#9679; <strong>Legisla&#231;&#227;o aplic&#225;vel: </strong>este
            documento, assim como os demais que o integram, foi elaborado a
            partir da Lei Federal n&#176; 13.709, de 14 de agosto de 2018 (Lei
            Geral de Prote&#231;&#227;o de Dados Pessoais - LGPD).
          </p>
          <p>
            <strong>
              Parte 10: Fale conosco, Encarregado da Prote&#231;&#227;o da
              Privacidade e dos Dados Pessoais, Disposi&#231;&#245;es gerais e
              finais, Declara&#231;&#245;es de concord&#226;ncia
            </strong>
          </p>
          <p>
            &#9679; <strong>Fale conosco:</strong> a qualquer momento, sempre
            que voc&#234; tiver alguma d&#250;vida ou solicita&#231;&#227;o a
            fazer sobre esta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            <strong> </strong>e seus termos, bem como dos demais documentos de
            regramento, ou simplesmente precisar interagir conosco sobre
            assuntos envolvendo os seus dados pessoais, poder&#225; faz&#234;-lo
            por meio do:
          </p>
          <p>
            &#9679;{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>:{" "}
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            .
          </p>
          <p>
            &#9679;
            <strong>
              Encarregado da Prote&#231;&#227;o da Privacidade e dos Dados
              Pessoais:
            </strong>
            a qualquer momento, sempre que voc&#234; tiver alguma
            reclama&#231;&#227;o ou, a partir desta, alguma
            solicita&#231;&#227;o a fazer sobre esta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            <strong> </strong>e seus termos, bem como dos demais documentos de
            regramento, precisa exercer algum direito ou simplesmente precisar
            interagir sobre assuntos envolvendo os seus dados pessoais,
            poder&#225; faz&#234;-lo por meio do nosso Encarregado da
            Prote&#231;&#227;o da Privacidade e dos Dados Pessoais (DPO).
            Profissional respons&#225;vel por atender as demandas de titulares
            de dados pessoais, bem como interagir com as autoridades
            competentes, em especial a Autoridade Nacional de Prote&#231;&#227;o
            de Dados &#8211; ANPD. Saiba quem &#233; e como contat&#225;-lo
            abaixo:
          </p>
          <p>
            &#9679; Encarregado/DPO: <strong>Luiz Fernando Del Rio Horn</strong>
            ;
          </p>
          <p>
            &#9679;
            <strong>
              <em>Canal de Comunica&#231;&#227;o com o Encarregado: </em>
            </strong>
            <a href="mailto:encarregado@actatechlaw.com.br">
              encarregado@actatechlaw.com.br
            </a>
            .
          </p>
          <p>
            &#9679; <strong>Disposi&#231;&#245;es gerais e finais:</strong>
          </p>
          <p>
            &#9679; Esta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            consiste na vers&#227;o v&#225;lida e eficaz das
            informa&#231;&#245;es sobre o tratamento dos seus dados pessoais,
            nosso usu&#225;rio, por n&#243;s da <strong>NAPOLEON</strong>. Esta
            vers&#227;o &#233; respons&#225;vel por regrar todas as nossas
            rela&#231;&#245;es, exceto quando forem utilizados servi&#231;os que
            possuem Pol&#237;ticas de Privacidade pr&#243;prias, respeitados os
            direitos adquiridos, os atos jur&#237;dicos perfeitos e as coisas
            julgadas;
          </p>
          <p>
            &#9679; A vers&#227;o da
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            em vigor ser&#225; sempre a mais recente. Para identificar a data da
            vers&#227;o em vigor &#233; preciso verificar a se&#231;&#227;o
            &#8220;Data da &#250;ltima atualiza&#231;&#227;o&#8221;, no topo
            deste documento;
          </p>
          <p>
            &#9679; Voc&#234;, nosso usu&#225;rio, pode deixar de usar os
            servi&#231;os da <strong>NAPOLEON</strong> a qualquer momento. Da
            mesma forma, a <strong>NAPOLEON</strong> tamb&#233;m poder&#225;
            deixar de prestar os servi&#231;os vinculados ao nosso{" "}
            <em>Website</em>, plataforma ou aplicativos a qualquer momento, bem
            como incluir ou criar novos limites aos servi&#231;os;
          </p>
          <p>
            &#9679; Caso voc&#234;, nosso usu&#225;rio, n&#227;o concordar com
            qualquer altera&#231;&#227;o a esta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            , pedimos que interrompa imediatamente o uso do nosso{" "}
            <em>Website</em>, plataforma, aplicativos ou dos servi&#231;os da{" "}
            <strong>NAPOLEON</strong>. Caso contr&#225;rio, o uso posterior
            acarretar&#225; no seu aceite &#224; nova vers&#227;o vigente &#224;
            &#233;poca;
          </p>
          <p>
            &#9679; As cl&#225;usulas desta
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            seguir&#227;o vigentes a qualquer forma de termina&#231;&#227;o,
            ocorrida por qualquer motivo, de modo a continuar a produzir efeitos
            sobre as partes enquanto mantidas rela&#231;&#245;es jur&#237;dicas
            subsequentes.
          </p>
          <p>
            &#9679;
            <strong>
              Declara&#231;&#245;es de concord&#226;ncia e prefer&#234;ncias:
            </strong>
          </p>
          <p>
            O USU&#193;RIO, TITULAR DE DADOS PESSOAIS, RECONHECE QUE AS
            PECULIARIDADES SOBRE O TRATAMENTO DE DADOS PESSOAIS, ENVOLVENDO
            COLETA, PRODU&#199;&#195;O, RECEP&#199;&#195;O,
            CLASSIFICA&#199;&#195;O, UTILIZA&#199;&#195;O, ACESSO,
            REPRODU&#199;&#195;O, TRANSMISS&#195;O, DISTRIBUI&#199;&#195;O,
            PROCESSAMENTO, ARQUIVAMENTO, ARMAZENAMENTO, ELIMINA&#199;&#195;O,
            AVALIA&#199;&#195;O OU CONTROLE DA INFORMA&#199;&#195;O,
            MODIFICA&#199;&#195;O, COMUNICA&#199;&#195;O, TRANSFER&#202;NCIA,
            DIFUS&#195;O OU EXTRA&#199;&#195;O DA <strong>NAPOLEON</strong>{" "}
            FORAM SUFICIENTEMENTE DESCRITAS NESTA
            <strong>
              <em>
                POL&#205;TICA DE PRIVACIDADE E DE PROTE&#199;&#195;O DE DADOS
                PESSOAIS
              </em>
            </strong>
            E NOS DEMAIS DOCUMENTOS DE REGRAMENTO QUE A INTEGRAM, E QUE A{" "}
            <strong>NAPOLEON</strong> CUMPRIU DEVIDAMENTE O DEVER DE
            INFORMA&#199;&#195;O.
          </p>
          <p>
            AP&#211;S LER ATENTAMENTE ESTA
            <strong>
              <em>
                POL&#205;TICA DE PRIVACIDADE E DE PROTE&#199;&#195;O DE DADOS
                PESSOAIS
              </em>
            </strong>
            , VOC&#202;, NOSSO USU&#193;RIO, CONTINUANDO SUA NAVEGA&#199;&#195;O
            EM NOSSO WEBSITE, PRESUMIREMOS SUA ACEITA&#199;&#195;O PARA TODAS AS
            <strong>
              <em>DIRETRIZES GERAIS DOS NOSSOS TERMOS E POL&#205;TICAS</em>
            </strong>
            <em>.</em>
          </p>
          <p>
            <em></em>
          </p>
          <p>
            ENTRETANTO, &#201; IMPORTANTE QUE VOC&#202;, NOSSO USU&#193;RIO,
            SAIBA QUE OS SEUS DADOS PESSOAIS ACESSADOS E POR N&#211;S
            UTILIZADOS, BEM COMO SUA EXPERI&#202;NCIA DE NAVEGA&#199;&#195;O,
            PODEM SER GERENCIADOS DIRETAMENTE NO{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante, COM ACEITA&#199;&#213;ES GRANULARES MEDIANTE
            HABILITA&#199;&#195;O OU DESABILITA&#199;&#195;O DE FUNCIONALIDADES,
            CONFERINDO A PLENA GARANTIA DOS SEUS DIREITOS DE TITULAR DE DADOS
            PESSOAIS
          </p>
          <p>
            Estamos sempre &#224; disposi&#231;&#227;o para esclarecer suas
            d&#250;vidas, atender suas solicita&#231;&#245;es ou ouvi-lo nas
            suas demandas e coloc&#225;-lo no controle dos seus dados pessoais.
            Conte conosco para mant&#234;-lo informado!
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
