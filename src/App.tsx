import styled, { keyframes } from "styled-components";
import GlobalStyle from "./GlobalStyles";

const Header = styled.h1`
	background-image: url("https://assets.codepen.io/308367/mountain-with-stars.jpg");
	background-position: bottom;
	background-size: cover;
	padding: 5rem;
	min-height: 70vh;
	position: relative;
`;

const HeaderInnerWrapper = styled.div`
	position: absolute;
	inset: 0;
	background: rgb(0 0 0 / 0.5);
	mask: url("https://assets.codepen.io/308367/mountain-mask.svg");
	mask-position: bottom;
	mask-size: cover;
`;

const HeaderText = styled.h1`
	text-align: center;
	font-size: clamp(4rem, 10vw + 0.5rem, 9rem);
	font-weight: 900;
	line-height: 1;
	margin-top: 45px;
	text-transform: uppercase;
	position: fixed;
	width: 100%;
	color: #eeeeee;
	text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa,
		0 0 102px #0fa, 0 0 151px #0fa;
`;

const Pulsate = keyframes`
100% {
  text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #f09,
    0 0 80px #f09,
    0 0 90px #f09,
    0 0 100px #f09,
    0 0 150px #f09;
}
0% {
  text-shadow:
    0 0 4px #fff,
    0 0 10px #fff,
    0 0 18px #fff,
    0 0 38px #f09,
    0 0 73px #f09,
    0 0 80px #f09,
    0 0 94px #f09,
    0 0 140px #f09;
}
`;

const HeaderSubText = styled.h2`
	text-align: center;
	font-size: clamp(4rem, 10vw + 0.5rem, 9rem);
	font-weight: 900;
	line-height: 1;
	top: 150;
	text-transform: uppercase;
	position: fixed;
	width: 100%;
	color: #eeeeee;
	animation: ${Pulsate} 0.11s ease-in-out infinite alternate;
`;

const MainContainer = styled.div`
	width: min(100% - 3rem, 55rem);
	margin-inline: auto;
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header>
				<HeaderInnerWrapper>
					<HeaderText>QueensLab</HeaderText>
					<HeaderSubText>The Challange</HeaderSubText>
				</HeaderInnerWrapper>
			</Header>
			<main>
				<MainContainer>
					<h2>Lorem ipsum dolor sit amet.</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis
						itaque ipsam debitis esse deserunt odio exercitationem beatae maxime, ducimus,
						dignissimos perferendis fuga optio pariatur!
					</p>
					<p>
						Veritatis voluptatum modi harum tempora magni autem mollitia earum voluptate veniam,
						id eum vitae debitis doloribus sapiente, fuga aspernatur aperiam minus. At aperiam aut
						harum!
					</p>
					<p>
						Omnis libero soluta quibusdam autem tempora. Neque sint asperiores maiores quaerat cum
						quam quidem nihil beatae blanditiis distinctio cupiditate eaque, dolorem earum
						incidunt quod unde.
					</p>
					<p>
						Qui dolores sunt quam cum eius dolorem eligendi illo doloribus, consectetur
						consequatur. Ut provident asperiores est, error, quam eos dignissimos, ipsam
						blanditiis soluta dicta aut!
					</p>
					<p>
						Maiores quisquam, reiciendis repellendus assumenda, sed perspiciatis incidunt,
						laboriosam nisi aut laborum neque? Modi quas officia quia obcaecati consequuntur
						perferendis quis fuga magnam adipisci iure.
					</p>
					<p>
						Cupiditate sapiente asperiores ab eaque explicabo dolores illo delectus necessitatibus
						numquam, labore optio itaque modi officia deserunt, incidunt laborum magnam porro
						nulla architecto adipisci beatae.
					</p>
					<p>
						Odit doloremque eum optio, beatae aut repellendus omnis aliquid cum rerum quisquam
						laboriosam dicta inventore, natus dolor ipsam autem, asperiores libero earum aliquam.
						Deserunt, esse!
					</p>
					<p>
						Maiores officiis velit et consectetur in. Dolorum voluptatem, laudantium, incidunt rem
						temporibus maxime cupiditate accusamus iure maiores repellat iusto mollitia! Ex
						tempore provident odio deleniti!
					</p>
					<p>
						Ratione voluptatum culpa eum minima, explicabo vel dicta numquam blanditiis iusto.
						Odio nam consectetur mollitia itaque pariatur, quisquam similique praesentium
						assumenda, voluptatum aliquid voluptatem atque?
					</p>
					<p>
						Officiis sunt illum explicabo rerum libero consequatur veritatis error, recusandae
						iure provident, velit accusamus beatae enim ab! Repellendus, nam dolores temporibus
						architecto ab quidem nisi.
					</p>
					<p>
						Molestiae ad eaque placeat earum ipsum libero non ea consequuntur quos ratione, in
						corporis maxime aliquid distinctio? Illo, praesentium. Perspiciatis sapiente nobis
						ipsa veritatis quis.
					</p>
					<p>
						Vitae magnam, dicta modi architecto accusamus numquam. Odio rem, aut accusantium
						inventore aperiam voluptate velit eveniet quasi temporibus debitis hic culpa sed
						optio. Eos, maxime.
					</p>
					<p>
						At alias provident, iure nisi non placeat saepe sit labore accusamus, repudiandae iste
						ullam hic magni dicta officia animi explicabo officiis ratione fugiat reiciendis!
						Assumenda?
					</p>
					<p>
						Hic enim blanditiis quidem corrupti similique, soluta dolorem aliquam facere
						distinctio nihil voluptas adipisci molestias officiis repellat. Similique, blanditiis
						quae esse reiciendis impedit reprehenderit nemo?
					</p>
					<p>
						Itaque distinctio voluptatem fuga omnis nihil perferendis sequi architecto autem sunt
						accusamus hic ipsa repellat, harum ratione maxime ad libero consequatur rerum. Velit,
						illum libero!
					</p>
					<p>
						Vero illo dicta magni ratione obcaecati, iure amet impedit, cupiditate necessitatibus
						fugit officia, aliquam id accusamus. Porro quisquam id ex aperiam, atque facere minima
						temporibus!
					</p>
					<p>
						Voluptates aperiam maiores enim veniam? Inventore pariatur cumque nemo esse tempore,
						ab doloribus corporis dignissimos nisi laborum id mollitia sapiente repudiandae
						excepturi cupiditate, odit quibusdam.
					</p>
					<p>
						Dolores alias nemo perferendis officiis. Esse alias nihil ducimus distinctio delectus
						voluptates incidunt odio obcaecati, officia repudiandae ab velit sint consequatur
						debitis, quod tempora quibusdam.
					</p>
					<p>
						Illum, earum ab! Eligendi sit cupiditate saepe quis ducimus accusamus eius magni
						blanditiis quisquam provident mollitia itaque ab nulla officia, alias tenetur
						molestiae quia quod?
					</p>
					<p>
						Inventore amet iste ratione dicta maxime, id doloremque eius laboriosam recusandae
						assumenda illum voluptatem, mollitia nisi perspiciatis dolore architecto, hic
						accusantium labore ipsa. Consequuntur, quod.
					</p>
				</MainContainer>
			</main>
		</>
	);
};

export default App;
