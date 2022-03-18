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
        title={"Política de Cookies - Napoleon Abrasives"}
        description={"Política de Cookies, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Política de Cookies"} fundo="sobre" />

        <div className={styles.termos}>
          <p style={{ textAlign: "center" }}><b>Conhecendo a nossa <i>Política de Cookies</i></b></p>
          <p style={{ textAlign: "center" }}><b>NAPOLEON</b></p>

          <br />
          <p><b>Referências gerais e dados de contato LGPD</b></p>
          <br />
          <p>
            Data da última atualização: <b>22 de novembro de 2021</b>
            <b><i>Canal de Comunicação do Usuário:</i></b> <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>
            Encarregado de Proteção Privacidade e Dados Pessoais: <b>Luiz Fernando Del Rio Horn</b>
            <b><i>Canal de Comunicação com o Encarregado:</i></b> <a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a>
          </p>

          <br />
          <p><b>Declaração de Compromisso com a Privacidade e com a Proteção dos Dados Pessoais</b></p>
          <br />
          <p>A <b>NAPOLEON</b> deseja a você, nosso usuário, uma ótima experiência de contato com nossos canais de comunicação, produtos ou serviços, sempre baseada na percepção de respeito, transparência, autonomia, segurança, satisfação e alegria. Nossas ações sempre irão priorizar o resguardo da sua privacidade em todas as etapas da relação, não importando os tipos de meios, marcas, produtos e serviços por nós disponibilizados. Sempre iremos considerar os seus dados pessoais, identificados ou identificáveis, como uma prioridade a ser resguardada na nossa organização.</p>
          <p>Estes são os valores condizentes com a nossa <b><i>Política de Privacidade</i></b>, a qual se alinha às mais relevantes leis informacionais pelo mundo, da qual sentimos muito orgulho e convidamos que a conheça, condição para permanecer navegando no nosso <i>website</i> face as atividades de tratamento de dados pessoais envolvidas. Em igual medida, disponibilizamos para você, nosso usuário, o <b><i>Termo de Uso do Website</i></b> e a <b><i>Política de Cordialidade</i></b> e a <b><i>Política de E-commerce</i></b>.</p>
          <p>A nossa <b><i>Política de Cookies</i></b> obedece a esses critérios maiores, integrando esse documento que se ocupa das informações relativas ao tratamento de dados pessoais, inclusive no tocante aos seus direitos. Recomendamos a você, titular de dados pessoais, que conheça, mais abaixo, os termos adotados quando se trata da utilização de <i>cookies</i> e de outras <i>tecnologias</i> pelo nosso <i>website</i>, de modo a conhecer o <b>gerenciamento de algumas configurações, personalizando a sua experiência e garantindo seus direitos.</b></p>

          <br />
          <p><b>Estrutura e conteúdo da <i>Política de Cookies</i></b></p>
          <br />
          <p>Para facilitar sua compreensão, dividimos este documento em <b>seis partes</b>. Entenda bem como aproveitá-lo na sua leitura integral e, depois, como fazer a localização rápida das partes de destaque:</p>
          <div>
            <p><b>●	Parte 1:</b> descrição dos <i>cookies</i> e suas funcionalidades (o que são e como funcionam);</p>
            <p><b>●	Parte 2:</b> descrição das tecnologias de rastreamento <i>on-line</i> e suas funcionalidades (o que são e como funcionam);</p>
            <p><b>●	Parte 3:</b> procedimentos quando o assunto são <i>cookies</i> e outras tecnologias em nosso <i>website</i>, plataforma, aplicativos e serviços atrelados;</p>
            <p><b>●	Parte 4:</b> opções de gerenciamento dos <i>cookies</i>, com ênfase na desativação dos <i>cookies</i> (opção <i>opt-out</i>);</p>
            <p><b>●	Parte 5:</b> demais documentos legais.</p>
          </div>

          <br />
          <p><b>Parte 1: O que são e como funcionam os cookies?</b></p>
          <br />
          <p><i>Cookies</i> são pequenas unidades de dados temporariamente armazenadas no disco rígido do seu computador ou do seu dispositivo móvel pelo navegador de internet (<i>browser</i>), necessárias para navegar no nosso <i>website</i>. Os <i>cookies</i> são usados para determinar a utilidade, interesse e o número de acesso ao <i>website</i>, permitindo uma navegação de maior qualidade (rápida e eficiente).</p>
          <p>Um <i>cookie</i> geralmente inclui um identificador exclusivo, que é um número anônimo (gerado aleatoriamente) armazenado em seu dispositivo. Alguns expiram no final da sessão do seu <i>website</i>, outros permanecem no seu computador por mais tempo.</p>
          <p>Nem todos os dados (informações) que os <i>cookies</i> carregam são pessoais. Afinal, dado pessoal é considerado toda informação relacionada à pessoa física ou natural identificada ou identificável. Porém, sendo dado pessoal, seu tempo de manutenção ligado a um <i>cookie</i> regula-se pelo critério de necessidade, isto é, pode ser mantido apenas pelo tempo necessário para cumprir a sua legítima finalidade.</p>
          <p><i>Cookies</i> não armazenam informações pessoais sem que você as tenha fornecido e não coletam informações registradas em seu computador. A maioria dos <i>browsers</i> possibilita ao usuário, a qualquer instante, ativar mecanismos para informá-lo quando os <i>cookies</i> estiverem acionados ou para evitar que sejam acionados, embora isso possa afetar a utilização de algumas funções de nosso <i>website</i>.</p>
          <p>Assim como acontece na maioria dos serviços da internet, coletamos algumas informações automaticamente e as armazenamos em arquivos de <i>log</i>. Essas informações incluem endereços do Protocolo da Internet (IP), tipo de navegador e idioma, provedor de internet, <i>websites</i> e aplicativos de encaminhamento e saída, sistema operacional, marcação de data/hora e dados de sequência de cliques (<i>clickstream</i>). Usamos essas informações para entender e analisar tendências, administrar o <i>website</i>, aprender sobre seu comportamento no nosso <i>website</i>, melhorar nossos produtos e serviços e coletar informações demográficas sobre nossa base de usuários como um todo.</p>
          <p>Os <i>cookies</i>, em termos de funcionalidade, não são perigosos. <i>Cookies</i> são pequenos pedaços de texto. Eles não são programas de computador e não podem ser executados como código. Além disso, eles não podem ser usados para disseminar vírus e as versões atuais de alguns navegadores permitem que os usuários definam suas próprias limitações quanto ao número de <i>cookies</i> salvos em seus discos rígidos.</p>
          <p>Os <i>cookies</i> são armazenados no disco rígido do computador, mas não acessam o disco rígido. Portanto, um <i>cookie</i> não pode ler outras informações salvas no disco rígido ou obter o endereço de e-mail do usuário, etc. Eles apenas contêm e transferem para o servidor as informações que os próprios usuários divulgaram em um determinado <i>website</i>.</p>
          <p>Um servidor não pode definir um <i>cookie</i> para um domínio do qual não seja membro. Apesar disso, os usuários muitas vezes encontram em seus arquivos de computador <i>cookies</i> de <i>websites</i> que nunca visitaram. Esses <i>cookies</i> são geralmente aplicados por organizações que comercializam publicidade na internet em nome de outros <i>websites</i>, repassando informações dos usuários para terceiros sem o conhecimento ou consentimento dos usuários, como informações sobre hábitos de navegação, <b>consistindo numa prática desleal e ilegal da qual não pactuamos</b>. Esse é o motivo mais comum para as pessoas rejeitarem os <i>cookies</i>.</p>
          <p>Existem duas categorias gerais de <i>cookies</i>:</p>
          <div>
            <p><b>●	<i>Cookies</i> de origem:</b> são <i>cookies</i> gerados pelo próprio domínio, isto é, pelo <i>website</i> que você visita, dos quais nos responsabilizamos. Os <i>cookies</i> de origem são definidos pelo <i>website</i> que você está acessando e podem ser lidos somente por aquele <i>website</i>;</p>
            <p><b>●	<i>Cookies</i> de terceiros:</b> são <i>cookies</i> gerados por terceiros, originados de fonte externa ao domínio. Os <i>cookies</i> de terceiros são definidos por outras organizações que nós utilizamos para diferentes serviços, sendo geralmente utilizados para medir o sucesso de aplicações e a eficácia da publicidade de terceiros nos <i>websites</i>. É o caso, por exemplo, de serviços analíticos externos de fornecedores que definem <i>cookies</i> de nosso interesse, a fim de relatar o que é visualizado e o que não é. <i>Websites</i> que você acessa também podem ter conteúdo integrado ao YouTube, por exemplo, e esses <i>websites</i> podem definir seus próprios cookies.</p>
          </div>
          <p>Os <i>cookies</i> também podem ser classificados pelas diferentes funções que assumem:</p>
          <div>
            <p><b>●	<i>Cookies</i> essenciais ou necessários:</b> alguns <i>cookies</i> são essenciais para acessar a áreas específicas dos <i>websites</i>, permitindo a navegação e a utilização das suas aplicações, tal como acessar áreas seguras por meio de <i>login</i>. Sem estes <i>cookies</i>, os serviços que o exijam não podem ser prestados, como no caso dos cestos de compras ou fatura eletrônica;</p>
            <p><b>●	<i>Cookies</i> analíticos ou de desempenho:</b> a utilização destes <i>cookies</i> se dá para analisar a forma como os usuários usam o <i>website</i> e monitorar a sua performance. Isso fornece uma experiência de alta qualidade ao personalizar a oferta e rapidamente identificar e corrigir quaisquer problemas que surjam. Por exemplo, usam-se <i>cookies</i> de desempenho para saber quais as páginas mais acessadas; qual o método de ligação entre páginas que é mais eficaz; para determinar a razão de algumas páginas receberem mensagens de erro; para destacar artigos ou serviços do <i>website</i> que se pensa ser do interesse dos usuários. Estes <i>cookies</i> são utilizados apenas para efeitos de criação e análise estatística, sem nunca recolher informação de caráter pessoal;</p>
            <p><b>●	<i>Cookies</i> de funcionalidade:</b> utilizados para permitir relembrar as preferências do usuário relativamente à utilização do <i>website</i>, de forma que não seja necessário voltar a configurar a página toda vez que a visita. Os <i>cookies</i>, nessa função, evitam digitar o nome do usuário cada vez que este acede ao <i>website</i>; permitem fornecer serviços avançados, como no caso de comentários a um artigo;</p>
            <p><b>●	<i>Cookies</i> de publicidade ou direcionados ou segmentação:</b> servem para direcionar a publicidade em função dos interesses de cada usuário e do número de visitas que realizou, permitindo limitar o número de vezes da exibição do anúncio ou a medir a eficácia da publicidade;</p>
            <p><b>●	<i>Cookies</i> de mídia social:</b> facilitam o compartilhamento em redes sociais, fornecem ferramentas para que o usuário se conecte ao <i>website</i> e permita entender melhor tanto o público-alvo como a eficácia da divulgação nas mídias sociais. Estes são <i>cookies</i> de terceiros. Suas escolhas em relação a esses <i>cookies</i> são determinadas pelas plataformas de mídia social nas quais você possui conta.</p>
          </div>
          <p>Quanto aos tipos, os <i>cookies</i> podem ser:</p>
          <div>
            <p><b>●	<i>Cookies</i> permanentes ou persistentes:</b> ficam armazenados no navegador de internet (<i>browser</i>) nos seus dispositivos de acesso (<i>desktop</i>, <i>mobile</i> ou <i>tablet</i>) e são utilizados sempre que o usuário faz uma nova visita ao <i>website</i>. Geralmente são utilizados para direcionar a navegação de acordo com os interesses do usuário, permitindo prestar um serviço mais personalizado;</p>
            <p><b>●	<i>Cookies</i> de sessão:</b> são <i>temporários</i>, expirando automaticamente quando fechado o navegador. A informação obtida permite identificar problemas, com melhor experiência de navegação.</p>
          </div>

          <br />
          <p><b>Parte 2: O que são e como funcionam as outras tecnologias de rastreamento <i>on-line</i>?</b></p>
          <br />
          <p>Quando você visita um <i>website</i>, rastreadores (conhecidos por “tecnologia de rastreamento de terceiros”) são armazenados em seu computador. O proprietário ou responsável pelo <i>website</i> determina quantos e quais tipo de <i>tecnologias de rastreamento on-line</i> serão incluídos. Alguns <i>websites</i> podem ter até mais de sessenta rastreadores, enquanto outros podem apresentar apenas um ou até mesmo nenhum. A espécie mais comum de rastreador é o notório <i>cookie</i>, mas os rastreadores não se resumem a esse tipo.</p>
          <p>Rastreadores conseguem coletar diversas informações sobre seu dispositivo, incluindo seu endereço Protocolo da Internet (IP), seus históricos de navegação, o tamanho da sua tela, o fuso-horário, <i>plug-ins</i> e sistema operacional. A combinação de todos esses elementos gera uma espécie de <i>impressão digital</i> de navegação.</p>
          <p>Nem todos os rastreadores estão necessariamente ligados a empreendimentos que apuram hábitos de navegação. Alguns são utilizados tão somente para que um website aponte o número de acesso de usuários e suas origens. Alguns são realmente necessários para fazer o <i>website</i> funcionar adequadamente. Entretanto, via de regra, a aceitação de <i>cookies</i> implica concordância no recebimento de todos os rastreadores deste <i>website</i>, incluindo aqueles que passam informações gerais para empresas.</p>
          <p>Exemplos de <i>tecnologias de publicidade e rastreamento on-line</i> incluem:</p>
          <div>
            <p><b>●	<i>Cookies</i>:</b> notoriamente conhecidos, consistindo em informações que um <i>website</i> coloca no disco rígido do seu computador quando você o visita. Da nossa parte conferimos a você, nosso usuário, gerenciamento completo sobre essa ferramenta, acessando nosso <b><i>Banner</i> LGPD</b>;</p>
            <p><b>●	<i>Flash cookies</i>:</b> usados para armazenar suas preferências ou exibir conteúdo com base no que você visualiza nos <i>websites</i>, personalizando a visita. Anunciantes e provedores de serviços terceirizados também podem usar <i>Flash cookies</i> para coletar e armazenar informações;</p>
            <p><b>●	AVISO DE DESTAQUE:</b></p>
            <div style={{marginLeft: "3rem"}}>
              <p>●	<i>Flash cookies</i> são diferentes dos <i>cookies</i> do navegador devido à quantidade, tipo e forma de armazenamento dos dados, sendo que as ferramentas de gerenciamento de cookies fornecidas pelo seu navegador não removerão os <i>Flash cookies</i>;</p>
              <p>●	Caso você venha desabilitar os <i>cookies</i>, não terá acesso a muitos recursos que tornam a experiência de navegação mais eficiente, podendo comprometer a funcionalidade de alguns dos serviços disponibilizados;</p>
            </div>
            <p><b>●	<i>Web beacons</i>:</b> são pequenos pedaços de dados incorporados em imagens nas páginas de <i>websites</i>. <i>Web beacons</i> podem envolver a transmissão de informações para você e de suas informações diretamente para o responsável pelo <i>website</i>, para terceiro em nome do titular do <i>website</i> ou para outra parte de acordo com sua respectiva política de privacidade.</p>
          </div>
          <p>Nem todos os dados (informações) que as <i>tecnologias de publicidade e rastreamento on-line</i> carregam são pessoais. Porém, sendo dado pessoal, seu tempo de manutenção ligado a uma <i>tecnologia de publicidade e rastreamento on-line</i> deve-se regular pelo critério de necessidade, isto é, pode ser mantido pelo tempo necessário para cumprir a sua legítima finalidade.</p>
          <p>Nós, da <b>NAPOLEON</b>, conforme a <b>Declaração de Compromisso com a Privacidade e com a Proteção dos Dados Pessoais</b>, sempre iremos oferecer possibilidades de gerenciamento quando se tratar de informações (dados) pessoais, coletando os consentimentos específicos sempre quando necessário.</p>

          <br />
          <p><b>Parte 3: Para que utilizamos os <i>cookies e outras tecnologias</i> em nosso website, plataforma, aplicativos e serviços vinculados?</b></p>
          <br />
          <p>Saiba que as informações colhidas e contidas nos nossos <i>cookies e outras tecnologias</i> são utilizadas com o objetivo de melhorar os serviços de navegação e de relacionamento, de modo a:</p>
          <div>
            <p>●	Permitir que um serviço reconheça seu dispositivo numa próxima visita;</p>
            <p>●	Para que você não precise fornecer as mesmas informações várias vezes ao realizar uma tarefa durante uma sessão, seja no preenchimento de um formulário ou de uma pesquisa <i>on-line</i>;</p>
            <p>●	Conferir suporte à funcionalidade à navegação personalizada;</p>
            <p>●	Permitir que o reprodutor de vídeo funcione adequadamente medindo quantas pessoas estão utilizando os serviços, de modo que a utilização de tais serviços seja facilitada e garantindo que haja capacidade suficiente para manter sua agilidade;</p>
            <p>●	Analisando dados anônimos para nos ajudar a compreender como as pessoas interagem com os diferentes aspectos dos nossos serviços <i>on-line</i> com vistas ao seu aprimoramento;</p>
            <p>●	Gerar uma melhoria na forma de divulgação de nossos produtos e serviços visando a objetividade, transparência e dinamismo;</p>
            <p>●	Possibilitar a melhoria nos nossos produtos e serviços em seu favor.</p>
          </div>

          <br />
          <p><b>Parte 4: Gerenciando seus <i>cookies e outras tecnologias</i>!</b></p>
          <br />
          <p>Objetivando a total transparência nos nossos procedimentos, utilizamos como ferramenta um <b><i>Banner</i> LGPD</b>, consistindo naquela <i>janelinha</i> destacada dentro do nosso <i>website</i>, sendo um instrumento de gerenciamento da experiência de navegação, acionando ou desativando funcionalidades. Confira abaixo:</p>
          <img style={{objectFit: "contain"}} src="/assets/img/acta_janela.png" alt="Janela do cookie banner" width="100%" height={370} />
          <p>Em quaisquer casos de dúvidas, erros, sugestões ou problemas de utilização da plataforma concernentes ao emprego de <i>cookies e outras tecnologias</i>, pedimos para contatar o <i>Canal de Comunicação do Usuário</i> por meio do <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a> ou, como última instância, utilizar o <i>Canal de Comunicação com o Encarregado da Proteção da Privacidade e dos Dados Pessoais</i>, por meio do <a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a>.</p>
          <p>Independente desse gerenciamento das próprias configurações presentes no nosso <i>website</i>, o usuário, titular de dados pessoas, pode, a qualquer momento, mesmo depois de autorizado o uso de <i>cookies e outras tecnologias</i> por meio do <b><i>Banner</i> LGPD</b>, decidir ser notificado sobre a recepção de <i>cookies</i>, bem como bloquear a respectiva entrada no seu sistema por meio da desativação de parte ou da totalidade dos nossos <i>cookies e outras tecnologias</i>.</p>
          <p>A maioria dos navegadores de internet (<i>browser</i>) permite que você escolha se aceita os <i>cookies e outras tecnologias</i>. A maioria também permite eliminar os <i>cookies e outras tecnologias</i> já definidos. As opções disponíveis e o mecanismo usado variam de navegador para navegador. Essas configurações do navegador são normalmente encontradas no menu &quot;opções&quot;, &quot;ferramentas&quot; ou &quot;preferências&quot;. Você também poderá consultar o menu &quot;ajuda&quot; do navegador.</p>
          <p>Nos próprios <i>browsers</i> (também conhecido como navegador, correspondendo a um programa criado para permitir a navegação pela internet) é possível ao usuário, titular de dados pessoais aceitar, recusar ou apagar <i>cookies</i> (com exceção, normalmente, dos <i>cookies</i> essenciais ou necessários), utilizando comandos de configuração do seu <i>browser</i>.</p>
          <p>Alerta-se que a recusa de <i>cookies e outras tecnologias</i> pode vir a prejudicar a navegação, com comprometimento de certos serviços, áreas do <i>website</i> ou não envio de informações de sua preferência. Por isso, fique atento: lembre-se sempre que, ao desativar <i>cookies</i> e outras tecnologias de rastreamento <i>on-line</i>, partes do nosso <i>website</i> podem não funcionar corretamente. Caso a eliminação seja após a saída do website, tenha em mente que todas as definições e preferências controladas por aqueles <i>cookies</i> e outras tecnologias serão descartadas e necessitarão serem recriadas quando do retorno ao <i>website</i>.</p>

          <br />
          <p><b>Parte 5: Demais documentos legais</b></p>
          <br />
          <p>Para conhecimento completo de todas nossas normas de condução, recomendamos a leitura da nossa <b><i>Política de Privacidade</i></b>, do <b><i>Termo de Uso do Website</i></b>, e da <b><i>Política de Cordialidade</i></b> e <b><i>Política de E-commerce</i></b>.</p>
          <p>Estamos sempre à disposição para esclarecer suas dúvidas, atender suas solicitações ou ouvi-lo nas suas demandas e colocá-lo no controle dos seus dados pessoais. Conte conosco para mantê-lo informado!</p>
          <p style={{ textAlign: "center" }}><b>NAPOLEON</b></p>
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
