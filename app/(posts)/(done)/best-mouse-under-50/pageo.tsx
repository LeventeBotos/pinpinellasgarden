import Comments from "@/app/Comments";
import { Metadata } from "next";

const page = () => {
  return (
    <article className="min-h-screen w-full  flex flex-col p-4 md:px-7">
      <div className="absolute h-96 w-full left-0 right-0 bg-black bg-opacity-50">
        <img
          src="/images/best-mouse-under-50/1.jpeg"
          alt="image of a custom keyboard"
          className="absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-96 z-10 opacity-30"
        />
        <div className="flex flex-col justify-evenly absolute z-30 top-0 bottom-0 left-0 px-5 right-0 h-96">
          <h1 className="gradient text-2xl md:text-4xl font-bold text-center pt-10">
            How To Choose the Best Mouse Under $50
          </h1>
          <div className="flex byline justify-evenly self-center pb-10 w-full">
            <address className="author">
              By{" "}
              <a rel="author" href="/author/darius-zachar">
                Darius Zachar
              </a>{" "}
              &{" "}
              <a rel="author" href="/author/levente-botos">
                Levente Botos
              </a>{" "}
            </address>
          </div>
          <h2 className="w-full text-lg pb-5 md:text-xl md:w-2/3 self-center">
            In this guide, we will show you how to choose the perfect mouse for
            your liking. All this, whilst staying under 50 USD.
          </h2>
        </div>
      </div>
      <div className="h-96 w-full" />
      <div className="self-center ">
        <h2 className="self-center text-lg text-center md:text-xl">Contents</h2>
        <ul className=" w-full md:w-auto h-min self-center list-disc">
          {/* <label className="self-center text-lg md:text-xl">Contents</label> */}
          <li className="hover:cursor-pointer">
            <a href="#types">The different mouse types</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#types-pros-cons">Pros and cons of types</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#categories">The different mouse categories</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#decide">How to decide which one you should use</a>
          </li>
        </ul>
      </div>
      <section
        id="types"
        className=" flex flex-col pt-16 md:pt-20 gap-5 rounded-lg w-full"
      >
        {/* Full-Size Keyboard Section */}
        <div className="">
          <h2 className=" font-bold mb-2">Wired mice: Classic Convenience</h2>
          <p className="">
            Wired mice are the ones mostly used in offices and homes. It does
            what it&apos;s supposed to do but it&apos;s not the most optimal for
            gaming, although there are some gaming mice that have been specially
            designed both externally and internally like software wise.
          </p>
          {/* Add more content as needed */}
        </div>
        {/* TenKeyLess Keyboard Section */}
        <div className="">
          <h2 className=" font-bold mb-2">
            Wireless mice: Efficiency and Minimalism
          </h2>
          <p className="">
            Wireless mice are not commonly seen in offices neither at homes.
            There is no difference other then some people got angered by the
            cable getting stuck or it’s hard to hide it. There is no difference
            only preference.
          </p>
          {/* Add more content as needed */}
        </div>
        {/* 60% Keyboard Section */}
      </section>
      <section
        id="types-pros-cons"
        className="  pt-16 md:pt-20 gap-5 flex flex-col  w-full"
      >
        {/* Factor: Switch Compatibility */}

        <h2 className="font-bold">
          Pros and Cons of the wired and wireless mice
        </h2>
        <div className="flex justify-evenly md:flex-row flex-col gap-10">
          <ul className=" list-disc">
            <strong className="text-xl">Wired</strong>
            <li>Always on if plugged into the computer</li>
            <li>Cheaper</li>
          </ul>
          <ul className=" list-disc">
            <strong className="text-xl">Wireless</strong>
            <li> Has a battery that drains overtime with usage</li>
            <li>More expensive</li>
          </ul>
        </div>
      </section>
      <section
        id="categories"
        className=" pt-16 md:pt-20 gap-5 flex flex-col  w-full"
      >
        <ul className="list-disc gap-3 flex flex-col">
          <h2 className="">
            <strong>The Different Mouse Categories:</strong>
          </h2>
          <li className="">
            <strong>Light Weight Mouse</strong> A mouse is considered “light” if
            its weight is under 80g but most of the mice that you can find with
            a “Light weight” title are below 70g most of the times. This mouse
            type is the best if you want to move it rapidly or you want to use
            it for longer periods of time.
          </li>
          <li>
            <strong>Heavy Weight Mouse</strong> A mouse is considered “heavy” if
            its weight is above that 70g breakpoint, but the heaviest mouse is
            the “ASUS ROG Spatha” with a shocking 183g. This mouse type is the
            best for FPS games, because of the weight its much easier to control
            the aim.
          </li>
        </ul>
      </section>

      <section
        id="decide"
        className=" pt-16 md:pt-20 gap-5 flex flex-col  w-full"
      >
        <h2>The Decision</h2>
        <p>
          After understanding the various categories and types of mice, the
          ultimate decision lies in personal preference. It&apos;s recommended
          to:
        </p>
        <ul className=" list-disc">
          <li>Visit a store to physically examine featured mice.</li>
          <li>Assess factors such as size, grip, and overall comfort.</li>
          <li>
            Test both heavier and lighter mice to determine your preference.
          </li>
          <li>
            Decide between wired and wireless based on your specific needs.
          </li>
        </ul>
        {/* So, you read about the categories and the different types of mice. Now
          the question is which one should you get. From personal experiences,
          first you should first go to a store and look at some of the featured
          ones. Try to look at the size, the grip and for the comfort of holding
          it. Secondly you should try moving a heavier and a lighter one. Based
          on your liking you should choose the most optimal version. After that
          you should decide if you want a wired or wireless mouse. */}
      </section>
      <Comments name="best-mouse-under-50" />
    </article>
  );
};

export default page;

export const metadata: Metadata = {
  title: "How To Choose the Best Mouse Under $50",
  robots: "index, follow",
  metadataBase: new URL("https://gamingtales.tech"),
  authors: [
    {
      name: "Dariusz Zachar",
      url: "/author/dariusz-zachar",
    },

    {
      name: "Levente Botos",
      url: "/author/levente-botos",
    },
  ],
  keywords: ["Mouse", "Under 50"],
  description:
    "In this guide, we will show you how to choose the perfect mouse for your liking. All this, whilst staying under 50 USD.",
  openGraph: {
    title: "How To Choose the Best Mouse Under $50",
    description:
      "In this guide, we will show you how to choose the perfect mouse for your liking. All this, whilst staying under 50 USD.",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Dariusz Zachar", "Levente Botos"],
    images: [
      {
        url: "https://gamingtales.tech/images/best-mouse-under-50/1.jpeg", // Replace with the actual image URL
        alt: "Picture of mouse",
      },
    ],
    locale: "en_US",
  },
};
