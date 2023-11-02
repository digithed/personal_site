import Link from "next/link";

function HighlightButton(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white hover:bg-gray-100 p-4 border-l-4 border-orange-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          {props.title}
        </div>
        <p className="text-gray-600 text-base">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.features.map((feature, index) => (
          <span
            key={index}
            className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {feature}
          </span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <Link href={props.link}>Learn More</Link>
        </button>
      </div>
    </div>
  );
}

export default HighlightButton;
