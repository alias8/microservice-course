import mongoose, { model, Schema } from "mongoose";

export const MailSchema = new Schema({
  subject: mongoose.Schema.Types.String,
  receiver: mongoose.Schema.Types.String,
  content: mongoose.Schema.Types.String
});

export const Mail = model("Mail", MailSchema);
