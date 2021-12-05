import React from "react";

import {
  Content,
  BoldText,
  Container,
  NormalText,
  TeamImage,
  AboutTitle,
  TextWrapper,
  ImageContainer,
  CallBackWrapper,
  ButtonsContainer,
} from "./styles";

import ButtonFill from "components/ButtonFill";
import CallBack from "components/CallBack";
import { usePopUpContext } from "context/popupContext";

import teamImage from "assets/images/team.png";

const AboutCompany = () => {
  const { onOpen } = usePopUpContext();

  const onSign = () => {
    document.getElementById("header")?.scrollIntoView();
    onOpen();
  };

  return (
    <Container id="about_clinic">
      <ImageContainer>
        <AboutTitle>
          «Стоматологія лікаря Ляшука» - це сімейна справа і репутація для нас
          понад усе!
        </AboutTitle>
        <TeamImage src={teamImage} alt="team" />
      </ImageContainer>

      <Content>
        <TextWrapper>
          <NormalText>
            Головним нашим принципом є чесність і довірливі стосунки з
            пацієнтом. Ми надаємо повний спектр професійної стоматологічної
            допомоги для усієї родині, від найменшого до найстаршого.
          </NormalText>
        </TextWrapper>
        <TextWrapper>
          <BoldText>
            Для «Стоматологія лікаря Ляшука» існує мало неможливого. Ми зробимо
            все, щоб ваша посмішка відповідала вашим уявленням прекрасного. Для
            кожного випадку підбираємо унікальне рішення, яке дозволяє
            оптимально скоротити витрати часу і коштів, при цьому досягаючи
            довговічного результату.
          </BoldText>
        </TextWrapper>
        <TextWrapper>
          <NormalText>
            Ми усвідомлюємо, що виконання стоматологічних послуг на найвищому
            рівні можливе лише при повному використанні сучасних технологій,
            тому ми постійно вдосконалюємося і вчимося. Працюємо за міжнародними
            протоколами і керуємося лише доказовою медициною.
          </NormalText>
        </TextWrapper>

        <ButtonsContainer>
          <ButtonFill title="Записатись на консультацію" onClick={onSign} />
          <CallBackWrapper>
            <CallBack type="light" />
          </CallBackWrapper>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default AboutCompany;
