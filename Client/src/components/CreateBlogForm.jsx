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
  const [sections, setSections] = useState([{ subtitle: "", content: "" }]);
  const [conclusion, setConclusion] = useState("");
  const [categories, setCategories] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("false");

  const handleAddSubheading = () => {
    setSections([...sections, { subtitle: "", content: "" }]);
  };

  const handleRemoveSubheading = () => {
    if (sections.length > 1) {
      setSections(sections.slice(0, -1));
    }
  };

  const handleSubheadingChange = (index, value) => {
    const updatedSections = [...sections];
    updatedSections[index].subtitle = value;
    setSections(updatedSections);
  };

  const handleContentChange = (index, value) => {
    const updatedSections = [...sections];
    updatedSections[index].content = value;
    setSections(updatedSections);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      sections,
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
    setIsSubmitted(true);
  };

  function handleCategoryChange(e) {
    const selectedCategories = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCategories(selectedCategories);
  }

  const availableCategories = [
    "Health",
    "Puberty",
    "Fitness",
    "Wellness",
    "Nutrition",
  ];
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
            <textarea
              type="text"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </label>
          <UploadImage text={"Poster:"} link={poster} setLink={setPoster} />
          <label>
            Subtitle and Content:
            {sections.map((section, index) => (
              <div className="sections" key={index}>
                <input
                  type="text"
                  value={section.subtitle}
                  onChange={(e) =>
                    handleSubheadingChange(index, e.target.value)
                  }
                />
                <textarea
                  value={section.content}
                  onChange={(e) => handleContentChange(index, e.target.value)}
                />
              </div>
            ))}
            <div className="headingBtn flex items-center gap-5 my-5">
              <button type="button" onClick={handleAddSubheading}>
                Add Section
              </button>
              <button type="button" onClick={handleRemoveSubheading}>
                Remove Section
              </button>
            </div>
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
