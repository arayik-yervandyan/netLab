export class FormData {
  public user: string;
  public email: string;
  public messageType: string;
  public text: string;

  constructor(data: {[k: string]: any}) {
  	this.user = data.user;
  	this.email = data.email;
  	this.messageType = data.messageType;
  	this.text = data.text;
  }
}

