import React, { useState } from "react";
import CategorySelect from "../components/Categories";
import UploadImage from "./ImageUpload";
export default function CreateBlogForm({ onSubmit }) {
  const [poster, setPoster] = useState("");
  const [contentImage, setContentImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");
  const [datePublished, setDatePublished] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [content, setContent] = useState([""]);
  const [subtitle, setSubtitle] = useState([""]);
  const [conclusion, setConclusion] = useState("");
  const [categories, setCategories] = useState("");

  const handleAddSubheading = () => {
    setSubtitle([...subtitle, ""]);
    setContent([...content, ""]);
  };

  const handleRemoveSubheading = () => {
    if (subtitle.length > 1) {
      setSubtitle(subtitle.slice(0, -1));
      setContent(content.slice(0, -1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      content,
      subtitle,
      author,
      datePublished,
      topic,
      introduction,
      conclusion,
      poster,
      contentImage,
      categories,
    };
    onSubmit(e, formData);
  };

  function handleCategoryChange(e) {
    const selectedCategories = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCategories(selectedCategories);
  }
  const handleSubheadingChange = (index, value) => {
    const updatedSubtitle = [...subtitle];
    updatedSubtitle[index] = value;
    setSubtitle(updatedSubtitle);
  };
  const handleContentChange = (index, value) => {
    const updatedContent = [...content];
    updatedContent[index] = value;
    setContent(updatedContent);
  };

  const availableCategories = ["Health", "Puberty", "Fitness", "Wellness"];
  return (
    <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="create-blog-form p-6">
        <h2 className="text-xl font-semibold text-center">Create Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <label>
            Date Published:
            <input
              type="text"
              value={datePublished}
              onChange={(e) => setDatePublished(e.target.value)}
            />
          </label>
          <label>
            Topic:
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
          <label>
            Introduction:
            <input
              type="text"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </label>
          <UploadImage text={"Poster:"} link={poster} setLink={setPoster} />
          <label>
            Subtitle:
            {subtitle.map((subtitle, index) => (
              <input
                className="mt-5"
                key={index}
                type="text"
                value={subtitle}
                onChange={(e) => handleSubheadingChange(index, e.target.value)}
              />
            ))}
            <div className="headingBtn flex items-center gap-5 my-5">
              <button type="button" onClick={handleAddSubheading}>
                Add Subtitle
              </button>
              <button type="button" onClick={handleRemoveSubheading}>
                Remove Subtitle
              </button>
            </div>
          </label>
          <label>
            Content:
            {content.map((content, index) => (
              <textarea
                key={index}
                value={content}
                onChange={(e) => handleContentChange(index, e.target.value)}
              />
            ))}
          </label>
          <UploadImage
            text={"Content Image"}
            link={contentImage}
            setLink={setContentImage}
          />
          <label>
            Conclusion:
            <input
              type="text"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
            />
          </label>
          <CategorySelect
            options={availableCategories}
            selectedCategory={categories}
            onChange={handleCategoryChange}
          />
          <button
            className="w-full mt-5 px-6 py-3 text-lg bg-primary500 text-white rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
