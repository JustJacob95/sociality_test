export type PostStatusType = {
  label: string,
  style: string
}
export type PostStatusTypes = {
  [key: number]: PostStatusType;
}
export const postStatuses: PostStatusTypes = {
  0 : <PostStatusType> {
    label: 'Published',
    style: 'gray'
  },
  1 : <PostStatusType> {
    label: 'Scheduled',
    style: 'green'
  },
  2 : <PostStatusType> {
    label: 'Need approval',
    style: 'orange'
  },
  3 : <PostStatusType> {
    label: 'Error',
    style: 'red'
  },
  4 : <PostStatusType> {
    label: 'Notes',
    style: 'blue'
  },
}

export type PostType = {
  status: keyof typeof postStatuses;
  thumbnail?: string;
  date?: string;
  // type: PostTypes;
  statistics: {
    shareCount: number,
    comments: number,
    likes: number,
    views: number,
  }
}


export interface PostInterface {
  published_at: Date;
  is_published: boolean;
  status:       number;
  entry:        PostEntry;
  updated_at:   Date;
  created_at:   Date;
  link:         string;
  account:      PostAccount;
}

export interface PostAccount {
  name:     string;
  username: string;
  image:    string;
  link:     string;
  channel:  string;
}

export interface PostEntry {
  type:    string;
  message: string;
  image:   string[];
  video:   string | null;
}

export interface PostByDate {
  [date: string]: Array<PostInterface>
}


export type PostsType = {
  loading: boolean,
  errors: Array<string>,
  items: PostByDate
}