import React from "react";

import { MediumText, RegularType1 } from "styles/text";
import {
  Content,
  Container,
  TeamImage,
  AboutTitle,
  ImageContainer,
  ButtonsContainer,
} from "./styles";

import ButtonFill from "components/ButtonFill";
import CallBack from "components/CallBack";
import { theme } from "styles/colors";

const styles = {
  callBack: {
    width: 177,
    marginLeft: 25,
  } as React.CSSProperties,
};

const AboutCompany = () => {
  return (
    <Container id="about_clinic">
      <ImageContainer>
        <AboutTitle>
          «Стоматологія лікаря Ляшука» - це сімейна справа і репутація для нас
          понад усе!
        </AboutTitle>
        <TeamImage
          src="https://i.pinimg.com/originals/0d/36/23/0d3623c187d15098071f74361444ef34.jpg"
          alt="team"
        />
      </ImageContainer>

      <Content>
        <RegularType1>
          Головним нашим принципом є чесність і довірливі стосунки з пацієнтом.
          Ми надаємо повний спектр професійної стоматологічної допомоги для
          усієї родині, від найменшого до найстаршого.
        </RegularType1>
        <MediumText fs={22} color={theme.black}>
          Для «Стоматологія лікаря Ляшука» існує мало неможливого. Ми зробимо
          все, щоб ваша посмішка відповідала вашим уявленням прекрасного. Для
          кожного випадку підбираємо унікальне рішення, яке дозволяє оптимально
          скоротити витрати часу і коштів, при цьому досягаючи довговічного
          результату.
        </MediumText>
        <RegularType1>
          Ми усвідомлюємо, що виконання стоматологічних послуг на найвищому
          рівні можливе лише при повному використанні сучасних технологій, тому
          ми постійно вдосконалюємося і вчимося. Працюємо за міжнародними
          протоколами і керуємося лише доказовою медициною.
        </RegularType1>

        <ButtonsContainer>
          <ButtonFill title="Записатись на консультацію" />
          <div style={styles.callBack}>
            <CallBack type="light" />
          </div>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default AboutCompany;
