import Header from "../components/Header";

export default function Support() {
  return (
    <>
      <Header />
      <div>
        <div className="border-2 border-red-600 h-[1000px] w-[1000px] mt-[60px] ml-[18%] relative p-5 font-Jost">
          <div className="flex mt-8 gap-4 absolute right-5">
            <div className="ml-10">
              <h4>7:07 am</h4>
            </div>
            <div className="w-auto h-auto bg-primary50 p-3 rounded-[5px]">
              <h4>Hello, please I need help!!!!</h4>
            </div>
            <div className="h-[40px] w-[40px] bg-primary400 rounded-[50%]"></div>
          </div>
          <div className="flex flex-row-reverse mt-[150px] gap-4 absolute ml-5">
            <div className="ml-10">
              <h4>7:08 am</h4>
            </div>
            <div className="w-auto h-auto bg-primary50 p-5 rounded-[5px]">
              <h4>
                Hello IB, please select one option
                <br />
                1. Puberty & Hygiene
                <br />
                2. Know your cycle length
                <br />
                3. Menstruation and Mental Health
                <br />
                4. Chat with an agent
              </h4>
            </div>
            <div className="h-[40px] w-[40px] bg-primary400 rounded-[50%]"></div>
          </div>
          <div className="flex mt-[340px] gap-4 absolute right-4">
            <div className="ml-10">
              <h4>7:09 am</h4>
            </div>
            <div className="w-auto h-auto bg-primary50 p-2 rounded-[5px]">
              <h4> 4 </h4>
            </div>
            <div className="h-[40px] w-[40px] bg-primary400 rounded-[50%]"></div>
          </div>
          <div className="flex flex-row-reverse absolute ml-5 mt-[450px] gap-4">
            <div className="ml-10">
              <h4>7:09 am</h4>
            </div>
            <div className="w-auto h-auto bg-primary50 p-2 rounded-[5px]">
              <h4>
                {" "}
                Good morning IB, How may I help you
                <br />
                <br />
                -Angela{" "}
              </h4>
            </div>
            <div className="h-[40px] w-[40px] bg-primary400 rounded-[50%]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
