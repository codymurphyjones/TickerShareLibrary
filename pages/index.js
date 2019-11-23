import { Content } from '../src/Content';
import { Image } from '../src/Image';
import { TextStyleBlock, TextStyleBlockAlign } from '../src/TextStyleBlock';
import { SectionBlock, SectionBlockColors } from '../src/SectionBlock';
import { Link } from '../src/Link';
import { Footer } from '../src/Footer';
import { EmailInput, GetEarlyAccessButton } from '../src/EmailInput';

function OpenPrivacyPolicy() {

	var child = window.open('','popup','width=600,height=600');

	window.addEventListener("message", receiveMessage, false);

	function receiveMessage(event) {
		switch(event.data) {
			case "CLOSEPOPUP":
					child.close();
				break;
		}
	}
}



function Home(props) {
	
  return <Content>
	  		<GetEarlyAccessButton sent={props.sent} textboxPlaceholder="Sign up now" />
			<SectionBlock padding="15px 10% 40px 10%" paddingsm="10px 0px 25px 0px">
				<Image src="/assets/tickershare.png" maxwidth="48px" margin="auto auto 20px auto" />
				<TextStyleBlock align={TextStyleBlockAlign.Middle} size="42px" bold>A new way to connect with investors</TextStyleBlock>
				<TextStyleBlock margin="0px 0px 30px 0px" align={TextStyleBlockAlign.Middle} bold>Real users. Real audience</TextStyleBlock>
				<Image src="/assets/N5GkXT0uTk7yS0R6mpEJJX6zyo.png" maxwidth="50%" maxMobileWidth="95%" maxMobile  />
				
			</SectionBlock>
			<SectionBlock padding="60px 0% 60px 0%" paddingsm="30px 0px 30px 0px" color={SectionBlockColors.Charcoal}>
				<a style={{top: '-150px', position: 'relative'}} id="signup" />
				
				<TextStyleBlock align={TextStyleBlockAlign.Middle} size="22px" color="#55ccff" margin="0px 0px 0px 0px" bold>
					<EmailInput id="inputsection" sent={props.sent ? true : false} action="https://usebasin.com/f/43a0ded73401" textboxPlaceholder="Your best email" CallToAction="Get early access">
						<TextStyleBlock align={TextStyleBlockAlign.Middle} color={SectionBlockColors.White} margin="0px auto" size="28px" bold>Tickershare is a whole new way to socially network with traders and investors.</TextStyleBlock>
						<TextStyleBlock align={TextStyleBlockAlign.Middle} size="22px" color="#55ccff" margin="25px 0px 0px 0px" bold>Get into the private beta and<br />secure your favorite @handle<br />
						</TextStyleBlock>
					</EmailInput>
				</TextStyleBlock>

			</SectionBlock>

			<SectionBlock padding="60px 10%" paddingsm="40px 10px 40px 10px">
				<TextStyleBlock size="32px" bold>Real users. Verified.</TextStyleBlock>
				<TextStyleBlock size="22px" color="#f6ac3e"bold>With AI we ensure Tickershare remains a community where people use their real identities. <br />
				We require everyone to provide their full name so you can always know who you're connecting with.
				</TextStyleBlock>
				<Image src="/assets/uGIqYVXgxB8v1h2P4fLgyLd5k.png" maxwidth="30%" maxMobileWidth="50%" maxMobile />
			</SectionBlock>

			<SectionBlock padding="60px 10%" paddingsm="40px 10px 40px 10px" color={SectionBlockColors.Royal}>
				<TextStyleBlock size="32px" bold>Express yourself. Be an influencer.</TextStyleBlock>
				<TextStyleBlock size="22px" color="#f6ac3e" bold>Tickershare is a real social network, express your opinion on tickers and the market, have an opportunity to build an audience and grow a following</TextStyleBlock>
			</SectionBlock>

			<SectionBlock padding="60px 10% 0px 10%" paddingsm="40px 10px 0px 10px" color={SectionBlockColors.White}>
				<TextStyleBlock size="32px" color="#000" bold>Trending like never before.</TextStyleBlock>
				<TextStyleBlock size="22px" color="#f6ac3e" margin="0px 0px 50px 0px" bold>Using AI and human curation, the trending page does not only show trending tickers, but also why they're trending, keeping you up to date with a quick glance.</TextStyleBlock>
				<Image src="/assets/XFGbuvFUB257uH5KETwDR6ZAryA.png" maxwidth="30%" maxMobileWidth="50%" maxMobile />
			</SectionBlock>

			<SectionBlock padding="60px 10%" paddingsm="40px 10px 40px 10px">
			
				<TextStyleBlock size="32px" bold>Intuitive. Easy to  use.</TextStyleBlock>
				<TextStyleBlock margin="10px 0px" color="#f6ac3e" size="22px" bold>
				We took a design first apporach and with a lot of love,<br />
				we believe it's one of the best looking social media apps.</TextStyleBlock>
				<Image src="/assets/AzZ2r7i8nJO2CT8KTJu9361gj0.png" maxwidth="50%" maxMobile />
			</SectionBlock>

			{/*<SectionBlock padding="60px 0% 60px 0%" paddingsm="30px 0px 30px 0px" color={SectionBlockColors.Charcoal}>
				<a id="signup" />
				<TextStyleBlock align={TextStyleBlockAlign.Middle} size="22px" color="#55ccff" margin="0px 0px 0px 0px" bold>
					<EmailInput sent={props.sent} action="https://usebasin.com/f/43a0ded73401" textboxPlaceholder="Get early access!">
							<TextStyleBlock align={TextStyleBlockAlign.Middle} margin="0px auto" size="28px" bold>
								Reserve your spot in the TickerShare Beta today!
							</TextStyleBlock>
							<TextStyleBlock align={TextStyleBlockAlign.Middle} size="22px" color="#55ccff" margin="25px 0px 0px 0px" bold>
								Sign up for the beta to <br />secure your @handle<br />
							</TextStyleBlock>
					</EmailInput>
				</TextStyleBlock>
				
				</SectionBlock>*/}

			

			<Footer padding="0px 0px 15px 0px" fontColor="#8C8C8C">
					<SectionBlock padding="30px 10% 0px 10%" paddingsm="30px 10px 0px 10px" color={SectionBlockColors.Charcoal} center>
						<a color="#8C8C8C" target="popup" onClick={() => { OpenPrivacyPolicy(); return false; }}  href="/privacy.html">Privacy Policy</a><br />
						{/*<Link href="http://google.com">Blog</Link>*/}
					</SectionBlock>
					
					<SectionBlock padding="30px 10% 5px 10%" paddingsm="30px 10px 0px 10px" color={SectionBlockColors.Charcoal} center>
						<span color="#8C8C8C">TickerShare, Inc. All rights reserved</span>
					</SectionBlock>
					
			</Footer>
  </Content>
}

export default Home

Home.getInitialProps = ({ query }) =>  {
	return { sent: query.sent }
  }