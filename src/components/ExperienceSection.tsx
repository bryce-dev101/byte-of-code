import { useState } from "react";
import { Card } from "./ui/Card";

export function ExperienceSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border border-green-400">
          <h3 className="text-lg font-semibold">
            PayFast – Senior Developer{" "}
            <span className="block text-sm text-gray-500 dark:text-gray-300">
              June 2024 – June 2025
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Modernised legacy architecture and integrated Laravel in a
            fast-paced agile environment.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Streamlined dev workflows by integrating Laravel into legacy
              systems.
            </li>
            <li>
              Improved developer experience with enhanced local environments and
              UI layers.
            </li>
          </ul>
        </Card>
        <Card className="border border-purple-500">
          <h3 className="text-lg font-semibold">
            JD Sports – Platform Engineer{" "}
            <span className="block text-sm text-gray-500 dark:text-gray-300">
              Nov 2022 – June 2024
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Engineered scalable e-commerce tracking systems and DevOps
            pipelines.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Built data pipelines for platforms like GA4, Facebook, Klarna.
            </li>
            <li>Worked across AWS, Kubernetes, Jenkins, and Grafana.</li>
          </ul>
        </Card>
        <Card className="border border-indigo-500">
          <h3 className="text-lg font-semibold">
            2U – Senior Developer{" "}
            <span className="block text-sm text-gray-500 dark:text-gray-300">
              Sept 2021 – Nov 2022
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Delivered backend improvements for education platforms.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
            <li>Led deployments using Buildkite in agile sprint cycles.</li>
            <li>Wrote internal documentation and mentored junior devs.</li>
          </ul>
        </Card>
        <Card className="border border-emerald-500">
          <h3 className="text-lg font-semibold">
            Spinning Your Web – Senior Developer{" "}
            <span className="block text-sm text-gray-500 dark:text-gray-300">
              Aug 2020 – Aug 2021
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Refactored banking software and managed technical debt.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
            <li>Improved system performance and stability.</li>
            <li>Mentored junior engineers and streamlined QA workflows.</li>
          </ul>
        </Card>
        <Card className="border border-yellow-500">
          <h3 className="text-lg font-semibold">
            Digitas Liquorice – Senior Developer{" "}
            <span className="block text-sm text-gray-500 dark:text-gray-300">
              Oct 2018 – Aug 2019
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Built performant CMS and API-driven systems for high-profile agency
            clients.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
            <li>Created headless CMS solutions and RESTful APIs.</li>
            <li>
              Delivered client work under high pressure and strict security
              protocols.
            </li>
            <li>Contributed to award-winning web projects.</li>
          </ul>
        </Card>
        <Card className="border border-pink-500">
          <h3 className="text-lg font-semibold">
            Creative Spark – Senior Developer / 2IC{" "}
            <span className="block text-sm text-gray-500 dark:text-gray-300">
              June 2018 – Oct 2018
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Consulted on internal process improvements and team upskilling.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Designed internal KPIs, risk assessments, and training material.
            </li>
            <li>
              Helped stabilise the release cycle and enforce better planning
              practices.
            </li>
          </ul>
        </Card>
        {/* Previous cards */}
        {showMore && (
          <>
            <Card className="border border-cyan-500">
              <h3 className="text-lg font-semibold">
                Virtual Designs – Senior PHP Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  Aug 2017 – June 2018
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Improved legacy projects and led internal development
                operations.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>
                  Built white-label products using Laravel and OctoberCMS.
                </li>
                <li>
                  Introduced time/task tracking and project management
                  processes.
                </li>
                <li>Improved team structure and led junior developers.</li>
              </ul>
            </Card>
            <Card className="border border-green-500">
              <h3 className="text-lg font-semibold">
                Elemental – PHP Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  Nov 2016 – Aug 2017
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Returned to development with a focus on rapid delivery and clean
                code.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>Delivered projects rapidly with high code quality.</li>
                <li>
                  Gained experience in CodeIgniter and legacy PHP practices.
                </li>
                <li>Pushed best practices and process improvements.</li>
              </ul>
            </Card>
            <Card className="border border-purple-500">
              <h3 className="text-lg font-semibold">
                ChatFind – DevOps Manager{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  Nov 2015 – Feb 2016
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Managed app releases and introduced structured testing.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>Streamlined app testing and bug tracking workflows.</li>
                <li>Led a distributed team through fast release cycles.</li>
              </ul>
            </Card>
            <Card className="border border-indigo-500">
              <h3 className="text-lg font-semibold">
                Liquid Edge Solutions – Full-stack Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  2012 – 2015
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Grew from a front-end developer to a full-stack role in a
                fast-paced agency.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>Introduced WordPress development standards and tools.</li>
                <li>Worked across QA, front-end, and back-end teams.</li>
                <li>Strengthened PHP OOP skills through custom frameworks.</li>
              </ul>
            </Card>
            <Card className="border border-emerald-500">
              <h3 className="text-lg font-semibold">
                Sozo Web Design – Head Developer{" "}
                <span className="block text-sm text-gray-500 dark:text-gray-300">
                  2009 – 2012
                </span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Started as a junior and grew into lead developer through hard
                work and self-study.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-300 mt-2 space-y-1">
                <li>Built custom WordPress themes and plugins.</li>
                <li>Learned MVC/OOP, CakePHP, and full project lifecycles.</li>
                <li>Handled both design and development independently.</li>
              </ul>
            </Card>
          </>
        )}
      </div>
      <div className="mt-6 text-center">
        <button
          className="text-sm text-pink-500 hover:underline"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show less" : "Show more history"}
        </button>
      </div>
    </>
  );
}
