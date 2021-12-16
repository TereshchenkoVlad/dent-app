import React from "react";
import styled from "styled-components";

import { Text, LabelText, List, ListItem } from "pages/InfoPage/styles";

const Surgery = () => {
  return (
    <Container>
      <Text>
        Хірургічна стоматологія — розділ медицини, пов’язаний з оперативним
        втручанням на м’яких і твердих тканинах в порожнині рота. Будь-яка
        операція проводиться дбайливо і з застосуванням анестезії для
        забезпечення максимального комфорту для пацієнта, наскільки це можливо.
      </Text>
      <br />
      <Text>
        Видалення зуба — найбільш відома хірургічна маніпуляція для пацієнтів
        серед інших, що проводяться в порожнині рота. Суть її полягає у
        видаленні зуба чи його частини з щелепної кістки за допомогою
        спеціальних, адаптованих для різних зубів і різних ситуацій в порожнині
        рота інструментів.
      </Text>
      <br />
      <Text>
        Операція з видалення зубів проводитися по можливості максимально
        атравматично, тобто з мінімальним пошкодженням навколишніх тканин. Це
        необхідно для профілактики ускладнень в період реабілітації, більш
        швидкого загоєння операційної рани та зменшення розміру кісткового
        дефекту на місці видаленого зуба. Останнє особливо актуально при
        подальшій імплантації, коли важливий кожен міліметр кісткової тканини на
        місці видаленого зуба.
      </Text>
      <br />
      <LabelText>Показання до видалення зубів:</LabelText>
      <br />
      <List>
        <ListItem>
          Значне руйнування коронкової та, особливо, під`ясеневої частини.
        </ListItem>
        <ListItem>
          Значний нахил зубів, висування, що заважає протезуванню або (і)
          травмування сусідніх м’яких тканин (характерно для зубів «мудрості»).
        </ListItem>
        <ListItem>Перелом кореня зуба внаслідок травми.</ListItem>
        <ListItem>
          {" "}
          Ускладнений доступ для ефективного лікування (характерно для зубів
          «мудрості»).
        </ListItem>
        <ListItem>
          Неможливість або неефективність ендодонтичного лікування (лікування
          кореневих каналів).
        </ListItem>
        <ListItem>Пародонтит важкого ступеню.</ListItem>
      </List>
      <br />
      <Text>
        Кожна людина, яка втратила один або декілька зубів в результаті різних
        травм, хвороб або руйнування зубів, автоматично стає кандидатом на зубну
        імплантацію. Зубний імплант (імплантат) являє собою циліндричний
        титановий гвинт, який вживляється в кісткову тканину на місце втраченого
        зуба.
      </Text>
      <br />
      <LabelText>
        Імплантація зубів особливо показана та ефективна в таких випадках:
      </LabelText>
      <br />
      <List>
        <ListItem>
          Відсутність одного зуба і наявність здорових сусідніх зубів.
        </ListItem>
        <ListItem>
          Наявність великих дефектів зубного ряду (зубні імпланти служать
          додатковою опорою для мостовидного протеза).
        </ListItem>
        <ListItem>
          За відсутності жувальних зубів – кінцеві дефекти, при яких необхідне
          встановлення знімних протезів.
        </ListItem>
        <ListItem>
          При повній відсутності зубів (в цьому випадку на зубний імплант
          фіксується знімний протез, що допомагає досягти хорошої фіксації в
          порівнянні зі звичайним знімним протезом).
        </ListItem>
        <ListItem>
          Імплантанти дають можливість виготовити незнімні протези на беззубій
          щелепі.
        </ListItem>
        <ListItem>
          При втраті зубів кістка, позбавлена функціонального навантаження,
          швидко атрофується. Вживлення в кістку зубних імплантатів призупиняє
          атрофію (зменшення висоти та ширини) кістки зуба.
        </ListItem>
      </List>
      <br />
      <Text>
        Перед прийняттям рішення про імплантацію необхідно провести
        рентгенологічне дослідження зубощелепної системи (ортопантомограма та
        комп`ютерна томографія). Проведення даних процедур обов`язкове для
        планування кількості та типу імплантів. Особливе і дуже важливе значення
        має рівень гігієни порожнини рота. Необхідним є використання зубних
        ниток (флосів), ірригаторів та спеціальних мікро щіточок для якісного
        очищення імплантів від зубного нальоту.
      </Text>
    </Container>
  );
};

export default Surgery;

const Container = styled.div``;
