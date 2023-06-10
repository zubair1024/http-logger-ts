import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IAppRequest {
  path: string;
  body: Object;
  params: Object;
  query: Object;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const appRequestSchema = new Schema<IAppRequest>({
  path: { type: String },
  body: { type: Object },
  params: { type: Object },
  query: { type: Object },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
});

// 3. Create a Model.
const AppRequest = model<IAppRequest>("AppRequest", appRequestSchema);

export default AppRequest;
