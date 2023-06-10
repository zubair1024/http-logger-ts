import { Schema, model } from "mongoose";

interface IAppRequest {
  path: string;
  body: Object;
  params: Object;
  query: Object;
  createdAt: Date;
  updatedAt: Date;
}

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
