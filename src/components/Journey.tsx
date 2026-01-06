const timeline = [
  {
    year: "2015",
    title: "Establishment",
    description: "We established the Taloja Engineering Cluster (TEC) to foster collaboration among manufacturing industries in the region."
  },
  {
    year: "2016",
    title: "Commenced CNC Machining Services",
    description: "Introduced state-of-the-art CNC machines including VMC, HMC, and Turning Centers to provide precision machining services."
  },
  {
    year: "2017",
    title: "NABL-Accredited Lab",
    description: "Established an NABL-accredited Material Testing Lab for certified testing, ensuring material quality and reliability."
  },
  {
    year: "2018",
    title: "Skill Development Training Center",
    description: "Commenced the Industrial Skill Development Training Center to empower youth through skill development for employment."
  },
  {
    year: "2020",
    title: "Laser Cutting Services",
    description: "Introduced advanced 3D Laser Metal Cutting machines to enhance precision and provide high-quality cutting services."
  },
  {
    year: "2023",
    title: "Expansion & Growth",
    description: "Expanded our facilities with new machinery installations to enhance productivity and serve more customers across industries."
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            We have been actively providing services for the last 10+ years, and more related facilities will be delivered with effective expansion in the future
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for timeline (desktop) */}
          <div className="hidden md:block absolute left-24 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Year column */}
                <div className="w-full md:w-48 flex md:justify-center">
                  <div className="relative">
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold">
                        {item.year}
                      </div>
                    </div>
                    {/* small spacer on mobile so the circle doesn't overlap */}
                    <div className="md:hidden mt-2" />
                  </div>
                </div>

                {/* Content column */}
                <div className="flex-1 md:pl-6">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description.split("Taloja Engineering Cluster").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="font-bold text-primary">Taloja Engineering Cluster</span>}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
