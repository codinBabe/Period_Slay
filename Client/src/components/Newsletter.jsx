export default function Newsletter() {
  return (
    <section className="bg-primary500 py-10 text-white">
      <div className="container mx-auto">
        <h2 className="font-DmSerif text-5xl mb-5">
          Stay Updated with our <br />
          Newsletter
        </h2>
        <p className="font-semibold text-2xl">
          Subscribe to our newsletter for the latest blog pots & health tips
        </p>
        <form className="my-5">
          <div className="flex items-center gap-4">
            <input
              className="w-1/2 py-4 px-2 rounded-md"
              placeholder="Your Email here"
            />
            <button className="py-3 px-8 text-lg font-medium bg-black rounded-md">
              Get Updates
            </button>
          </div>
        </form>
        <p className="text-base">
          By subscribing, you agree to our terms and conditions
        </p>
      </div>
    </section>
  );
}
