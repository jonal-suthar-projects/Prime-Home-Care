const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  image: String,     
  author: String,
  date: String,
});
