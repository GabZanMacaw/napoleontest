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
        title={"Termo de Uso - Napoleon Abrasives"}
        description={"Termo de Uso, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Termo de Uso do Website"} fundo="sobre" />

        <div className={styles.termos}>
          <p style={{ textAlign: "center" }}>
            <strong>Conhecendo o </strong>
            <strong>
              <em>Termo de Uso do Website</em>
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
            &#243;tima experi&#234;ncia de contato com nosso <em>website</em>,
            bem como com seus produtos ou servi&#231;os, sempre baseada na
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
            voc&#234;, nosso usu&#225;rio, a
            <strong>
              <em>Pol&#237;tica de Cookies</em>
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
            O nosso{" "}
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>{" "}
            obedece a esses crit&#233;rios maiores, integrando esse documento
            que se ocupa das informa&#231;&#245;es relativas ao tratamento de
            dados pessoais, inclusive no tocante aos seus direitos. Recomendamos
            a voc&#234;, titular de dados pessoais, que conhe&#231;a, mais
            abaixo, os termos adotados quando se trata da utiliza&#231;&#227;o
            do nosso <em>Website</em>, de modo a conhecer as
            <strong>
              regras de utiliza&#231;&#227;o da nossa plataforma, personalizando
              a sua experi&#234;ncia e garantindo os seus direitos.
            </strong>
          </p>
          <p>
            <strong>
              Estrutura e conte&#250;do do <em>Termo de Uso do Website</em>
            </strong>
          </p>
          <p>
            Para facilitar sua compreens&#227;o, dividimos este documento em{" "}
            <strong>quatro partes</strong>. Entenda como bem aproveit&#225;-lo
            na sua leitura integral e, depois, como fazer a
            localiza&#231;&#227;o r&#225;pida das partes de destaque:
          </p>
          <p>
            &#9679; <strong>Parte 1:</strong> prop&#243;sitos,
            identifica&#231;&#227;o do respons&#225;vel do <em>Website</em> e
            objetivo;
          </p>
          <p>
            &#9679; <strong>Parte 2: </strong>restri&#231;&#245;es de acesso e
            controle parental, aceita&#231;&#227;o, cadastro/registro para o
            acesso, senha, suporte, cancelamento, rescis&#227;o unilateral,
            indeniza&#231;&#227;o e legisla&#231;&#227;o aplic&#225;vel;
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Parte 3: </strong>funcionalidades,
            notifica&#231;&#245;es, propriedade intelectual,
            publica&#231;&#227;o e licen&#231;a de conte&#250;do,
            aplica&#231;&#245;es de terceiros, responsabilidades, excludentes de
            responsabilidade, d&#250;vidas, reclama&#231;&#245;es e foro de
            discuss&#227;o deste{" "}
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>
            , aponta para a
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            e para o{" "}
            <strong>
              <em>Encarregado</em>
            </strong>{" "}
            quando o assunto &#233; tratamento de dados pessoais;
          </p>
          <p>
            &#9679; <strong>Parte 4: </strong>termos e avisos finais, com
            &#234;nfase para o{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>{" "}
            e para o
            <strong>
              <em>Canal de Comunica&#231;&#227;o com o Encarregado</em>
            </strong>
            <em> </em>da Prote&#231;&#227;o da Privacidade e dos Dados Pessoais.{" "}
            <strong></strong>
          </p>
          <p>
            <strong>
              Parte 1: Termos iniciais de uso do <em>Website</em>
            </strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Prop&#243;sito valorativo do W<em>ebsite</em>:
            </strong>{" "}
            a garantia de uma navega&#231;&#227;o segura (dentro dos
            par&#226;metros da confidencialidade, integridade e
            disponibilidade), veloz e efetiva na sua pesquisa de origem, de modo
            a produzir o efeito esperado ou mais, pautado por resultados dentro
            da &#233;tica, moralidade, urbanidade, lealdade e liberdade de
            escolha, sendo tudo isso traduzido como a melhor experi&#234;ncia
            poss&#237;vel para todos os usu&#225;rios da nossa plataforma;
          </p>
          <p>
            &#9679; <strong>Prop&#243;sito funcional do Website: </strong>a
            nossa plataforma visa conceder visualiza&#231;&#227;o gratuita dos
            nossos produtos/servi&#231;os e outras informa&#231;&#245;es de
            utilidade geral da nossa organiza&#231;&#227;o, utilizando
            ferramentas de navega&#231;&#227;o que propiciam uma
            experi&#234;ncia customizada, propiciando uma rela&#231;&#227;o de
            conex&#227;o por tempo indeterminado com nossos colaboradores,
            parceiros, clientes, consumidores e visitantes, todos ora
            denominados como usu&#225;rios;<strong></strong>
          </p>
          <p>
            &#9679;
            <strong>
              Identifica&#231;&#227;o do respons&#225;vel pelo <em>Website</em>:
              ABRASIVOS DBT LTDA
            </strong>
            , sociedade empres&#225;ria limitada, inscrita no CNPJ sob o n&#186;
            02.399.258/0001-38, com sede na Rua Professor Guerreiro Lima, 797,
            Bairro Pio X, na cidade de Caxias do Sul &#8211; RS, CEP:
            95.034-490;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Objetivo dos Termos de Uso do <em>Website</em>:
            </strong>
            por meio deste documento, voc&#234;, usu&#225;rio, ter&#225; acesso
            a informa&#231;&#245;es sobre a sua intera&#231;&#227;o com a{" "}
            <em>Website</em> da <strong>NAPOLEON</strong> e a
            utiliza&#231;&#227;o dos servi&#231;os disponibilizados na
            plataforma, raz&#227;o pela qual se pede a sua leitura integral caso
            venhas a permanecer navegando.
          </p>
          <p>
            <strong>
              Parte 2: Termos espec&#237;ficos do <em>Website</em>
            </strong>
          </p>
          <p>
            &#9679;
            <strong>
              Restri&#231;&#245;es de acesso ao W<em>ebsite</em> e controle
              parental:
            </strong>
            em virtude do tratamento de dados pessoais, resguardamo-nos na
            prerrogativa de proibir crian&#231;as, adolescentes ou outras
            pessoas absolutamente incapazes ou relativamente incapazes quando
            desacompanhadas de assist&#234;ncia no acesso, cadastro,
            navega&#231;&#227;o e promo&#231;&#227;o de quaisquer outros tipos
            de intera&#231;&#227;o no nosso <em>Website</em>, condi&#231;&#227;o
            a se sobrepor sobre eventual crit&#233;rio de subjetividade de
            controle parental de conte&#250;do exercido por pais e/ou
            respons&#225;veis em sentido contr&#225;rio, prevalecendo a
            proibi&#231;&#227;o ora determinada;
          </p>
          <p>
            &#9679; <strong>Aceita&#231;&#227;o:</strong> a leitura deste{" "}
            <strong>
              <em>Termo de Uso de Website</em>
            </strong>{" "}
            &#233; imprescind&#237;vel para o uso desta plataforma, de modo a
            garantir um ambiente seguro para todos os navegadores. O presente
            documento estabelece obriga&#231;&#245;es m&#250;tuas, de livre
            escolha e de espont&#226;nea vontade, passando a valer quando da
            simples perman&#234;ncia neste <em>Website</em>, num equivalente a
            aceita&#231;&#227;o, n&#227;o havendo escusas das suas
            previs&#245;es ora estabelecidas por simples alega&#231;&#227;o de
            desconhecimento. Nas opera&#231;&#245;es que vierem a envolver o
            tratamento de dados pessoais atrelados a determina&#231;&#245;es
            espec&#237;ficas da Lei Geral de Prote&#231;&#227;o de Dados
            Pessoais &#8211; LGPD, ser&#225; necess&#225;ria uma
            aceita&#231;&#227;o destacada, dispon&#237;vel em{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante.
          </p>
          <p>
            &#9679; <strong>Cadastro/registro para o acesso:</strong> o acesso a
            determinados servi&#231;os disponibilizados no <em>Website</em>
            poder&#227;o ser condicionados a realiza&#231;&#227;o de um cadastro
            pr&#233;vio para fins de registro, ocasi&#227;o em que podem vir a
            ser levantadas informa&#231;&#245;es pessoais m&#237;nimas, sempre
            atuais, v&#225;lidas e renovadas quando necess&#225;rio, tais como:
            nome, e-mail e telefone de contato. As esp&#233;cies de dados
            pessoais m&#237;nimos apurados podem variar conforme as finalidades
            id&#244;neas, mas n&#227;o podem ultrapassar a listagem antes
            tecida, limite que n&#227;o abrange as informa&#231;&#245;es
            adicionais facultativas para fins de personaliza&#231;&#227;o do
            perfil do usu&#225;rio. Por isso, usu&#225;rio, por meio da sua
            realiza&#231;&#227;o do cadastro, voc&#234; declara e garante
            expressamente sua plena capacidade. A constata&#231;&#227;o de
            inveracidade das informa&#231;&#245;es pessoais, promovida por todas
            as formas l&#237;citas, ou a verifica&#231;&#227;o de
            transfer&#234;ncia e/ou aliena&#231;&#227;o do seu cadastro a outrem
            poder&#225; resultar na suspens&#227;o ou cancelamento do cadastro,
            sem preju&#237;zo de outras medidas aplic&#225;veis, caso
            necess&#225;rias;
          </p>
          <p>
            &#9679; <strong>Senha:</strong> a senha de acesso aos servi&#231;os
            restritos da plataforma assegura a voc&#234; usu&#225;rio a
            navega&#231;&#227;o privada, protegendo suas informa&#231;&#245;es
            restritas. Por&#233;m, a manuten&#231;&#227;o, a
            preserva&#231;&#227;o e a confidencialidade da senha nas
            pr&#225;ticas do cotidiano s&#227;o de sua inteira responsabilidade,
            comprometendo-se a comunicar imediatamente o{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            quanto a eventuais quebras ou uso indevido;
          </p>
          <p>
            &#9679; <strong>Suporte:</strong> incumbe a voc&#234; usu&#225;rio
            assegurar a compatibilidade de seu equipamento com as
            caracter&#237;sticas t&#233;cnicas que viabilizem a
            utiliza&#231;&#227;o adequada da plataforma. Em quaisquer casos de
            d&#250;vidas, erros, sugest&#245;es ou problemas de
            utiliza&#231;&#227;o da plataforma, pedimos para contatar nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            ;
          </p>
          <p>
            &#9679; <strong>Cancelamento:</strong> voc&#234;, nosso
            usu&#225;rio, a qualquer tempo poder&#225; cancelar seu cadastro e
            registro, bem como quaisquer produtos e/ou servi&#231;os da
            plataforma ou vinculados, respeitados os termos da oferta &#224;
            &#233;poca da contrata&#231;&#227;o, bem como a legisla&#231;&#227;o
            vigente e incidente, sendo necess&#225;rio, para tanto, utilizar a
            nossa ferramenta de autogerenciamento estabelecida no{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante ou, dependendo a situa&#231;&#227;o, contatar nosso{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio: </em>
            </strong>
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            ;
          </p>
          <p>
            &#9679; <strong>Rescis&#227;o unilateral:</strong> na hip&#243;tese
            de qualquer tipo de viola&#231;&#227;o &#224;s condi&#231;&#245;es
            vinculadas ao presente <em>Termo de Uso de Website</em> ou &#224;
            legisla&#231;&#227;o vigente, a <strong>NAPOLEON</strong>{" "}
            poder&#225; interromper os servi&#231;os imediatamente e, ainda,
            cancelar o cadastro e/ou registro independente de quaisquer
            notifica&#231;&#245;es e/ou comunica&#231;&#245;es pr&#233;vias. Nos
            casos mais graves, bloquear o acesso e a utiliza&#231;&#227;o de
            servi&#231;os da plataforma imediatamente, medida desprovida de
            notifica&#231;&#227;o ou comunica&#231;&#227;o pr&#233;via.
            Hip&#243;teses em que os dados do(s) usu&#225;rio(s) ou relativo(s)
            ao(s) fato(s) ser&#227;o preservados para uso das autoridades
            competentes;
          </p>
          <p>
            &#9679; <strong>Indeniza&#231;&#227;o:</strong> nessas
            situa&#231;&#245;es extremas, fica pactuado a previs&#227;o de
            indeniza&#231;&#227;o em favor da <strong>NAPOLEON</strong>, suas
            afiliadas e demais empresas do grupo econ&#244;mico, assim como seus
            diretores, administradores, colaboradores, representantes, parceiros
            e funcion&#225;rios por qualquer perda, responsabiliza&#231;&#227;o,
            reclama&#231;&#227;o ou demanda administrativa ou judicial, nos
            preju&#237;zos gerados a partir da utiliza&#231;&#227;o da
            plataforma e/ou seus servi&#231;os;
          </p>
          <p>
            &#9679; <strong>Legisla&#231;&#227;o aplic&#225;vel:</strong> estes
            termos s&#227;o regidos a partir da legisla&#231;&#227;o vigente na
            Rep&#250;blica Federativa do Brasil, com &#234;nfase para a Lei
            n&#186; 13.708, de 14 de agosto de 2018 (Lei Geral de
            Prote&#231;&#227;o de Dados Pessoais &#8211; LGPD), a Lei n&#186;
            12.965, de 23 de abril de 2014 (Marco Civil da Internet &#8211; MCI)
            e, no que se aplicar, a Lei n&#186; 8.078, de 11 de setembro de 1990
            (C&#243;digo de Prote&#231;&#227;o e Defesa do Consumidor &#8211;
            CDC), sem preju&#237;zo das leis informacionais dos demais
            pa&#237;ses e blocos quando incidentes.
          </p>
          <p>
            <strong>
              Parte 3: Outros termos do <em>Website</em>
            </strong>
          </p>
          <p>
            &#9679; <strong>Funcionalidades:</strong> na nossa plataforma
            poder&#227;o ser encontradas um conjunto de funcionalidades e
            ferramentas para otimizar a navega&#231;&#227;o, pesquisa,
            relacionamento e neg&#243;cios. S&#227;o previamente selecionadas e
            agregadas em diferentes partes do <em>Website</em>, plataforma ou
            aplicativos, todas devidamente informadas e dispon&#237;veis,
            tamb&#233;m acess&#237;veis por meio de{" "}
            <strong>
              <em>Banner</em>
            </strong>{" "}
            flutuante do Website ou, ainda, por meio do{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            . Nenhuma funcionalidade oferecida deve ser entendida como
            substitui&#231;&#227;o &#224; confer&#234;ncia e/ou
            valida&#231;&#227;o de documentos e/ou informa&#231;&#245;es
            provenientes dos &#243;rg&#227;os oficiais;
          </p>
          <p>
            &#9679; <strong>Propriedade intelectual:</strong> enquanto nosso
            navegador do <em>Website</em> e cumpridor das presentes regras de
            condu&#231;&#227;o deste Termo, &#233; conferida uma licen&#231;a
            n&#227;o exclusiva, n&#227;o transfer&#237;vel, n&#227;o
            sublicenci&#225;vel e limitada para fins de acesso &#224; plataforma
            e seus servi&#231;os atrelados, n&#227;o podendo ser postulada, em
            qualquer situa&#231;&#227;o, transfer&#234;ncia ou concess&#227;o de
            direitos, sendo considerada de uso pessoal, individual e
            intransfer&#237;vel, restando vedado os demais tipos de uso. As
            marcas, logotipos, nomes comerciais, <em>layouts</em>, gr&#225;ficos
            e <em>design</em> de <em>interface</em>, imagens,
            ilustra&#231;&#245;es, fotografias, apresenta&#231;&#245;es,
            v&#237;deos, conte&#250;dos escritos e de som e &#225;udio,
            programas de computador, banco de dados, arquivos de
            transmiss&#227;o e quaisquer outras informa&#231;&#245;es e direitos
            de propriedade intelectual da <strong>NAPOLEON</strong>, observados
            os termos da Lei n&#186; 9.279, 14 de maio de 1996 (Lei da
            Propriedade Industrial - LPI), da Lei n&#186; 9.609, 19 de fevereiro
            de 1998 (Lei do Software) e da Lei n&#186; 9.610, de 19 de fevereiro
            de 1998 (Lei de Direitos Autorais), sem preju&#237;zo das demais
            normas relativas &#224; prote&#231;&#227;o da propriedade
            intelectual, est&#227;o devidamente reservados e sua quebra implica
            indeniza&#231;&#227;o civil e puni&#231;&#227;o nos previs&#245;es
            da legisla&#231;&#227;o penal vigente;
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Publica&#231;&#227;o e licen&#231;a de conte&#250;do:{" "}
            </strong>
            usu&#225;rio, para sua seguran&#231;a, resta vedado divulgar
            qualquer conte&#250;do ou realizar atividades que:<strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            viole ou interfira com quaisquer ou marca registrada de outra parte;{" "}
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            revele qualquer segredo comercial, a menos que o segredo comercial
            perten&#231;a ao usu&#225;rio ou se ele tiver a permiss&#227;o do
            propriet&#225;rio para divulg&#225;-las;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            viole qualquer direito de propriedade intelectual de outro ou os
            direitos de privacidade ou publicidade de terceiros;
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            seja inveross&#237;mil, calunioso, difamat&#243;rio, abusivo,
            amea&#231;ador, ofensivo, odioso, pornogr&#225;fico,
            discriminat&#243;rio, ou que viole qualquer lei ou direito de
            terceiros;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            contenha informa&#231;&#245;es privadas de outras pessoas ou
            pessoalmente identific&#225;veis sem sua expressa
            autoriza&#231;&#227;o e permiss&#227;o;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            contenha <em>links</em> para v&#237;rus,{" "}
            <em>cavalo de tr&#243;ia</em>, <em>worm</em>, bomba rel&#243;gio ou
            outro mecanismo que se destina a danificar, interferir, interceptar
            ou expropriar qualquer sistema, dado ou informa&#231;&#227;o;
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            busque fraudar, dissimular ou comprometer o bom funcionamento da
            plataforma e dos seus servi&#231;os (seja pela cria&#231;&#227;o de
            perfis falsos para an&#250;ncio de servi&#231;o de correspondente ou
            da viola&#231;&#227;o a protocolos de seguran&#231;a);
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Divulga&#231;&#227;o de conte&#250;do:</strong> que
            n&#227;o esteja em conformidade com outros ditames deste
            <strong>
              <em>Termo</em>
            </strong>
            , bem como com sua{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>
            ;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            altere a configura&#231;&#227;o do dispositivo de acesso para
            utiliza&#231;&#227;o da plataforma e dos seus servi&#231;os;
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que{" "}
            <strong> </strong>venha a <em>hackear</em> ou interferir na
            opera&#231;&#227;o do <em>Website</em> e dos seus Servi&#231;os;{" "}
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            remova, altere, interfira, evite ou de qualquer forma modifique
            marca d&#8217;&#225;gua, <em>copyright</em>, s&#237;mbolo, marca ou
            qualquer outro sinal indicativo de propriedade intelectual inserido
            nos servi&#231;os, ou quaisquer direitos e/ou mecanismos de
            prote&#231;&#227;o associados aos servi&#231;os, incluindo filtros
            de acesso baseados em territ&#243;rio;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            represente outra pessoa ou obtenha acesso n&#227;o autorizado &#224;
            conta de outra pessoa;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            comercialize, reproduza total ou parcialmente, publique,
            retransmita, distribua, comunique ao p&#250;blico, transfira a
            terceiros ou efetue qualquer modifica&#231;&#227;o, sob qualquer
            forma, a qualquer conte&#250;do disponibilizado no <em>Website</em>{" "}
            e em seus servi&#231;os, e que n&#227;o seja expressamente permitido
            por estes Termos; <strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            comercialize ou compartilhe o acesso aos servi&#231;os
            dispon&#237;veis na plataforma;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            introduza qualquer v&#237;rus, <em>worm</em>, <em>spyware</em> ou
            qualquer outro c&#243;digo computacional, arquivo ou programa que
            possa estar destinado a danificar a opera&#231;&#227;o, hardware,
            software ou qualquer outro aspecto do servi&#231;o;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que crie{" "}
            <em>spiders</em> (rastreador de rede) ou <em>scrapers </em>(forma de
            minera&#231;&#227;o de dados);<strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que use
            rob&#244;s ou outros meios automatizados de qualquer tipo para
            acessar as ferramentas e/ou servi&#231;os do <em>Website</em>;
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            burle sistema de ementas/c&#243;pias de conte&#250;do do{" "}
            <em>Website</em>, sob pena de exclus&#227;o imediata e
            ado&#231;&#227;o das medidas cab&#237;veis; e,<strong></strong>
          </p>
          <p>
            &#9679; <strong>Realiza&#231;&#227;o de atividade:</strong> que
            utilize a plataforma para descumprimento de qualquer lei, norma e/ou
            regulamento. <strong></strong>
          </p>
          <p>
            &#9679; <strong>Aplica&#231;&#245;es de terceiros: </strong>
            poder&#227;o ser integrados na plataforma aplica&#231;&#245;es de
            terceiros, seja por meio de <em>links</em> de <em>websites</em>,
            funcionalidades da internet ou outros, desde que previamente
            aprovados e em plena sintonia com as regras previstas neste{" "}
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>
            , assim como na
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            , na{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            , na
            <strong>
              <em>Pol&#237;tica de Cordialidade,</em>
            </strong>{" "}
            na
            <strong>
              <em>Pol&#237;tica das Tecnologias </em>
            </strong>
            e{" "}
            <strong>
              <em> Publicidade de Rastreamento On-line</em>
            </strong>
            . Nas situa&#231;&#245;es de imprescindibilidade de
            aplica&#231;&#245;es de terceiros em conflito com as regras gerais
            de condu&#231;&#227;o da <strong>NAPOLEON</strong>, ser&#227;o
            externalizadas de maneira ostensiva as implica&#231;&#245;es de
            limita&#231;&#227;o &#224; sua navega&#231;&#227;o, nosso
            usu&#225;rio, quando da negativa de{" "}
            <strong>consentimento espec&#237;fico</strong>. Casos em que
            qualquer tipo ou esp&#233;cie de responsabilidade eventualmente
            surgida recair&#225; exclusivamente aos terceiros titulares das
            aplica&#231;&#245;es adicionais, sendo que a integra&#231;&#227;o
            desses servi&#231;os de terceiros n&#227;o corresponde ao seu
            endosso, associa&#231;&#227;o, rela&#231;&#227;o de sociedade,
            supervis&#227;o, cumplicidade, <em>joint venture</em>, solidariedade
            ou de garantia;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Responsabilidades da NAPOLEON:</strong> pela fiel e
            completa manuten&#231;&#227;o da plataforma conforme previsto neste{" "}
            <em>Termo de Uso do Website</em>;
          </p>
          <p>
            &#9679;{" "}
            <strong>Excludentes de responsabilidade da NAPOLEON:</strong>
          </p>
          <p>
            &#9679; Danos e preju&#237;zos causados pelo acesso,
            intercepta&#231;&#227;o, elimina&#231;&#227;o, altera&#231;&#227;o,
            modifica&#231;&#227;o ou manipula&#231;&#227;o, por terceiros
            n&#227;o autorizados, dos arquivos e comunica&#231;&#245;es
            transmitidos por meio da plataforma e dos seus servi&#231;os
            atrelados, considerando todas as medidas adotadas pela{" "}
            <strong>NAPOLEON </strong>para garantia da privacidade e dados
            pessoais;
          </p>
          <p>
            &#9679; Danos e preju&#237;zos decorrentes do uso inadequado dos
            servi&#231;os do <em>Website</em>, plataforma e aplicativos, da
            impossibilidade de acesso tempor&#225;rio ou definitivo do nosso{" "}
            <em>Website</em> por motivos de for&#231;a maior ou caso fortuito;
          </p>
          <p>
            &#9679; Danos e preju&#237;zos provenientes da discrep&#226;ncia de
            informa&#231;&#245;es de &#243;rg&#227;os oficiais competentes.
          </p>
          <p>
            &#9679; Danos e preju&#237;zos decorrentes do uso inadequado do{" "}
            <em>Website</em> e seus servi&#231;os atrelados pelo usu&#225;rio.
          </p>
          <p>
            &#9679;
            <strong>
              D&#250;vidas, reclama&#231;&#245;es e foro de discuss&#227;o deste{" "}
              <em>Termo</em> e <em>Website</em>:
            </strong>
            para a solu&#231;&#227;o de eventuais controv&#233;rsias decorrentes
            do presente{" "}
            <strong>
              <em>Termo de Uso do Website</em>
            </strong>{" "}
            recomenda-se o contato com o{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            , sendo que eventuais lit&#237;gios remanescentes dever&#227;o ser
            apresentados no foro da comarca em que se encontra a sede da{" "}
            <strong>NAPOLEON</strong>, exceto quando se tratar de uma
            rela&#231;&#227;o de consumo;
          </p>
          <p>
            &#9679; <strong>Tratamento de dados pessoais: </strong>a
            adequabilidade nos procedimentos concernentes aos dados pessoais dos
            usu&#225;rios constitui uma prioridade da organiza&#231;&#227;o.
            Para tanto, preparamos um documento exclusivo para isso. Clique em
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            e conhe&#231;a nossas posi&#231;&#245;es a respeito.
          </p>
          <p>
            <strong>
              Parte 4: Termos finais,
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>,{" "}
              <em>Canal de Comunica&#231;&#227;o com o Encarregado</em> e dos
              demais avisos de destaque
            </strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Transfer&#234;ncia ou cess&#227;o de posi&#231;&#227;o:{" "}
            </strong>
            considerando a perspectiva de prosseguimento do <em>Website</em>, a{" "}
            <strong>NAPOLEON</strong> resguarda-se no direito de transferir ou
            ceder a posi&#231;&#227;o contratual estabelecida neste{" "}
            <strong>
              <em>Termo de Uso de Website</em>
            </strong>
            , e em id&#234;ntica medida para qualquer direito ou
            obriga&#231;&#227;o decorrente sem a necessidade de pr&#233;vio
            aviso a voc&#234; usu&#225;rio, desde a nova detentora garanta a
            prote&#231;&#227;o &#224; privacidade e aos dados pessoais dos
            nossos usu&#225;rios;<strong></strong>
          </p>
          <p>
            &#9679;{" "}
            <strong>
              Melhorias no <em>Website</em>:
            </strong>{" "}
            sempre pensando em voc&#234;, nosso usu&#225;rio, resguardamos a
            prerrogativa de presta&#231;&#227;o dos servi&#231;os atrelados
            &#224; plataforma na condi&#231;&#227;o <em>as si</em> (como se
            encontram), de modo que se possam implementar, a qualquer momento,
            mudan&#231;as, altera&#231;&#245;es, adi&#231;&#245;es,
            supress&#245;es e quaisquer outras formas de modifica&#231;&#227;o,
            podendo modificar a composi&#231;&#227;o das funcionalidades ou
            ferramentas em tamanho e/ou formato. Tamb&#233;m podem vir a surgir
            decis&#245;es de suspens&#227;o e/ou cancelamento do{" "}
            <em>Website</em> e/ou dos seus servi&#231;os atrelados, por
            decorr&#234;ncia meramente estrat&#233;gica, por for&#231;a legal ou
            judicial, por vezes imediatas. Neste &#250;ltimo caso buscaremos, na
            medida do poss&#237;vel, inform&#225;-lo com anteced&#234;ncia das
            situa&#231;&#245;es quando estas venham acarretar impacto no
            consentimento (simples ou destacado) ou impliquem em algum &#244;nus
            financeiro direto a voc&#234; usu&#225;rio;<strong></strong>
          </p>
          <p>
            &#9679; <strong>Atualiza&#231;&#227;o deste Termo:</strong> para sua
            maior seguran&#231;a e garantia vamos realizar
            atualiza&#231;&#245;es neste{" "}
            <strong>
              <em>Termo de Uso de Website</em>
            </strong>
            , bem como na
            <strong>
              <em>
                Pol&#237;tica de Privacidade e de Prote&#231;&#227;o de Dados
                Pessoais
              </em>
            </strong>
            <em>, </em>
            na{" "}
            <strong>
              <em>Pol&#237;tica de Cookies</em>
            </strong>
            , na{" "}
            <strong>
              <em>Pol&#237;tica de Cordialidade</em>
            </strong>{" "}
            e na
            <strong>
              <em>
                Pol&#237;tica das Tecnologias e Publicidade de Rastreamento
                On-line.
              </em>
            </strong>
            A vers&#227;o vigente ser&#225; sempre a mais recente, a qual pode
            ser verificada na se&#231;&#227;o &#8220;Data da &#250;ltima
            atualiza&#231;&#227;o&#8221;, no topo deste documento;
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
            que digam respeito &#224;s normas previstas neste{" "}
            <strong>
              <em>Termo de Uso de Website</em>
            </strong>
            . Dispon&#237;vel, por meio do e-mail
            <a href="mailto:lgpd@napoleonabrasivos.com.br">
              lgpd@napoleonabrasivos.com.br
            </a>
            <u>;</u>
          </p>
          <p>
            &#9679;
            <strong>
              <em>Canal de Comunica&#231;&#227;o com o Encarregado: </em>
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
            <u>;</u>
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>AVISOS DE DESTAQUE:</strong>
          </p>
          <p>
            &#9679;
            <strong>
              IMPLICA&#199;&#213;ES DA N&#195;O ACEITA&#199;&#195;O DOS{" "}
              <em>TERMOS DE USO DO</em> <em>WEBSITE</em>:
            </strong>
            embora nossa prefer&#234;ncia seja ter voc&#234; conosco, vamos
            respeitar qualquer discord&#226;ncia decorrente da leitura acima.
            Neste caso pedimos que n&#227;o acesse ou continue a utilizar nosso{" "}
            <em>Website</em>, ao menos enquanto n&#227;o esclarecido o ponto
            divergente com o{" "}
            <strong>
              <em>Canal de Comunica&#231;&#227;o do Usu&#225;rio</em>
            </strong>
            ;
          </p>
          <p>
            &#9679;
            <strong>
              INFORMA&#199;&#213;ES CORRENTES DOS SERVI&#199;OS ATRELADOS AO{" "}
              <em>WEBSITE</em>:
            </strong>
            para melhor conhecimento dos servi&#231;os atrelados ao{" "}
            <em>Website</em>, vamos indagar voc&#234;, nosso usu&#225;rio, por
            meio de <strong>consentimento espec&#237;fico</strong>, o qual pode
            ser aceito ou revogado a qualquer tempo por meio do nosso
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
            <u>,</u>
            quanto ao interesse no recebimento, ou n&#227;o, de e-mails, redes
            sociais, notifica&#231;&#245;es de celular ou outras modalidades,
            permitindo
            <strong>
              o autogerenciamento de suas pr&#243;prias configura&#231;&#245;es,
              personalizando a sua experi&#234;ncia e garantindo seus direitos.
            </strong>
          </p>
          <p>
            <strong></strong>
          </p>
          <p>
            &#9679; <strong>Declara&#231;&#245;es de concord&#226;ncia:</strong>
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
            DIFUS&#195;O OU EXTRA&#199;&#195;O DA<strong>NAPOLEON</strong> FORAM
            SUFICIENTEMENTE DESCRITAS NESTE{" "}
            <strong>
              <em>TERMO DE USO DO WEBSITE</em>
            </strong>{" "}
            E NOS DEMAIS DOCUMENTOS DE REGRAMENTO QUE A INTEGRAM, E QUE A{" "}
            <strong>NAPOLEON </strong>CUMPRIU DEVIDAMENTE O DEVER DE
            INFORMA&#199;&#195;O.
          </p>
          <p>
            AP&#211;S LER ATENTAMENTE ESTE{" "}
            <strong>
              <em>TERMO DE USO DO WEBSITE</em>
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
            <strong></strong>
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
