import { PrettyChatWindow } from "react-chat-engine-pretty";
const id = "372ca2df-ce7f-4d44-be93-3db9e75fb000";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectID={id}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
