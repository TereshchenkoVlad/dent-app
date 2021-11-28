import React from "react";

import { BigTitle, MediumText, RegularType1 } from "styles/text";
import {
  Container,
  Inner,
  Wrapper,
  TeamImage,
  ButtonsContainer,
  Content,
} from "./styles";

import dentTeamImage from "assets/images/dentTeam.svg";
import ButtonFill from "components/ButtonFill";
import CallBack from "components/CallBack";
import { theme } from "styles/colors";

const styles = {
  textContainer: {
    marginBottom: 40,
  },
  callBack: {
    maxWidth: 200,
    marginLeft: 25,
  },
};

const AboutCompany = () => {
  return (
    <Wrapper>
      <Container>
        <BigTitle>
          «Стоматологія лікаря Ляшука» - це сімейна справа і<br /> репутація для
          нас понад усе!{" "}
        </BigTitle>

        <Inner>
          <TeamImage src={dentTeamImage} alt="team" />

          <Content>
            <div style={styles.textContainer}>
              <RegularType1>
                Головним нашим принципом є чесність і довірливі стосунки з
                пацієнтом. Ми надаємо повний спектр професійної стоматологічної
                допомоги для усієї родині, від найменшого до найстаршого.
              </RegularType1>
            </div>
            <div style={styles.textContainer}>
              <MediumText fs={22} color={theme.black}>
                Для «Стоматологія лікаря Ляшука» існує мало неможливого. Ми
                зробимо все, щоб ваша посмішка відповідала вашим уявленням
                прекрасного. Для кожного випадку підбираємо унікальне рішення,
                яке дозволяє оптимально скоротити витрати часу і коштів, при
                цьому досягаючи довговічного результату.
              </MediumText>
            </div>
            <RegularType1>
              Ми усвідомлюємо, що виконання стоматологічних послуг на найвищому
              рівні можливе лише при повному використанні сучасних технологій,
              тому ми постійно вдосконалюємося і вчимося. Працюємо за
              міжнародними протоколами і керуємося лише доказовою медициною.
            </RegularType1>

            <ButtonsContainer>
              <ButtonFill title="Записатись на консультацію" />
              <div style={styles.callBack}>
                <CallBack type="light" />
              </div>
            </ButtonsContainer>
          </Content>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default AboutCompany;
