import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Code2, Database } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Data Emphasis
 * - Clean, spacious layouts that let data visualizations shine
 * - Deep charcoal (#1a1a1a) with teal (#00d4d4) and amber (#ffa500) accents
 * - Asymmetric layouts with generous whitespace
 * - Typography: Poppins Bold for headings, Inter Regular for body
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      description: "Interactive dashboard analyzing quarterly sales trends across multiple regions with predictive analytics.",
      metrics: ["45% growth", "12 regions", "Real-time data"],
      icon: BarChart3,
      color: "from-teal-400 to-cyan-500"
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Machine learning-driven customer segmentation revealing key behavioral patterns and purchasing habits.",
      metrics: ["5 segments", "98% accuracy", "2.5M records"],
      icon: PieChart,
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 3,
      title: "Market Trend Forecasting",
      description: "Time-series analysis predicting market movements with 92% accuracy using advanced statistical models.",
      metrics: ["92% accuracy", "24-month forecast", "Multi-variable"],
      icon: LineChart,
      color: "from-red-400 to-pink-500"
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain analytics reducing operational costs by 28% through data-driven insights.",
      metrics: ["28% savings", "15 facilities", "Cost optimization"],
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const skills = [
    { category: "Data Visualization", items: ["Tableau", "Power BI", "Plotly", "D3.js"] },
    { category: "Analysis Tools", items: ["Python", "R", "SQL", "Excel"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Snowflake", "BigQuery"] },
    { category: "Business Intelligence", items: ["Looker", "Qlik", "Sisense", "AWS Analytics"] }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg">DataViz</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/images/hero-background.png" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="container py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display leading-tight">
                Transform Data Into
                <span className="block bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                  Actionable Insights
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Experienced data analyst specializing in creating compelling visualizations and driving business decisions through advanced analytics.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">Download Resume</Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-display text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative h-96">
            <img 
              src="/images/chart-accent.png" 
              alt="Chart visualization" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container py-20 md:py-32">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-display">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my most impactful data analytics projects that delivered measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="p-8 space-y-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-display">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">View Case Study</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${activeProject === project.id ? 'translate-x-2' : ''}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-secondary/30 py-20 md:py-32">
        <div className="container">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-display">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Proficient in industry-leading tools and technologies for data analysis, visualization, and business intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  {idx === 0 && <BarChart3 className="w-5 h-5 text-primary" />}
                  {idx === 1 && <Code2 className="w-5 h-5 text-primary" />}
                  {idx === 2 && <Database className="w-5 h-5 text-primary" />}
                  {idx === 3 && <TrendingUp className="w-5 h-5 text-primary" />}
                  <h3 className="font-display-semibold text-lg">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of experience in data analytics, I've helped organizations across finance, retail, and technology sectors make data-driven decisions that drive growth and efficiency.
              </p>
              <p>
                My approach combines technical expertise with business acumen, ensuring that complex data stories are communicated clearly to stakeholders at all levels.
              </p>
              <p>
                I specialize in building end-to-end analytics solutions, from data pipeline design to interactive dashboard development and predictive modeling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-display text-primary">92%</div>
              <p className="text-sm text-muted-foreground">Average Model Accuracy</p>
            </Card>
            <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-display text-primary">$2.5M</div>
              <p className="text-sm text-muted-foreground">Cost Savings Generated</p>
            </Card>
            <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-display text-primary">150+</div>
              <p className="text-sm text-muted-foreground">Dashboards Created</p>
            </Card>
            <Card className="p-6 space-y-3 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-display text-primary">5/5</div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 border-t border-border py-16 md:py-20">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display">Ready to Transform Your Data?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how data analytics can drive growth and efficiency for your organization.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg"></div>
                <span className="font-display">DataViz</span>
              </div>
              <p className="text-sm text-muted-foreground">Transforming data into actionable insights.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display-semibold">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
                <li><a href="#skills" className="hover:text-foreground transition-colors">Skills</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-display-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Tutorials</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-display-semibold">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Data Analytics Portfolio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
