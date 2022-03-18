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
        title={"Política de Cordialidade - Napoleon Abrasives"}
        description={"Política de Cordialidade, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Política de Cordialidade"} fundo="sobre" />

        <div className={styles.termos}>
          <p><b>Conhecendo a nossa <i>Política de Cordialidade</i></b></p>
          <p><b>NAPOLEON</b></p>

          <br />
          <p><b>Referências gerais e contatos LGPD</b></p>
          <p>
            Data da última atualização: <b>22 de novembro de 2021</b><br />
            <b><i>Canal de Comunicação do Usuário:</i></b> <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a><br />
            Encarregado da Proteção Privacidade e Dados Pessoais: <b>Luiz Fernando Del Rio Horn</b><br />
            <b><i>Canal de Comunicação com o Encarregado:</i></b> <a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a>
          </p>

          <br />
          <p><b>Declaração de Compromisso com a Privacidade e com a Proteção dos Dados Pessoais</b></p>
          <br />
          <p>A <b>NAPOLEON</b> deseja a você, nosso usuário, uma ótima experiência de contato com nossos canais de comunicação, produtos ou serviços, sempre baseada na percepção de respeito, transparência, autonomia, segurança, satisfação e alegria. Nossas ações sempre irão priorizar o resguardo da sua privacidade em todas as etapas da relação, não importando os tipos de meios, marcas, produtos e serviços por nós disponibilizados. Sempre iremos considerar os seus dados pessoais, identificados ou identificáveis, como uma prioridade a ser resguardada na nossa organização.</p>
          <p>Estes são os valores condizentes com a nossa <b><i>Política de Privacidade</i></b>, alinhada as mais relevantes leis informacionais pelo mundo, da qual sentimos muito orgulho e convidamos que a conheça, condição para permanecer navegando no nosso <i>website</i> face às atividades de tratamento de dados pessoais envolvidas. Em igual medida, disponibilizamos para você, nosso usuário, o <b><i>Termo de Uso do Website</i></b> e a <b><i>Política de Cookies</i></b>.</p>
          <p>A nossa <b><i>Política de Cordialidade</i></b> obedece a esses critérios maiores, integrando esse documento que se ocupa das informações relativas ao tratamento de dados pessoais, inclusive no tocante aos seus direitos. Recomendamos a você usuário, titular de dados pessoais, que conheça, mais abaixo, os termos adotados quando se trata das <b>formas de comportamento para a excelência das relações humanas.</b></p>

          <br />
          <p><b>1. Declaração de compromisso com as boas práticas de cordialidade</b></p>
          <br />
          <p>Na <b>NAPOLEON</b> temos como compromisso primordial o tratamento de todos os usuários, titulares de dados pessoais ou não, com <b>respeito, civilidade, consideração e gentileza</b>, independente das opiniões opostas ou diferentes, crenças, posições e conclusões. Assumimos a premissa de que todas as pessoas podem contribuir para que os meios de interação sejam espaços para crescimento individual e coletivo, locais para construção de soluções a partir da divergência. Acreditamos que somos todos responsáveis pela criação e manutenção de uma comunidade respeitosa, uma tarefa viável quando reconhecidos os próprios limites e as necessidades do outro.</p>

          <br />
          <p><b>2. Ataque a pessoas ou a conteúdos</b></p>
          <br />
          <p>Ataques pessoais não são permitidos no <i>website</i> da <b>NAPOLEON</b>, mesmo que não sejam desrespeitosos ou sejam direcionados ao conteúdo do publicador. As pessoas devem se pautar pela cordialidade e civilidade, sempre primando pelo respeito absoluto na hipótese da discordância. Portanto, resta terminantemente proibido:</p>
          <div>
            <p>●	Atacar ou depreciar outras pessoas em razão de opinião ou manifestação igualmente respeitosa;</p>
            <p>●	Disparar dados pessoais de terceiros desprovidos de base legal, atentatórios à moral ou à legislação;</p>
            <p>●	Proferir comentários ou material atentatório contra origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa;</p>
            <p>●	Referir-se ao conteúdo alheio de forma depreciativa, insultante ou desprovida de respeito;</p>
            <p>●	Assediar outros usuários dos canais de interação e comunicação.</p>
          </div>
          <p>Entendemos que esses tipos de comportamento não agregam valor e tampouco conhecimento, além de inibirem e/ou impedirem que outras pessoas contribuam com sua participação útil e diversificada para a construção de um ambiente, comunidade e sociedade melhor.</p>

          <br />
          <p><b>3. Interação entre pessoas</b></p>
          <br />
          <p>Considerando que a interação entre pessoas desconhecidas seja comumente desprovida de empatia, é necessário que se mantenha qualquer tipo de relação em um alto nível de educação e cordialidade, diferente de conversas mantidas em redes sociais de grupos fechados ou em rodas mais íntimas. Ser respeitoso e gentil implica assegurar que os seus comentários/respostas não irão desrespeitar, desencorajar ou intimidar outras pessoas.</p>
          <p>Incentivamos o debate e as opiniões discordantes sempre que necessário, porém é imprescindível que se agregue valor ao conteúdo debatido, sempre com vistas à solução e pacificação das relações sociais. O problema não repousa na discordância para com o outro, mas na forma com que se expressa essa posição oposta, sempre carecedora de respeito, cordialidade e educação.</p>
          <p>Constituem exemplos de comportamento violadores da presente <b><i>Política de Cordialidade</i></b>:</p>
          <div>
            <p>●	Ataques pessoais, incluindo comentários ofensivos, hostis e desrespeitosos;</p>
            <p>●	Acusações injustificadas sobre outros usuários;</p>
            <p>●	Padrões de comportamento que constituem assédio a um alvo, seja uma pessoa ou um grupo delas, como é o caso de ameaças, perturbações repetitivas, contatos indesejados, ataques pessoais ou revelação de informações pessoais de algum usuário sem sua permissão;</p>
            <p>●	Ofensas raciais, sexuais, homofóbicas, ateístas, religiosas, políticas, éticas ou outras referências similares contra algum membro da comunidade;</p>
            <p>●	Uso da filiação de alguém como motivo para descreditar ou depreciar a visão de uma pessoa (isso não inclui apontar um conflito de interesse relevante à questão discutida).</p>
          </div>

          <br />
          <p><b>4. Assédio</b></p>
          <br />
          <p>O assédio é claramente um sinal de comportamento abusivo e ofensivo utilizado por pessoas que têm como propósito afetar, de qualquer modo, pessoa ou pessoas específicas destas ofensas. Com esse tipo de postura inadequada, a pretensão do assediador é tornar os canais e meios de interação com a <b>NAPOLEON</b> um espaço desagradável para seu ofendido, desencorajando a participação ou a presença de determinada pessoa ou grupo de pessoas. Constituem exemplos de comportamento violadores da presente <b><i>Política de Cordialidade</i></b> por assédio:</p>
          <div>
            <p>●	Ameaças;</p>
            <p>●	Perturbações repetitivas;</p>
            <p>●	Contatos indesejados;</p>
            <p>●	Ataques pessoais;</p>
            <p>●	Revelação de informações pessoais desprovidas de consentimento adequado.</p>
          </div>

          <br />
          <p><b>5. Discursos de ódio</b></p>
          <br />
          <p>Absolutamente nenhuma pessoa está autorizada a postar conteúdo ou adotar tom que possa ser interpretado, ao observador comum, como uma forma de discurso de ódio, particularmente voltado à raça, gênero, religião, nacionalidade, etnia, grupo político, orientação sexual ou outra característica similar. Comentários e/ou conteúdos que abordem esses temas de forma genérica devem ser redigidos de forma neutra e a mais respeitosa possível.</p>

          <br />
          <p><b>6. Retaliações não serão permitidas</b></p>
          <br />
          <p>Violar a <b><i>Política de Cordialidade</i></b> em resposta à agressão de outra pessoa na condição de agressor tampouco será permitida.</p>

          <br />
          <p><b>7. Abrangência destas normas de condução</b></p>
          <br />
          <p>Nossa <b><i>Política de Cordialidade</i></b> estende-se também a todos os demais canais de comunicação da <b>NAPOLEON</b>.</p>

          <br />
          <p><b>8. Medidas e comunicações de comportamentos inadequados</b></p>
          <br />
          <p>Muito embora nossa preferência seja ter todas as pessoas conosco, não serão tolerados comportamentos inadequados, como os descritos acima. Caso você não concorde com os termos antes descritos, então pedimos que não acesse ou não continue a utilizar nosso <i>website</i> e demais canais e ambientes de relacionamento da <b>NAPOLEON</b>.</p>
          <p>Independente disso, comentários e/ou conteúdos que violem a <b><i>Política de Cordialidade</i></b> podem ser comunicados no nosso <b><i>Canal de Comunicação do Usuário</i></b> e, com isso, removidos sem aviso prévio, sendo que os usuários que insistirem em desrespeitar estes normas de condução podem ser proibidos de fazer comentários ou sofrer bloqueio temporário ou permanente nos nossos canais e ambientes de relacionamento.</p>

          <br />
          <p><b>9. Canais de comunicação</b></p>
          <br />
          <div>
            <p><b>●	Nosso <i>Canal de Comunicação do Usuário</i>:</b> serviço de atendimento preparado para todas as demandas oriundas de você, nosso usuário, comportando solicitações, dificuldades, dúvidas, reclamações, sugestões ou qualquer outra contribuição específica sobre nossos procedimentos que digam respeito às normas previstas nesta <b><i>Política de Cordialidade</i></b>. Disponível por meio do e-mail <a href="mailto:lgpd@napoleon.com.br">lgpd@napoleon.com.br</a>.</p>
            <p><b>●	<i>Canal de Comunicação com o Encarregado da Proteção da Privacidade e dos Dados Pessoais</i>:</b> profissional responsável por zelar por todas as políticas, processos e procedimentos referentes à privacidade e dados pessoais de todos os titulares. Recomendamos o contato quando as demandas dirigidas ao <b><i>Canal de Comunicação do Usuário</i></b> sejam consideradas não satisfatórias. Disponível por meio do e-mail <a href="mailto:encarregado@actatechlaw.com.br">encarregado@actatechlaw.com.br</a>.</p>
          </div>

          <br />
          <p><b>10. Demais documentos legais</b></p>
          <br />
          <p>Para conhecimento completo de todas nossas normas de condução, recomendamos a leitura da nossa <b><i>Política de Privacidade</i></b>, do <b><i>Termo de Uso do Website</i></b> e da <b><i>Política de Cookies</i></b>.</p>
          <br />
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
