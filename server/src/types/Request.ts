import * as express from "express";

interface UserId {
  id: number;
  name: string;
}

interface Request extends express.Request {
  userid?: UserId;
}

export default Request;
