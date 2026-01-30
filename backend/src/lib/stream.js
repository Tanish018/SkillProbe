import { StreamChat } from 'stream-chat';
import { StreamClient } from '@stream-io/node-sdk';
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error('Stream API key and secret must be set in environment variables.');
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // this is for chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // this is for other stream features like video calls  

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted successfully : ", userData.id);
  } catch (error) {
    console.error("Error upsurting user to Stream : ", error);
  }
}

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully : ", userId);
  } catch (error) {
    console.error("Error deleting user from Stream : ", error);
  }
}