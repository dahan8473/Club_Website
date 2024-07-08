import TeamCard from "../components/TeamCard.jsx";
import { team } from "../lib/members.jsx";

export default function TeamPage() {
  return (
    <div className="mb-40">
      <div
        className="hero min-h-[65vh] shadow-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,43,58,1) 0%, rgba(36,127,145,1) 42%, rgba(191,219,247,1) 82%)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Meet the Team</h1>
            <p className="mb-5">
              Our community is diverse in its expertise, yet we are united by
              our shared enthusiasm for supporting nonprofits and our keen
              interest in technology. It's the people that make Western TSI,
              Western TSI.
            </p>
          </div>
        </div>
      </div>

      <Team />
    </div>
  );
}

function Team() {
  return (
    <div className="mt-7 mb-5 px-4 py-8 bg-gray-100 shadow-lg rounded-lg">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
