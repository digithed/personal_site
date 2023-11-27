import ActionBar from "./components/ActionBar";
import { BackButton } from "./components/BackButton";
import CodeSlash from "./components/CodeSlash";
import { FiMail } from "react-icons/fi";

function DevPage() {
  return (
    <div className="bg-slate-800 w-full min-h-screen">
      <ActionBar />
      <div className="text-center md:text-left ml-10 md:ml-20 pt-10">
        <CodeSlash />
        <div className="md:ml-10 pl-7">
        <BackButton />
        </div>
        <div className="md:ml-10 p-7 md:w-1/2">
          <h2 className="heading text-xl mb-3 font-medium text-white">
            Welcome. If you're a small business owner and need a customized
            website or a custom software tool you're in luck!
          </h2>
          <br></br>
          <h2 className="heading text-xl mb-3 text-white font-bold">
            I offer services for building a website from scratch including
            website design, functionality, and deployment of the site onto the
            internet.{" "}
            <a
              className="text-blue-500"
              href="https://www.travelwithtraverse.com"
            >
              Here is an example of my work
            </a>
            .<br></br>
            <br></br>
            Instead of using editors yourself like Wix or Wordpress I'll do the
            heavy lifting for you and can implement more complicated features
            that would not be available on those platforms. Examples of this
            are:
            <br></br>
            <br></br>
            <ul className="list-disc flex flex-col space-y-5 text-white text-xl font-medium">
              <li>
                <span className="text-blue-300">
                  Custom Designs and User Experiences
                </span>
                : Tailor-made designs and interactions that fit exactly to your
                or your specifications without the constraints of a theme or
                template.
              </li>
              <li>
                <span className="text-blue-300">Performance Optimization</span>:
                Fine-tune performance to a higher degree, such as optimizing
                loading times, asset management, and server response times
                beyond the standard optimizations offered by Wix or WordPress.
              </li>
              <li>
                <span className="text-blue-300">Custom Integrations</span>:
                Integrate with third-party APIs and services seamlessly, with
                full control over how data is fetched, stored, and processed.
              </li>
              <li>
                <span className="text-blue-300">
                  Unique Animations and Interactions
                </span>
                : Create complex and unique animations and interactions with
                libraries like GSAP, Three.js, or React Spring which can be more
                advanced than what Wix or WordPress plugins offer.
              </li>
              <li>
                <span className="text-blue-300">
                  Custom Databases and Backend Logic
                </span>
                : I can design a database schema that fits exactly to your
                businesses needs, and write custom server-side logic that can
                handle complex transactions, processes, or workflows
              </li>
            </ul>
            <br></br>
            <br></br>
            Additionally instead of a website, I can build a custom software
            tool of your choosing. Here are a few examples (but not at all
            limited to these):
          </h2>
          <ul className="list-disc flex flex-col space-y-5 text-white text-xl">
            <li>
              <span className="text-orange-300">Data Visualization Tools</span>:
              Custom dashboards for businesses to visualize data trends,
              financial performance, or market research analytics.
            </li>
            <li>
              <span className="text-orange-300">
                Inventory Management Systems
              </span>
              : Custom tools to track inventory levels, orders, sales, and
              deliveries
            </li>
            <li>
              <span className="text-orange-300">
                Customer Relationship Management (CRM)
              </span>
              : Systems to manage a company's interactions with current and
              potential customers, track leads, sales, and consolidate customer
              information.
            </li>
            <li>
              <span className="text-orange-300">Task Automation Software</span>:
              Custom scripts or applications that automate repetitive tasks to
              save time and reduce errors.
            </li>
            <li>
              <span className="text-orange-300">Mobile Applications</span>:
              Development of custom mobile apps for various functions such as
              service booking, e-commerce, or on-the-go CRM access.
            </li>
            <li>
              <span className="text-orange-300">
                Real Estate Management Systems
              </span>
              : Tools for real estate businesses to manage properties, rentals,
              maintenance, and client interactions.
            </li>
          </ul>
          <br></br>
          <br></br>
          <h2 className="text-2xl text-white">
            If you're interested, please email me by clicking the orange mail
            icon to the left that looks like so:
          </h2>
          <br></br>
          {
            <FiMail
              className="md:ml-0 ml-5 shadow-xl text-orange-300"
              size={"1.85em"}
            />
          }
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default DevPage;
