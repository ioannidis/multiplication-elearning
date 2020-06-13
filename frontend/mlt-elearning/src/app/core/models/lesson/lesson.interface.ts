export interface LessonInterface {
  _id: String;
  url: String;
  title: String;
  content: String;
  prerequisites: String[];
  order: Number;
}
