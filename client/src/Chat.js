import React from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { useChatMessages } from './hooks';

const Chat = ({ user }) => {
  // const [messages, setMessages] = useState([]);
  // useQuery(messagesQuery, {
  //   onCompleted: ({ messages }) => setMessages(messages),
  // });
  // useSubscription(messageAddedSubscription, {
  //   onSubscriptionData: ({ subscriptionData }) => {
  //     setMessages(messages.concat(subscriptionData.data.messageAdded));
  //   },
  // });

  const { messages, addMessage } = useChatMessages();

  return (
    <section className='section'>
      <div className='container'>
        <h1 className='title'>Chatting as {user}</h1>
        <MessageList user={user} messages={messages} />
        <MessageInput onSend={addMessage} />
      </div>
    </section>
  );
};

export default Chat;
