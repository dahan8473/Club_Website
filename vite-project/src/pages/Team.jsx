import TeamCard from "../components/TeamCard.jsx";
import { team } from "../lib/members.jsx";
import Spline from "@splinetool/react-spline";
import "./Team.css";

export default function TeamPage() {
  return (
    <div className="mb-40">
      <div
        className="hero max-h-[100vh] shadow-xl relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,43,58,1) 0%, rgba(36,127,145,1) 42%, rgba(191,219,247,1) 82%)",
        }}
      >
        <Spline
          scene="https://prod.spline.design/e1CKVNoHsLUf8pk9/scene.splinecode"
          style={{ height: "100%", width: "100%" }}
          cameraControls
        />

        <div className="hero-overlay bg-white/40 absolute inset-0 pointer-events-none"></div>

        <div className="hero-content text-neutral-content text-center relative z-10 pointer-events-auto">
          <div className="max-w-md">
            <h1 class="heading" className="mb-5 text-5xl font-primary font-bold">
              Meet the Team
            </h1>
            <p class="subtitle">
              Our community is diverse in its expertise, yet we are united by
              our shared enthusiasm for supporting nonprofits and our keen
              interest in technology.
            </p>
          </div>
        </div>
      </div>

      <Team
        teamName={"Exec Team"}
        teamDesc={"Responsible for organizing and managing Western TSI"}
      />

      <Team
        teamName={"Dev Team"}
        teamDesc={
          "Responsible for developing and maintaining Western TSI's projects and website"
        }
      />

      <Team
        teamName={"Finance Team"}
        teamDesc={
          "Responsible for managing Western TSI's finances and budgeting"
        }
      />
      <Team
        teamName={"Outreach Team"}
        teamDesc={
          "Responsible for outreach to clients, as well as social media posts and engagements."
        }
      />
    </div>
  );
}

function Team({ teamName, teamDesc }) {
  return (
    <div className="mt-7 m-5 px-4 py-8 bg-gray-100 shadow-lg rounded-lg">
      <div className="mb-10 mt-5 ml-12">
        <h2 className="text-4xl font-bold text-left text-nowrap mb-4">
          {teamName}
        </h2>
        <p className="italic text-gray text-left">{teamDesc}</p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team
            .filter((member) => member.team === teamName)
            .map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
}
