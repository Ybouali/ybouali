import { motion } from "framer-motion";
import { MainForScreen } from "../../components";
import { featuredProjects } from "../../data/projects";
import { blogs } from "../../data/blog";
import { experiences } from "../../data/experience";
import { site } from "../../data/site";
import { Link } from "react-router-dom";
import PageSeo from "../../components/PageSeo";

function Main() {
  const recentBlogs = blogs.slice(0, 2);

  return (
    <MainForScreen>
      <PageSeo
        title="Yassine Bouali | Backend Software Engineer"
        description={site.hero}
        path="/"
      />
      <div className="w-full max-w-4xl mx-auto py-12 px-6 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm text-owl-comment">
              {"// night owl never sleeps"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-owl-text tracking-tight">
              {site.name}
            </h1>
            <h2 className="text-xl text-owl-blue font-mono">{site.role}</h2>
          </div>
          <p className="text-lg text-owl-text-muted leading-relaxed max-w-2xl">
            I build backend systems in{" "}
            <span className="text-owl-keyword">Python</span>, with a focus on{" "}
            <span className="text-owl-green">software architecture</span> and{" "}
            <span className="text-owl-purple">data modelling</span>. I believe
            every piece of code deserves a second refactor.
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              to="/projects"
              className="px-5 py-2 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border text-owl-text font-mono text-sm rounded transition-colors cursor-pointer"
            >
              Here be projects
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 bg-transparent hover:bg-owl-surface text-owl-blue border border-owl-blue/30 font-mono text-sm rounded transition-colors cursor-pointer"
            >
              Summon me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="flex justify-between items-end border-b border-owl-border pb-2">
            <h3 className="text-xl font-bold text-owl-text">Pinned files</h3>
            <Link
              to="/projects"
              className="text-sm font-mono text-owl-text-muted hover:text-owl-blue cursor-pointer"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-owl-surface border border-owl-border rounded p-5 flex flex-col gap-4 hover:border-owl-keyword transition-colors group cursor-pointer"
              >
                <div>
                  <h4 className="text-lg font-bold text-owl-blue group-hover:text-owl-keyword transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-owl-text-muted mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-1 bg-owl-bg text-owl-keyword rounded border border-owl-keyword/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="flex justify-between items-end border-b border-owl-border pb-2">
            <h3 className="text-xl font-bold text-owl-text">Experience</h3>
            <Link
              to="/who-i-am"
              className="text-sm font-mono text-owl-text-muted hover:text-owl-blue cursor-pointer"
            >
              About me →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 bg-owl-surface p-4 rounded border border-owl-border"
              >
                <div className="text-sm font-mono text-owl-text-muted min-w-[120px] pt-1">
                  {exp.startDate} — {exp.endDate}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-owl-text">
                    {exp.role}
                  </h4>
                  <div className="text-sm text-owl-blue font-mono mb-2">
                    {exp.organization}
                  </div>
                  <p className="text-sm text-owl-text-muted">
                    {exp.responsibilities[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-6 mb-12"
        >
          <div className="flex justify-between items-end border-b border-owl-border pb-2">
            <h3 className="text-xl font-bold text-owl-text">
              Latest brain dumps
            </h3>
            <Link
              to="/blog"
              className="text-sm font-mono text-owl-text-muted hover:text-owl-blue cursor-pointer"
            >
              Read all →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {recentBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="group cursor-pointer flex flex-col gap-1"
              >
                <h4 className="text-lg font-bold text-owl-text group-hover:text-owl-blue transition-colors">
                  {blog.title}
                </h4>
                <div className="flex items-center gap-3 text-xs font-mono text-owl-text-muted">
                  <span>{blog.date}</span>
                  <span className="text-owl-keyword">{blog.category}</span>
                  <span>{blog.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </MainForScreen>
  );
}

export default Main;
