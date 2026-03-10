
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Satellite, Radio, Zap, Globe, Shield, Calendar, MapPin } from "lucide-react";

const Index = () => {
  const missions = [
    {
      name: "Starlink Mission 47",
      date: "March 15, 2026",
      status: "Scheduled",
      location: "Launch Complex 39A",
      payload: "60 Satellites"
    },
    {
      name: "Mars Cargo Mission",
      date: "March 22, 2026",
      status: "In Preparation",
      location: "Launch Complex 40",
      payload: "Supply Module"
    },
    {
      name: "ISS Resupply",
      date: "April 3, 2026",
      status: "Scheduled",
      location: "Launch Complex 39A",
      payload: "Dragon Capsule"
    }
  ];

  const facilities = [
    {
      name: "Launch Complex 39A",
      icon: Rocket,
      description: "Primary orbital launch facility with advanced fueling systems and crew access arm"
    },
    {
      name: "Mission Control Center",
      icon: Radio,
      description: "State-of-the-art control center monitoring all launch operations 24/7"
    },
    {
      name: "Integration Facility",
      icon: Zap,
      description: "Vertical integration building for payload and vehicle assembly"
    },
    {
      name: "Landing Zone",
      icon: MapPin,
      description: "Autonomous drone ship and ground landing pads for booster recovery"
    }
  ];

  const technologies = [
    {
      icon: Rocket,
      title: "Reusable Rockets",
      description: "Advanced propulsion systems with autonomous landing capabilities"
    },
    {
      icon: Satellite,
      title: "Satellite Deployment",
      description: "Precision orbital insertion for communication and observation satellites"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Launch capabilities for all orbital inclinations and trajectories"
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Multi-layered abort systems and real-time monitoring"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold glow-cyan">AeroLaunch</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#missions" className="text-muted-foreground hover:text-primary transition-colors">Missions</a>
            <a href="#facilities" className="text-muted-foreground hover:text-primary transition-colors">Facilities</a>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">Technology</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Launch Schedule
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 text-lg px-4 py-2">
            Next Launch: March 15, 2026
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-cyan">
            Reaching Beyond
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced aerospace launch facility delivering payloads to orbit with precision, reliability, and innovation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8">
              <Rocket className="mr-2 h-5 w-5" />
              View Missions
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
              Tour Facilities
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-20 left-10 animate-float">
          <Satellite className="h-16 w-16 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Globe className="h-20 w-20 text-accent/30" />
        </div>
      </section>

      {/* Missions Section */}
      <section id="missions" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Upcoming Launches</Badge>
            <h2 className="text-5xl font-bold mb-4">Mission Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track our upcoming missions and launch schedule
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:glow-primary">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Rocket className="h-8 w-8 text-primary" />
                    <Badge variant={mission.status === "Scheduled" ? "default" : "secondary"} className="bg-primary/20 text-primary border-primary/50">
                      {mission.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{mission.name}</CardTitle>
                  <CardDescription className="text-base">{mission.payload}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{mission.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{mission.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">Infrastructure</Badge>
            <h2 className="text-5xl font-bold mb-4">Launch Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class infrastructure supporting every phase of launch operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{facility.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Innovation</Badge>
            <h2 className="text-5xl font-bold mb-4">Advanced Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge systems powering the future of space access
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mb-6 mx-auto p-6 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-all group-hover:glow-primary">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">247</div>
              <div className="text-muted-foreground">Successful Launches</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-muted-foreground">Satellites Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">AeroLaunch</span>
              </div>
              <p className="text-muted-foreground">
                Leading the future of space access with reliable, innovative launch services.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Missions</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Launch Schedule</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Past Missions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mission Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Facilities</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Launch Complexes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tour Information</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety Protocols</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Launch Operations Center</li>
                <li>Cape Canaveral, FL</li>
                <li>contact@aerolaunch.space</li>
                <li>+1 (321) 555-0100</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 AeroLaunch. All rights reserved. Reaching beyond the stars.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;