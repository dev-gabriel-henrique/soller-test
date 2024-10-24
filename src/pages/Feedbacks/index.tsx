import { useState } from "react";
import { Feedback } from "../../components/Feedback";
import { ButtonPrimary } from "../../components/Button";
import { H2Container } from "../../components/H2Variants/H2";
import { NextArrow, PreviousArrow } from "../../components/Arrows";
import { SpanContainer } from "../../components/SpanVariants/Span";
import {
  ArrowsContainer,
  FeedbacksContainer,
  HeaderFeedbacks,
  ScrollableContainer,
  TitleFeedbacks,
} from "./Feedbacks";

import userJane from "../../assets/userJane.png";
import userRalph from "../../assets/userRalph.png";
import userCameron from "../../assets/userCameron.png";
import userCourtney from "../../assets/userRwanda.png";

const feedbacksData = [
  {
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod",
    username: "Jane Cooper",
    userLink: "10KWh",
    userImg: userJane,
  },
  {
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    username: "Ralph Edwards",
    userLink: "32KWh",
    userImg: userRalph,
  },
  {
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    username: "Courtney Henry",
    userLink: "6KWh",
    userImg: userCourtney,
  },
  {
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    username: "Cameron Williamson",
    userLink: "12KWh",
    userImg: userCameron,
  },
  {
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    username: "Cameron Williamson",
    userLink: "12KWh",
    userImg: userCameron,
  },
];

export function Feedbacks() {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const handleNextFeedback = () => {
    setCurrentFeedback((previous) => (previous + 1) % feedbacksData.length);
  };

  const handlePreviousFeedback = () => {
    setCurrentFeedback((previous) =>
      previous === 0 ? feedbacksData.length - 1 : previous - 1
    );
  };

  return (
    <FeedbacksContainer>
      <HeaderFeedbacks>
        <TitleFeedbacks>
          <SpanContainer variant="yellowLight">
            Join other Sun harvesters
          </SpanContainer>
          <H2Container variant="white">Make something awesome</H2Container>
        </TitleFeedbacks>

        <p>
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi tristique condimentum congue fusce nunc, donec magnis
          commodo.
        </p>

        <ButtonPrimary />
      </HeaderFeedbacks>

      <ScrollableContainer currentfeedback={currentFeedback} >
        {feedbacksData.map((feedback, index) => (
          <li
            key={index}
            className={index === currentFeedback ? "active" : ""}
          >
            <Feedback
              text={feedback.text}
              username={feedback.username}
              userLink={feedback.userLink}
              userImg={feedback.userImg}
            />
          </li>
        ))}
      </ScrollableContainer>

      <ArrowsContainer>
        <PreviousArrow previous={handlePreviousFeedback} />
        <NextArrow next={handleNextFeedback} />
      </ArrowsContainer>
    </FeedbacksContainer>
  );
}
