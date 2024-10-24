import { FeedbackContainer, UserContainer } from "./Feedback";

export interface FeedbackProps {
  text: string;
  userImg: string;
  username: string;
  userLink: string;
}

export function Feedback({
  text,
  userImg,
  userLink,
  username
}: FeedbackProps) {
  return (
    <FeedbackContainer>
      <p>{text}</p>

      <UserContainer>
        <img src={userImg} alt="User profile photo" />

        <div>
          <h4>{username}</h4>
          <a href={userLink}>{userLink}</a>
        </div>
      </UserContainer>
    </FeedbackContainer>
  )
}