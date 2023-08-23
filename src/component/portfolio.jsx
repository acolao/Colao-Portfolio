import { useState } from "react";
import Project from "./project";

export default function Portfolio() {
  const [project] = useState([
    {
      name: "passwordJavaScript",
      description: "JavaScript Password Generator",
      link: "https://acolao.github.io/Password-JavaScript/",
      repo: "https://acolao.github.io/Password-JavaScript/",
    },
    {
      name: "feedMe",
      description: "FeedMe",
      link: "https://epicasino.github.io/Feed-Me/",
      repo: "https://github.com/epicasino/Feed-Me.git",
    },
    {
      name: "dayTripper",
      description: "Daytripper",
      link: "https://github.com/epicasino/daytripper.git",
      repo: "https://github.com/epicasino/daytripper.git",
    },
    {
      name: "workdayScheduler",
      description: "Workday Scheduler",
      link: "https://acolao.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/acolao/Work-Day-Scheduler.git",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {project.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}
