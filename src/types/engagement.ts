export interface UserAttributes {
  propertyId: string;
  rentalType: string;
}

export interface InboxFetch {
  login?: string;
}

export interface Profile extends UserAttributes {
  token: string;
}

export interface Attribute {
  [key: string]: string;
}

export interface ProfileResponse {
  [key: string]: Attribute;
}

export interface Message {
  NumComments: Attribute;
  NumLikes: Attribute;
  applicationID: Attribute;
  messageID: Attribute;
}
export interface InboxResponseMessage extends Message {
  sent: Attribute;
  audience: Attribute;
  message: any;
}
export interface DiscoveryMessage extends Message {
  account: string;
  content: any;
  title: string;
  id: string;
  user: string;
  ftueID: string;
  inbox: string;
}
export interface MessageDetails {
  cardStyle: string;
  cartType: string;
  containerStyle: any;
  key: string;
  private_type: string;
  private_blocks: MessageDetails[];
}
export interface InboxFeed {
  private_type: string;
  private_blocks: MessageDetails[];
}
