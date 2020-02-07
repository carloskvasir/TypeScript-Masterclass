import { Schema, model, Document } from 'mongoose'

// Para o lint identificar os tipos
interface UserInterface extends Document {
  // Document -> UserInterface
  email?: string
  firstName?: string
  lastname?: string
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('User', UserSchema)
