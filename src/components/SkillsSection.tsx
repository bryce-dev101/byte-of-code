import { Tag } from "./Tag";
import { Card } from "./Card";

export function SkillsSection() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Core Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border border-yellow-400">
          <h3 className="text-lg font-semibold">Back-end</h3>
          <div className="flex flex-wrap">
            <Tag label="PHP" color="yellow" />
            <Tag label="Laravel" color="yellow" />
            <Tag label="CakePHP" color="yellow" />
            <Tag label="CodeIgniter" color="yellow" />
            <Tag label="October CMS" color="yellow" />
            <Tag label="WordPress" color="yellow" />
            <Tag label="REST APIs" color="yellow" />
            <Tag label="MySQL" color="yellow" />
            <Tag label="Git" color="yellow" />
            <Tag label="Docker" color="yellow" />
            <Tag label="NGINX" color="yellow" />
            <Tag label="Jenkins" color="yellow" />
            <Tag label="CI/CD" color="yellow" />
            <Tag label="AWS" color="yellow" />
            <Tag label="Kubernetes" color="yellow" />
            <Tag label="Moodle" color="yellow" />
            <Tag label="MiniKube" color="yellow" />
          </div>
        </Card>
        <Card className="border border-pink-500">
          <h3 className="text-lg font-semibold">Front-end</h3>
          <div className="flex flex-wrap">
            <Tag label="HTML5" color="pink" />
            <Tag label="CSS3" color="pink" />
            <Tag label="Bootstrap" color="pink" />
            <Tag label="JavaScript" color="pink" />
            <Tag label="jQuery" color="pink" />
            <Tag label="Ajax" color="pink" />
            <Tag label="Responsive Design" color="pink" />
          </div>
        </Card>
        <Card className="border border-cyan-500">
          <h3 className="text-lg font-semibold">Other Tools</h3>
          <div className="flex flex-wrap">
            <Tag label="Grafana" color="cyan" />
            <Tag label="Buildkite" color="cyan" />
            <Tag label="Code Climate" color="cyan" />
            <Tag label="Asana" color="cyan" />
            <Tag label="Agile/Scrum" color="cyan" />
            <Tag label="Jira" color="cyan" />
          </div>
        </Card>
      </div>
    </>
  );
}
