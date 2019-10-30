

import { Content } from '../src/Content';
import { Image } from '../src/Image';
import { TextStyleBlock, TextStyleBlockAlign } from '../src/TextStyleBlock';
import { SectionBlock, SectionBlockColors } from '../src/SectionBlock';

import { Footer } from '../src/Footer';

function Home() {
  return <Content>
			<SectionBlock padding="10px 15%">
				<Image src="/assets/tickershare.png" />
				<TextStyleBlock align={TextStyleBlockAlign.Middle} size="42px" bold>A new way to connect with investors</TextStyleBlock>
				<TextStyleBlock align={TextStyleBlockAlign.Middle} bold>Real Users. Real audience</TextStyleBlock>
				<Image src="/assets/N5GkXT0uTk7yS0R6mpEJJX6zyo.png" maxwidth="90%" fillArea  />
			</SectionBlock>
			<SectionBlock padding="30px 15% 30px 15%" color={SectionBlockColors.Charcoal}>
				<TextStyleBlock align={TextStyleBlockAlign.Middle} size="32px" bold>Tickershare<br />
				is a whole new way to socially network with traders and investors.<br />
				Completely FREE.</TextStyleBlock>
				<TextStyleBlock align={TextStyleBlockAlign.Middle} size="22px" color="#55ccff" margin="25px 0px 0px 0px" bold>Sign up, get into the private beta <br />and<br /> secure your favorite @handle</TextStyleBlock>
			</SectionBlock>
			<SectionBlock padding="30px 15% 0px 15%">
				<TextStyleBlock size="32px" margin="0px 10%" bold>Real users. Verified.</TextStyleBlock>
				<TextStyleBlock size="22px" color="#f6ac3e" margin="0px 10%" bold>With AI we ensure Tickershare remains a community where people use their real identities. <br />
				We require everyone to provide their full name so you can always know who you're connecting with.
				</TextStyleBlock>
				<Image src="/assets/uGIqYVXgxB8v1h2P4fLgyLd5k.png" maxwidth="90%" fillArea />
			</SectionBlock>
			<SectionBlock padding="30px 15%" color={SectionBlockColors.Royal}>
				<TextStyleBlock size="32px" bold>Express yourself. Be an influencer.</TextStyleBlock>
				<TextStyleBlock size="22px" color="#f6ac3e" bold>Tickershare is a real social network, express your opinion on tickers and the market, have an opportunity to build an audience and grow a following</TextStyleBlock>
			</SectionBlock>
			<SectionBlock padding="30px 15% 0px 15%" color={SectionBlockColors.White}>
				<TextStyleBlock size="32px" color="#000" bold>Trending like never before.</TextStyleBlock>
				<TextStyleBlock size="22px" color="#f6ac3e" margin="0px 0px 50px 0px" bold>Using AI and human curation, the trending page does not only show trending tickers, but also why they're trending, keeping you up to date with a quick glance.</TextStyleBlock>
				<Image src="/assets/XFGbuvFUB257uH5KETwDR6ZAryA.png" maxwidth="60%" fillArea />
			</SectionBlock>
			<SectionBlock padding="40px 15%">
				<TextStyleBlock size="32px" bold>Intuitive. Easy to  use.</TextStyleBlock>
				<TextStyleBlock color="#f6ac3e" size="22px" bold>
				We took a design first apporach and with a lot of love,<br />
				we believe it's one of the best looking apps.</TextStyleBlock>
				<Image src="/assets/AzZ2r7i8nJO2CT8KTJu9361gj0.png" maxwidth="60%" fillArea />
			</SectionBlock>
			<Footer>

			</Footer>
  </Content>
}

export default Home