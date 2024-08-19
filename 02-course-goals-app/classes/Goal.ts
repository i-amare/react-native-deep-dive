export default class Goal {
  private text: string;
  private completionStatus: boolean;
  private id: string;

  constructor(text: string, isComplete?: boolean, id?: string) {
    this.text = text !== undefined ? (this.text = text) : '';
    this.completionStatus =
      isComplete !== undefined ? (this.completionStatus = isComplete) : false;
    this.id = id !== undefined ? (this.id = id) : this.generateID();
  }

  private generateID(): string {
    const id = `${this.text.charAt(0).toUpperCase()}-${Math.random()}`;
    return id;
  }

  getText() {
    return this.text;
  }

  getID() {
    return this.id;
  }

  isComplete() {
    return this.completionStatus;
  }

  setText(text: string) {
    this.text = text !== undefined ? (this.text = text) : '';
  }

  setCompletionStatus(isComplete: boolean) {
    this.completionStatus = isComplete;
  }
}
