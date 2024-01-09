"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsInfo, BsInfoCircle } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";

interface Content {
  title: string;
  id: string;
  type: string;
  p1: string;
  p2: string;
  cards: Card[];
  sides: Side[];
  content1: string;
  content2: string;
  recommended: Recommended[];
}

interface Card {
  title: string;
  description: string;
  content: string;
}

interface Side {
  title: string;
  description: string;
  content: string;
  img: string;
}

interface Recommended {
  name: string;
  url: string;
  img: string;
  price: string;
}

interface Author {
  name: string;
  url: string;
  [key: string]: string;
}

const MakeFile = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [authors, setAuthors] = useState<Author[]>([{ name: "", url: "" }]);
  const [twoAuthors, setTwoAuthors] = useState(false);
  const [time, setTime] = useState("");
  const [contents, setContents] = useState<Content[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null); // New state for the selected image
  const [imgPreview, setImgPreview] = useState("");

  const handleBackgroundImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setBackgroundImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImgPreview(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAuthorChange = (index: number, field: string, value: string) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index][field] = value;
    setAuthors(updatedAuthors);
  };

  const handleAddAuthor = () => {
    setAuthors([...authors, { name: "", url: "" }]);
  };

  const handleRemoveAuthor = (index: number) => {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(index, 1);
    setAuthors(updatedAuthors);
  };
  const handleContentsChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedContent = [...contents];
    switch (field) {
      case "title":
        updatedContent[index].title = value;
        break;
      case "id":
        updatedContent[index].id = value;
        break;
      case "p1":
        updatedContent[index].p1 = value;
        break;
      case "p2":
        updatedContent[index].p2 = value;
        break;
      case "type":
        updatedContent[index].type = value;
        break;
      case "content1":
        updatedContent[index].content1 = value;
        break;
      case "content2":
        updatedContent[index].content2 = value;
        break;
    }
    setContents(updatedContent);
  };

  const handleAddContent = () => {
    setContents([
      ...contents,
      {
        title: "",
        id: "",
        type: "",
        p1: "",
        p2: "",
        cards: [],
        sides: [],
        content1: "",
        content2: "",
        recommended: [],
      },
    ]);
  };

  // Inside handleCardChange function (create this function if not present)
  const handleCardChange = (
    contentIndex: number,
    cardIndex: number,
    field: string,
    value: string
  ) => {
    const updatedContents = [...contents];
    switch (field) {
      case "title":
        updatedContents[contentIndex].cards[cardIndex].title = value;
        break;
      case "description":
        updatedContents[contentIndex].cards[cardIndex].description = value;
        break;
      case "content":
        updatedContents[contentIndex].cards[cardIndex].content = value;
        break;
    }

    setContents(updatedContents);
  };

  const handleSideChange = (
    contentIndex: number,
    cardIndex: number,
    field: string,
    value: string
  ) => {
    const updatedContents = [...contents];
    switch (field) {
      case "title":
        updatedContents[contentIndex].sides[cardIndex].title = value;
        break;
      case "description":
        updatedContents[contentIndex].sides[cardIndex].description = value;
        break;
      case "content":
        updatedContents[contentIndex].sides[cardIndex].content = value;
        break;
      case "img":
        updatedContents[contentIndex].sides[cardIndex].img = value;
        break;
    }

    setContents(updatedContents);
  };

  const handleRecommendedChange = (
    contentIndex: number,
    cardIndex: number,
    field: string,
    value: string
  ) => {
    const updatedContents = [...contents];
    switch (field) {
      case "name":
        updatedContents[contentIndex].recommended[cardIndex].name = value;
        break;
      case "url":
        updatedContents[contentIndex].recommended[cardIndex].url = value;
        break;
      case "img":
        updatedContents[contentIndex].recommended[cardIndex].img = value;
        break;
      case "price":
        updatedContents[contentIndex].recommended[cardIndex].price = value;
        break;
    }

    setContents(updatedContents);
  };

  const handleAddCard = (contentIndex: number) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].cards.push({
      title: "",
      description: "",
      content: "",
    });
    setContents(updatedContents);
  };

  const handleRemoveCard = (contentIndex: number, cardIndex: number) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].cards.splice(cardIndex, 1);
    setContents(updatedContents);
  };

  const handleAddSide = (contentIndex: number) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].sides.push({
      title: "",
      description: "",
      content: "",
      img: "",
    });
    setContents(updatedContents);
  };

  const handleRemoveSide = (contentIndex: number, cardIndex: number) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].sides.splice(cardIndex, 1);
    setContents(updatedContents);
  };

  const handleAddRecommended = (contentIndex: number) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].recommended.push({
      name: "",
      url: "",
      img: "",
      price: "",
    });
    setContents(updatedContents);
  };

  const handleRemoveRecomended = (contentIndex: number, cardIndex: number) => {
    const updatedContents = [...contents];
    updatedContents[contentIndex].recommended.splice(cardIndex, 1);
    setContents(updatedContents);
  };

  const handleRemoveContent = (index: number) => {
    const updated = [...contents];
    updated.splice(index, 1);
    setContents(updated);
  };

  const handleDownload = (e: any) => {
    e.preventDefault();
    // Create an object with the data
    const dataObject = {
      title,
      description,
      keywords,
      coverImage: "/logo.png",
      authors,
      time,
      contents,
    };

    // Convert the object to JSON
    const jsonData = JSON.stringify(dataObject);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonData], { type: "application/json" });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.json";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <form
      onSubmit={(e) => handleDownload(e)}
      className="w-full min-h-screen flex flex-col items-center p-5 gap-2"
    >
      <div className="absolute h-96 w-full left-0 right-0 mb-5 bg-black bg-opacity-50">
        <img
          src={imgPreview}
          alt={`Main image of ${title}`}
          className="absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-96 z-10 opacity-30"
        />
        <div className="flex flex-col justify-evenly absolute z-30 top-0 bottom-0 left-0 px-5 right-0 h-96">
          <h1 className="gradient text-2xl md:text-4xl drop-shadow-xl font-bold text-center pt-10">
            {title || "New Post"}
          </h1>
          <div className="flex byline justify-evenly self-center pb-10 ">
            <address className="author flex flex-row gap-1">
              By{" "}
              <a
                rel="author"
                href={`https://gamingtales.tech/${authors[0].url}`}
              >
                {authors[0].name}{" "}
              </a>
              {authors[1] && (
                <div className="flex flex-row gap-1">
                  &{" "}
                  <a
                    rel="author"
                    href={`https://gamingtales.tech/${authors[1].url}`}
                  >
                    {authors[1].name}{" "}
                  </a>
                </div>
              )}
            </address>
          </div>
          <h2 className="w-full text-lg drop-shadow-xl pb-5 md:text-xl md:w-2/3 self-center">
            {description}
          </h2>
        </div>
      </div>
      <div className="h-96 mb-5 w-full" />
      <input
        type="text"
        className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
        placeholder="Title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
        placeholder="Description"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="rounded-lg flex flex-row  p-2 bg-white w-full md:w-2/3 justify-evenly items-center  bg-opacity-10 ">
        <label className="w-1/2 text-center">Main image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundImageChange}
          className="rounded-lg p-2 flex flex-row justify-center bg-white cursor-pointer w-min self-center content-center snap-center origin-center  items-center  bg-opacity-10 hover:bg-opacity-20 transition-all ease-in-out duration-300"
          id="backgroundImageInput"
        />
        <div className=" rounded-full self-center w-1/2 group items-center flex flex-row justify-evenly hover:opacity-75 ease-in-out duration-300 relative">
          <BsInfoCircle className="w-10 h-10 p-2 bg-white bg-opacity-10 rounded-full" />
          <div className="absolute bottom-[40px] w-72 opacity-0 bg-black bg-opacity-100 right-0 rounded-lg p-3 group-hover:opacity-100 duration-300 ease-in-out">
            This Image won&apos;t be saved now. You need to include the images
            in a zip file when providing the Data.json file.
          </div>
        </div>
      </div>
      <input
        type="text"
        className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
        placeholder='Keywords ("This", "Is", "An", "Example")'
        required
        onChange={(e) => setKeywords(e.target.value)}
      />
      <div className="flex gap-2  w-full md:w-2/3 flex-row justify-evenly ">
        <div className="flex flex-col gap-1.5 p-0 w-full">
          <input
            type="text"
            className="w-full p-2 bg-white bg-opacity-10 rounded-lg"
            placeholder="By"
            required
            onChange={(e) => handleAuthorChange(0, "name", e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 bg-white bg-opacity-10 rounded-lg"
            placeholder="URL (/author/john-doe)"
            required
            onChange={(e) => handleAuthorChange(0, "url", e.target.value)}
          />
        </div>
        {twoAuthors == true ? (
          <div className=" flex flex-row w-full gap-1">
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                className="w-full  p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder="Cowritten by"
                onChange={(e) => handleAuthorChange(1, "name", e.target.value)}
              />
              <input
                type="text"
                className="w-full  p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder="URL"
                onChange={(e) => handleAuthorChange(1, "url", e.target.value)}
              />
            </div>
            <div
              onClick={() => {
                setTwoAuthors(false);
                handleRemoveAuthor(1);
              }}
              className=" flex flex-col justify-evenly items-center w-1/4 bg-white bg-opacity-10 hover:bg-opacity-20 h-full rounded-lg self-center text-3xl"
            >
              <BiMinus className="" />
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              setTwoAuthors(true);
              handleAddAuthor();
            }}
            className="flex rounded-lg text-4xl bg-opacity-10 hover:bg-opacity-20 duration-300 bg-white  justify-evenly items-center flex-col gap-1 w-full"
          >
            <BiPlus />
          </div>
        )}
      </div>
      <div className="flex flex-row w-full self-center md:w-2/3 gap-2">
        <input
          type="text"
          className="w-full p-2 bg-white bg-opacity-10 rounded-lg"
          placeholder="Time it takes to read"
          required
          onChange={(e) => setTime(e.target.value)}
        />
        <div className="flex text-lg flex-0 items-center md:text-xl w-full text-white opacity-70   text-center  justify-center flex-row gap-2">
          <GoClockFill />
          <p>{time}</p>
        </div>
      </div>
      {contents.map((item, index) => (
        <div
          className="w-full my-4 transition-all ease-in-out items-center flex flex-col duration-300 gap-3"
          key={index}
        >
          <div className="md:w-1/2 w-full flex md:flex-row flex-col transition-all ease-in-out duration-300  gap-2 self-center text-center p-2 rounded-xl bg-white bg-opacity-10 ">
            <div
              onClick={() => handleContentsChange(index, "type", "1")}
              className={`w-full h-auto gap-2 duration-300 ease-in-out transition-all  rounded-xl flex flex-col justify-evenly bg-white bg-opacity-10 ${
                item.type == "1" && "bg-opacity-20"
              } hover:bg-opacity-20`}
            >
              <p>Type 1</p>
              {/* {item.type != "1" ? <div>hji</div>} */}
              {item.type != "1" && item.type != "2" && (
                <div className="flex flex-col gap-2 pb-2 items-center">
                  <div className="w-1/3 self-center bg-opacity-10 bg-white rounded-lg h-5" />
                  <div className="w-2/3 self-center bg-opacity-10 bg-white rounded-lg h-7" />
                  <div className="grid gap-2 self-center  grid-cols-2 lg:grid-cols-3 ">
                    <div className="w-14 h-16 rounded-lg bg-white bg-opacity-10 "></div>
                    <div className="w-14 h-16 rounded-lg bg-white bg-opacity-10 "></div>
                    <div className=" w-14 h-16 rounded-lg bg-white bg-opacity-10 "></div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row md:flex-col h-full  justify-center p-1 gap-2 items-center">
              <div className="bg-white bg-opacity-10 rounded-full self-center  group hover:opacity-75 ease-in-out duration-300 relative">
                <BsInfoCircle className="w-10 h-10 p-2" />
                <div className="absolute bottom-[40px] w-72 opacity-0 bg-black bg-opacity-100 rounded-lg p-3 group-hover:opacity-100 duration-300 ease-in-out">
                  Type 1 is a layout with Cards in a grid , on the other hand,
                  Type 2 is the layout with a block of text and an image next to
                  one and other stacked in a column.
                </div>
              </div>
              <div
                onClick={() => {
                  handleRemoveContent(index);
                }}
                className=" flex flex-col duration-300 ease-in-out transition-all justify-evenly items-center bg-white bg-opacity-10 hover:bg-opacity-20 h-10 w-10 rounded-full self-center text-3xl"
              >
                <BiMinus className="w-10 h-10" />
              </div>
            </div>
            <div
              onClick={() => handleContentsChange(index, "type", "2")}
              className={` ${
                item.type == "2" && "bg-opacity-20"
              } w-full  duration-300 gap-2 ease-in-out  active:bg-opacity-20 transition-all rounded-xl flex flex-col justify-evenly bg-white bg-opacity-10 h-auto hover:bg-opacity-20`}
            >
              <p>Type 2</p>

              {item.type != "1" && item.type != "2" && (
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-1/3 self-center bg-opacity-10 bg-white rounded-lg h-5" />
                  <div className="w-2/3 self-center bg-opacity-10 bg-white rounded-lg h-7" />
                  <div className="w-full h-auto flex flex-col gap-2 items-center">
                    <div className="flex flex-row w-full h-auto gap-1 px-3">
                      <div className="w-full items-center gap-1 flex flex-col py-2 h-full">
                        <div className="w-1/3 self-center bg-opacity-10 bg-white rounded-lg h-2" />
                        <div className="w-2/3 self-center bg-opacity-10 bg-white rounded-md h-4" />
                      </div>
                      <div className="h-full bg-opacity-10 bg-white rounded-md w-full" />
                    </div>
                    <div className="flex flex-row-reverse w-full h-auto gap-1 px-3">
                      <div className="w-full items-center gap-1 flex flex-col py-2 h-full">
                        <div className="w-1/3 self-center bg-opacity-10 bg-white rounded-lg h-2" />
                        <div className="w-2/3 self-center bg-opacity-10 bg-white rounded-md h-4" />
                      </div>
                      <div className="h-full bg-opacity-10 bg-white rounded-md w-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {item.type == "1" ? (
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-full flex transition-all ease-in-out duration-300 flex-row md:w-2/3 gap-2">
                <input
                  type="text"
                  className="w-full p-2 bg-white bg-opacity-10 rounded-lg"
                  placeholder="Title"
                  required
                  onChange={(e) =>
                    handleContentsChange(index, "title", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="w-full p-2 bg-white bg-opacity-10 rounded-lg"
                  placeholder="Id"
                  required
                  onChange={(e) =>
                    handleContentsChange(index, "id", e.target.value)
                  }
                />
              </div>
              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder="First paragraph"
                required
                onChange={(e) =>
                  handleContentsChange(index, "p1", e.target.value)
                }
              />
              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder="Second paragraph"
                onChange={(e) =>
                  handleContentsChange(index, "p2", e.target.value)
                }
              />
              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder=" Custom HTML with Tailwind"
                onChange={(e) =>
                  handleContentsChange(index, "content1", e.target.value)
                }
              />
              <div className="grid gap-2 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {item.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="flex flex-col gap-2 p-2 bg-white bg-opacity-10 rounded-lg"
                  >
                    <input
                      type="text"
                      className="w-3/4 self-center p-1 bg-white bg-opacity-10 rounded-lg"
                      placeholder="Title"
                      required
                      onChange={(e) =>
                        handleCardChange(
                          index,
                          cardIndex,
                          "title",
                          e.target.value
                        )
                      }
                    />
                    <textarea
                      className="w-full p-1 bg-white bg-opacity-10 rounded-lg"
                      placeholder="Paragraph"
                      required
                      onChange={(e) =>
                        handleCardChange(
                          index,
                          cardIndex,
                          "description",
                          e.target.value
                        )
                      }
                    />
                    <textarea
                      className="w-full p-1 bg-white bg-opacity-10 rounded-lg"
                      placeholder="Custom HTML with Tailwind"
                      onChange={(e) =>
                        handleCardChange(
                          index,
                          cardIndex,
                          "content",
                          e.target.value
                        )
                      }
                    />

                    <div
                      onClick={() => handleRemoveCard(index, cardIndex)}
                      className="flex flex-col justify-evenly text-4xl items-center hover:bg-opacity-20 transition-all ease-in-out duration-300 gap-2 p-2 bg-white bg-opacity-10 rounded-lg"
                    >
                      <BiMinus />
                    </div>
                  </div>
                ))}

                <div
                  onClick={() => handleAddCard(index)}
                  className="flex flex-col justify-evenly text-4xl items-center hover:bg-opacity-20 transition-all ease-in-out duration-300 gap-1 p-2 bg-white bg-opacity-10 rounded-lg"
                >
                  <BiPlus />
                  <p className="text-xl">Card</p>
                </div>
              </div>
              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder=" Custom HTML with Tailwind"
                onChange={(e) =>
                  handleContentsChange(index, "content2", e.target.value)
                }
              />
              <p>Recomended Items</p>
              <div className=" flex-shrink-0  w-full z-40 h-72 md:h-40 overflow-x-auto flex flex-row gap-2">
                {item.recommended.map(
                  (recommendedItem: any, RecomendedIndex: number) => (
                    <a
                      target="_blank"
                      className="bg-white flex-shrink-0 flex flex-col md:flex-row bg-none bg-opacity-10 hover:bg-opacity-20 transition-all ease-in-out duration-300 p-2 rounded-lg"
                      key={index}
                    >
                      <div className="md:h-full h-1/2 flex flex-col justify-evenly w-56 md:w-auto p-1 bg-white rounded-lg">
                        <img
                          src={recommendedItem.img}
                          alt={`Image of ${recommendedItem.name}`}
                          loading="lazy"
                          className=" h-full object-contain w-full "
                        />
                      </div>
                      <div className=" w-56 flex h-1/2 md:h-full justify-evenly flex-col p-2 gap-1">
                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Name"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "name",
                              e.target.value
                            )
                          }
                        />

                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Price"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "price",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Url"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "url",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Image Url"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "img",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div
                        onClick={() =>
                          handleRemoveRecomended(index, RecomendedIndex)
                        }
                        className="flex flex-col h-72 md:h-36 justify-evenly text-4xl items-center hover:bg-opacity-20 transition-all ease-in-out duration-300 gap-2 p-2 bg-white bg-opacity-10 rounded-lg"
                      >
                        <BiMinus />
                      </div>
                    </a>
                  )
                )}
                <div
                  onClick={() => handleAddRecommended(index)}
                  className="flex flex-col justify-evenly w-40 text-4xl items-center hover:bg-opacity-20 transition-all ease-in-out duration-300 gap-2 p-2 bg-white bg-opacity-10 rounded-lg"
                >
                  <BiPlus />
                  <p className="text-xl">Item</p>
                </div>
              </div>
            </div>
          ) : contents[index].type == "2" ? (
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-full flex transition-all ease-in-out duration-300 flex-row md:w-2/3 gap-2">
                <input
                  type="text"
                  className="w-full p-2 bg-white bg-opacity-10 rounded-lg"
                  placeholder="Title"
                  required
                  onChange={(e) =>
                    handleContentsChange(index, "title", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="w-full p-2 bg-white bg-opacity-10 rounded-lg"
                  placeholder="Id"
                  required
                  onChange={(e) =>
                    handleContentsChange(index, "id", e.target.value)
                  }
                />
              </div>
              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder="First paragraph"
                required
                onChange={(e) =>
                  handleContentsChange(index, "p1", e.target.value)
                }
              />
              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder="Second paragraph"
                onChange={(e) =>
                  handleContentsChange(index, "p2", e.target.value)
                }
              />

              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder=" Custom HTML with Tailwind"
                onChange={(e) =>
                  handleContentsChange(index, "content1", e.target.value)
                }
              />
              <div className="flex flex-col w-full gap-2">
                {item.sides.map((side, sideIndex) => (
                  <div
                    key={sideIndex}
                    className={`flex gap-5 w-full flex-col ${
                      (sideIndex / 2) % 1
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    <img
                      src={side.img}
                      alt={`Image of ${side.title}`}
                      className="w-1/2 bg-white bg-opacity-10 rounded-lg p-1"
                    />
                    <div className="flex flex-col w-1/2 p-2 justify-evenly gap-5">
                      <input
                        type="text"
                        className="w-3/4 self-center p-1 bg-white bg-opacity-10 rounded-lg"
                        placeholder="Title"
                        required
                        onChange={(e) =>
                          handleSideChange(
                            index,
                            sideIndex,
                            "title",
                            e.target.value
                          )
                        }
                      />
                      <textarea
                        className="w-full p-1 bg-white bg-opacity-10 rounded-lg"
                        placeholder="Paragraph"
                        required
                        onChange={(e) =>
                          handleSideChange(
                            index,
                            sideIndex,
                            "description",
                            e.target.value
                          )
                        }
                      />
                      <textarea
                        className="w-full p-1 bg-white bg-opacity-10 rounded-lg"
                        placeholder="Custom HTML with Tailwind"
                        onChange={(e) =>
                          handleSideChange(
                            index,
                            sideIndex,
                            "content",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="text"
                        className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                        placeholder="Img url"
                        required
                        onChange={(e) =>
                          handleSideChange(
                            index,
                            sideIndex,
                            "img",
                            e.target.value
                          )
                        }
                      />
                      <div
                        className="bg-white bg-opacity-10 rounded-lg p-1 text-4xl items-center justify-evenly flex flex-row hover:bg-opacity-20 transition-all ease-in-out duration-300 text-center "
                        onClick={() => handleRemoveSide(index, sideIndex)}
                      >
                        <BiMinus />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                onClick={() => {
                  handleAddSide(index);
                }}
                className="flex flex-col text-center items-center justify-evenly gap-1 w-1/2 h-20 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all ease-in-out duration-300 self-center "
              >
                <BiPlus className=" text-4xl" />
                <p className="text-md">Side</p>
              </div>
              <textarea
                className="w-full md:w-2/3 p-2 bg-white bg-opacity-10 rounded-lg"
                placeholder=" Custom HTML with Tailwind"
                onChange={(e) =>
                  handleContentsChange(index, "content2", e.target.value)
                }
              />
              <p>Recomended Items</p>
              <div className=" flex-shrink-0  w-full z-40 h-72 md:h-40 overflow-x-auto flex flex-row gap-2">
                {item.recommended.map(
                  (recommendedItem: any, RecomendedIndex: number) => (
                    <a
                      target="_blank"
                      className="bg-white flex-shrink-0 flex flex-col md:flex-row bg-none bg-opacity-10 hover:bg-opacity-20 transition-all ease-in-out duration-300 p-2 rounded-lg"
                      key={index}
                    >
                      <div className="md:h-full h-1/2 flex flex-col justify-evenly w-56 md:w-auto p-1 bg-white rounded-lg">
                        <img
                          src={recommendedItem.img}
                          alt={`Image of ${recommendedItem.name}`}
                          loading="lazy"
                          className=" h-full object-contain w-full "
                        />
                      </div>
                      <div className=" w-56 flex h-1/2 md:h-full justify-evenly flex-col p-2 gap-1">
                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Name"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "name",
                              e.target.value
                            )
                          }
                        />

                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Price"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "price",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Url"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "url",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          className="w-full self-center p-1 bg-white bg-opacity-10 rounded-lg"
                          placeholder="Image Url"
                          required
                          onChange={(e) =>
                            handleRecommendedChange(
                              index,
                              RecomendedIndex,
                              "img",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div
                        onClick={() =>
                          handleRemoveRecomended(index, RecomendedIndex)
                        }
                        className="flex flex-col h-72 md:h-36 justify-evenly text-4xl items-center hover:bg-opacity-20 transition-all ease-in-out duration-300 gap-2 p-2 bg-white bg-opacity-10 rounded-lg"
                      >
                        <BiMinus />
                      </div>
                    </a>
                  )
                )}
                <div
                  onClick={() => handleAddRecommended(index)}
                  className="flex flex-col justify-evenly w-40 text-4xl items-center hover:bg-opacity-20 transition-all ease-in-out duration-300 gap-2 p-2 bg-white bg-opacity-10 rounded-lg"
                >
                  <BiPlus />
                  <p className="text-xl">Item</p>
                </div>
              </div>
            </div>
          ) : (
            <div>Please Select A Type!</div>
          )}
        </div>
      ))}

      <Button
        type="button"
        variant={"secondary"}
        onClick={() => handleAddContent()}
      >
        <BiPlus className="text-3xl" />
        <p>Add a section</p>
      </Button>
      {/* <button className="w-1/2 mt-3 md:w-1/3 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all ease-out duration-300 h-12 rounded-lg">
        Download Data.json
      </button> */}
      <Button size={"big"}>Download Data.JSON</Button>
    </form>
  );
};

export default MakeFile;
