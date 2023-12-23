function slugify(title) {
  title = title.toLowerCase();
  const firstTitle = title.split(" ");
  const finalTitle = firstTitle.join("-");
  return finalTitle;
}
 
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));